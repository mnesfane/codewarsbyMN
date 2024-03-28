from re import *

def is_alphanum(text):
    return match('^[a-zA-Z][a-zA-Z0-9-_]*$', text)

def to_camel_case(text):
    camelText = ""
    if is_alphanum(text):
        hyphenSplit = split('-', text)
        textSegments = [split('_', hyph) for hyph in hyphenSplit]
        # sum convert a nested list to single list
        textSegments1Darr = sum(textSegments, [])
        camelText = textSegments1Darr[0] + ''.join(word.capitalize() for word in textSegments1Darr[1:])
        

to_camel_case("to_g-g9")