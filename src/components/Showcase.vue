<script setup>
import { RouterLink } from "vue-router";
import { useLoadContentStore } from "@/stores/loadContent.js";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";

const loadContent = useLoadContentStore();
</script>

<template>
  <div class="showcase-wrapper bg-blue-400">

    <div class="floating-icons">
      <font-awesome-icon class="icon-item icon-php" :icon="['fa-brands', 'fa-php']" />
      <font-awesome-icon class="icon-item icon-js" :icon="['fa-brands', 'fa-js']" />
      <font-awesome-icon class="icon-item icon-vue" :icon="['fa-brands', 'fa-vuejs']" />
      <font-awesome-icon class="icon-item icon-css" :icon="['fa-brands', 'fa-css3-alt']" />
      <font-awesome-icon class="icon-item icon-laravel" :icon="['fa-brands', 'fa-laravel']" />
      <font-awesome-icon class="icon-item icon-npm" :icon="['fa-brands', 'fa-npm']" />
    </div>

    <!-- Text + slide transitions -->
    <div :class="{ 'show-left': loadContent.activeSection === 'about','show-right': loadContent.activeSection === 'projects'}" class="showcase-text">

    <h1 class="title">Hi, I'm Jeff</h1>

      <p class="description">
        <span>Web developer</span>
      </p>

      <div class="transition-wrapper">
        <transition name="fade">
          <span
              v-if="loadContent.activeSection === 'contact'"
              class="contact email"
          >
            <a class="email-link" href="mailto:jeffwebs17@gmail.com">
              jeffwebs17@gmail.com
            </a>
          </span>
        </transition>
      </div>
    </div>
  </div>

  <transition name="fade">
    <About v-if="loadContent.activeSection"/>
  </transition>

  <transition name="fade">
    <Projects v-if="loadContent.activeSection"/>
  </transition>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100..900&display=swap');

.showcase-wrapper {
  background: #0B2F2F;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.showcase-text {
  margin: 0;
  .title {
    color: #D4AF37;
    font-family: 'Bebas Neue', sans-serif;
  }

  .description {
    color: #fff;
    margin: 10px 0;
  }
}

.contact {
  border: 2px solid #D4AF37;
  color: #fff;
  padding: 10px;
  position: absolute;
  transform: translateX(50%);
  right: 50%;
  border-radius: 10px;
  a {
    color: #fff;
  }
}

.floating-icons {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  position: absolute;
  bottom: 50px;
  right: 0;
  padding: 20px 0;
  z-index: 5000;
}

.icon-item {
  font-size: 2rem;
  animation: snakeSide 5s ease-in-out infinite;
  opacity: 0;
  color: #51805c;
}

/* Snake delay: staggering animation for snake effect */
.icon-item:nth-child(1) { animation-delay: 0s; }
.icon-item:nth-child(2) { animation-delay: 0.3s; }
.icon-item:nth-child(3) { animation-delay: 0.6s; }
.icon-item:nth-child(4) { animation-delay: 0.9s; }
.icon-item:nth-child(5) { animation-delay: 1.2s; }
.icon-item:nth-child(6) { animation-delay: 1.5s; }

@keyframes snakeSide {
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  50% {
    transform: translateX(0%);
    opacity: 1;
  }
  80% {
    transform: translateX(-100%);
    opacity: 1;
  }
  100% {
    transform: translateX(-100%);
    opacity: 0;
  }
}



@media (min-width: 1000px) {

  .icon-item {
    font-size: 3rem;
  }

  .showcase-text {
    transition: all 1s ease;
    .description {
      margin: 20px 0;
    }
  }

  .showcase-text.show-left {
    transform: translateX(-80%);
  }

  .showcase-text.show-right {
    transform: translateX(80%);
  }

  .contact {
    border: 3px solid #D4AF37;
  }

}

</style>
