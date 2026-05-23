<script setup>
import { ref } from 'vue';
import Footer from '@/components/Footer.vue'
import NavBar from './components/NavBar.vue';
import runningshoes from '/runningshoes.jpg'
import casual from '/casual.jpg'
import flipflops from '/flipflops.jpg'
import cozysneakers from '/cozysneakers.jpg'

const products = ref([
  {
    "id": 1,
    "name": "Cozy Sneakers",
    "description": "High-quality sneakers that go with everything you wear.",
    "image": cozysneakers,
    "badge": "NEW",
    "price": 120,
    "discount": 20,
    "stock": 10,
    "tags": ["Fashion", "Casual", "Sport"]
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "description": "Built for speed and comfort on any terrain.",
    "image": runningshoes,
    "badge": "",
    "price": 90,
    "discount": 10,
    "stock": 5,
    "tags": ["Sport", "Running"]
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "description": "Rugged boots for everyday adventures.",
    "image": casual,
    "badge": "SALE",
    "price": 150,
    "discount": 0,
    "stock": 8,
    "tags": ["Casual", "Winter"]
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "description": "Light and breezy for sunny days.",
    "image": flipflops,
    "badge": "",
    "price": 30,
    "discount": 50,
    "stock": 20,
    "tags": ["Summer", "Casual"]
  }
])

const handleBuy = (id)=>{
  const product = products.value.find((p) => p.id === id);
  product.stock -= 1;
}
</script>

<template>
  <NavBar :products="products"></NavBar>
  <RouterView :products="products" @buy="(id) => handleBuy(id)"/>
  <Footer/>
</template>
