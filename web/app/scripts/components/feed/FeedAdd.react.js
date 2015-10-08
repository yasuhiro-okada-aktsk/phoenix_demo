var FeedActionCreators = require('../../actions/FeedActionCreators');
var FeedStore = require('../../stores/FeedStore');

module.exports = React.createClass({
  getInitialState() {
    return {
    }
  },
  componentDidMount: function () {
    FeedStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function () {
    FeedStore.removeChangeListener(this._onChange);
  },
  render: function () {
    return (
      <form onSubmit={this._onSubmit}>
        <div className="form-group">
          <label>Feed</label>
          <input type="text" placeholder="Feed" className="form-control" ref="url"/>
        </div>
        <div className="form-group">
          <input type="submit" value="Add" className="btn btn-primary"/>
        </div>
      </form>
    );
  },
  _onSubmit: function (e) {
    e.preventDefault();
    var url = this.refs.url.value.trim();
    if (!url) {
      alert('empty!');
      return;
    }

    FeedActionCreators.add(url)
  },

  _onChange: function () {
    $(location).attr('href', "#/feed");
  }
});
