<template>
  <div>
    <p>Create a @/plugins/myPlugin.js file :</p>

    <Atoms-Code-Pre :file="'@/plugins/myPlugin.js'">export default ({ app, store }, inject) => {

  const pluginMethods = {

    firstMethod() {
      // Do something
    },

    secondMethod() {
      // Do something
    },

  };

  inject('myPlugin', pluginMethods);

}</Atoms-Code-Pre>

    <Atoms-Code-Pre :file="'nuxt.config.js'" v-bind="nuxtConfigProps">export default {
  ...
  plugins: [
    '@/plugins/myPlugin.js'
  ]
  ...
}</Atoms-Code-Pre>

    <p>Usage :</p>
    <Atoms-Code-Pre>this.$myPlugin.firstMethod();</Atoms-Code-Pre>
  </div>
</template>

<script>
import DefaultPage from './page.vue';
export default {
  extends: DefaultPage,
  data() {
    return {
      sudo: true,
      budgets: []
    };
  },
  computed: {
    displaySudo() {
      return this.sudo ? 'sudo ' : '';
    },
    sudoMode() {
      return !this.sudo ? 'ON' : 'OFF';
    },
    dirsProps() {
      return {
        copy: false
      }
    },
    nuxtConfigProps() {
      return {
        copy: false
      }
    }
  },
  methods: {
    switchSudo() {
      this.sudo = !this.sudo;
    }
  }
};
</script>