<template>
  <div>
    <button @click="switchSudo">Turn sudo <span>{{ sudoMode }}</span></button>

    <p>Create assets directory :</p>
    <Atoms-Code-Pre v-bind="dirsProps">@
  assets
    styles
      main.sass
      imports
        _10_variables.sass
        _20_reset.sass</Atoms-Code-Pre>

    <Atoms-Code-Pre :file="'terminal'">{{ displaySudo }}npm install --save-dev sass sass-loader@10
{{ displaySudo }}npm install node-sass-glob-importer
{{ displaySudo }}npm install --save-dev @nuxtjs/style-resources</Atoms-Code-Pre>

    <Atoms-Code-Pre :file="'nuxt.config.js'" v-bind="nuxtConfigProps">const globImporter = require('node-sass-glob-importer');

export default {
  ...
  css: ['@/assets/styles/main.sass'],

  modules: [
    ...
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    sass: "./assets/styles/imports/*.sass"
  },

  build: {
    extend(config,{loaders: {sass}}) {
      ...
      const sassOptions = sass.sassOptions || {};
      sassOptions.importer = globImporter();
      sass.sassOptions = sassOptions;
      ...
    }
  }
  ...
}</Atoms-Code-Pre>

    <Atoms-Code-Pre :file="'@/assets/styles/main.sass'">@import "imports/**/*"</Atoms-Code-Pre>
  </div>
</template>

<script>
import DefaultPage from './page.vue';
export default {
  extends: DefaultPage,
  data() {
    return {
      sudo: true
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