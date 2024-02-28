def split(s):
    result = [s[i: i + 2] for i in range(0, len(s), 2)]
    if len(s) % 2 != 0:
        result[-1] += "_"
    return result
# split("abc")

# def solution(s):
#     return [s[x:x+2] if x < len(s) - 1 else s[-1] + "_" for x in range(0, len(s), 2)]