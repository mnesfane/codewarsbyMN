def array_diff(a, b):
    # good solution

    j = 0
    while j < len(b):
        i = 0
        while i < len(a):
            if b[j] == a[i]:
                a.remove(a[i])
                # i substract 1 from every time i remove en elem from the list
                i -= 1
            # looping over a
            i += 1
        # looping over b
        j += 1
    return a

    # complicated one

    # for x in b:
    #     j = 0
    #     for i in range(len(a)):
    #     # after an elem removed from [a] list , i will iterate out of index that's why i subs j
    #         if a[i - j] == x:
    #             a.remove(x)
    #             j += 1
    # return a

# print(array_diff([1, 2, 3, 7, 7], [7]))
# print(array_diff([1,2,2], [2]))
