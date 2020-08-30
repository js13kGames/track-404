let Debug = (context, gameContext) => {
    let createText = (x, y) => kontra.Text({ x: x, y: y, font: '16px Arial', color: 'white' });
    let renderPoint = (p, color) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(p.x, p.y, 3, 0, Math.PI*2);
        context.fill();
    }

    var _offsetText = createText(30, 750);
    var _scrollText = createText(230, 750);
    var _visibleText = createText(430, 750);

    var renderCollisionPoints = () => {
        renderPoint(gameContext.car.frontLeft, "red");
        renderPoint(gameContext.car.frontRight, "white");
        renderPoint(gameContext.car.rearRight, "green");
        renderPoint(gameContext.car.rearLeft, "blue");
    }

    var renderRoadRectangles = () => {
        gameContext.roads.forEach(r => {
            context.strokeStyle = "white";
            var {x, y, w, h} = r.rectangle();
            context.strokeRect(x, y, w, h);
        });
    }

    var obj = {
        render() {
            _offsetText.render();
            _scrollText.render();
            _visibleText.render();
            if (gameContext.gameState == GameState.PLAYING) {
                renderCollisionPoints();
                renderRoadRectangles();
            }
        },
        update() {
            _offsetText.text = `Offset: ${gameContext.x}, ${gameContext.y}`;
            _scrollText.text = `Scroll: ${gameContext.scrollX}, ${gameContext.scrollY}`;
            var l = minX - gameContext.x;
            var t = minY - gameContext.y;
            var r = maxX - gameContext.x;
            var b = maxY - gameContext.y;
            _visibleText.text = `Visible area: (${l}, ${t}) - (${r}, ${b})`;
        },
    
    };
    return obj;
}
