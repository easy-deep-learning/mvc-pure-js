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
  
  it('should call controller (url)', function () {
    var spyRootHandler = sinon.spy();
    var spyAboutHandler  = sinon.spy();
  
    testRouter = new Router();
  
    testRouter.all('/page1/', spyRootHandler);
    testRouter.all('/page2/', spyAboutHandler);
  
    testRouter.route('/page1/');
    expect(spyRootHandler).to.be.calledOnce;
  
    testRouter.route('/page2/');
    expect(spyAboutHandler).to.be.calledOnce;
  })
});
