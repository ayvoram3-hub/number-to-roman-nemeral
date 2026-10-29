Values: List[number] = []
Simbols: List[str] = []
result = ""
num = 0
def Number_To_Roman_Nemeral(num2: number):
    global Values, Simbols, result
    Values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    Simbols = ["M",
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
        "I"]
    i = 0
    while i <= len(Values) - 1:
        while num2 >= Values[i]:
            result = "" + result + Simbols[i]
            num2 += 0 - Values[i]
        i += 1