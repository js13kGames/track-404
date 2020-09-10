buildLevel = level => {
    gameContext.roads = [];
    gameContext.environment = [];
    _currX = _levels[level].startX;
    _currY = _levels[level].startY;
    _currDir = _levels[level].startDir;
    _levels[level].roads.split(",").forEach(c => {
        switch(c) {
            case "s": _straight(); break;
            case "l": _left(); break;
            case "r": _right(); break;
            case "c": _cross(); break;
        }
    });
    _levels[level].environments.forEach(e => {
        gameContext.environment.push(e());
    });
    return { x: _levels[level].carX, y: _levels[level].carY, dir: _levels[level].carDir };
}

_levels = [
    {
        name: "a simple course",
        carX: 200,
        carY: 240,
        carDir: 0,
        startX: 200,
        startY: 200,
        startDir: 0,
        roads: "s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,s,s,s,l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,s,s,s,l",
        environments: [
            () => propertyType1(300, -50, 0),
            () => propertyType1(900, -50, 0),
            () => propertyType1(700, 550, 180),
            () => propertyType1(1300, 550, 180),

            () => propertyType1(2150, -250, 90),
            () => propertyType1(500, -950, 0),
            () => propertyType1(1100, -950, 0),

            () => tree(300, -500, 0),
            () => tree(450, -500, 0),
            () => tree(280, -350, 0),
            () => tree(430, -370, 0),
            () => tree(330, -240, 0),
        ]
    },
    {
        name: "paragraph",
        carX: 200,
        carY: 240,
        carDir: 270,
        startX: 200,
        startY: 200,
        startDir: 90,
        roads: "s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,s,l,s,s,l,s,s,s,c,s,s,r,s,s,s,r,s,s,c,s,s,l,s,s,s,l,s,s,c,s,s,r,s,s,s,s,s,s,r,s,s,r,s",
        environments: [
            () => forest(-300, -1500, 1, 21),
            () => forest(-200, -1500, 10, 1),
            () => forest(700, -1500, 1, 21),
            () => forest(-300, 600, 11, 1),
        ]
    },
    {
        name: "labyrinth",
        carX: 200,
        carY: 240,
        carDir: 270,
        startX: 200,
        startY: 200,
        startDir: 90,
        roads: "s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,s,l,s,s,s,l,s,s,s,c,s,l,s,s,s,s,s,l,s,s,s,s,s,s,s,l,s,s,s,s,s,s,s,s,l,s,s,s,s,s,c,s,s,r,s,s,r,s,s,c,s,r,s,s,c,s,s,c,s,s,s,c,s,c,s,l,s,s,s,s,s,l,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,s,s,c,s,s,r,s,s,s,s,r,s,s,r",
        environments: [
            () => houses(450, -50, 3, 1, 90),

            () => houses(-550, -50, 7, 1, 0),
            () => houses(-550, 100, 7, 1, 0),
            () => houses(-550, 250, 7, 1, 0),

            () => houses(-450, -550, 4, 1, 0),
            () => houses(-450, -350, 4, 1, 0),

            () => houses(-250, -850, 2, 1, 0),

            () => houses(-650, -1750, 16, 1, 90),

            () => houses(350, -850, 3, 1, 0),

            () => house(400, -500, 90),

            () => houses(650, -1550, 6, 1, 90),

            () => houses(150, -1750, 3, 1, 0),

            () => houses(-550, -1950, 6, 1, 0),

            () => houses(750, -650, 10, 1, 90),

            () => houses(250, 450, 3, 1, 0),
        ]
    },
    {
        name: "trees everywhere",
        carX: 200,
        carY: 240,
        carDir: 0,
        startX: 200,
        startY: 200,
        startDir: 0,
        roads: "s,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,l,s,l,s,s,r,s,s,r,s,s,s,s,s,r,s,s,s,s,s,s,s,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,r,l,r,s,r,s,s,s,s,s,s,r,s,s,l,s,s,s,s,s,s,s,s,r,s,s,s,s,s,r",
        environments: [
            () => forest(-300, -900, 10, 11),
            () => forest(700, -900, 16, 2),
            () => forest(700, 100, 5, 1),
            () => forest(1700, -700, 6, 15),
            () => forest(1800, 800, 5, 1),
            () => forest(1900, 900, 4, 4),
            () => forest(1000, 1300, 13, 6),
            () => forest(-300, 1000, 13, 9),
            () => forest(-300, 200, 4, 8),

            () => forest(300, 400, 12, 4),
            () => forest(1400, -500, 1, 9),
            () => forest(900, -500, 5, 1),
            () => forest(900, -400, 1, 3),

            () => forest(1200, 800, 3, 3),
            () => forest(1500, 1000, 1, 1),
        ]
    },
    {
        name: "residential",
        carX: 200,
        carY: 240,
        carDir: 0,
        startX: 200,
        startY: 200,
        startDir: 0,
        roads: "s,s,s,s,s,c,s,s,s,s,s,r,s,s,s,s,r,s,s,s,s,s,r,s,s,s,s,c,s,s,s,s,s,s,l,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,s,l,s,s,s,s",
        environments: [
            () => forest(0, -300, 7, 1),
            () => tree(600, -200),
            () => forest(-100, -300, 1, 5),
            () => pond(150, -150),
            () => tree(0, 100),
            () => tree(100, 100),
            () => propertyType1(200, 0, 0),

            () => propertyType1(900, 0, 0),
            () => tree(900, 370),
            () => tree(1050, 370),
            () => tree(1200, 370),

            () => propertyType1(900, 500, 0),

            () => propertyType1(500, 500, 180),
            () => forest(0, 400, 1, 3),
            () => straightGravelRoad(-150, 660, 900, 40, 0),
            () => forest(100, 600, 6, 1),
            () => straightGravelRoad(-180, 450, 40, 250, 0),
            () => forest(-900, 800, 16, 1),
            () => forest(-900, 900, 27, 4),

            () => house(-400, 200),
            () => house(-400, 50),
            () => house(-400, -100),
            () => house(-400, -250),
            () => house(-400, -400),

            () => house(-150, 400),

            () => house(-200, -600, 90),
            () => house(-50, -600, 90),
            () => house(100, -600, 90),
            () => house(250, -600, 90),
            () => house(400, -600, 90),
            () => house(550, -600, 90),
            () => house(700, -600, 90),

            () => house(1500, 300, 0),
            () => house(1500, 400, 0),
            () => house(1500, 500, 0),
            () => house(1500, 600, 0),
            () => house(1500, 700, 0),
        ]
    },
    {
        name: "???",
        carX: 200,
        carY: 200,
        carDir: 270,
        startX: 200,
        startY: 200,
        startDir: 90,
        roads: "s,s,s,s,s,s,s,s,s,s,l,s,s,s,s,s,l,s,l,s,s,r,s,s,r,s,s,s,s,s,r,s,s,s,s,s,s,s,r,s,s,s,s,s,s,s,s,s,s,s,s,s,s,l,r,l,r,s,r,s,s,s,s,s,s,r,s,s,l,s,s,s,s,s,s,s,s,r,s,s,s,s,s,r",
        environments: [
        ]
    },
]

