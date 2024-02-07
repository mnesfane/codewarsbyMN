
def duplicate_count(text):
    s = 0
    dup = 0
    nomore = []
    text = text.lower()
    # c takes every elem of the string
    for c in text:
        # nomore is a list that contains unduplicate chars 
        # , to not check the char more than one time 
        # (ex: "aba" the code should check the first a and count that is duplicated but the prog should skip the second a

        # c is in nomore thats means the char is already checked 
        if c not in nomore:
            # compare c from text with all the elem intext
            for i in range(len(text)):
                # count how many times u'll find c in text
                if text[i] == c:
                    s += 1
            # if s == 1 c char only found once: not dup , >= 2 is dup
            if s >= 2:
                dup += 1
            # reset count
            s = 0
            # after c is checked , i add it to nomore , to not check the same char again
            nomore.append(c)
    return dup


# print(duplicate_count("abbcc"))

# I like

# def duplicate_count(text):
#     text = text.lower()
#     duplicates = []
#     for i in text:
#         if text.count(i) > 1 and i not in duplicates:
#             duplicates.append(i)    
#     return len(duplicates)