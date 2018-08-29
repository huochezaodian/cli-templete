import React from 'react';

export const ThemeContext = React.createContext({
  test: 'context_default'
});

export function withThem (Component) {
  return function ThemedComponent (props) {
    return (
      <ThemeContext.Consumer>
        {theme => {
          return <Component {...props} theme={theme}/>;
        }}
      </ThemeContext.Consumer>
    );
  };
}
