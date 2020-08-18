class Pipe extends GameObject {
    constructor(game) {
        super()
        this.game = game
        this.e = []
        this.speed = 3
        this.enableDebug = true
        this.y_step = 200
        this.x_step = 200
        this.create()
    }

    debug() {
        if (!this.enableDebug) {
            return
        }
        this.speed = config.pipe_speed.value
        this.y_step = config.pipe_y_step.value
        this.x_step = config.pipe_x_step.value
    }

    update() {
        this.move()
        if (this.e[this.e.length - 1].content[0].x + this.x_step <= 400) {
            this.create()
        }
        if (this.e[0].content[0].x < -this.e[0].content[0].w) {
            this.delete(0)
        }
        foreach(this.e, 'update')
    }

    draw() {
        foreach(this.e, 'draw')
    }

    create() {
        let c = (304 - this.y_step) / 2
        let num = randomRange(0, c)
        let temp = {
            content: [],
            bird_pass: false,
        }
        for (var i = 0; i < num; i++) {
            temp.content.push(ImageMode.new(this.game, "up_mod", 400, i * 2))
        }
        temp.content.push(ImageMode.new(this.game, "up_pipe", 400, i * 2))
        for (var i = 0; i < c - num; i++) {
            temp.content.push(ImageMode.new(this.game, "down_mod", 400, 422 - i * 2))
        }
        temp.content.push(ImageMode.new(this.game, "down_pipe", 400, 422 - i * 2 - 58))
        this.e.push(temp)
    }

    move() {
        for (let i of this.e) {
            for (let j of i.content) {
                j.x -= this.speed
            }
        }
    }

    delete(index) {
        this.e.splice(index, 1)
    }

    collide(bird) {
        let up = {}
        let down = {}
        for (let i of this.e) {
            for (let j of i.content) {
                if (j.name === 'up_pipe') {
                    up.x = j.x
                    up.y = 0
                    up.w = j.w
                    up.h = j.h + j.y
                } else if (j.name === 'down_pipe') {
                    down.x = j.x
                    down.y = j.y
                    down.w = j.w
                    down.h = 424 - j.y
                }
            }
            if (rectIntersects(bird, up) || rectIntersects(bird, down)) {
                return true
            }
        }
        return false
    }
}
