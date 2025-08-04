from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=240):
    """ Gets a WCA scramble of length `n` for a 14x14x14 cube. Defaults to csTimer's default length of 240. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get141414WCAScramble", n)

@trim
def get_SiGN_scramble(n=240):
    """ Gets a SiGN-notation scramble of length `n` for a 14x14x14 cube. Defaults to csTimer's default length of 240. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get141414SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 14x14x14 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get141414edgesScramble", n)