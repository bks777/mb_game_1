enum SCROLL_MODE {
    
};
input.onButtonPressed(Button.A, function () {
    enablePosition({ x: 0, y: 1 });
    console.log('yo konyk!');
    console.log(gameMap[0]);
})
function generateMep() {
    gameMap = []
    for (let index = 0; index < globalConfig.map.width; index++) {
        let row: number[] = []
        for (let index = 0; index < globalConfig.map.height; index++) {
            row.push(0)
        }
        gameMap.push(row)
    }
}
let gameMap: number[][] = []
type Coordinate = {
    x: number,
    y: number,
};
type GlobalConfig = {
    map: {
        width: number,
        height: number,
    }
};
const globalConfig: GlobalConfig = {
    map: {
        width: 10,
        height: 10,
    },
};
function enablePosition(position: Coordinate) {
    gameMap[position.x][position.y] = 1;
}
let idx = randint(0, 255)
radio.sendValue("startup", idx)
let evaluation = idx
generateMep()