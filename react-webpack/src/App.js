import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Loadable from 'react-loadable';
import styles from './App.css';

import Loading from './page/loading';
import { ThemeContext } from './components/withThem';

const Nav1 = Loadable({
  loader: () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(import('./page/nav1'));
      }, 1000);
    });
  },
  loading: Loading,
  timeout: 2000
});

const Nav2 = Loadable({
  loader: () => import('./page/nav2'),
  loading: Loading,
  delay: 300
});

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <ThemeContext.Provider value={{test: 'context_provider'}}>
          <HashRouter>
            <div className={styles['body-warpper']}>
              <div className={styles['nav-warpper']}>
                <Link to="nav1"> context-test</Link>
                <Link to="nav2"> react-beautiful-dnd</Link>
              </div>
              <div className={styles['content-wrapper']}>
                <Route path="/nav1" component={Nav1}/>
                <Route path="/nav2" component={Nav2}/>
              </div>
            </div>
          </HashRouter>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
