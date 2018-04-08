<template>
  <div class="pageBg">
    <header class="header">
      <img class="header-pic" v-bind:src="pic">
      <h1 class="productName">{{ productName }}</h1>
      <h2 class="productDesc">{{ desc }}</h2>
      <div class="productInfo">
        <div class="productInfoLeft">
          <div class="productInfoTop"><span>￥</span><span>{{ price }}</span>起 市场价￥{{ marketPrice }}</div>
          <div class="productInfoBottom">
            <LoadBar class="productInfoLoadBar" loadBarHeight=".8em" loadBarWidth="6em" loadBarBackground="#ffe9ee" loadBarContentColor="#fe8189" loadBarBorderColor="#d45f66" v-bind:loadBarRatio="computeRatio"></LoadBar>
            <div class="productInfoAmount">已抢<span>{{soldAmount}}份</span></div>
          </div>
        </div>
        <div class="productInfoRight">
          <div class="orderButton">立即抢购</div>
        </div>
      </div>
    </header>
    <div class="similarProducts">
      <div class="similarProduct" v-for="(similarProduct, index) in similarProducts" v-bind:key="index">
        <div class="similarPicBox">
          <img v-bind:src="similarProduct.pic" class="similarPic"/>
          <div class="similarHighlight">
            <span>大阪</span><span>跟团游</span>
          </div>
        </div>
        <div class="similarInfo"></div>
      </div>
    </div>
  </div>
</template>

<script>
import LoadBar from '@/components/LoadBar.vue'

export default {
  name: 'GoodsPage',
  data () {
    return {
      soldAmount: 0,
      amount: 100
    }
  },
  created () {
    this.pic = 'http://osp.meituan.net/overseas/90027b333193e03ae671811284f0761482158.jpg'
    this.productName = '上海往返曼谷芭提雅6日跟团游'
    this.desc = '含泰国签证, 入住希尔顿, 泳池别墅, 快艇出海PP岛浮潜, 纯玩'
    this.price = '2699'
    this.marketPrice = '6800'
    this.soldAmount = 40
    this.amount = 100
    this.similarProducts = [{
      id: 1203,
      cityName: '大阪',
      cateogry: '跟团游',
      discount: '满999减200',
      productName: '日本大阪+京都6日5晚跟团游 熊本熊电车 享双温泉',
      amount: 200,
      soldAmount: 167,
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
      soldAmount: 167,
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
      soldAmount: 167,
      price: 2300,
      marketPrice: 5900,
      pic: 'http://osp.meituan.net/dpmerchantalbum/7c73038a4fde8f214b0068e5a753342b1354431.jpg@320w_373h_1e_1c'
    }]
    setTimeout(function () {
      this.soldAmount += 40
    }.bind(this), 2000)
  },
  computed: {
    computeRatio: function () {
      return this.soldAmount / this.amount
    }
  },
  components: {
    LoadBar: LoadBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pageBg{
  min-height: 100%;
  min-width: 100%;
  background: #f0f0f0;
  font-size: 5vw;
}
header{
  width: 100%;
  background: white;
  border-bottom: 1px solid transparent;
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
/*相似的商品*/
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
.similarPicBox{
  height: 5em;
  width: 7em;
  overflow: hidden;
}
.similarPicBox > img{
  width: 100%;
}
.similarInfo{
  flex: 1;
  height: 5em;
}
.similarHighlight > span:nth-child(1){
  background: ;
}
</style>
