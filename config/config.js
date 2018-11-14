const populate = require('../populate');
const query = require('../controller/queries');

module.exports.wire = (app) => {
    app.set('port', process.env.PORT || 3000);
    
    app.get('/v1/all/:page', query.findAll);
    app.get('/v1/specific', query.findSpecific);

    app.listen(app.get('port'), () => {
        console.log(`Express server listening on port ${app.get('port')}`);
        populate();
    });
};