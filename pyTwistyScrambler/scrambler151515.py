from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=260):
    """ Gets a WCA scramble of length `n` for a 15x15x15 cube. Defaults to csTimer's default length of 260. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get151515WCAScramble", n)

@trim
def get_SiGN_scramble(n=260):
    """ Gets a SiGN-notation scramble of length `n` for a 15x15x15 cube. Defaults to csTimer's default length of 260. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get151515SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 15x15x15 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get151515edgesScramble", n)