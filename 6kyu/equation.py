import math

class MyException(Exception):
    def __init__(self, messg):
        self.messg = messg
def equ(a, b, c):
    delta = b**2 -4* a * c
    if a == 0:
        raise MyException("pas une equation 2eme degrée ")
    elif delta < 0:
        raise MyException("pas de solution reells")
    else:
        if delta == 0:
            return -b// 2 * a
        elif delta > 0:
            r1 = -b - math.sqrt(delta)// 2 * a 
            r2 = -b + math.sqrt(delta)// 2 * a
            return (r1, r2)

try:
    print(equ(1, 2, 1))
    print(equ(2, 2, 64))
    print(equ(0, 5, 2))
    print(equ(3, 2, -8))
except MyException as o:
    print(o.messg)
