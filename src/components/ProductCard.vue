<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore();
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
  <div class="card bg-base-100 shadow-sm border border-base-200 hover:shadow-md transition-shadow h-full flex flex-col">
    <figure class="h-56 overflow-hidden relative shrink-0 bg-base-200">
      <img :src="product.image" alt="Product Image" class="w-full h-full object-cover" />
      <div v-if="product.badge" class="absolute top-3 left-3 badge badge-secondary font-medium">{{ product.badge }}</div>
      <div v-if="product.stock === 0" class="absolute inset-0 bg-base-100/70 flex items-center justify-center">
        <span class="badge badge-lg badge-error font-medium">Out of Stock</span>
      </div>
    </figure>
    <div class="card-body gap-3 p-5 grow">
      <div class="flex items-start justify-between gap-2">
        <h2 class="card-title text-lg font-bold flex-1 line-clamp-1">{{ product.name }}</h2>
        <div class="font-bold text-lg text-primary shrink-0">${{ product.price }}</div>
      </div>
      <p class="text-base-content/70 text-sm line-clamp-2 grow">{{ product.description }}</p>
      
      <div class="flex flex-wrap gap-2 mt-2">
        <div class="badge badge-outline badge-sm" v-for="tag in product.tags" :key="tag">{{ tag }}</div>
      </div>
      
      <div class="card-actions justify-end mt-4 pt-4 border-t border-base-200">
        <RouterLink :to="`/product/${product.id}`" class="btn btn-ghost btn-sm flex-1">
          Details
        </RouterLink>
        <button 
          @click="cartStore.addToCart(product)" 
          :disabled="product.stock === 0"
          class="btn btn-primary btn-sm flex-1">
          Add
        </button>
      </div>
    </div>
  </div>
</template>