module.exports = (env, argv) => {
    return argv.mode === 'development'
        ? require('./webpack.dev')
        : require('./webpack.prod');
};