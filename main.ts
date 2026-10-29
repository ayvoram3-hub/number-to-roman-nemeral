let Values: number[] = []
let Simbols: string[] = []
let i = 0
let result = ""
let num2 = 0
function Number_To_Roman_Nemeral (num2: number) {
    Values = [
    1000,
    900,
    500,
    400,
    100,
    90,
    50,
    40,
    10,
    9,
    5,
    4,
    1
    ]
    Simbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
    ]
    while (i <= Values.length - 1) {
        while (num2 >= Values[i]) {
            result = "" + result + Simbols[i]
            num2 += 0 - Values[i]
        }
        i += 1
    }
    return result
}
