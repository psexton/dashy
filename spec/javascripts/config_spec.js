var config = {
  title: '',
  projects:[
    {
      name:'Sample Build',
      url:'http://path/to/sample/build/lastBuild/api/json',
      ci:'Hudson'
    }
  ],
  pings:[
    {
      name:'Sample Ping',
      url:'http://path/to/sample/ping/lastBuild/api/json',
      ci:'Hudson'
    }
  ]
}

describe("Config JSON", function() {
  it("contains a projects property of an array", function() {
    expect($.isArray(config.projects)).toBeTruthy();
  });

  it("contains a title propert", function() {
    expect(config.title).toBeDefined();
  });

  describe("the projects array", function() {
    it("contains a hash for each project with specific properties set", function() {
      var project = config.projects[0];
      expect(project.name).toBeDefined();
      expect(project.url).toBeDefined();
      expect(project.ci).toBeDefined();
    });
  });

  describe("the pings array", function() {
    it("contains a hash for each ping with specific properties set", function() {
      var ping = config.pings[0];
      expect(ping.name).toBeDefined();
      expect(ping.url).toBeDefined();
    });
  });
});