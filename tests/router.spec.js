// http://mochajs.org/
// @see http://chaijs.com/api/bdd/
describe('Router', function() {
  var App;
  var Router;
  var testRouter;

  beforeEach(function() {
    App = window.App;
    Router = App.Router;
  });

  afterEach(function() {
    App = null;
    Router = null;

    testRouter = null;
  });

  it('should call handler once', function() {
    testRouter = new Router();
    var spyHandler = sinon.spy();

    testRouter.all('/', spyHandler);
    testRouter.route('/');

    expect(spyHandler.called).to.be.true;
  });
});
