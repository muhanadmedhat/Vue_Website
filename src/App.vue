<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RelatedProductCard from '@/components/RelatedProductCard.vue'
import MainProduct from '@/components/MainProduct.vue'
import runningshoes from '/runningshoes.jpg'
import casual from '/casual.jpg'
import flipflops from '/flipflops.jpg'
import cozysneakers from '/cozysneakers.jpg'
const myProduct = {
  "id": 1,
  "name": "Cozy Sneakers",
  "description": "High-quality sneakers that go with everything you wear.",
  "image": cozysneakers,
  "badge": "NEW",
  "price": 120,
  "discount": 20,
  "tags": ["Fashion", "Casual", "Sport"],
  "isAvalaible":true
}

const relatedProducts = [
  {
    "id": 2,
    "name": "Running Shoes",
    "price": 90,
    "discount": 10,
    "image": runningshoes
  },
  {
    "id": 3,
    "name": "Casual Boots",
    "price": 150,
    "discount": 0,
    "image": casual
  },
  {
    "id": 4,
    "name": "Flip Flops",
    "price": 30,
    "discount": 50,
    "image": flipflops
  }
]
</script>

<template>
  <Header title="Product" />
  <div class="max-w-5xl mx-auto p-8 flex flex-col gap-10">
    <MainProduct 
      :name="myProduct.name" 
      :description="myProduct.description" 
      :image="myProduct.image" 
      :badge="myProduct.badge" 
      :price="myProduct.price" 
      :discount="myProduct.discount" 
      :tags="myProduct.tags"
      :isAvalaible="myProduct.isAvalaible"
    />
    <div>
      <h3 class="text-2xl font-bold mb-4">Related Products</h3>
      <div class="grid grid-cols-3 gap-6">
        <RelatedProductCard 
          v-for="product in relatedProducts" 
          :key="product.id" 
          :name="product.name" 
          :price="product.price" 
          :discount="product.discount" 
          :image="product.image"
        />
      </div>
    </div>
  </div>
  <Footer />
</template>
