<script setup>

import {RouterLink} from "vue-router";
import {useLoadContentStore} from "@/stores/loadContent.js";
import About from "@/components/About.vue";
import Projects from "@/components/Projects.vue";

const loadContent = useLoadContentStore();

</script>

<template>

  <div class="showcase-wrapper">

    <div class="floating-icons">
      <font-awesome-icon class="icon-item icon-php" :icon="['fa-brands', 'fa-php']" />
      <font-awesome-icon class="icon-item icon-js" :icon="['fa-brands', 'fa-js']" />
      <font-awesome-icon class="icon-item icon-vue" :icon="['fa-brands', 'fa-vuejs']" />
      <font-awesome-icon class="icon-item icon-css" :icon="['fa-brands', 'fa-css']" />
      <font-awesome-icon class="icon-item icon-laravel" :icon="['fa-brands', 'fa-laravel']" />
      <font-awesome-icon class="icon-item icon-npm" :icon="['fa-brands', 'fa-npm']" />
    </div>

    <div :class="{'show': loadContent.aboutStatus === true,
   'show-right': loadContent.projectStatus === true}" class="showcase-text">

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
    <About/>
  </Transition>

  <Transition name="fade">
    <Projects/>
  </Transition>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


@keyframes moveIcon {
  0% {left: 0px; opacity: 1}
  50% {left: 80px;}
  100% {left: 0px; opacity: 0.4}
}

.showcase-wrapper {
  position: relative;
  height: 100vh;
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
    animation: moveIcon 3s infinite;
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




@media (min-width: 1000px) {

  @keyframes moveIcon {
    0% {left: 0; opacity: 1}
    50% {left: 200px;}
    100% {left: 0; opacity: 0.4}
  }

  .showcase-wrapper {
    justify-content: center;
    height: 100vh;

    .floating-icons {
      width: 30%;
    }

    .icon-item {
      animation-duration: 5s;
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

    .showcase-text.show-right {
      transform: translateX(50%);
    }
  }



}

</style>