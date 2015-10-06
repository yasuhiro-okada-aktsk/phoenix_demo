module.exports = {
    login(user, cb) {
        cb = arguments[arguments.length - 1]
        if (localStorage.token) {
            if (cb) cb(true)
            this.onChange(true)
            return
        }

        if (!user) {
            return;
        }

        $.ajax({
            url: "/api/v1/login",
            dataType: 'json',
            type: 'POST',
            data: user,
            success: function (data) {
                localStorage.token = data.token
                if (cb) cb(true)
                this.onChange(true)
                $(location).attr('href', "/")
            }.bind(this),
            error: function (xhr, status, err) {
                //console.error(this.props.url, status, err.toString());
                alert('error')
                if (cb) cb(false)
                this.onChange(false)
            }.bind(this)
        });
    },

    getToken() {
        return localStorage.token
    },

    logout(cb) {
        delete localStorage.token
        if (cb) cb()
        this.onChange(false)
    },

    loggedIn() {
        return !!localStorage.token
    },

    onChange() {
    }
}
