<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useLoadContentStore} from "@/stores/loadContent.js";

const loadContent = useLoadContentStore();


</script>

<template>
    <header>

      <nav>
        <!--          <RouterLink to="/">Home</RouterLink>-->
        <!--          <RouterLink to="/about">Contact</RouterLink>-->
        <button class="contact-btn" @click="loadContent.changeContentStatus('homeStatus')">Home</button>
        <button class="contact-btn" @click="loadContent.changeContentStatus('contactStatus')">Contact</button>
        <button class="contact-btn" @click="loadContent.changeContentStatus('aboutStatus')">Who Am I</button>

      </nav>

    </header>

  <RouterView />
</template>

<style scoped>

nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
  background: var(--secondary-bg);
}

.contact-btn {
  font-size: 1.1rem;
  padding: 5px 10px;
  background: none;
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 5px solid var(--title-color);
  color: var(--text-color);
}

@media (min-width: 600px) {
  header {
    width: 100%;

    nav {
      justify-content: center;
      width: 100%;
      background: none;
      z-index: 10000;
      position: absolute;

      .contact-btn {
        margin: 0 40px;
        background: none;
        border: none;
        font-size: 1.2rem;
        position: relative;
        overflow-x: hidden;
        padding: 10px 30px;
        z-index: 10;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
      }

      .contact-btn:after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
        height: 6px;
        transform: translateX(-101%);
        transition: all 0.3s ease;
        z-index: 100;
        background: var(--title-color);
      }

      .contact-btn:before {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        height: 6px;
        bottom: 0;
        transform: translateX(200%);
        transition: all 0.3s ease;
        z-index: 100;
        background: var(--title-color);
      }

      .contact-btn:hover.contact-btn:after {
        transform: translateX(0);

      }

      .contact-btn:hover.contact-btn:before {
        transform: translateX(0%);
      }

      .contact-btn:hover.contact-btn {
        background: none;
        padding: 10px 30px;
        border-bottom: 5px solid transparent;
        border-top: 5px solid transparent;
      }
    }
  }

}
</style>
