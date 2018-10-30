'use strict';

// import SettingsStore from '../../../settings/SettingsStore';

const React = require('react');

module.exports = React.createClass({
  displayName: 'LoginPage',
  render: function() {
    return (
      <div className="centered verse form">
        <div className="centered medium image">
          <img src="/images/roleplaygateway.png" alt="RPG" className="rounded padded unbottomed" />
        </div>
        <div className="content">
          <div className="verse header">
            <h1 className="untopped">RPG Chat</h1>
            <p className="subtitle">Welcome home, traveler.</p>
          </div>
          <div className="verse content body">
          { this.props.children }
          </div>
          <div className="verse footer">
            <a href="https://github.com/RolePlayGateway/chat.roleplaygateway.com"><code>git://</code></a> &middot; <a href="https://twitter.com/RolePlayGateway">@RPG</a> &middot; <a href="https://medium.com/universes">/universes</a> &middot; <a href="https://www,roleplaygateway.com/">Home</a>
          </div>
        </div>
      </div>
    );
  },
});
