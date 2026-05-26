<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../stores/cartStore';
const cartStore = useCartStore();
onMounted(()=>{
  console.log("NavBar mounted")
})

onUnmounted(()=>{
  console.log("NavBar unmounted")
})
</script>

<template>
  <div class="bg-base-100 shadow-sm border-b border-base-200 sticky top-0 z-50">
    <div class="navbar max-w-7xl mx-auto px-2">
      <div class="flex-1">
        <RouterLink :to="{name: 'home'}" class="btn btn-ghost normal-case text-xl font-bold">SneakerHub</RouterLink>
      </div>
      <div class="flex-none flex items-center">
        <ul class="menu menu-horizontal px-1 font-medium">
          <li><RouterLink :to="{name: 'home'}">Home</RouterLink></li>
          <li><RouterLink :to="{name: 'product' , params:{id:1}}">Featured</RouterLink></li>
          <li><RouterLink :to="{name: 'about'}">About</RouterLink></li>
        </ul>
        <RouterLink :to="{name: 'cart'}" class="btn btn-ghost btn-circle ml-1">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span v-if="cartStore.totalItems > 0" class="badge badge-sm badge-primary indicator-item">{{ cartStore.totalItems }}</span>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>