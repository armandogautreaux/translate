import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  // static contextType = LanguageContext;
  // render() {
  //   const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
  //   return <div className="ui button primary">{text}</div>;
  // }
  renderSubmit(language) {
    return language === 'english' ? 'Submit' : 'Voorleggen';
  }
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

//Use .consumer when trying to get info from multiple different context objects inside of a single component
//.contenxt when use a single context object inside of a components
