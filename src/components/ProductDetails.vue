<script setup>
import { computed } from 'vue'
import { useCartStore } from '../stores/cartStore'
const props = defineProps({
  product:{
    type:Object,
    required:true
  }
})
const cartStore = useCartStore();
const discountPrice = computed(()=>{
  return props.product.price - props.product.price*(props.product.discount/100)
})
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 p-6 lg:p-8 bg-base-100 rounded-2xl shadow-sm border border-base-200">
    <div class="w-full md:w-1/2">
      <img :src="product.image" class="w-full rounded-2xl object-cover h-full max-h-[500px]" />
    </div>
    
    <div class="w-full md:w-1/2 flex flex-col gap-6 py-4">
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <span v-if="product.badge" :class="product.badge === 'NEW'? 'badge badge-success font-bold':'badge badge-error font-bold'">{{ product.badge }}</span>
          <span v-if="product.stock === 0" class="badge badge-error font-bold">Out of stock</span>
        </div>
        <h2 class="text-3xl font-bold">{{ product.name }}</h2>
      </div>
      
      <p class="text-base-content/70 leading-relaxed">{{ product.description }}</p>
      
      <div class="flex items-end gap-3 mt-2">
        <p class="text-4xl font-bold text-primary">${{ discountPrice }}</p>
        <div v-if="product.discount > 0" class="flex items-center gap-2 pb-1">
          <span class="text-lg text-base-content/40 line-through">${{ product.price }}</span>
          <span class="badge badge-accent">{{ product.discount }}% OFF</span>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in product.tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
      </div>
      
      <div class="divider"></div>
      
      <div class="flex items-center gap-4">
        <button class="btn btn-primary flex-1" :disabled="product.stock === 0" @click="cartStore.addToCart(product)">
          Add to Cart
        </button>
        <div class="flex flex-col items-center justify-center bg-base-200 rounded-lg px-4 py-2 border border-base-300">
          <span class="text-xs text-base-content/60">Stock</span>
          <span class="font-bold">{{ product.stock }}</span>
        </div>
      </div>
    </div>
  </div>
</template>