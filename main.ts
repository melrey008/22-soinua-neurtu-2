if (input.soundLevel() < 25) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
}
if (input.soundLevel() < 50) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
}
if (input.soundLevel() < 100) {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
}
if (input.soundLevel() < 150) {
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
if (input.soundLevel() > 200) {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
}
