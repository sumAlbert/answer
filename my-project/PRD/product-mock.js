module.exports = {
  method: 'GET',
  path: '/os/marketing/hotsearch/getTopShopList',
  delay: 200,
  code: 200,
  response(query) {
    return {
      code: 200,
      msg: 'success',
      data: {
        product: {
          id: 13044,
          productName: '上海往返曼谷芭提雅6日跟团游',
          desc: '含泰国签证, 入住希尔顿, 泳池别墅, 快艇出海PP岛浮潜, 纯玩',
          price: 2699,
          marketPrice: 6700,
          soldAmount: 40,
          amount: 100,
          remainMills: 1503,
          pic: 'http://osp.meituan.net/overseas/90027b333193e03ae671811284f0761482158.jpg'
        },
        similarProducts: [{
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
          cityName: '大阪',
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
      }
    };
  },
};
