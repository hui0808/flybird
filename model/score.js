class Score extends TextMode {
    constructor(game, score = 0, x = 0, y = 0, font = "25px Arial", color = "#ffffff") {
        super(game, "Score: ", x, y, font, color)
        this.score = score
    }

    plus(score) {
        this.score += score
    }

    draw() {
        super.draw();
        this.game.context.fillText(this.text + this.score, this.x, this.y)
    }
}