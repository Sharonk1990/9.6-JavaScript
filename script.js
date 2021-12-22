// const paintWalls = function (color) {
//    console.log('The wall has been painted ' + color)
//};

const paintWalls = function (color, wall){
    console.log('The ' + wall + ' wall has been painted ' + color)
};

// paintWalls('green');
// paintWalls('yellow');
// paintWalls();

// paintWalls('north', 'orange')
// paintWalls('south-east', 'grey')

paintWalls('orange', 'north')
paintWalls('grey', 'south-east')