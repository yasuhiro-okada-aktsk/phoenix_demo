var Auth = require("../controller/auth")

module.exports = React.createClass({

    componentDidMount() {
        Auth.logout()
    },

    render() {
        return <p>You are now logged out</p>
    }
});
