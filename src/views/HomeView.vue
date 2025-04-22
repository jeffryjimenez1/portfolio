<script setup>
import Showcase from '../components/Showcase.vue';


</script>

<template>
  <main>

   <transition name="fade">
     <Showcase/>
   </transition>

  </main>
</template>

<style>

main {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
}

@media (min-width: 1024px) {
  main {
    font-size: 2rem;
    height: 100vh;
  }
}
</style>
