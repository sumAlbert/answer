<!--suppress ALL -->
<template>
  <div class="pageBg">
    <div class="mainContent">
      <header class="header">
        <div class="countDown">
          <CountDown v-bind:stopTime="stopTime"></CountDown>
        </div>
        <div class="header-pic-box">
          <img class="header-pic" v-bind:src="currentProduct.pic" />
        </div>
        <h1 class="productName">{{ currentProduct.productName }}</h1>
        <h2 class="productDesc">{{ currentProduct.desc }}</h2>
        <div class="productInfo">
          <div class="productInfoLeft">
            <div class="productInfoTop"><span>￥</span><span>{{ currentProduct.price }}</span>起 市场价￥{{ currentProduct.marketPrice }}</div>
            <div class="productInfoBottom">
              <LoadBar class="productInfoLoadBar" loadBarHeight=".8em" loadBarWidth="6em" loadBarBackground="#ffe9ee" loadBarContentColor="#fe8189" loadBarBorderColor="#d45f66" v-bind:loadBarRatio="currentProduct.soldAmount/currentProduct.amount"></LoadBar>
              <div class="productInfoAmount">已抢<span>{{currentProduct.soldAmount}}份</span></div>
            </div>
          </div>
          <div class="productInfoRight">
            <div class="orderButton" v-on:click="areaSelection()">立即抢购</div>
          </div>
        </div>
      </header>
      <div class="similarProducts">
        <div class="similarProduct" v-for="(similarProduct, index) in similarProducts" v-bind:key="index">
          <div class="similarPicBox">
            <div class="similarHighlight">
              <span>{{similarProduct.cityName}}</span><span>{{similarProduct.cateogry}}</span>
            </div>
            <img v-bind:src="similarProduct.pic" class="similarPic"/>
          </div>
          <div class="similarInfo">
            <div class="similarInfoHeader">
              <span>{{similarProduct.discount}}</span>
              <span>{{similarProduct.productName}}</span>
            </div>
            <div class="similarPrice">
              <span>抢购价</span><span>￥</span><span>{{similarProduct.price}}</span><span>起 市场价￥{{similarProduct.marketPrice}}</span>
            </div>
            <div class="similarAmount">
              <LoadBar class="productInfoLoadBar" loadBarHeight=".6em" loadBarWidth="5em" loadBarBackground="#ffe9ee" loadBarContentColor="#fe8189" loadBarBorderColor="#d45f66" v-bind:loadBarRatio="similarProduct.soldAmount/similarProduct.amount"></LoadBar>
              <span>已抢</span>
              <span>{{similarProduct.soldAmount}}份</span>
              <span></span>
              <span>共</span>
              <span>{{similarProduct.amount}}份</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="selectBox" v-show="areaSelectionFlag">
      <router-view  v-on:closeSelectBox="listenSelectBoxClose"/>
    </div>
  </div>
</template>

<script>
import LoadBar from '@/components/LoadBar.vue'
import CountDown from '@/components/CountDown.vue'

