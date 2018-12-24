var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('../Nav');
var Home = require('../Home');
var Battle = require('../Battle');
var Popular = require('../Popular');
var Results = require('../Results')

module.exports = class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="wrapper container">
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/battle" component={Battle}></Route>
                        <Route path="/popular" component={Popular}></Route>
                        <Route path='/battle/results' component={Results}></Route>
                        <Route render={function(){
                            return <p>Page Not Found</p>;
                        }} />
                    </Switch>
                </div>
            </Router>
            )
    }
}
  