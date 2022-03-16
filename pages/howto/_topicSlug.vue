<template>
  <div>
    <Atoms-Text-H1>{{ titre }}</Atoms-Text-H1>
    <component :is="component" v-bind="topic"></component>
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

</style>