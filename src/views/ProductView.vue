<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import ProductDetails from '@/components/ProductDetails.vue';
import ProductCard from '@/components/ProductCard.vue'
const props = defineProps({
  products:{
    type:Array,
    required:true
  },
  id:{
    type:Number,
    required:true
  }
})

const myProduct = ref({});
const relatedProducts = ref([]);

const getProduct = ()=>{
  myProduct.value = props.products.find((p) => p.id === props.id);
  relatedProducts.value = props.products.filter((p) => p.id !== props.id);
}

onMounted(()=>{
  console.log(`ProductView mounted for ID:${props.id}`);
  getProduct();
})

onUnmounted(()=>{
  console.log("ProductView unmounted")
})

watch(()=>
  props.id,
  getProduct,
  {immediate: false}
)

const emit = defineEmits(['buy'])
</script>


<template>
  <div class="max-w-6xl mx-auto p-8 flex flex-col gap-12">
    <ProductDetails :product="myProduct" @buy="(id) => emit('buy', id)" />
    
    <div>
      <h2 class="text-2xl font-bold mb-6">Related Products</h2>
      <div class="grid grid-cols-3 gap-6">
        <ProductCard 
          v-for="product in relatedProducts" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>