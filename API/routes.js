module.exports = function (app) {
    /**
     * 路由分发 搭建服务
     */
    let user = require('./SpongeBob/user');
    app.use('/SpongeBob/user', user);

    let webSocket = require('./SpongeBob/webSocket');
    app.use('/SpongeBob/webSocket', webSocket)


}