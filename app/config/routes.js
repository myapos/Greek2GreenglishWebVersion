var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Convert = require('../components/Convert');
var PromptContainer = require('../containers/PromptContainer');
var Convert = require('../components/Convert');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='greek2greenglishapp' component={PromptContainer}/>
      <Route path='convert/:inputtext' component={Convert}/>
    </Route>
  </Router>
);

module.exports = routes;