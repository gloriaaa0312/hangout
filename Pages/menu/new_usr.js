// Pages/menu/new_usr.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        sex: ["未选择", "男", "女"],
        sex_index: 0,
        identity: ["未选择", "学生", "家长"],
        id_index: 0
    },

    sexSelect:function(e){
        this.setData({
            sex_index: e.detail.value
          })
    },

    idSelect:function(e){
        this.setData({
            id_index: e.detail.value
          })
    },

    skip:function(){
        wx.redirectTo({
          url: '/Pages/menu/pre',
        })
    },

    OK:function(){
        wx.redirectTo({
          url: '/Pages/menu/pre',
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})