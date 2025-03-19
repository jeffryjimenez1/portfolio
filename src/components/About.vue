<script setup>
import {useLoadContentStore} from "@/stores/loadContent.js";

const loadContent = useLoadContentStore();

</script>

<template>
  <div v-if="loadContent.aboutStatus" class="showcase-picture">

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
</template>
<style scoped>


.showcase-picture {
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("../assets/jeffryPic.jpg") no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 2000;
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

.email-about {
  position: fixed;
  margin-left: 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

@media (min-width: 1000px) {
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
