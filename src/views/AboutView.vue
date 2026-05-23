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
  <div class="max-w-3xl mx-auto p-12 flex flex-col gap-8">
    <div class="text-center">
      <h1 class="text-5xl font-bold mb-2">About Us</h1>
      <div class="divider"></div>
    </div>

    <div class="card bg-base-200 shadow-md p-8 flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">The Store</h2>
      <p class="text-gray-600 leading-relaxed">
        Welcome to SneakerHub — your go-to destination for premium footwear. 
        From casual boots to high-performance running shoes, we bring you the best 
        selection at unbeatable prices. Quality, comfort, and style — all in one place.
      </p>
    </div>

    <div class="card bg-base-200 shadow-md p-8 flex flex-col gap-4">
      <h2 class="text-2xl font-semibold">Course Info</h2>
      <ul class="flex flex-col gap-2 text-gray-600">
        <li><span class="font-medium">Developer:</span> M</li>
        <li><span class="font-medium">Course:</span> VueJS — ITI Full-Stack Web Development</li>
        <li><span class="font-medium">Institute:</span> Information Technology Institute (ITI)</li>
      </ul>
    </div>
  </div>
</template>