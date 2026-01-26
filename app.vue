<script setup>
const isVisible = ref(false);
const onSplineLoad = () => {
  console.log("Spline chargé");
};
onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 500);
  setTimeout(() => {
    if (document.querySelector("spline-viewer")) { 
      document.querySelector("spline-viewer")._logo.style.display = "none"
    }
  }, 1000)
})

const hostname = window.location.hostname

const reload = () => {
  document.location.reload()
}
useSeoMeta({
  title: "Maintenance",
  description: "Votre site est en maintenance, merci pour votre compréhension."
})
</script>

<template>
  <div class="bg-gray-950 dark:bg-gray-950">
    <div class="absolute top-0 left-0 z-0 blur h-dvh w-dvw">
      <ClientOnly>
        <spline-viewer url="https://prod.spline.design/wQW5D08widPvpoyC/scene.splinecode"></spline-viewer>
        <LazySplineViewer
          v-if="isVisible"
          url="https://prod.spline.design/wQW5D08widPvpoyC/scene.splinecode"
          @load="onSplineLoad"
        />
      </ClientOnly>
    </div>
    <div class="min-h-screen flex flex-col justify-center items-center relative z-10">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 dark:text-white mb-8">Your site <span class="font-extrabold">{{ hostname }}</span> is under maintenance</h1>
      <p class="text-center text-gray-500 dark:text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">We're working hard to improve the user experience. Stay tuned!</p>
      <div class="flex space-x-4 mt-5">
        <button @click="reload()"
          class="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded dark:text-white dark:border-white">Reload</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.viewer #container {
  display: none;
}

#logo {
  display: none;
}
</style>
