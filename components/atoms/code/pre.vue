<template>
  <pre :data-file="file" :class="classList"><button v-if="copy" @click="copyToClipboard">Copy</button><div class="pre--content"><slot></slot></div></pre>
</template>

<script>
export default {
  props: {
    file: {
      type: String,
      default: null,
    },
    copy: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classList() {
      return {
        file: !!this.file
      };
    }
  },
  methods: {
    copyToClipboard() {
      const copiedText = this.$slots.default[0].text;
      const el = document.createElement('textarea');
      el.value = copiedText;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
  }
};
</script>
<style lang="sass" scoped>
$textColor: $blanc

pre
  background-color: $rouge-fonce
  color: $textColor
  // border: 1px solid $textColor
  padding: 1rem
  font-family: JetBrains Mono
  border-radius: 0.25rem
  font-size: 0.85rem
  margin: 1rem 0
  position: relative
  white-space: pre-wrap
  overflow-wrap: break-word

  &.file::before
    content: attr(data-file)
    font-style: italic
    // font-size: 0.75em
    color: rgba($textColor,0.5)
    display: block
    margin-bottom: 1rem
    
  button
    position: absolute
    top: 1rem
    right: 1rem
    margin: 0
    
</style>