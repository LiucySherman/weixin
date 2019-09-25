Page({
data:{
  markers: [{
    iconPath: "/resources/others.png",
    id: 1,
    latitude: 22.7,
    longitude: 114.0,
    width: 50,
    height: 50
  }],
  polyline: [{
    points: [{
      longitude: 113.3245211,
      latitude: 23.10229
    }, {
      longitude: 113.324520,
      latitude: 23.21229
    }],
    color: "#FF0000DD",
    width: 2,
    dottedLine: true
  }],
  controls: [{
    id: 1,
    iconPath: '/resources/location.png',
    position: {
      left: 0,
      top: 300 - 50,
      width: 50,
      height: 50
    },
    clickable: true
  }]
},
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
    wx.redirectTo({
      url: 'detail/map?id='+e.markerId
    })
  },
  controltap(e) {
    console.log(e.controlId)
  }
})