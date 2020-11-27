//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selindex:0,
    banner: ["#3ed","#f60","#f66","#098"],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    xindex: 0,
  },

  onLoad: function () {
   
  },

  //banner切换时候替换角标
  onChange: function (e) {
    this.setData({
      selindex: e.detail.current
    });
  },


})
