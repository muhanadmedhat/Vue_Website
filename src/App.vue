<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-base-200/30">
    <NavBar />
    <main class="flex-grow w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
