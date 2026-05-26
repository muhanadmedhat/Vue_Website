import { defineStore } from "pinia";
import { useLocalStorage } from "../composables/useLocalStorage";
import { useProductStore } from "./productStore";
import { computed } from "vue";

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])
  const productStore = useProductStore();
  const totalItems = computed(() => {
    return items.value.reduce((acc, item) => acc + item.qty, 0);
  })

  const totalPrice = computed(() => {
    return items.value.reduce((acc, item) => acc + item.price * item.qty, 0);
  })

  const addToCart = async (product) => {
    const existing = items.value.find((item) => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      items.value.push({ ...product, qty: 1 });
    }
    productStore.decreaseStock(product.id);
  }

  const removeFromCart = (product) => {
    const existing = items.value.find((item) => item.id === product.id);
    if (existing.qty > 1) {
      existing.qty -= 1;
    } else if (existing.qty == 1) {
      existing.qty -= 1;
      items.value = items.value.filter((item) => Number(item.id) !== Number(product.id))
    }
    productStore.increaseStock(product.id);
  }

  const clearCart = () => {
    items.value = [];
  }
  return { items, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})