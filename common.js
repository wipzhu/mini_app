function sayHello(name) {
  wx.showModal({
    title: '提示信息',
    content: 'Hello ' + `${name}` + ' !',
    confirmText: '俺也一样',
    showCancel: false,
  })
}
function sayGoodbye(name) {
  wx.showModal({
    title: '提示信息',
    content: 'Goodbye ' + `${name}` +' !',
    confirmText: '俺知道了',
    showCancel: false,
  })
}

// module.exports.sayHello = sayHello
exports.sayHello = sayHello
exports.sayGoodbye = sayGoodbye