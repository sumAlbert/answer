<template>
  <div class="countDownBg">
    <div class="countDownHour countDownItem">{{computedHour}}</div>
    <div class="countDownMin countDownItem">{{computedMin}}</div>
    <div class="countDownSec countDownItem">{{computedSec}}</div>
  </div>
</template>

<script>
export default {
  name: 'CountDonw',
  data () {
    return {
      nowTime: new Date()
    }
  },
  created () {
    setInterval(function () {
      this.nowTime = new Date()
    }.bind(this), 1000)
  },
  computed: {
    computedHour: function () {
      let times = this.stopTime.split(',')
      let stopTimePoint = new Date(times[0], times[1] - 1, times[2], times[3], times[4], times[5])
      let leftTime = stopTimePoint - this.nowTime
      let hour = parseInt(leftTime / 1000 / 60 / 60)
      if (hour < 0) {
        hour = 0
      }
      if (hour < 10) {
        hour = '0' + hour
      }
      return hour
    },
    computedMin: function () {
      let times = this.stopTime.split(',')
      let stopTimePoint = new Date(times[0], times[1] - 1, times[2], times[3], times[4], times[5])
      let leftTime = stopTimePoint - this.nowTime
      let hour = parseInt(leftTime / 1000 / 60 / 60)
      let min = parseInt(leftTime / 1000 / 60 % 60)
      if (hour < 0) {
        min = 0
      }
      if (min < 10) {
        min = '0' + min
      }
      return min
    },
    computedSec: function () {
      let times = this.stopTime.split(',')
      let stopTimePoint = new Date(times[0], times[1] - 1, times[2], times[3], times[4], times[5])
      let leftTime = stopTimePoint - this.nowTime
      let hour = parseInt(leftTime / 1000 / 60 / 60)
      let sec = parseInt(leftTime / 1000 % 60)
      if (hour < 0) {
        sec = 0
      }
      if (sec < 10) {
        sec = '0' + sec
      }
      return sec
    }
  },
  props: ['stopTime']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.countDownBg{
  color: white;
  height: 100%;
  width: 100%;
  background: url("../assets/tag.png") center center no-repeat;
  background-size: 100% 100%;
}
.countDownItem{
  position: absolute;
  background: #7d6014;
  font-size: .8em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.4em;
  height: 1.1em;
  border-radius: 5px;
}
.countDownHour{
  left: 6em;
  top: 1.25em;
}
.countDownMin{
  left: 8em;
  top: 1.25em;
}
.countDownSec{
  left: 10em;
  top: 1.25em;
}
</style>
