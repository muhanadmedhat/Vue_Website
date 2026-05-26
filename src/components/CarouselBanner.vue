<template>
  <div class="carousel w-full rounded-2xl shadow-sm border border-base-200 mb-8">
    <div id="slide1" class="carousel-item relative w-full h-[300px] sm:h-[400px]">
      <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" class="w-full object-cover" />
      <div class="absolute inset-y-0 left-5 right-5 flex items-center justify-between">
        <a href="#slide4" class="btn btn-circle btn-sm bg-base-100/70 border-none">❮</a>
        <a href="#slide2" class="btn btn-circle btn-sm bg-base-100/70 border-none">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full h-[300px] sm:h-[400px]">
      <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp" class="w-full object-cover" />
      <div class="absolute inset-y-0 left-5 right-5 flex items-center justify-between">
        <a href="#slide1" class="btn btn-circle btn-sm bg-base-100/70 border-none">❮</a>
        <a href="#slide3" class="btn btn-circle btn-sm bg-base-100/70 border-none">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full h-[300px] sm:h-[400px]">
      <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp" class="w-full object-cover" />
      <div class="absolute inset-y-0 left-5 right-5 flex items-center justify-between">
        <a href="#slide2" class="btn btn-circle btn-sm bg-base-100/70 border-none">❮</a>
        <a href="#slide4" class="btn btn-circle btn-sm bg-base-100/70 border-none">❯</a>
      </div>
    </div>
    <div id="slide4" class="carousel-item relative w-full h-[300px] sm:h-[400px]">
      <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp" class="w-full object-cover" />
      <div class="absolute inset-y-0 left-5 right-5 flex items-center justify-between">
        <a href="#slide3" class="btn btn-circle btn-sm bg-base-100/70 border-none">❮</a>
        <a href="#slide1" class="btn btn-circle btn-sm bg-base-100/70 border-none">❯</a>
      </div>
    </div>
  </div>
</template>