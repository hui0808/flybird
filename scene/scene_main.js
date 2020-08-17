class Scene extends SceneMode {
    constructor(game) {
        super(game)
        this.e.bg = ImageMode.new(this.game, "bg")
        this.e.bird = Bird.new(this.game, 40, 0)
        this.e.pipe = Pipe.new(this.game)
        this.e.ground = ImageMode.new(this.game, 'ground', 0, 423)
        this.e.lawn = Lawn.new(this.game)
        this.e.score = Score.new(this.game, 0, 0, 25)
        this.game_over = false
    }

    update() {
        if (this.game_over) {
            return
        }
        super.update();
        // 小鸟接触地面或管道，游戏结束
        if (!this.e.bird.invincible && (this.e.pipe.collide(this.e.bird) || this.e.bird.fall())) {
            log('game over')
            this.game_over = true
            this.e.gameover = ImageMode.new(this.game, 'game_over', 60, 200)
            this.e.restart_title = TextMode.new(this.game, '按 r 重新游戏', 95, 280)
            this.game.registerAction('r', () => {
                this.game.replaceScene(SceneStart)
            })
        }
        // 小鸟通过管道加分
        for (let i of this.e.pipe.e) {
            if (!i.bird_pass && this.e.bird.x > i.content[0].x + i.content[0].w) {
                i.bird_pass = true
                this.e.score.plus(1)
            }
        }
    }
}
