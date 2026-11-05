import { create } from "zustand";

export const useCart = create((set) => ({
    cartItems: [],

    addToCart: (item) =>
        set((state) => ({
            cartItems: [...state.cartItems, item]
        })),

    removeFromCart: (itemId) =>
        set((state) => ({
            cartItems: state.cartItems.filter(
                (item) => item.id !== itemId
            )
        }))
}));