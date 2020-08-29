import React from 'react';
import { ReactComponent as Logo } from '../images/logo.svg';

export default () => {
  const [partyMode, setPartyMode] = React.useState(false);
  const togglePartyMode = () => {
    setPartyMode((x) => !x);
  };

  const buttonText = partyMode ? 'Party is no more' : "Let's Party!!";

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">
          <Logo width="55" className={partyMode ? 'party-color' : 'default-color-svg'} />
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="/about"> ABOUT </a>
          <a className="navbar-item" href="/news"> NEWS </a>
          <a className="navbar-item" href="/contact"> CONTACT </a>
        </div>

        <div className="navbar-end">
          <button type="button" className="navbar-item" onClick={togglePartyMode}>{buttonText}</button>
        </div>
      </div>
    </nav>
  );
};
