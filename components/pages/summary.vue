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
import BaseTopic from './base-topic.vue';
export default {
  extends: BaseTopic,
  computed: {
    topics() {
      return this.$store.getters.getTopics;
    }
  }
};
</script>