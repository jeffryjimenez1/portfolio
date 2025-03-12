<script setup>

import {computed} from "vue";

const props = defineProps({
  picture: {
    type: String,
    required: true
  },
  projectUrl: {
    type: String,
    required: true
  }
})

const imageUrl = computed(() => {
  return new URL(`./img/${props.picture}`, import.meta.url).href;
});

</script>

<template>

  <div class="project-item">
    <img class="image" :src="imageUrl" alt="">

    <div class="project-text">
      <p class="description">
        <slot name="description"/>
      </p>
      <a class="project-link" :href="projectUrl" target="_blank">{{projectUrl}}</a>
    </div>
  </div>

</template>

<style scoped>


@media (min-width: 1000px) {

  .project-item {
    border-radius: 20px;
    width: 400px;
    background: #0B2F2F;
    color: #fff;

    .image {
      border-radius: 20px 20px 0 0;
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .project-text {

      padding: 20px;

      .description {
        margin: 20px 0;
        font-size: 1.3rem;
      }

      .project-link {
        font-size: 1.2rem;
        color: #fff;
        border-bottom: 2px yellow solid;
      }

    }


  }



}


</style>
