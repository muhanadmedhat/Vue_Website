<script setup>
defineProps({
  title:{
    type: String,
    required: true
  }
});

</script>

<template>
<header>
  <div class="navbar bg-base-100 shadow-sm">
  <a class="btn btn-ghost text-xl">{{title}}</a>
</div>
</header>

</template>