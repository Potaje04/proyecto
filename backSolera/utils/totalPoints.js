const totalPoints = (activities) => {
    console.log('====================================');
    console.log("entrando a totalPoints");
    console.log('====================================');
    return activities.reduce((acc, activity) => {
        console.log('====================================');
        return +acc + +activity.points;
    }, 0);
}

module.exports = totalPoints;