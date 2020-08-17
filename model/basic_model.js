class GameObject {
    constructor() {
        this.events = []
    }

    static new(...args) {
        return new this(...args)
    }

    init() {
    }

    draw() {
    }

    update() {
    }

    debug() {
    }

    listener(element, type, callback) {
        this.events.push([element, type, callback])
        element.addEventListener(type, callback)
    }

    destory() {
        for (let [element, type, callback] of this.events) {
            element.removeEventListener(type, callback)
        }
    }
}

class ImageMode extends GameObject {
    constructor(game, name, x = 0, y = 0) {
        super()
        this.game = game
        this.name = name
        this.texture = this.game.textureByName(this.name)
        this.x = x
        this.y = y
        this.w = this.texture.width
        this.h = this.texture.height
    }

    reload(name) {
        this.name = name
        this.texture = this.game.textureByName(this.name)
    }

    draw() {
        this.game.drawImage(this)
    }
}

class SceneMode extends GameObject {
    constructor(game) {
        super()
        this.game = game
        this.enableDebug = true
        this.e = {}
    }

    destory() {
        foreach(this.e, 'destory')
    }

    debug() {
        if (this.enableDebug) {
            foreach(this.e, 'debug')
        }
    }

    update() {
        foreach(this.e, 'update')
    }

    draw() {
        foreach(this.e, 'draw')
    }
}

class TextMode extends GameObject {
    constructor(game, text, x, y, font = "20px Arial", color = "#000000") {
        super()
        this.game = game
        this.text = text
        this.x = x
        this.y = y
        this.font = font
        this.color = color
    }

    draw() {
        this.game.context.fillStyle = this.color
        this.game.context.font = this.font
        this.game.context.fillText(this.text, this.x, this.y)
    }
}

class AnimationMode extends GameObject {
    constructor(game, name, x = 0, y = 0, frame_times = 3) {
        super()
        this.game = game
        this.name = name
        this.value = anime[this.name]
        this.e = []
        this.enableDebug = true
        this.frame_times = frame_times
        this.frame_count = 0
        this.frame_index = 0
        this._setup()
        this.move(x, y)
        this.index = 0
        this.is_flipX = false
        this.is_flipY = false
        this.rotation = 0
    }

    _setup() {
        let img
        for (let key of Object.keys(this.value)) {
            let temp = []
            for (let key2 of Object.keys(this.value[key])) {
                img = ImageMode.new(this.game, key2)
                temp.push(img)
            }
            this.e.push(temp)
        }
        this.w = img.w
        this.h = img.h
    }

    destory() {
        this.e[this.index][this.frame_index].destory()
    }

    debug() {
        if (this.enableDebug) {
            this.e[this.index][this.frame_index].destory()
        }
    }

    update() {
        if (this.game.times % this.frame_times === 0) {
            this.frame_index = (this.frame_index + 1) % this.e[this.index].length
            let img = this.e[this.index][this.frame_index]
            img.update()
            this.w = img.w
            this.h = img.h
            this.rotate(0)
        }
    }

    draw() {
        let context = this.game.context
        let img = this.e[this.index][this.frame_index]
        let x = this.x + this.w / 2
        let y = this.y + this.h / 2
        context.save()
        context.translate(x, y)
        if (this.is_flipX) {
            context.scale(-1, 1)
        }
        if (this.is_flipY) {
            context.scale(1, -1)
        }
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-x, -y)
        img.draw()
        context.restore()
    }

    move(x, y) {
        x = x + this.w > this.game.canvas.width ? this.game.canvas.width - this.w : x < 0 ? 0 : x
        y = y + this.h > this.game.canvas.height ? this.game.canvas.height - this.h : y < 0 ? 0 : y
        forcount(this.e, 2, function(o) {
            o.x = x
            o.y = y
        })
    }

    moveX(pixel) {
        this.move(pixel, this.y)
    }

    moveY(pixel) {
        this.move(this.x, pixel)
    }

    flipX(status) {
        this.is_flipX = status
    }

    flipY(status) {
        this.is_flipY = status
    }

    rotate(angle) {
        this.rotation = angle
    }

    get y() {
        return this.e[this.index][this.frame_index].y
    }

    get x() {
        return this.e[this.index][this.frame_index].x
    }
}
