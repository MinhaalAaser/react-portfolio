import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationComponent from './navigation-container';
import PortfolioContainer from './portfolio/portfolio-container';
import about from './pages/about';
import home from './pages/home';
import contact from './pages/contact';
import blog from './pages/blog'
import PortfolioDetail from './portfolio/portfolio-detail';
import NoMatch from './pages/no-match';

export default class App extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/about-me" component={about} />
              <Route path="/contact" component={contact} />
              <Route path="/blog" component={blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />

            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}
