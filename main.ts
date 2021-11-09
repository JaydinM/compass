let Degrees = 0
basic.forever(function () {
    if (Degrees < 45) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        led.enable(true)
    }
})
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 45) {
        basic.showString("N 45-134")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 135) {
        basic.showString("E 135-224")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 225) {
        basic.showString("S 225-314")
        basic.showLeds(`
            . . # . .
            . # # # .
            # . . . #
            . . # . .
            . . # . .
            `)
    } else if (Degrees < 315) {
        basic.showString("W 315-44")
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
