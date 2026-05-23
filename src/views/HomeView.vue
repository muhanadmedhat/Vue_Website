<script setup>
import { onMounted, onUnmounted } from 'vue';
import ProductCarousel from '@/components/CarouselBanner.vue';
import ProductCard from '@/components/ProductCard.vue';
const props = defineProps({
  products:{
    type:Array,
    required:true
  }
});

onMounted(()=>{
  console.log(`HomeView mounted - ${props.products.length} products loaded`);
})

onUnmounted(()=>{
  console.log("HomeView unmounted - products loaded");
})


</script>

<template>
<ProductCarousel></ProductCarousel>
<div class="flex gap-4 mt-3">
  <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
</div>
</template>