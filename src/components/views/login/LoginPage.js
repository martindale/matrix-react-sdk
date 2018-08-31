'use strict';

// import SettingsStore from '../../../settings/SettingsStore';

const React = require('react');

module.exports = React.createClass({
  displayName: 'LoginPage',
  render: function() {
    return (
      <div className="centered grove form">
        <div className="image">
          <img src="/images/grove-thumbnail.png" alt="Grove" className="rounded bordered padded" />
        </div>
        <div className="content">
          <div className="grove header">
            <h1>Grove</h1>
            <div className="mx_GroveLogin_subtitle">
              Where the community gathers
            </div>
          </div>
          <div class="grove content body">
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
