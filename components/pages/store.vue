<template>
  <div>
    <p>Create a @/store/index.js file :</p>
    <Atoms-Code-Pre :file="'@/store/index.js'">export const state = () => ({
  
});

export const mutations = {
  
};

export const getters = {
  
};

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    // ...
  }
};</Atoms-Code-Pre>
  </div>
</template>

<script>
import BaseTopic from './base-topic.vue';
export default {
  extends: BaseTopic,
  data() {
    return {
      
    };
  }
};
</script>