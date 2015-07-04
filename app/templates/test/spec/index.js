var index = require("dist/index");

describe("Test suite", function() {
  var pandaBear;
  beforeEach(function() {
    pandaBear = new index();
    sinon.stub(pandaBear, "eats").returns("Bamboo and more");
  });

  it("pandaBear.eats returns `Bamboo and more`", function () {
    expect(pandaBear.eats()).to.equal("Bamboo and more");
  });
});
