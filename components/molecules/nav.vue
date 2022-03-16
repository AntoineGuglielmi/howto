<template>
  <nav id="nav__main">
    <ul id="nav__content">
      <li v-for="topic in topics" :key="topic.id">
        <NuxtLink :to="`/howto/${topic.slug}`">
          {{ topic.text || topic.titre }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    topics() {
      return this.$store.getters.getTopics;
    },
  }
};
</script>

<style lang="sass" scoped>
#nav__main
  #nav__content
    display: flex
    flex-direction: column
    position: sticky
    top: 5rem
    border-left: 1px solid rgba($blanc,1)
    padding-left: 1rem

    li
      a
        border-radius: 0.25rem
        display: block
        transition: 0.2s ease-in-out
        transition-property: padding, background-color, color, margin, font-weight
        padding: 0rem
        color: inherit
        background-color: transparent
        margin: 0
        font-weight: 400

        &.nuxt-link-active,
        &.nuxt-link-exact-active
          padding: 0.5rem
          background-color: $blanc
          color: $crimson
          margin: 0.5rem 0
          font-weight: 800
</style>