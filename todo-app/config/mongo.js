var config = {
    server: 'localhost',
    port: '27017',
    database: 'test',
    user: '',
    password: '',
    getDbConnectionString: function() {
        var credentials = '';

        if (typeof this.user === 'string' && this.user.length !== 0) {
            credentials = this.user + ':' + this.password + '@';
        }

        return 'mongodb://' + credentials + this.server + ':' + this.port + '/' + this.database;
    }
};

module.exports = config;
