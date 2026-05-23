<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
const props = defineProps({
  products:{
    type:Array,
    required:true
  }
})

const computedLength = computed(()=>{
  return props.products.reduce((acc,product)=>{
    return acc + product.stock;
  }, 0)
})
onMounted(()=>{
  console.log("NavBar mounted")
})

onUnmounted(()=>{
  console.log("NavBar unmounted")
})
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
  <div class="flex-1">
    <RouterLink :to="{name: 'home'}">ProductShop</RouterLink>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
      <li><RouterLink :to="{name: 'product' , params:{id:1}}">Products</RouterLink></li>
      <li><RouterLink :to="{name: 'about'}">About</RouterLink></li>
    </ul>
    <span class="badge badge-success">{{ computedLength }}</span>
  </div>
</div>
</template>