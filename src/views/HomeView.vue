<script setup>
import { onMounted, onUnmounted } from 'vue';
import ProductCarousel from '@/components/CarouselBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
import { useProductStore } from '../stores/productStore';
const productStore = useProductStore();

onMounted(async ()=>{
  await productStore.fetchProducts();
  console.log(`HomeView mounted - ${productStore.products.length} products loaded`);
})

onUnmounted(()=>{
  console.log("HomeView unmounted - products loaded");
})


</script>

<template>
  <div v-if="productStore.loading" class="flex justify-center items-center h-64">
    <span class="loading loading-spinner text-primary loading-lg"></span>
  </div>
  <div v-else-if="productStore.error" class="alert alert-error max-w-xl mx-auto shadow-sm mt-8">
    {{ productStore.error }}
  </div>
  <div v-else class="flex flex-col gap-8">
    <ProductCarousel></ProductCarousel>
    <div class="flex flex-col gap-6 w-full">
      <h2 class="text-2xl font-bold">Our Collection</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard v-for="product in productStore.products" :key="product.id" :product="product"></ProductCard>
      </div>
    </div>
  </div>
</template>