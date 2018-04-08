<template>
  <div class="wrapBox" v-bind:style="{'height':loadBarHeight,'width':loadBarWidth, 'background': loadBarBackground, 'border-radius': loadBarHeight, 'box-shadow': '0 0 1px 0'+loadBarBorderColor}">
    <div class="contentBox" v-bind:style="{'background':loadBarContentColor, 'border-radius': loadBarHeight, 'right': computeOffset, 'box-shadow': '0 0 1px 0'+loadBarBorderColor}">
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadBar',
  data () {
    return {
    }
  },
  computed: {
    computeOffset: function () {
      return (100 - 100 * this.loadBarRatio) + '%'
    }
  },
  props: ['loadBarHeight', 'loadBarWidth', 'loadBarBackground', 'loadBarRatio', 'loadBarContentColor', 'loadBarBorderColor']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapBox{
  overflow: hidden;
}
.contentBox{
  height: 100%;
  width: 100%;
  position: relative;
  transition: all 1s;
}
</style>
