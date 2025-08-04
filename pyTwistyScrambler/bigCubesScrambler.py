from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_8x8x8_scramble(n=120):
    """ Gets a random scramble (SiGN notation) of length `n` for an 8x8x8 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get888scramble", n)

@trim
def get_9x9x9_scramble(n=140):
    """ Gets a random scramble (SiGN notation) of length `n` for a 9x9x9 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get999scramble", n)

@trim
def get_10x10x10_scramble(n=160):
    """ Gets a random scramble (SiGN notation) of length `n` for a 10x10x10 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get101010scramble", n)

@trim
def get_11x11x11_scramble(n=180):
    """ Gets a random scramble (SiGN notation) of length `n` for an 11x11x11 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get111111scramble", n)

@trim
def get_12x12x12_scramble(n=200):
    """ Gets a random scramble (SiGN notation) of length `n` for an 12x12x12 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get121212scramble", n)

@trim
def get_13x13x13_scramble(n=220):
    """ Gets a random scramble (SiGN notation) of length `n` for an 13x13x13 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get131313scramble", n)

@trim
def get_14x14x14_scramble(n=240):
    """ Gets a random scramble (SiGN notation) of length `n` for an 14x14x14 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get141414scramble", n)

@trim
def get_15x15x15_scramble(n=260):
    """ Gets a random scramble (SiGN notation) of length `n` for an 15x15x15 cube. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get151515scramble", n)