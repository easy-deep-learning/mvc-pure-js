
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

  it('should set tempalte (with JS code)', function () {
    testView = new View (
      '<% dataItems.forEach(function(item) { %>' +
        '<%= item.value %>' +
      '<% }); %>'
    );

    var testData = {dataItems: [{ value: 'testItem0'}, { value: 'testItem1'}]};
    var result = testView.render(testData);
    var reference = 'testItem0testItem1';

    expect(result).to.equal(reference);
  });

  it('should throw error with invalid template', function() {
    testView = new View('<%= name'); // template is not closed

    var testData = {name: 'test'};
    var renderRunner = function() {
      testView.render(testData);
    };

    expect(renderRunner).to.throw(Error);
  });

});
