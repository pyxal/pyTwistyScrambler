from . import _MEGA_SCRAMBLER, trim

#------------------------------------------------------------------------------

@trim
def get_WCA_scramble(n=160):
    """ Gets a WCA scramble of length `n` for a 10x10x10 cube. Defaults to csTimer's default length of 160. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get101010WCAScramble", n)

@trim
def get_SiGN_scramble(n=160):
    """ Gets a SiGN-notation scramble of length `n` for a 10x10x10 cube. Defaults to csTimer's default length of 160. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get101010SiGNScramble", n)

@trim
def get_edges_scramble(n=8):
    """ Gets an edges scramble of length `n` for a 10x10x10 cube. Defaults to csTimer's default length of 8. """
    return _MEGA_SCRAMBLER.call("megaScrambler.get101010edgesScramble", n)