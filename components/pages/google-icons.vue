<template>
  <div>
    <p>Put the following in the default.head.link :</p>
    <Atoms-Code-Pre :file="'nuxt.config.js'">{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp' }</Atoms-Code-Pre>
  </div>
</template>

<script>
import BaseTopic from './base-topic.vue';
export default {
  extends: BaseTopic,
  data() {
    return {};
  },
  computed: {}
};
</script>