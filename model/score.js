class Score extends TextMode {
    constructor(game, score = 0, x = 0, y = 0, font = "25px Arial", color = "#ffffff") {
        super(game, "", x, y, font, color)
        this.score = score
    }

    plus(score) {
        this.score += score
    }

    update() {
        super.update()
        this.text = 'Score: ' + this.score
    }
}