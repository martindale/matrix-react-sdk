'use strict';

// import SettingsStore from '../../../settings/SettingsStore';

const React = require('react');

module.exports = React.createClass({
  displayName: 'LoginPage',
  render: function() {
    return (
      <div className="centered grove form">
        <div className="centered medium image">
          <img src="/images/grove-thumbnail.png" alt="Grove" className="rounded bordered padded unbottomed" />
        </div>
        <div className="content">
          <div className="grove header">
            <h1 className="untopped">Grove</h1>
            <p className="subtitle">Where the community gathers</p>
          </div>
          <div className="grove content body">
          { this.props.children }
          </div>
          <div className="grove footer">
            <a href="https://github.com/FabricLabs/chat.fabric.pub"><code>git://</code></a> &middot; <a href="https://twitter.com/@FabricProtocol">@FabricProtocol</a> &middot; <a href="https://medium.com/universes">/universes</a> &middot; <a href="https://fabric.pub">Home</a>
          </div>
        </div>
      </div>
    );
  },
});
