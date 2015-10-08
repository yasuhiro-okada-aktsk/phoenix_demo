var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var Glyphicon = Bootstrap.Glyphicon;

var Api = require('../../apis/FeedApi');

module.exports = React.createClass({
  getInitialState: function () {
    return {feeds: []};
  },
  componentDidMount() {
    Api.getFeeds(this._cb);
  },
  render() {
    var feedNodes = this.state.feeds.map(function (feed) {
      return (
        <Feed feed={feed}/>
      );
    });
    return (
      <div className="feedList">
        {feedNodes}
      </div>
    );
  },
  _cb: function (feeds) {
    this.setState({feeds: feeds});
  }
});

var Feed = React.createClass({
  render: function () {
    return (
      <div className="feed">
        <h2>
          {this.props.feed.title}
        </h2>

        <div>
          {this.props.feed.subtitle}
        </div>
        <div>
          {this.props.feed.summary}
        </div>
        <div>
          <Button onClick={this._onBtnRefresh}><Glyphicon glyph="refresh" />Refresh</Button>
        </div>
      </div>
    );
  },
  _onBtnRefresh: function(e) {
    console.log("refresh")
    Api.putFeeds(this.props.feed.id, function(result) {
      console.log(result)
    })
  }
});
