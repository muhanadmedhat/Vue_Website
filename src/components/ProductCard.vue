<script setup>
import { onMounted, onUnmounted } from 'vue';

const props = defineProps({
  product:{
    type:Object,
    required:true
  }
})

onMounted(()=>{
  console.log("Product is mounted");
})

onUnmounted(()=>{
  console.log("Product is unmounted");
})
</script>

<template>
  <div class="card bg-base-100 shadow-md hover:shadow-xl transition-shadow duration-300">
    <figure class="h-56 overflow-hidden">
      <img :src="product.image" alt="Shoes" class="w-full h-full object-cover" />
    </figure>
    <div class="card-body gap-3">
      <div class="flex items-center justify-between">
        <h2 class="card-title text-lg">{{ product.name }}</h2>
        <div class="flex gap-2">
          <div class="badge badge-secondary" v-if="product.badge">{{ product.badge }}</div>
          <div class="badge badge-outline">Stock: {{ product.stock }}</div>
        </div>
      </div>
      <p class="text-gray-500 text-sm">{{ product.description }}</p>
      <div class="flex flex-wrap gap-1">
        <div class="badge badge-ghost text-xs" v-for="tag in product.tags" :key="tag">{{ tag }}</div>
      </div>
      <div class="card-actions justify-end mt-2">
        <RouterLink :to="`/product/${product.id}`" class="btn btn-primary btn-sm w-full">
          View Product
        </RouterLink>
      </div>
    </div>
  </div>
</template>