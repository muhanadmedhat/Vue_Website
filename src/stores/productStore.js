import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useApi } from "../composables/useApi";

export const useProductStore = defineStore('products', () => {
  //states
  const products = ref([]);
  const { data, error, loading, getAll, update, getOne } = useApi('http://localhost:3000/products');
  //getter
  const getProductById = computed(() => {
    return (id) => products.value.find(p => Number(p.id) === Number(id))
  })

  //actions
  const fetchProducts = async () => {
    await getAll();
    if (data.value) products.value = data.value;
  }

  const decreaseStock = async (productId) => {
    const product = products.value.find((p) => p.id === productId);
    if (!product || product.stock <= 0) return
    product.stock -= 1;
    await update(product);
  }
  const increaseStock = async (productId) => {
    const product = products.value.find((p) => p.id === productId);
    product.stock += 1;
    await update(product);
  }
  return {
    products,
    loading,
    error,
    getProductById,
    fetchProducts,
    decreaseStock,
    increaseStock
  }
})