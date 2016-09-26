var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

// var CreateHistory = require('history/lib/createHashHistory');
//
// var History = new CreateHistory({
//   queryKey: false
// });

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Images = require('./components/Images.jsx');

var Routes = (
  <Router>
    <Route path="/" component={Base}>
      <Route path="/news" component={News}/>
      <Route path="/images" component={Images}/>
    </Route>
  </Router>
);

module.exports = Routes;
