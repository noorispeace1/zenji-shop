"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface CartItem {
  id: string;
  name: string;
  size: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load and sync cart items from localStorage
  useEffect(() => {
    const loadCart = () => {
      try {
        const stored = localStorage.getItem("zenji_cart_items_data");
        if (stored) {
          setCartItems(JSON.parse(stored));
        }
      } catch (e) {
        console.error(e);
      }
    };

    loadCart();

    const handleCartItemAdded = (e: any) => {
      const addedItem = e.detail;
      if (addedItem) {
        setCartItems((prev) => {
          const existing = prev.find(
            (item) => item.name === addedItem.name && item.size === addedItem.size
          );
          let updated: CartItem[];
          if (existing) {
            updated = prev.map((item) =>
              item.name === addedItem.name && item.size === addedItem.size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
          } else {
            updated = [
              ...prev,
              {
                id: addedItem.id || "bushido-tee",
                name: addedItem.name || "BUSHIDO TEE",
                size: addedItem.size || "L",
                price: addedItem.price || 39.99,
                image: addedItem.image || "/images/ethos-2.jpg",
                quantity: 1,
              },
            ];
          }
          localStorage.setItem("zenji_cart_items_data", JSON.stringify(updated));
          return updated;
        });

        setTimeout(() => {
          window.dispatchEvent(new Event("zenji_cart_updated"));
        }, 0);
      }
    };

    window.addEventListener("zenji_cart_item_added", handleCartItemAdded);
    return () => {
      window.removeEventListener("zenji_cart_item_added", handleCartItemAdded);
    };
  }, []);

  const updateQuantity = (index: number, delta: number) => {
    const updated = cartItems
      .map((item, idx) => {
        if (idx === index) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];

    setCartItems(updated);
    localStorage.setItem("zenji_cart_items_data", JSON.stringify(updated));
    const totalCount = updated.reduce((acc, i) => acc + i.quantity, 0);
    localStorage.setItem("zenji_cart_count", totalCount.toString());

    setTimeout(() => {
      window.dispatchEvent(new Event("zenji_cart_updated"));
    }, 0);
  };

  const removeItem = (index: number) => {
    const updated = cartItems.filter((_, idx) => idx !== index);
    setCartItems(updated);
    localStorage.setItem("zenji_cart_items_data", JSON.stringify(updated));
    const totalCount = updated.reduce((acc, i) => acc + i.quantity, 0);
    localStorage.setItem("zenji_cart_count", totalCount.toString());

    setTimeout(() => {
      window.dispatchEvent(new Event("zenji_cart_updated"));
    }, 0);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 9.99) : 0;
  const grandTotal = subtotal + shipping;
  const freeShippingThreshold = 100;
  const awayFromFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="w-full sm:w-96 md:w-[420px] h-full bg-black border-l border-zinc-800 text-white p-6 sm:p-8 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black font-mono tracking-widest text-white uppercase">
              YOUR CART
            </h2>
            {/* Red count badge ONLY renders when totalItems > 0 */}
            {totalItems > 0 && (
              <span className="bg-[#d30000] text-white font-mono text-xs font-bold px-2 py-0.5 min-w-[20px] text-center animate-in zoom-in duration-200">
                {totalItems}
              </span>
            )}
          </div>

          {/* Close Drawer X Button */}
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="border border-zinc-700 bg-black text-zinc-400 hover:text-white hover:border-white text-xs px-2.5 py-1 font-mono uppercase transition-colors cursor-pointer active:scale-95"
          >
            ✕
          </button>
        </div>

        {/* Cart Body */}
        {cartItems.length === 0 ? (
          /* Empty State */
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-white uppercase">
              YOUR CART IS EMPTY
            </h3>

            <p className="text-red-600 font-mono text-xs font-bold tracking-[0.25em] uppercase">
              THE ARC AWAITS.
            </p>

            <div className="pt-4">
              <Link
                href="/collection"
                onClick={onClose}
                className="inline-flex items-center justify-center bg-[#d30000] hover:bg-red-700 text-white font-mono text-xs font-bold tracking-widest uppercase py-3.5 px-6 transition-all duration-200 shadow-xl cursor-pointer active:scale-95 border border-red-500 gap-2"
              >
                <span>SHOP COLLECTION</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        ) : (
          /* Filled Cart View matching user screenshot */
          <div className="flex-1 flex flex-col justify-between py-6 space-y-6">
            {/* Added Items List */}
            <div className="space-y-4 overflow-y-auto max-h-[45vh] pr-1">
              {cartItems.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-black border border-zinc-800 flex items-start gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover object-center border border-zinc-800 bg-zinc-900"
                  />

                  <div className="flex-1 space-y-1.5 font-mono">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-bold text-white text-xs uppercase tracking-wider">
                          {item.name}
                        </h4>
                        <p className="text-[10px] text-zinc-400 uppercase">
                          SIZE {item.size}
                        </p>
                      </div>

                      {/* Remove Item X Button */}
                      <button
                        onClick={() => removeItem(idx)}
                        aria-label="Remove item"
                        className="text-zinc-500 hover:text-red-500 border border-zinc-800 hover:border-red-600 px-1.5 py-0.5 text-[11px] font-mono transition-colors cursor-pointer"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-red-500 text-[10px] font-bold border border-red-600/50 px-1.5 py-0.5 uppercase tracking-widest">
                        LIVE
                      </span>

                      {/* Quantity Controls */}
                      <div className="flex items-center border border-zinc-800 bg-zinc-950 font-mono text-xs">
                        <button
                          onClick={() => updateQuantity(idx, -1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          -
                        </button>
                        <span className="px-2 text-white font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(idx, 1)}
                          className="px-2 py-0.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-bold text-white text-xs">
                        A${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Summary Section matching screenshot */}
            <div className="space-y-4 pt-4 border-t border-zinc-900 font-mono text-xs">
              {/* Shipping Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[10px] text-amber-500 font-bold uppercase tracking-wider">
                  <span>
                    {awayFromFreeShipping > 0
                      ? `A$${awayFromFreeShipping.toFixed(2)} AWAY FROM FREE SHIPPING`
                      : "✓ YOU UNLOCKED FREE SHIPPING!"}
                  </span>
                </div>
                <div className="w-full bg-zinc-900 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-500 h-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Subtotal / Shipping / Total Lines */}
              <div className="space-y-2 pt-2 border-t border-zinc-900 text-zinc-400">
                <div className="flex justify-between items-center">
                  <span>SUBTOTAL</span>
                  <span className="font-bold text-white">A${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>SHIPPING</span>
                  <span className="font-bold text-white">
                    {shipping === 0 ? "FREE" : `A$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-zinc-800 text-white font-black text-base">
                  <span>TOTAL</span>
                  <span className="text-white">A${grandTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => alert("Proceeding to Checkout!")}
                  className="w-full bg-[#d30000] hover:bg-red-700 text-white font-mono font-black text-sm uppercase py-3.5 tracking-widest shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2 border border-red-500 active:scale-95"
                >
                  <span>CHECKOUT</span>
                  <span>→</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full bg-black hover:bg-zinc-900 text-white font-mono text-xs font-bold uppercase py-3 border border-zinc-700 tracking-widest transition-colors cursor-pointer"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Announcement Tag */}
        <div className="border-t border-zinc-900 pt-4 text-center font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
          FREE SHIPPING AUSTRALIA-WIDE ON ORDERS OVER A$100
        </div>
      </div>
    </div>
  );
}
