from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=120):
    """ Gets a WCA scramble of length `n` for a 8x8x8 cube. Defaults to csTimer's default length of 120. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get888WCAScramble", n)

@trim
def get_SiGN_scramble(n=120):
    """ Gets a SiGN-notation scramble of length `n` for a 8x8x8 cube. Defaults to csTimer's default length of 120. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get888SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 8x8x8 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get888edgesScramble", n)