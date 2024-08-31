const codeCoverageTask = require('@cypress/code-coverage/task');

module.exports = (on, config) => {
    codeCoverageTask(on, config);
    //used to instrument files included as unit tests
    on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
    return config
}