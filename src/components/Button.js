import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  // render() {
  //   const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
  //   return <div className="ui button primary">{text}</div>;
  // }
  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {value => (value === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

//Use .consumer when trying to get info from multiple different context objects inside of a single component
//.contenxt when use a single context object inside of a components
