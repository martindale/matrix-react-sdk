'use strict';

// import SettingsStore from '../../../settings/SettingsStore';

const React = require('react');

module.exports = React.createClass({
  displayName: 'LoginPage',
  render: function() {
    return (
      <div className="centered verse form">
        <div className="centered medium image">
          <img src="/images/verse-thumbnail.png" alt="Verse" className="rounded bordered padded unbottomed" />
        </div>
        <div className="content">
          <div className="verse header">
            <h1 className="untopped">Verse</h1>
            <p className="subtitle">the p2p game engine</p>
          </div>
          <div className="verse content body">
          { this.props.children }
          </div>
          <div className="verse footer">
            <a href="https://github.com/RolePlayGateway/chat.verse.im"><code>git://</code></a> &middot; <a href="https://twitter.com/FabricProtocol">@FabricProtocol</a> &middot; <a href="https://www.roleplaygateway.com/">RPG</a> &middot; <a href="https://medium.com/universes">/universes</a> &middot; <a href="https://verse.im">Home</a>
          </div>
        </div>
      </div>
    );
  },
});
