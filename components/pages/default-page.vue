<template>
  <div>
    <p>Create a @/middleware/default.js file :</p>
    <Atoms-Code-Pre :file="'@/middleware/landing.js'">export default ({ route, redirect }) => {
    if(route.path === '/') {
        redirect("/howto");
    }
}</Atoms-Code-Pre>

    <p>Add the following in the nuxt.config.js file :</p>
    <Atoms-Code-Pre :file="'nuxt.config.js'">export default {
  ...
  router: {
    middleware: ['landing']
  }
}</Atoms-Code-Pre>
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