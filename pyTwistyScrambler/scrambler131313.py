from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=220):
    """ Gets a WCA scramble of length `n` for a 13x13x13 cube. Defaults to csTimer's default length of 220. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get131313WCAScramble", n)

@trim
def get_SiGN_scramble(n=220):
    """ Gets a SiGN-notation scramble of length `n` for a 13x13x13 cube. Defaults to csTimer's default length of 220. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get131313SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 13x13x13 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get131313edgesScramble", n)