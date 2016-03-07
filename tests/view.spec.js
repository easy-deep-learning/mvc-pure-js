
// http://mochajs.org/
// @see http://chaijs.com/api/bdd/
describe('View', function() {
  var App;
  var View;
  var testView;

  beforeEach(function() {
    App = window.App;
    View = App.View;
  });

  afterEach(function() {
    testView = undefined;

    App = null;
    View = null;
  });

  it('should set template', function() {
    testView = new View('<div><%= name %></div>');

    expect(typeof testView.template).to.equal('function');
  });

  it('should render simple template', function() {
    testView = new View('<div><%= name %></div>');

    var testData = { name: 'test' };
    var result = testView.render(testData);
    var reference = '<div>test</div>';

    expect(result).to.equal(reference);
  });

});
