'use strict';

// import SettingsStore from '../../../settings/SettingsStore';

const React = require('react');

module.exports = React.createClass({
  displayName: 'LoginPage',
  render: function() {
    return (
      <div className="mx_GroveLogin">
        <div className="mx_GroveLogin_brand">
          <img src="/images/grove-thumbnail.png" alt="Grove" />
        </div>
        <div className="mx_GroveLogin_content">
          <div className="mx_GroveLogin_header">
            <h1>Grove</h1>
            <div className="mx_GroveLogin_subtitle">
              Where the community gathers
            </div>
          </div>
          { this.props.children }
          <div className="mx_GroveLogin_footer">
            <a href="https://github.com/FabricLabs/chat.fabric.pub">git://</a> &middot; <a href="https://twitter.com/FabricProtocol">@FabricProtocol</a>
          </div>
        </div>
      </div>
    );
  }
});
