//1
//add to html

<canvas id="canvas" width="500" height="250" style="border:1px solid black"></canvas>

    <script>

const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
};

const test = function (count, canvasWidth, canvasHeight) {
    const arr = [];
    const colorArray = ['red', 'green', 'orange'];

    const forEach = function (arr, index) {
        if (index === count)
            return;

        const point = {
            x: rand(canvasWidth),
            y: rand(canvasHeight),
            width: 30,
            height: 30,
            xDelta: 1,
            yDelta: 1,
            color: colorArray[rand(3) - 1]
        };

        //arr.push(point);
        arr[index] = point;
        forEach(arr,++index);
    };

    forEach(arr, 0);
    console.log(arr);
};
//2
//add to html

<canvas id="canvas" width="500" height="300"></canvas>
    <script>


const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const rand = function (num) {
    return Math.floor(Math.random() * num) + 1;
};


const createPoints = function (count, canvasWidth, canvasHeight) {
    const arr = [];
    const colorArray = ['#242424', '#dbdcdf', '#dfe44c'];

    const forEach = function (arr, index) {
        if (index === count)
            return;

        const point = {
            x: rand(canvasWidth),
            y: rand(canvasHeight),
            width: 30,
            height: 30,
            xDelta: 1,
            yDelta: 1,
            color: colorArray[rand(3) - 1]
        };

        arr[index] = point;
        forEach(arr,++index);
    };

    forEach(arr, 0);
    return arr;
};

const update = function (element) {
    if (element.x < 0 || element.x + element.width > 500) {
        element.xDelta = -element.xDelta;
    }
    if ( element.y < 0 || element.y + element.height > 300) {
        element.yDelta = -element.yDelta;
    }
    element.x += element.xDelta;
    element.y += element.yDelta;
};

const array = createPoints(10,500,300); // Create array of 10 points


const render = function () {
    context.clearRect(0,0, 500,300);
    forEach(array,0);
    requestAnimationFrame(render)
};


const forEach = function(arr, idx) {
    if(idx === arr.length) {
        return;
    }
    const element = arr[idx];
    context.beginPath();
    context.fillStyle=element.color;
    context.rect(element.x,element.y,element.width,element.height);
    context.closePath();
    context.fill();
    update(element);

    forEach(arr, idx + 1);
};
requestAnimationFrame(render);
</script>

//3
    //add to html

<style>
    #canvas {
    border: 1px solid gray;
    background-image: url("http://2.bp.blogspot.com/-_7P2Ua8OEgI/UQOC9cWDBtI/AAAAAAAAE18/Ow-fouJSW7w/s640/100.jpg");
    opacity:0.9;
}

</style>

<canvas id="canvas" width="600" height="350"></canvas>

    <script>

    let touch = false;
const myCanvas = document.getElementById('canvas');
const context = myCanvas.getContext('2d');



const rand = function (num) {
    return Math.floor(Math.random() * num) + 1;
};


const createBadGuys = function (count, canvasWidth, canvasHeight) {
    const arr = [];


    const forEach = function (arr, index) {
        if (index === count)
            return;

        const point = {
            x: rand(canvasHeight),
            y: rand(canvasHeight),
            width: 30,
            height: 30,
            xDelta: 1,
            yDelta: 1,
            color: 'black'
        };

        arr[index] = point;
        forEach(arr, index +1);
    };

    forEach(arr, 0);
    return arr;
};


const gameData = {
    hero: {
        x: 0,
        y: 0,
        width: 30
    },

    badGuy: createBadGuys(10, 600, 350)
};


// Update function of the second problem
const update = function (element) {
    const dx = element.x - gameData.hero.x;
    const dy = element.y - gameData.hero.y;
    if(dx < 30 && dx> -30 && dy < 30 && dy> -30){
        touch = true;
        window.location.reload();
    }
    if (element.x <= 0 || element.x + element.width >= 600) {
        element.xDelta = -element.xDelta;
    }
    if (element.y <= 0 || element.y + element.height >= 350) {
        element.yDelta = -element.yDelta;
    }
    element.x += element.xDelta;
    element.y += element.yDelta;

};


//Render function of the second problem
const render = function () {
    context.clearRect(0, 0, 600, 350);
    forEach(gameData.badGuy, 0);
    requestAnimationFrame(render);

};


// Loop function for the second problem
const forEach = function (arr, idx) {
    if (idx === arr.length) {
        return;
    }
    const element = arr[idx];
    context.beginPath();
    context.fillStyle = element.color;
    context.rect(element.x, element.y, element.width, element.height);
    context.closePath();
    context.fill();
    update(element);
    forEach(arr, idx + 1);
};

const drawHero = function () {
    context.fillStyle = '#dfe44c';
    context.fillRect(gameData.hero.x, gameData.hero.y, gameData.hero.width, gameData.hero.width);
    requestAnimationFrame(drawHero)
};








const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function (event) {
    const hero = gameData.hero;
    if (event.keyCode === upKey && hero.y - 40 >= 0 ) {
        hero.y = hero.y - 40;
    }
    else if (event.keyCode === downKey && hero.y + 40 <= 350) {
        hero.y = hero.y + 40;
    }
    else if (event.keyCode === rightKey && hero.x + 40 <= 599) {
        hero.x = hero.x + 40;
    }
    else if (event.keyCode === leftKey  && hero.x - 40 >= 0) {
        hero.x = hero.x - 40;
    }
}, false);


render();
drawHero();



// Checks if collision occurs
const check = function () {
    if (touch) {
        alert("Game Over!");
        return false;
    }

    setTimeout(check,1)
};


check();
</script>



