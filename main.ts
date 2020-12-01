input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).scrollImage(1, 300)
        basic.pause(100)
        basic.clearScreen()
        images.createImage(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `).scrollImage(1, 300)
        basic.pause(100)
        basic.clearScreen()
    }
})
basic.forever(function () {
	
})
