import React from 'react';
import PropTypes from 'prop-types';

import { withThem } from '../components/withThem';

class Nav1 extends React.Component {
  static ref = null
  componentDidMount () {
    console.log(this.ref);
  }
  render () {
    console.log(this.ref);
    console.log('props', this.props);
    return (
      <h1 ref={ref => this.ref = ref}>nav1.test:{this.props.theme.test}</h1>
    );
  }
}

Nav1.propTypes = {
  theme: PropTypes.object
};

export default withThem(Nav1);
