const globalDebug = false

const anime = {
    bird: {
        bird_general: {
            bird0: 'img/bird/bird_general/bird0.png',
            bird1: 'img/bird/bird_general/bird1.png',
        },
        bird_up: {
            up_bird0: 'img/bird/bird_up/up_bird0.png',
            up_bird1: 'img/bird/bird_up/up_bird1.png',
        },
        bird_down: {
            down_bird0: 'img/bird/bird_down/down_bird0.png',
            down_bird1: 'img/bird/bird_down/down_bird1.png',
        },
    },
}

const images = {
    bg: 'img/bg.jpg',
    down_pipe: 'img/down_pipe.png',
    up_pipe: 'img/up_pipe.png',
    lawn: 'img/lawn.jpg',
    down_mod: 'img/down_mod.png',
    up_mod: 'img/up_mod.png',
    ground: 'img/ground.jpg',
    game_over: 'img/game_over.jpg',
}

let config = {
    fps: {
        value: 30,
        text: "fps: ",
        min: 1,
        max: 60,
    },
    bird_invincible: {
        value: 0,
        text: "小鸟无敌：",
        min: 0,
        max: 1,
    },
    bird_g: {
        value: 1.1,
        text: "小鸟重力加速度: ",
        min: 0.1,
        max: 3,
        step: 0.1,
    },
    bird_angle: {
        value: 0,
        text: "小鸟旋转角度: ",
        min: 0,
        max: 360,
        step: 1,
    },
    bird_x: {
        value: 0,
        text: "小鸟x轴翻折: ",
        min: 0,
        max: 1,
        step: 1,
    },
    bird_y: {
        value: 0,
        text: "小鸟y轴翻折: ",
        min: 0,
        max: 1,
        step: 1,
    },
    bird_bottom_y: {
        value: 396,
        text: "小鸟y: ",
        min: 0,
        max: 479,
        step: 1,
    },
    bird_bottom_x: {
        value: 40,
        text: "小鸟x: ",
        min: 0,
        max: 342,
        step: 1,
    },
    lawn_y: {
        value: 423,
        text: "草地y: ",
        min: 0,
        max: 479,
        step: 1,
    },
    lawn_speed: {
        value: 3,
        text: "草地speed: ",
        min: 0,
        max: 20,
        step: 1,
    },
    pipe_speed: {
        value: 3,
        text: "通管speed: ",
        min: 0,
        max: 20,
        step: 1,
    },
    pipe_y_step: {
        value: 200,
        text: "上下通管间距: ",
        min: 0,
        max: 304,
        step: 2,
    },
    pipe_x_step: {
        value: 200,
        text: "左右通管间距: ",
        min: 62,
        max: 300,
        step: 1,
    },
}