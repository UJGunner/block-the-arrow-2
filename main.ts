input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    if (arrow == 2) {
        basic.showIcon(IconNames.Yes)
        player_1_points += 1
    } else {
        basic.showIcon(IconNames.No)
        player_1_lives += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (arrow == 4) {
        basic.showIcon(IconNames.Yes)
        player_1_points += 1
    } else {
        basic.showIcon(IconNames.No)
        player_1_lives += -1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    if (arrow == 1) {
        basic.showIcon(IconNames.Yes)
        player_1_points += 1
    } else {
        basic.showIcon(IconNames.No)
        player_1_lives += -1
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    if (arrow == 3) {
        basic.showIcon(IconNames.Yes)
        player_1_points += 1
    } else {
        basic.showIcon(IconNames.No)
        player_1_lives += -1
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.showString("score")
    basic.showString("" + (player_1_points))
    basic.showString("lives")
    basic.showString("" + (player_1_lives))
})
let arrow = 0
let player_1_points = 0
let player_1_lives = 0
player_1_lives = 3
player_1_points = 0
OLED.init(128, 64)
basic.forever(function () {
    arrow = randint(1, 4)
    if (arrow == 1) {
        basic.showArrow(ArrowNames.East)
        if (player_1_points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (player_1_points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (player_1_points >= 30) {
            basic.pause(2000)
        } else if (player_1_points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else if (arrow == 2) {
        basic.showArrow(ArrowNames.West)
        if (player_1_points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (player_1_points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (player_1_points >= 30) {
            basic.pause(2000)
        } else if (player_1_points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else if (arrow == 3) {
        basic.showArrow(ArrowNames.South)
        if (player_1_points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (player_1_points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (player_1_points >= 30) {
            basic.pause(2000)
        } else if (player_1_points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    } else {
        basic.showArrow(ArrowNames.North)
        if (player_1_points >= 10) {
            basic.pause(2000)
            basic.pause(2000)
        } else if (player_1_points >= 20) {
            basic.pause(2000)
            basic.pause(1000)
        } else if (player_1_points >= 30) {
            basic.pause(2000)
        } else if (player_1_points >= 40) {
            basic.pause(1000)
        } else {
            basic.pause(5000)
        }
    }
})
basic.forever(function () {
    music.playMelody("C - C - D F E D ", 120)
    music.playMelody("G - G - G A E F ", 120)
    music.playMelody("D - D - D F E D ", 120)
    music.playMelody("C C5 B A G F E D ", 120)
})
basic.forever(function () {
    if (player_1_lives == 0) {
        basic.showString("game over")
        basic.showString("score")
        basic.showString("" + (player_1_points))
    }
})
basic.forever(function () {
    OLED.writeStringNewLine("Shake for bottom, A for left, B for right, and A+B for top.")
})
