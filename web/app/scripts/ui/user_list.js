module.exports = React.createClass({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount() {
        console.log(Auth.getToken());
        $.ajax({
            url: '/api/v1/users',
            dataType: 'json',
            headers: {"authorization": Auth.getToken()},
            cache: false,
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                alert(err)
            }.bind(this)
        });
    },
    render() {
        var userNodes = this.state.data.map(function (user) {
            return (
                <User name={user.name}></User>
            );
        });
        return (
            <div className="userList">
                {userNodes}
            </div>
        );
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
