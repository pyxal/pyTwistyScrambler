from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=140):
    """ Gets a WCA scramble of length `n` for a 9x9x9 cube. Defaults to csTimer's default length of 140. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get999WCAScramble", n)

@trim
def get_SiGN_scramble(n=140):
    """ Gets a SiGN-notation scramble of length `n` for a 9x9x9 cube. Defaults to csTimer's default length of 140. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get999SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 9x9x9 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get999edgesScramble", n)