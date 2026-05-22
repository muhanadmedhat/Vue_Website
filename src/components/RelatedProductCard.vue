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
  }

})
const discountPrice = computed(()=>{
  return props.price - props.price*(props.discount/100);
})
</script>

<template>
  <div class="card bg-base-100 shadow-md hover:shadow-lg transition-shadow">
    <figure>
      <img :src="image" class="w-full object-cover h-48" />
    </figure>
    <div class="card-body">
      <h2 class="card-title text-lg">{{ name }}</h2>
      <div class="flex items-center gap-2">
        <p v-if="discount > 0" class="text-gray-400 line-through text-sm">${{ price }}</p>
        <p class="text-primary font-semibold">${{ discountPrice }}</p>
      </div>
      <div v-if="discount > 0" class="badge badge-secondary">{{ discount }}% OFF</div>
    </div>
  </div>
</template>