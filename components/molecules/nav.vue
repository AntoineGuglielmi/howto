<template>
  <nav id="nav__main">
    <ul id="nav__content">
      <li class="nav__category" v-for="(category, title) in navHarchitecture" :key="title">
        <p class="nav__category_name"><strong>{{ categories[title] }}</strong></p>
        <ul class="nav__topics">
          <li v-for="topic in category" :key="topic.id">
            <NuxtLink :to="`/howto/${topic.slug}`">
              {{ topic.text || topic.titre }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import {TOPICS_CATEGORIES} from '@/constants/topicsCategories';
import {TOPICS_TYPES} from '@/constants/topicsTypes';
export default {
  computed: {
    navHarchitecture() {
      const topics = this.$store.getters.getTopics;
      console.log(TOPICS_CATEGORIES);
      const navHarchitecture = {};
      for(const[k,v] of Object.entries(TOPICS_TYPES)) {
          navHarchitecture[v] = [];
      }
      // TOPICS_TYPES.forEach(type => {
      //   if(!(topicCategory in navHarchitecture)) {
      //     navHarchitecture[type] = [];
      //   }
      // });
      topics.forEach(topic => {
        // const topicCategory = TOPICS_CATEGORIES[topic.type];
        const topicCategory = topic.type;
        navHarchitecture[topicCategory].push(topic);
      });
      return navHarchitecture;
    },
    categories() {
      return TOPICS_CATEGORIES;
    }
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
    gap: 1rem

    li.nav__category
      border-left: 1px solid rgba($blanc,1)
      padding-left: 1rem

      p.nav__category_name
        font-size: 1.25rem
        margin: 0

      ul.nav__topics
        margin-left: 1rem

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