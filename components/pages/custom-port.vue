<template>
  <div>
    <p>Add the following in the package.json file scripts :</p>
    <Atoms-Code-Pre :file="'package.json'">"d": "nuxt --hostname '0' --port 1234"</Atoms-Code-Pre>
    <p>Replace d or 1234 by other values if needed.</p>
    <p>Usage :</p>
    <button @click="switchSudo">Turn sudo <span>{{ sudoMode }}</span></button>
    {{ foo }}
    <Atoms-Code-Pre :file="'terminal'">{{ displaySudo }}npm run d</Atoms-Code-Pre>
  </div>
</template>

<script>
import BaseTopic from './base-topic.vue';
export default {
  extends: BaseTopic
};
</script>