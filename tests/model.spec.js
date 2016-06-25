
// http://mochajs.org/
// @see http://chaijs.com/api/bdd/
describe('Model', function() {
  var App;
  var Model;
  var testModel;

  beforeEach(function() {
    App = window.App;
    Model = App.Model;
  });

  afterEach(function() {
    testModel = undefined;

    App = null;
    Model = null;
  });

  it('should create model instance with numeric id', function() {
    testModel = new Model();

    expect(typeof testModel.id).to.equal('number');
  });

  // TODO: set enable
  xit('should get property', function() {
    testModel = new Model();

    expect(testModel.get('id')).to.equal(testModel.id);
  });

  // TODO: set enable
  xit('should set property', function() {
    testModel = new Model();
    
    var propName = 'testPropName';
    var propValue = 'testPropValue';
    
    testModel.set(propName, propValue);

    expect(testModel.get(propName)).to.equal(propValue);
  });

});
