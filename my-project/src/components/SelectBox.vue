<template>
  <div class="selectionBox">
    <div id="selectionExtraArea" class="selectionExtraArea" v-on:touchstart="extraAreaTouchStart($event)" v-on:touchmove="extraAreaTouchMove($event)" v-on:touchend="extraAreaTouchEnd($event)"></div>
    <div class="selectionMainArea"  v-bind:style="{'margin-bottom':computedOffsetY,'transition': touchEndTransition}">
      <div class="selectionControlLine">
      <span>切换区域</span>
      <img src="../assets/close.png" v-on:click="closeSelectBox({msg: 'close'})"/>
      </div>
      <div class="selectionMainContent">
        <div class="selectionMainItem" v-bind:class="activeIndex===index?'selectionMainItemActive':''" v-for="(area,index) in areaList" v-bind:key="index" v-on:click="switchArea(index)">
          {{area.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  data () {
    return {
      touchStartY: 0,
      touchStopY: 0,
      touchStartFlag: false,
      touchEndTransition: 'none',
      activeIndex: 11,
      areaList: []
    }
  },
  created () {
    let localTest = true
    if (localTest) {
      this.areaList = [
        {cityId: 0, name: '中国香港'},
        {cityId: 1, name: '中国澳门'},
        {cityId: 2, name: '东京'},
        {cityId: 3, name: '大阪'},
        {cityId: 4, name: '新加坡'},
        {cityId: 5, name: '曼谷'},
        {cityId: 6, name: '普吉岛'},
        {cityId: 7, name: '吉隆坡'},
        {cityId: 8, name: '纽约'},
        {cityId: 9, name: '洛杉矶'},
        {cityId: 10, name: '巴黎'},
        {cityId: 11, name: '米兰'},
        {cityId: 12, name: '墨尔本'},
        {cityId: 13, name: '悉尼'},
        {cityId: 14, name: '罗马'},
        {cityId: 15, name: '其他>'}
      ]
    } else {
      let url = 'http://192.168.1.101:8081/os/marketing/hotsearch/getAreaList'
      let getAreaList = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url)
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.response)
            } else {
              reject(xhr.status)
            }
          }
        }
        xhr.send()
      })
      getAreaList.then(function (msg) {
        let callBackObj = JSON.parse(msg)
        this.areaList = callBackObj
      }.bind(this)).catch(function (msg) {
        console.log(msg)
      })
    }
  },
  methods: {
    extraAreaTouchStart: function (ev) {
      ev.preventDefault()
      if (!this.touchStartFlag) {
        this.touchEndTransition = 'none'
        this.touchStartFlag = true
        this.touchStartY = ev.touches[0].screenY
        this.touchStopY = ev.touches[0].screenY
      }
    },
    extraAreaTouchMove: function (ev) {
      if (this.touchStartFlag) {
        this.touchStopY = ev.touches[0].screenY
        let windowHeight = parseInt(document.documentElement.clientHeight)
        let selectionExtraHeight = parseInt(getComputedStyle(document.getElementById('selectionExtraArea')).height)
        if (windowHeight <= selectionExtraHeight) {
          this.touchStartFlag = false
          this.closeSelectBox({
            msg: 'close'
          })
        }
      }
    },
    extraAreaTouchEnd: function (ev) {
      this.touchStartFlag = false
      this.touchStartY = 0
      this.touchStopY = 0
      this.touchEndTransition = 'all .2s'
    },
    mainAreaTouchStart: function (ev) {
      ev.preventDefault()
    },
    closeSelectBox: function (msg) {
      this.$emit('closeSelectBox', msg)
      this.$router.back()
    },
    switchArea: function (index) {
      this.activeIndex = index
      this.closeSelectBox({
        msg: 'switch',
        cityId: this.areaList[index].cityId
      })
    }
  },
  computed: {
    computedOffsetY: function () {
      if (this.touchStopY - this.touchStartY > 0) {
        return '-' + (this.touchStopY - this.touchStartY) + 'px'
      } else {
        return '0'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .selectionBox{
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .selectionExtraArea{
    display: flex;
    flex: 1;
    width: 100%;
  }
  .selectionMainArea{
    height: 13em;
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .selectionControlLine{
    width: 95%;
    margin: 1em auto;
    color: #555;
    position: relative;
    height: 1.2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selectionMainContent{
    width: 95%;
    margin: 0 auto;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .selectionControlLine > span{
    display: inline;
  }
  .selectionControlLine > img{
    height: 1.1em;
    width: 1.1em;
  }
  .selectionMainItem{
    font-size: .75em;
    width: 6em;
    height: 2.5em;
    line-height: 2.5em;
    background: #f6f6f6;
    text-align: center;
    color: #666;
  }
  .selectionMainItemActive{
    background: #fff1ee;
    color: #D57452
  }
</style>
