<template>
  <div id="topic__main">
    <div class="container maxw">
      <Atoms-Text-H1 :home="false">Sommaire</Atoms-Text-H1>
      <Molecules-Nav/>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="sass" scoped>
#topic__main
  background-color: $crimson
  color: $blanc
  min-height: 100vh
  padding-bottom: 3rem

  #topic__dealer
    display: grid
    grid-template-columns: 75% 25%
    grid-column-gap: 1rem
</style>