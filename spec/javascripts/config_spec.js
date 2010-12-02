describe("Config JSON", function() {
  it("should contain a projects property of an array", function() {
    expect($.isArray(config.projects)).toBeTruthy();
  });

  describe("the projects array", function() {
    it("should contain a hash for each project with specific properties set", function() {
      var project = config.projects[0];
      expect(project.name).toBeDefined();
      expect(project.url).toBeDefined();
    });
  });

  describe("the pings array", function() {
    it("should contain a hash for each ping with specific properties set", function() {
      var ping = config.pings[0];
      expect(ping.name).toBeDefined();
      expect(ping.url).toBeDefined();
    });
  });
});