def split(s):
    result = [s[i: i + 2] for i in range(0, len(s), 2)]
    if len(s) % 2 != 0:
        result[-1] += "_"
    return result
# split("abc")