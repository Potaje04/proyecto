module.exports = (app) => {
    const teamRoutes = require('./team.routes');
    app.use('/api/teams', teamRoutes);

    const activityRoutes = require('./activity.routes');
    app.use('/api/activities', activityRoutes);
}