var _currX;
var _currY;
var _currDir;

let _straight = () => {
    gameContext.roads.push(createStraightRoad(_currX, _currY, _currDir));
    switch(_currDir) {
        case   0: _currX += 100; break; 
        case  90: _currY -= 100; break; 
        case 180: _currX -= 100; break; 
        case 270: _currY += 100; break; 
    }
}

let _cross = () => {
    gameContext.roads.push(createCrossRoad(_currX, _currY, _currDir));
    switch(_currDir) {
        case   0: _currX += 100; break; 
        case  90: _currY -= 100; break; 
        case 180: _currX -= 100; break; 
        case 270: _currY += 100; break; 
    }
}

let _left = () => {
    switch(_currDir) {
        case   0: 
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 90));
            _currDir = 90;
            _currY -= 100; 
            break; 
        case  90:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 0));
            _currDir = 180;
            _currX -= 100; 
            break; 
        case  180:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 270));
            _currDir = 270;
            _currY += 100; 
            break;             
        case 270:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 180));
            _currDir = 0;
            _currX += 100; 
            break;             
    }
}

let _right = () => {
    switch(_currDir) {
        case   0: 
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 0));
            _currDir = 270;
            _currY += 100; 
            break; 
        case  90:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 270));
            _currDir = 0;
            _currX += 100; 
            break; 
        case  180:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 180));
            _currDir = 90;
            _currY -= 100; 
            break;             
        case 270:
            gameContext.roads.push(createCurvedRoad(_currX, _currY, 90));
            _currDir = 180;
            _currX -= 100; 
            break;             
    }
}
