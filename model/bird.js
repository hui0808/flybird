class Bird extends AnimationMode {
    constructor(game, x = 0, y = 0, rate = 3) {
        super(game, 'bird', x, y, 'bird_general', rate)
        this.enableDebug = true
        this.vy = 0
        this.bottom_y = 396
        this.g = 1.1
        this.invincible = false
        this.setup()
    }

    setup() {
        this.listener(this.game.canvas, 'click', event => this.jump())
        this.listener(window, 'keyup', event => {
            if (event.key === 'w') {
                this.jump()
            }
        })
    }

    debug() {
        if (this.enableDebug) {
            this.g = config.bird_g.value
            this.flipY(config.bird_y.value)
            this.flipX(config.bird_x.value)
            this.rotate(config.bird_angle.value)
            this.bottom_y = config.bird_bottom_y.value
            this.moveX(config.bird_bottom_x.value)
            this.invincible = config.bird_invincible.value
        }
    }

    update() {
        this.check()
        this.gravity()
        super.update()
    }

    draw() {
        super.draw()
    }

    gravity() {
        this.moveY(this.vy + this.y)
        this.vy += this.g
        if (this.y >= this.bottom_y) {
            this.moveY(this.bottom_y)
        }
    }

    jump() {
        this.vy = -10
    }

    // 小鸟速度等于0时显示normal动作，大于0时显示down动作，小于0时显示up动作
    check() {
        if  (this.vy === 0) {
            this.status = 'bird_general'
        } else if (this.vy < 0) {
            this.status = 'bird_up'
        } else {
            this.status = 'bird_down'
        }
    }

    fall() {
        return this.y === this.bottom_y
    }
}