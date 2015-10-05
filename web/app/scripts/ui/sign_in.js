var Auth = require("../controller/auth")

var SignIn = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        var email = React.findDOMNode(this.refs.email).value.trim();
        var password = React.findDOMNode(this.refs.password).value.trim();
        if (!email || !password) {
            alert('empty!')
            return;
        }
        this.signIn({user: {email: email, password: password}});
    },
    signIn: function (user) {
        Auth.login(user, (loggedIn) => {
            if (!loggedIn) {
                alert("error!")
                return this.setState({error: true})
            }

            alert("success!")
            $(location).attr('href', "/")

            /*
            if (location.state && location.state.nextPathname) {
                this.history.replaceState(null, location.state.nextPathname)
            } else {
                this.history.replaceState(null, '/about')
            }
            */
        });
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Your email" className="form-control" ref="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" placeholder="Your password" className="form-control" ref="password"/>
                </div>

                <div className="form-group">
                    <input type="submit" value="Log in" className="btn btn-primary"/>
                </div>
            </form>
        );
    }
});

module.exports = SignIn;
