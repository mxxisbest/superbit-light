input.onButtonPressed(Button.A, function () {
    for (let index1 = 0; index1 <= 255; index1++) {
        SuperBit.RGB_Program().setBrightness(index1)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
        SuperBit.RGB_Program().show()
        basic.pause(10)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index2 = 0; index2 <= 255; index2++) {
        SuperBit.RGB_Program().setBrightness(255 - index2)
        SuperBit.RGB_Program().showColor(neopixel.colors(NeoPixelColors.White))
        SuperBit.RGB_Program().show()
        basic.pause(10)
    }
})
SuperBit.RGB_Program().setBrightness(0)
basic.showIcon(IconNames.Happy)
SuperBit.RGB_Program().show()
