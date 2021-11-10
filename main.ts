let Degrees = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 45) {
        basic.showString("N 315-44")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 135) {
        basic.showString("E 45-134")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 225) {
        basic.showString("S 135-224")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 315) {
        basic.showString("W 225-314")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showString("N")
    }
})
