class SceneStart extends SceneMode {
    constructor(game) {
        super(game)
        this.e.bg = ImageMode.new(this.game, "bg")
        this.e.bird = Bird.new(this.game, 40, 0)
        this.e.text1 = TextMode.new(this.game, '使用鼠标左键或键盘 w 键控制小鸟', 15, 200)
        this.e.text2 = TextMode.new(this.game, '按 k 开始游戏', 95, 280)
        this.e.ground = ImageMode.new(this.game, 'ground', 0, 423)
        this.e.lawn = Lawn.new(this.game)
        this.setup()
    }

    setup() {
        this.game.registerAction('k', () => {
            this.game.replaceScene(Scene)
        })
    }
}