export default {
  name: 'GoodsPage',
  data () {
    return {
      similarProducts: [],
      currentProduct: {
        pic: './static/default.png',
        productName: '',
        desc: '',
        price: 0,
        marketPrice: 0,
        soldAmount: 0,
        amount: 100
      },
      stopTime: '2018,4,1,23,00,00',
      areaSelectionFlag: false
    }
  },
  created () {
    let localTest = true
    if (localTest) {
      this.currentProduct = {
        pic: 'http://osp.meituan.net/overseas/90027b333193e03ae671811284f0761482158.jpg',
        productName: '上海往返曼谷芭提雅6日跟团游',
        desc: '含泰国签证, 入住希尔顿, 泳池别墅, 快艇出海PP岛浮潜, 纯玩',
        price: '2699',
        marketPrice: '6800',
        soldAmount: 70,
        amount: 100
      }
      this.similarProducts = [{
        id: 1203,
        cityName: '大阪',
        cateogry: '跟团游',
        discount: '满999减200',
        productName: '日本大阪+京都6日5晚跟团游 熊本熊电车 享双温泉',
        amount: 200,
        soldAmount: 147,
        price: 2300,
        marketPrice: 5900,
        pic: 'http://qcloud.dpfile.com/pc/fjfA8V4dlQuNhMW4qeeHYWZp7GczdwJFjB0NjjBRQVu6yDO85r4c9iK1SxJXYVNn7EYq9TJKgHRPJwmwGgbIbg.jpg'
      }, {
        id: 1204,
        cityName: '首尔',
        cateogry: '跟团游',
        discount: '满999减200',
        productName: '日本大阪+京都6日5晚跟团游 熊本熊电车 享双温泉',
        amount: 200,
        soldAmount: 168,
        price: 2300,
        marketPrice: 5900,
        pic: 'http://qcloud.dpfile.com/pc/OWOMhXX9LrhUp0dwA-eSI-wEKUdZo6j3oFbyzJz2Ztx74emXkjUKBoRZOusmpkz37EYq9TJKgHRPJwmwGgbIbg.jpg'
      }, {
        id: 1205,
        cityName: '大阪',
        cateogry: '跟团游',
        discount: '满999减200',
        productName: '日本大阪+京都6日5晚跟团游 熊本熊电车 享双温泉',
        amount: 200,
        soldAmount: 199,
        price: 2300,
        marketPrice: 5900,
        pic: 'http://osp.meituan.net/dpmerchantalbum/7c73038a4fde8f214b0068e5a753342b1354431.jpg@320w_373h_1e_1c'
      }]
      this.stopTime = '2018,4,9,23,00,00'
    } else {
      let url = 'http://192.168.1.101:8081/os/marketing/hotsearch/getTopShopList'
      let getShopList = new Promise(function (resolve, reject) {
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
      getShopList.then(function (msg) {
        let callBackObj = JSON.parse(msg)
        if (callBackObj.code === 200) {
          this.currentProduct = callBackObj.data.product
          this.similarProducts = callBackObj.data.similarProducts
        }
      }.bind(this)).catch(function (msg) {
        console.log(msg)
      })
    }
  },
  methods: {
    areaSelection: function () {
      this.areaSelectionFlag = true
      this.$router.push({name: 'SelectBox'})
    },
    listenSelectBoxClose: function (backJson) {
      if (backJson && backJson.msg === 'close') {
        this.areaSelectionFlag = false
      } else if (backJson && backJson.msg === 'switch') {
        alert('cityId:' + backJson.cityId)
      }
    }
  },
  watch: {
    $route (to, from) {
      if (from.name === 'SelectBox') {
        this.areaSelectionFlag = false
      }
    }
  },
  components: {
    LoadBar: LoadBar,
    CountDown: CountDown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBg{
  height: 100%;
  width: 100%;
  background: #f0f0f0;
  font-size: 5vw;
}
.mainContent{
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: auto;
}
header{
  width: 100%;
  background: white;
  border-bottom: 1px solid transparent;
  position: relative;
}
.countDown{
  position: absolute;
  height: 2.5em;
  width: 10em;
}
.header-pic-box{
  width: 100%;
  height: 11em;
  overflow: hidden;
}
.header-pic{
  width: 100%;
}
h1{
  padding: 0 2.5%;
  margin: 0;
  font-size: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #666;
  line-height: 150%;
}
h2{
  padding: 0 2.5%;
  font-size: .7em;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #888;
  line-height: 150%;
}

.productInfo{
  margin: .5em 0 .3em;
  display: flex;
  align-items: center;
  height: 3em;
  padding: 0 2.5%;
}
.productInfoLeft{
  flex: 2;
  height: 100%;
  position: relative;
  top: -.3em;
}
.productInfoRight{
  flex: 1;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fb3c4a;
  color: white;
  border-radius: 3px;
}
.productInfoTop{
  color: #aaa;
  font-size: .8em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.productInfoTop > span:nth-child(1){
  color: #fb3c4a;
}
.productInfoTop > span:nth-child(2){
  color: #fb3c4a;
  font-weight: 700;
  font-size: 190%;
}
.productInfoLoadBar{
  margin: 0 .5em 0 0;
}
.productInfoBottom{
  position: relative;
  top: -.2em;
  color: #aaa;
  font-size: .8em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 1.3em;
}
.productInfoAmount >span {
  color: #fb3c4a;
}

/*相似的商品列表，开始*/
.similarProducts{
  margin: .5em 0 0 0;
  width: 100%;
}
.similarProduct{
  margin: .5em 0 0 0;
  height: 6.5em;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2.5%;
}
/*相似的商品左侧的照片部分*/
.similarPicBox{
  height: 5.5em;
  width: 7em;
  overflow: hidden;
  position: relative;
  margin: 0 .5em 0 0;
}
.similarPicBox > img{
  width: 100%;
}
.similarInfo{
  flex: 1;
  height: 5.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.similarHighlight{
  position: absolute;
  left: 0;
  top: 0;
  font-size: .75em;
}
.similarHighlight > span:nth-child(1){
  background: #ffcc06;
  color: #413610;
  vertical-align: top;
  padding: .1em .2em;
}
.similarHighlight > span:nth-child(2){
  background: #333333;
  color: #fefcff;
  vertical-align: top;
  padding: .1em .2em;
}
/*相似的商品右侧的详细信息*/
/*标题部分*/
.similarInfoHeader{
  font-size: 1em;
  overflow: hidden;
  line-height: 1.2em;
  max-height: 2.4em;
}
.similarInfoHeader > span:nth-child(1){
  color: white;
  background: #f71828;
  font-size: .7em;
  vertical-align: middle;
  padding: 0 .2em;
}
.similarInfoHeader > span:nth-child(2){
  color: #222;
  font-size: .8em;
  vertical-align: middle;
}
.similarPrice{
  font-size: .7em;
}
.similarPrice > span:nth-child(2){
  color: #f71828;
}
.similarPrice > span:nth-child(3){
  color: #fb3c4a;
  font-size: 150%;
}
.similarPrice > span:nth-child(4){
  color: #aaa;
}
.similarAmount{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 1em;
  font-size: .7em;
  margin: .3em 0 0;
  color: #aaa;
}
.similarAmount > span:nth-child(3){
  color: #fb3c4a;
}
.similarAmount > span:nth-child(4){
  flex: 1;
}
.similarAmount > span:nth-child(6){
  color: #fb3c4a;
}
/*相似的商品列表，结束*/
/*区域选择模态框*/
.selectBox{
  position: fixed;
  width: 100%;
  height: 100%;
  background: hsla(0,0%,20%,.7);
  top: 0;
}
</style>
