jQuery.fx.off = true;

var config = {
  title: '',
  refreshInterval:5000,
  sounds: {
    success:'sounds/success.mp3',
    building:'sounds/building.mp3',
    failure:'sounds/failure.mp3'
  },
  projects:[
    {
      name:'Sample Build',
      url:'http://path/to/sample/build/lastBuild/api/json?jsonp=?',
      ci:'Hudson',
      format:'json'
    }
  ],
  pings:[
    {
      name:'Sample Ping',
      url:'http://path/to/sample/ping/lastBuild/api/json?jsonp=?',
      ci:'Hudson',
      format:'json'
    }
  ]
}