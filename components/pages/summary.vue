<template>
  <div>
    <ul>
      <li v-for="(topic, index) in topics" :key="index">
        <NuxtLink :to="'/howto/' + topic.slug">{{ topic.text || topic.titre }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import DefaultPage from './page.vue';
export default {
  extends: DefaultPage,
  computed: {
    topics() {
      return this.$store.getters.getTopics;
    }
  }
};
</script>