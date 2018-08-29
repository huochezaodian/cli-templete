import React from 'react';
import { CircularProgress } from '@material-ui/core';

class Loading extends React.PureComponent {
  render () {
    console.log(this.props);
    const loading = (props) => {
      if (props.error) {
        return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
      } else if (props.timedOut) {
        return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
      } else if (props.pastDelay) {
        return <CircularProgress/>;
      } else {
        return null;
      }
    };
    return (
      <React.Fragment>
        { loading(this.props) }
      </React.Fragment>
    );
  }
}

export default Loading;
