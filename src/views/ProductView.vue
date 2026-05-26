<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import ProductDetails from '@/components/ProductDetails.vue';
import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '../stores/productStore';

const productStore = useProductStore();

const props = defineProps({
  id: {
    type: Number,
    required: true
  }
})

const myProduct = ref(null);
const relatedProducts = ref([]);

const loadProduct = async () => {
  if (productStore.products.length === 0) {
    await productStore.fetchProducts()
  }
  myProduct.value = productStore.getProductById(props.id)
  relatedProducts.value = productStore.products.filter(p => Number(p.id) !== Number(props.id))
}

onMounted(async () => {
  await loadProduct()
  console.log(`ProductView mounted for ID:${props.id}`)
})

onUnmounted(() => {
  console.log("ProductView unmounted")
})

watch(() => props.id, async () => {
  await loadProduct()
})
</script>

<template>
  <div class="max-w-7xl mx-auto flex flex-col gap-12">
    <div v-if="!myProduct" class="flex flex-col items-center justify-center py-20 text-center">
      <h2 class="text-3xl font-bold mb-4">Product Not Found</h2>
      <p class="text-base-content/60 mb-6">We couldn't locate the item you're looking for.</p>
      <RouterLink :to="{name:'home'}" class="btn btn-primary">Return Home</RouterLink>
    </div>
    
    <template v-else>
      <ProductDetails :product="myProduct"/>
      
      <div v-if="relatedProducts.length > 0" class="flex flex-col gap-6">
        <div class="divider text-2xl font-bold">You Might Also Like</div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in relatedProducts.slice(0, 4)"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </template>
  </div>
</template>