serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    文字 = serial.readLine()
    文字 = 文字.substr(0, 1)
    if (文字 == "a") {
        basic.showArrow(ArrowNames.West)
    } else if (文字 == "s") {
        basic.showArrow(ArrowNames.South)
    } else if (文字 == "d") {
        basic.showArrow(ArrowNames.East)
    }
})
let 文字 = ""
serial.setBaudRate(BaudRate.BaudRate115200)
