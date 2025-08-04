from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=200):
    """ Gets a WCA scramble of length `n` for a 12x12x12 cube. Defaults to csTimer's default length of 200. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get121212WCAScramble", n)

@trim
def get_SiGN_scramble(n=200):
    """ Gets a SiGN-notation scramble of length `n` for a 12x12x12 cube. Defaults to csTimer's default length of 200. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get121212SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 12x12x12 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get121212edgesScramble", n)