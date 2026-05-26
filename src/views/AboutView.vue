<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(()=>{
  console.log("AboutView is mounted");
})

onUnmounted(()=>{
  console.log("AboutView is unmounted");
})
</script>

<template>
  <div class="max-w-4xl mx-auto p-4 sm:p-8 flex flex-col gap-8">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">About Us</h1>
      <div class="divider"></div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-xl mb-2">The Store</h2>
          <p class="text-base-content/70">
            Welcome to <span class="font-bold border-b border-primary">SneakerHub</span> — your go-to destination for premium footwear. 
            From casual boots to high-performance running shoes, we bring you the best 
            selection at unbeatable prices. Quality, comfort, and style — all in one place.
          </p>
        </div>
      </div>
      
      <div class="card bg-base-100 shadow-sm border border-base-200">
        <div class="card-body">
          <h2 class="card-title text-xl mb-2">Course Info</h2>
          <ul class="flex flex-col gap-2 text-base-content/70">
            <li><span class="font-bold">Developer:</span> Muhanad</li>
            <li><span class="font-bold">Course:</span> VueJS — ITI Full-Stack Web Development</li>
            <li><span class="font-bold">Institute:</span> Information Technology Institute (ITI)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>