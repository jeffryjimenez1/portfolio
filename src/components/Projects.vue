<script setup>
import {useLoadContentStore} from "@/stores/loadContent.js";
import ProjectItem from "@/components/ProjectItem.vue";
import {ref} from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules"; // ✅ Import Modules


const loadContent = useLoadContentStore();

const projects = ref([
  { id: 1, picture: "joa.png", url: "www.holajoa.com", description: "Website for a wedding influencer" },
  { id: 2 ,picture: "mmhome.png", url: "www.mmhomecleaning.com", description: "Website for cleaning service" }
]);

</script>

<template>
  <div v-if="loadContent.projectStatus === true" class="projects">

    <div class="projects-text">

      <swiper
          :space-between="50"
          :slides-per-view="1"
          :loop="true"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="[Navigation, Pagination]"
          class="swiper-container"
      >
        <swiper-slide v-for="project in projects" :key="project.id">
          <ProjectItem :picture="project.picture" :projectUrl="project.url">
            <template #description>{{ project.description }}</template>
          </ProjectItem>
        </swiper-slide>
      </swiper>

    </div>

  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s ease, transform 1s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}


@media (min-width: 1000px) {

  .projects {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    padding: 20px;
  }

  .projects {
    background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("../components/img/projects.JPG");
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 100%;
    width: 50%;
    left: 0;


    .swiper-container {
      width: 100%;
      max-width: 600px;
      margin: auto;
    }

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }



  /* ✅ Custom styles for Swiper navigation arrows */
  .swiper-button-prev,
  .swiper-button-next {
    color: white; /* Change arrow color */
    background: rgba(0, 0, 0, 0.5); /* Add a background */
    padding: 10px;
    border-radius: 50%;
    transition: background 0.3s ease;
  }

  .swiper-button-prev:hover,
  .swiper-button-next:hover {
    background: rgba(0, 0, 0, 0.8); /* Darker background on hover */
  }

  /* ✅ Adjust position of arrows */
  .swiper-button-prev {
    left: -10px;
  }

  .swiper-button-next {
    right: -10px;
  }

  /* ✅ Swiper pagination dots */
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.5;
  }

  .swiper-pagination-bullet-active {
    background-color: white !important;
    opacity: 1;
  }

}
</style>