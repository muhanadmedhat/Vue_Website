<script setup>
import { useCartStore } from '../stores/cartStore';
import { onMounted, onUnmounted } from 'vue';
const cartStore = useCartStore();

onMounted(() => {
  console.log("CartView mounted")
})

onUnmounted(() => {
  console.log("CartView unmounted")
})

</script>

<template>
  <div class="max-w-6xl mx-auto flex flex-col gap-6">
    <div class="flex items-center justify-between pb-4 border-b border-base-200">
      <h1 class="text-3xl font-bold">Shopping Bag</h1>
      <div class="badge badge-primary font-bold">{{ cartStore.totalItems }} Items</div>
    </div>
    
    <div v-if="cartStore.items.length === 0" class="flex flex-col items-center justify-center py-16 bg-base-100 rounded-2xl border border-base-200 shadow-sm text-center">
      <h2 class="text-2xl font-bold mb-2">Your cart is empty</h2>
      <p class="text-base-content/60 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <RouterLink :to="{name: 'home'}" class="btn btn-primary">Start Shopping</RouterLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
      <div class="lg:col-span-2 flex flex-col gap-4">
        <div v-for="item in cartStore.items" :key="item.id" 
             class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-4 flex flex-col sm:flex-row items-center gap-6">
          <img :src="item.image" class="w-24 h-24 object-cover rounded-xl bg-base-200 shrink-0" />
          
          <div class="flex-1 flex flex-col text-center sm:text-left gap-1">
            <h2 class="font-bold text-lg">{{ item.name }}</h2>
            <div class="text-base-content/60">
              <span class="text-primary font-bold">${{ item.price }}</span> × {{ item.qty }}
            </div>
          </div>
          
          <div class="flex flex-col items-center sm:items-end w-full sm:w-auto gap-2">
            <p class="font-bold text-2xl">${{ item.price * item.qty }}</p>
            <button @click="cartStore.removeFromCart(item)" class="btn btn-ghost btn-sm text-error">Remove</button>
          </div>
        </div>
      </div>
      
      <div class="bg-base-100 rounded-2xl shadow-sm border border-base-200 p-6 sticky top-24 flex flex-col gap-4">
        <h3 class="text-xl font-bold">Order Summary</h3>
        
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center text-base-content/70">
            <span>Subtotal</span>
            <span>${{ cartStore.totalPrice }}</span>
          </div>
          <div class="flex justify-between items-center text-base-content/70">
            <span>Shipping</span>
            <span class="text-success font-bold">Free</span>
          </div>
          <div class="divider my-0"></div>
          <div class="flex justify-between items-end">
            <span class="font-bold">Total</span>
            <span class="text-2xl font-bold text-primary">${{ cartStore.totalPrice }}</span>
          </div>
        </div>
        
        <div class="flex flex-col gap-2 mt-4">
          <button class="btn btn-primary w-full">Checkout</button>
          <button @click="cartStore.clearCart()" class="btn btn-ghost w-full">Clear Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>