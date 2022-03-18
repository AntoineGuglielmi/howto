<template>
  <div>
    <button @click="switchSudo">Turn sudo <span>{{ sudoMode }}</span></button>

    <Atoms-Code-Pre :file="'terminal'">{{ displaySudo }}npm install @nuxtjs/proxy</Atoms-Code-Pre>

    <Atoms-Code-Pre :file="'nuxt.config.js'" v-bind="nuxtConfigProps">export default {
  ...
  axios: {
    proxy: true
  },

  proxy: {
    '/api/': {
      // Replace [::1] by localhost if it doesn't work and modify the port if needed
      target: 'http://[::1]:8181',
      pathRewrite: {'^/api/': '/'},
      changeOrigin: true
    }
  }
  ...
}</Atoms-Code-Pre>

    <p>!!! Try remove axios.baseUrl if issues !!!</p>

    <p>Usage :</p>
    <Atoms-Code-Pre>const whatever = await this.$axios.$get('/api/whatever');</Atoms-Code-Pre>
  </div>
</template>

<script>
import BaseTopic from './base-topic.vue';
export default {
  extends: BaseTopic,
  data() {
    return {
      sudo: true,
      budgets: []
    };
  },
  // asyncData() {
  //   this.budgets = await this.$axios.get('/api/budgets');
  // },
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