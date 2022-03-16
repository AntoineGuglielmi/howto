<template>
  <div>
    <Atoms-Text-H1 :home="false">Sommaire</Atoms-Text-H1>
    <Molecules-Nav/>
    <button @click="get">Oops</button>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js';
export default {
  layout: 'summary',
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: null
    }
  },
  methods: {
    async get() {
      const topicsCollection = await fireDb.collection('topics').get()
      const topics = topicsCollection.docs.map(doc => doc.data());
      console.log(topics)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>