input.onButtonPressed(Button.AB, function () {
    item = 0
})
let item = 0
item = 0
let tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P15,
7,
4
)
basic.forever(function () {
    tm.showNumber(item)
    item += 1
    basic.pause(1000)
})
