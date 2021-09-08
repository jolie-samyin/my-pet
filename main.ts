input.onButtonPressed(Button.A, function () {
    let light2 = 0
    if (light2 < 50) {
        basic.showIcon(IconNames.Asleep)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.hello.playUntilDone()
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
