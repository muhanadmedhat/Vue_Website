<script setup>
import { computed } from 'vue'
const props = defineProps({
  product:{
    type:Object,
    required:true
  }
})
const discountPrice = computed(()=>{
  return props.product.price - props.product.price*(props.product.discount/100)
})

const emit = defineEmits(['buy']);
</script>

<template>
  <div class="flex gap-8 p-8">
    <div class="w-3/5">
      <img :src="product.image" class="w-full rounded-2xl shadow-md object-cover" />
    </div>
    <div class="w-2/5 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <h2 class="text-4xl font-bold">{{ product.name }}</h2>
        <span v-if="product.badge" :class="product.badge === 'NEW'? 'badge badge-success':'badge badge-error'">{{ product.badge }}</span>
        <span v-if="product.stock === 0" class="badge badge-lg badge-error">Out of stock</span>
      </div>
      <p class="text-gray-500">{{ product.description }}</p>
      <div class="flex items-center gap-3">
        <p v-if="product.discount > 0" class="text-gray-400 line-through">${{ product.price }}</p>
        <p class="text-2xl font-semibold">${{ discountPrice }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in product.tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
      </div>
      <button class="btn btn-primary w-fit" :disabled="product.stock === 0" @click="()=>emit('buy',product.id)">Buy Now</button>
    </div>
  </div>
</template>