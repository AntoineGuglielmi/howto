<template>
  <div>
    <Atoms-Code-Pre :file="'@/assets/styles/imports/_20_reset.sass'">// TODO: put the following variables in @/assets/styles/imports/_10_variables.sass
$maxWidth: 960px
$padding: 1rem
$noir: #444444

*
  padding: 0
  margin: 0
  line-height: 1.5
  list-style-type: none

  &:focus
    outline: none

  &,
  &::before,
  &::after
    box-sizing: border-box

html
  color: $noir
  font-size: 100%
  font-family: Nunito

.container
  padding: 0 $padding
  display: flow-root

  &.maxw
    padding: 0 max($padding,calc((100% - $maxWidth) / 2))

a
  color: inherit
  text-decoration: none</Atoms-Code-Pre>
  </div>
</template>

<script>
import DefaultPage from './page.vue';
export default {
  extends: DefaultPage,
  data() {
    return {};
  },
};
</script>