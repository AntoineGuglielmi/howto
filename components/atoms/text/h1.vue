<template>
  <h1>
    <span v-if="home">
      <NuxtLink to="/howto"><Atoms-Text-Google-Icon>home</Atoms-Text-Google-Icon></NuxtLink>/</span
    >
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: {
    home: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="sass" scoped>
h1
    margin: 3rem 0
    font-weight: 700
    font-size: 6rem
    font-family: Bitter
    display: flex
    align-items: center
    display: flex
    align-items: center
    gap: 0.5rem

    span
      display: flex
      align-items: center
      gap: 0.5rem
</style>