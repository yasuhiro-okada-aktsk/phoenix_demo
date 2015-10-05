
var SignUpBox = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var name = React.findDOMNode(this.refs.name).value.trim();
        var email = React.findDOMNode(this.refs.email).value.trim();
        var password = React.findDOMNode(this.refs.password).value.trim();
        if (!name || !email || !password) {
            alert('empty!')
            return;
        }
        this.signUp({user: {name: name, email: email, password: password}});
        //React.findDOMNode(this.refs.name).value = '';
        //React.findDOMNode(this.refs.email).value = '';
        //React.findDOMNode(this.refs.password).value = '';
        return;
    },
    signUp: function (user) {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: user,
            success: function (data) {
                this.setState({data: data});
                alert('success')
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
                alert('error')
            }.bind(this)
        });
    },
    render: function () {
        return (
            <form className="signUpForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your name" className="form-control" ref="name"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Your email" className="form-control" ref="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Your password" className="form-control" ref="password"/>
                </div>

                <div className="form-group">
                    <input type="submit" value="Post" className="btn btn-primary"/>
                </div>
            </form>
        );
    }
});

module.exports = SignUpBox;
