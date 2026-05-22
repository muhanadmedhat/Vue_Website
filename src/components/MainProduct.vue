<script setup>
import { computed } from 'vue'
const props = defineProps({
  name:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  discount:{
    type:Number,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  badge:{
    type:String,
    required:true
  },
  tags:{
    type:Array,
    required:true
  },
  isAvalaible:{
    type:Boolean,
    required:true
  }
})
const discountPrice = computed(()=>{
  return props.price - props.price*(props.discount/100)
})
</script>

<template>
  <div class="flex gap-8 p-8">
    <div class="w-3/5">
      <img :src="image" class="w-full rounded-2xl shadow-md object-cover" />
    </div>
    <div class="w-2/5 flex flex-col gap-4">
      <div class="flex items-center gap-3">
        <h2 class="text-4xl font-bold">{{ name }}</h2>
        <span v-if="badge" :class="badge === 'NEW'? 'badge badge-success':'badge badge-error'">{{ badge }}</span>
        <span v-if="isAvalaible === false" class="badge badge-lg badge-error">Out of stock</span>
      </div>
      <p class="text-gray-500">{{ description }}</p>
      <div class="flex items-center gap-3">
        <p v-if="discount > 0" class="text-gray-400 line-through">${{ price }}</p>
        <p class="text-2xl font-semibold">${{ discountPrice }}</p>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="badge badge-outline">{{ tag }}</span>
      </div>
      <button class="btn btn-primary w-fit" :disabled="!isAvalaible">Buy Now</button>
    </div>
  </div>
</template>