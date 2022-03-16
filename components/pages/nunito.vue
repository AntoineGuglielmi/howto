<template>
  <div>
    <p>Put the following in the default.head.link :</p>
    <Atoms-Code-Pre :file="'nuxt.config.js'">{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap' }</Atoms-Code-Pre>
  </div>
</template>

<script>
import DefaultPage from './page.vue';
export default {
  extends: DefaultPage,
  data() {
    return {};
  },
  computed: {}
};
</script>