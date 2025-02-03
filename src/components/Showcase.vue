<script setup>

import {RouterLink} from "vue-router";
import {ref} from "vue";
import {useLoadContentStore} from "@/stores/loadContent.js";

const loadContent = useLoadContentStore();

</script>

<template>

  <div class="showcase-wrapper">

    <div class="floating-icons">
      <font-awesome-icon class="icon-item icon-php" :icon="['fa-brands', 'fa-php']" /> <!-- Solid Icons -->
      <font-awesome-icon class="icon-item icon-js" :icon="['fa-brands', 'fa-js']" /> <!-- Brand Icons -->
      <font-awesome-icon class="icon-item icon-vue" :icon="['fa-brands', 'fa-vuejs']" /> <!-- Regular Icons -->
      <font-awesome-icon class="icon-item icon-css" :icon="['fa-brands', 'fa-css']" /> <!-- Regular Icons -->
      <font-awesome-icon class="icon-item icon-laravel" :icon="['fa-brands', 'fa-laravel']" /> <!-- Regular Icons -->
      <font-awesome-icon class="icon-item icon-npm" :icon="['fa-brands', 'fa-npm']" /> <!-- Regular Icons -->
    </div>

    <div :class="{'show': loadContent.aboutStatus === true}" class="showcase-text">

      <h1 class="title">Hi, I'm Jeff</h1>

      <p class="description">
        This is my portfolio website. <br> Here, I want to show you only 1 project.
      </p>
      <router-link class="btn" to="/about">Check it out</router-link>

      <div class="transition-wrapper">
        <transition name="fade">
          <span v-if="loadContent.homeStatus === true" class="home">This is the home page. lol Just kidding.</span>
        </transition>

        <br>
        <transition name="fade">
          <span v-if="loadContent.contactStatus === true" class="contact email">Email: <a class="email-link" href="mailto:jeffwebs17@gmail.com">jeffwebs17@gmail.com</a></span>
        </transition>
      </div>
    </div>
  </div>

  <Transition name="fade">
    <div v-if="loadContent.aboutStatus === true" class="showcase-picture">

      <div class="showcase-picture-text">

        <div class="about-text">
          <h2>ABOUT ME</h2>
          <p >I’m a developer passionate about building and improving. <br> I love working with Vue.js, Laravel, and Excel, always looking to learn and create better experiences. <br> Beyond coding, I focus on growth—whether in tech, fitness, or life. Always experimenting, always improving.</p>
        </div>

        <transition name="fade">
          <span v-if="loadContent.contactStatus === true" class="email email-about">Email: <a class="email-link" href="mailto:jeffwebs17@gmail.com">jeffwebs17@gmail.com</a></span>
        </transition>

      </div>

    </div>
  </Transition>

  <div class="about-picture" v-if="loadContent.contactStatus === false"></div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


@keyframes moveIcon {
  0% {left: 0px; opacity: 1}
  50% {left: 80px;}
  100% {left: 0px; opacity: 0.4}
}

.showcase-wrapper {
  height: calc(100vh - 80.91px);
  position: relative;
  width: 100%;
  display: flex;
  background: var(--main-bg);
  font-family: 'Roboto', sans-serif;
}

.floating-icons {
  color: var(--text-color);
  width: 30%;
  position: absolute;
  right: 0;
  height: 100%;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .icon-item {
    position: absolute;
    animation: moveIcon 5s infinite;
    left: 0;
    color: var(--title-color);
  }

  .icon-php {
    top: 5%;
  }

  .icon-js {
    top: 15%;
    animation-delay: 1s;
  }

  .icon-vue {
    top: 30%;
    animation-delay: 2s;
  }

  .icon-css {
    top: 45%;
    animation-delay: 3s;
  }

  .icon-laravel {
    top: 60%;
    animation-delay: 4s;
  }

  .icon-npm {
    top: 75%;
    animation-delay: 5s;
  }
}

.showcase-text {
  position: absolute;
  width: 100%;
  height: auto;
  z-index: 10;
  align-self: center;
  padding: 40px 10px;
  font-size: 1.2rem;

  .title {
    font-size: 3rem;
    color: var(--title-color);
    user-select: none; /* Standard */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
  }

  .home {
    margin-bottom: 20px;
    display: inline-block;
  }

  .description {
    margin: 50px 0;
    color: var(--text-color);
    line-height: 1.8;
  }

  .btn {
    background: #0B2F2F;
    padding: 5px 15px;
    border-radius: 5px;
    color: var(--text-color);
    border: 1px #fff solid;
  }
}

.showcase-picture {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../assets/jeffryPic.jpg") no-repeat center center;
  background-size: cover;
  height: calc(100vh - 80.91px);
  width: 100%;
  position: absolute;
  z-index: 100;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  .about-text {
    color: var(--text-color);
    line-height: 1.8;
    padding: 10px;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
}

.transition-wrapper {
  width: 100%;
  height: 20px;
  margin-top: 30px;
}

.email, .home {
  color: var(--text-color);
  border: 5px solid var(--title-color);
  padding: 10px;
  border-radius: 5px;
}

.email a {
  color: var(--text-color);
}

.email-about {
  position: fixed;
  margin-left: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


@media (min-width: 1000px) {

  @keyframes moveIcon {
    0% {left: 0px; opacity: 1}
    50% {left: 200px;}
    100% {left: 0px; opacity: 0.4}
  }

  .showcase-wrapper {
    justify-content: center;
    height: 100vh;

    .floating-icons {
      width: 30%;
    }

    .icon-item {
      font-size: 2.5rem;
    }

    .showcase-text {
      position: static;
      width: 30%;
      margin: 0;
      font-size: 1.5rem;
      transition: all 1s ease;
      text-align: center;

      .title {
        font-size: 5rem;
      }

      .btn:hover {
        background: #163020;
      }
    }

    .showcase-text.show {
      transform: translateX(-50%);
    }
  }

  .about-picture {
    position: absolute;
    top: 0;
    background-size: cover;
    right: 0;
    height: 100vh;
    width: 50%;
  }

  .showcase-picture {
    top: 0;
    right: 0;
    width: 50%;
    height: 100vh;
    margin: 0;
    background-size: cover;

    .about-text {
      font-size: 1.5rem;
      width: 70%;
      margin: auto;
    }

    .email-about {
      display: none;
    }
  }
}

</style>