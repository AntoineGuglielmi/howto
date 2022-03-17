<template>
  <div>
    <Atoms-Text-H1>{{ titre }}</Atoms-Text-H1>
    <transition name="fade" mode="out-in">
      <component :is="component" v-bind="topic"></component>
    </transition>
  </div>
</template>

<script>
export default {
  layout: 'topic',
  computed: {
    topicSlug() {
      return this.$route.params.topicSlug;
    },
    topic() {
      return this.$store.getters.getTopicBySlug(this.topicSlug);
    },
    titre() {
      return this.topic?.titre;
    },
    componentName() {
      return this.topic.component || this.topic.slug;
    },
    component() {
      return () => import(`@/components/pages/${this.componentName}.vue`);
    }
  }
}
</script>
<style lang="sass" scoped>
.fade-enter-active,
.fade-leave-active
  transition: 0.25s ease-in-out
  transition-property: opacity, transform

.fade-enter
  opacity: 0
  transform: translateX(-10px)

.fade-enter-to,
.fade-leave
  opacity: 1
  transform: translateX(0)

.fade-leave-to
  opacity: 0
  transform: translateX(10px)
</style>