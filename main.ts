radio.setGroup(1)
basic.showIcon(IconNames.Yes)
GHBit.RGB_Program().showRainbow(1, 360)
while (360 < 1) {
	
}
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("前进")
        images.arrowImage(ArrowNames.North).showImage(0)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("后退")
        images.arrowImage(ArrowNames.South).showImage(0)
    } else if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendString("左转")
        images.arrowImage(ArrowNames.West).showImage(0)
    } else if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendString("右转")
        images.arrowImage(ArrowNames.East).showImage(0)
    } else if (GHBit.Button(GHBit.enButton.B1, GHBit.enButtonState.Press)) {
        radio.sendString("红色")
    } else if (GHBit.Button(GHBit.enButton.B2, GHBit.enButtonState.Press)) {
        radio.sendString("绿色")
    } else if (GHBit.Button(GHBit.enButton.B3, GHBit.enButtonState.Press)) {
        radio.sendString("蓝色")
    } else if (GHBit.Button(GHBit.enButton.B4, GHBit.enButtonState.Press)) {
        radio.sendString("黄色")
    } else {
        radio.sendString("停止")
        basic.showIcon(IconNames.No)
    }
})
