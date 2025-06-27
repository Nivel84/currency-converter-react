import { useState } from "react";

export const useWishlistState = () => {
  const localStorageKey = "wishlist";

  const loadWishlist = () => {
    const localStorageWishlist = localStorage.getItem(localStorageKey);
    if (!localStorageWishlist) return [];

    return JSON.parse(localStorageWishlist);
  };

  const saveItem = (item) => {
    const newWishlist = [...wishlist, item];
    setWishlist(newWishlist);
    localStorage.setItem(localStorageKey, JSON.stringify(newWishlist));
  };

  const [wishlist, setWishlist] = useState(loadWishlist());

  return {
    wishlist,
    saveItem,
  };
};
