class Lawn extends GameObject {
    constructor(game) {
        super()
        this.game = game
        this.x = 0
        this.y = 423
        this.speed = 3
        this.enableDebug = true
        this.e = []
        this.e.push(ImageMode.new(this.game, 'lawn', 0, 423))
        this.e.push(ImageMode.new(this.game, 'lawn', 343, 423))
    }

    debug() {
        if (this.enableDebug) {
            for (let i of this.e) {
                i.y = config.lawn_y.value
            }
            this.speed = config.lawn_speed.value
        }
    }

    update() {
        this.moveLeft()
        for (let i of this.e) {
            if (i.x <= -343 + this.speed - 1) {
                i.x = 343 - this.speed + 1
            }
        }
    }

    draw() {
        for (let i of this.e) {
            i.draw && i.draw()
        }
    }

    moveLeft() {
        for (let i of this.e) {
            i.x = i.x - this.speed
        }
    }
}
