// http://mochajs.org/
// @see http://chaijs.com/api/bdd/
// @see https://github.com/domenic/sinon-chai
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

    expect(spyHandler).to.have.been.calledOnce;
  });
  
  it('should call event on popstate', function () {
    testRouter = new Router();
    var spyHandler = sinon.spy();
  
    testRouter.all('/', spyHandler);
    testRouter.route('/');
    testRouter._init();
  
    expect(spyHandler).to(_init.called).to.equal(true);
  })
});
