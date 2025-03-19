<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useLoadContentStore} from "@/stores/loadContent.js";
import {ref} from "vue";

const loadContent = useLoadContentStore();


let showMenu = ref(false);

function toggleMenu(){
  return showMenu.value = !showMenu.value;
}

function navCallStore(store){
  loadContent.changeContentStatus(store)
  toggleMenu()
}

function changeStatus(){
  loadContent.projectStatus = false;
  loadContent.aboutStatus = false;
  toggleMenu()
}

</script>

<template>
    <header>

      <transition name="fade">
        <nav class="main-nav" v-if="showMenu">
          <button class="contact-btn contact-router" to="/" @click="changeStatus(changeStatus)">Home</button>
          <button class="contact-btn" @click="navCallStore('contactStatus')">Contact</button>
          <button class="contact-btn" @click="navCallStore('aboutStatus')">Who Am I</button>
          <button class="contact-btn" @click="navCallStore('projectStatus')">Projects</button>
        </nav>
      </transition>

      <nav class="big-nav">
        <button class="contact-btn contact-router" to="/" @click="changeStatus(changeStatus)">Home</button>
        <button class="contact-btn" @click="navCallStore('contactStatus')">Contact</button>
        <button class="contact-btn" @click="navCallStore('aboutStatus')">Who Am I</button>
        <button class="contact-btn" @click="navCallStore('projectStatus')">Projects</button>
      </nav>

      <div @click="toggleMenu()" class="hamburger-menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
      </div>

    </header>

  <RouterView />
</template>

<style scoped>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.big-nav {
  display: none;
}

nav {
  position: fixed;
  top: 0;
  z-index: 2500;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  background: var(--secondary-bg);
  font-family: 'Roboto', sans-serif;
}


.hamburger-menu {
  position: fixed;
  z-index: 3000;
  top: 15px;
  right: 5px;
  width: 40px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .line {
    width: 100%;
    height: 3px;
    background-color: #fff;
  }
}

.contact-btn {
  width: 100%;
  font-weight: 400;
  font-size: 20px;
  padding: 20px 10px;
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

    .main-nav {
      display: none;
    }

    .hamburger-menu {
      display: none;
    }

    .big-nav {
      display: flex;
    }

    nav {
      justify-content: center;
      width: 100%;
      flex-wrap: nowrap;
      background: none;
      z-index: 10000;
      position: absolute;
      padding: 20px 0;

      .contact-btn {
        width: auto;
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
