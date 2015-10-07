var AuthStore = require('../stores/AuthStore');
var Api = require('../apis/UserApi');

module.exports = React.createClass({
  getInitialState: function () {
    return {user: []};
  },
  componentDidMount() {
    Api.getUsers(this._cb);
  },
  render() {
    var userNodes = this.state.user.map(function (user) {
      console.log(user);
      return (
        <User name={user.name}></User>
      );
    });
    return (
      <div className="userList">
        {userNodes}
      </div>
    );
  },
  _cb: function(user) {
    this.setState({user: user});
  }
});

var User = React.createClass({
  render: function () {
    return (
      <div className="user">
        <h2 className="userName">
          {this.props.name}
        </h2>
      </div>
    );
  }
});
