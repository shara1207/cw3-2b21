basic.showNumber(0)
basic.showIcon(IconNames.Heart)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.pause(500)
music.playMelody("C F E E D D E E ", 120)
basic.showLeds(`
    . # # # .
    # # . # #
    # . . . #
    # # . # #
    . # # # .
    `)
music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
basic.forever(function () {
	
})
