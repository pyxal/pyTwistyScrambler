var megaScrambler = (function(mega, rn, rndEl) {
	var cubesuff=["","2","'"];
	var minxsuff=["","2","'","2'"];
	var args = {
		"111": [[["x"],["y"],["z"]],cubesuff], // 1x1x1
		"2223": [[["U"],["R"],["F"]],cubesuff], // 2x2x2 (3-gen)
		"2226": [[[["U","D"]],[["R","L"]],[["F","B"]]],cubesuff], // 2x2x2 (6-gen)
		"333o": [[["U","D"],["R","L"],["F","B"]],cubesuff], // 3x3x3 (old style)
		"334": [[[["U","U'","U2"],["u","u'","u2"]],[["R2","L2","M2"]],[["F2","B2","S2"]]]], // 3x3x4
		"336": [[[["U","U'","U2"],["u","u'","u2"],["3u","3u2","3u'"]],[["R2","L2","M2"]],[["F2","B2","S2"]]]], // 3x3x6
		
		"444": [[["U","D","u"],["R","L","r"],["F","B","f"]],cubesuff], // 4x4x4 (SiGN)
		"444wca": [[["U","D","Uw"],["R","L","Rw"],["F","B","Fw"]],cubesuff], // 4x4x4 (WCA)
		
		"555": [[["U","D","u","d"],["R","L","r","l"],["F","B","f","b"]],cubesuff], // 5x5x5 (SiGN)
		"555wca": [[["U","D","Uw","Dw"],["R","L","Rw","Lw"],["F","B","Fw","Bw"]],cubesuff], // 5x5x5 (WCA)
		
		"666p": [[["U","D","2U","2D","3U"],["R","L","2R","2L","3R"],["F","B","2F","2B","3F"]],cubesuff], // 6x6x6 (prefix)
		"666wca": [[["U","D","Uw","Dw","3Uw"],["R","L","Rw","Lw","3Rw"],["F","B","Fw","Bw","3Fw"]],cubesuff], // 6x6x6 (WCA)
		"666s": [[["U","D","U&sup2;","D&sup2;","U&sup3;"],["R","L","R&sup2;","L&sup2;","R&sup3;"],["F","B","F&sup2;","B&sup2;","F&sup3;"]],cubesuff], // 6x6x6 (suffix)
		"666si": [[["U","D","u","d","3u"],["R","L","r","l","3r"],["F","B","f","b","3f"]],cubesuff], // 6x6x6 (SiGN)
		
		"777p": [[["U","D","2U","2D","3U","3D"],["R","L","2R","2L","3R","3L"],["F","B","2F","2B","3F","3B"]],cubesuff], // 7x7x7 (prefix)
		"777wca": [[["U","D","Uw","Dw","3Uw","3Dw"],["R","L","Rw","Lw","3Rw","3Lw"],["F","B","Fw","Bw","3Fw","3Bw"]],cubesuff], // 7x7x7 (prefix)
		"777s": [[["U","D","U&sup2;","D&sup2;","U&sup3;"],["R","L","R&sup2;","L&sup2;","R&sup3;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;"]],cubesuff], // 7x7x7 (suffix)
		"777si": [[["U","D","u","d","3u","3d"],["R","L","r","l","3r","3l"],["F","B","f","b","3f","3b"]],cubesuff], // 7x7x7 (SiGN)
		
		"888p": [[["U","D","2U","2D","3U","3D","4U"],["R","L","2R","2L","3R","3L","4R"],["F","B","2F","2B","3F","3B","4F"]],cubesuff], // 8x8x8 (prefix)
		"888wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw"]],cubesuff], // 8x8x8 (prefix)
		"888s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;"]],cubesuff], // 8x8x8 (suffix)
		"888si": [[["U","D","u","d","3u","3d","4u"],["R","L","r","l","3r","3l","4r"],["F","B","f","b","3f","3b","4f"]],cubesuff], // 8x8x8 (SiGN)
		
		"999p": [[["U","D","2U","2D","3U","3D","4U","4D"],["R","L","2R","2L","3R","3L","4R","4L"],["F","B","2F","2B","3F","3B","4F","4B"]],cubesuff], // 9x9x9 (prefix)
		"999wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw"]],cubesuff], // 9x9x9 (prefix)
		"999s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;"]],cubesuff], // 9x9x9 (suffix)
		"999si": [[["U","D","u","d","3u","3d","4u","4d"],["R","L","r","l","3r","3l","4r","4l"],["F","B","f","b","3f","3b","4f","4b"]],cubesuff], // 9x9x9 (SiGN)
		
		"101010p": [[["U","D","2U","2D","3U","3D","4U","4D","5U"],["R","L","2R","2L","3R","3L","4R","4L","5R"],["F","B","2F","2B","3F","3B","4F","4B","5F"]],cubesuff], // 10x10x10 (prefix)
		"101010wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw"]],cubesuff], // 10x10x10 (prefix)
		"101010s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;"]],cubesuff], // 10x10x10 (suffix)
		"101010si": [[["U","D","u","d","3u","3d","4u","4d","5u"],["R","L","r","l","3r","3l","4r","4l","5r"],["F","B","f","b","3f","3b","4f","4b","5f"]],cubesuff], // 10x10x10 (SiGN)
		
		"111111p": [[["U","D","2U","2D","3U","3D","4U","4D","5U","5D"],["R","L","2R","2L","3R","3L","4R","4L","5R","5L"],["F","B","2F","2B","3F","3B","4F","4B","5F","5B"]],cubesuff], // 11x11x11 (prefix)
		"111111wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw","5Dw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw","5Lw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw","5Bw"]],cubesuff], // 11x11x11 (prefix)
		"111111s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;","D&sup5;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;","L&sup5;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;","B&sup5;"]],cubesuff], // 11x11x11 (suffix)
		"111111si": [[["U","D","u","d","3u","3d","4u","4d","5u","5d"],["R","L","r","l","3r","3l","4r","4l","5r","5l"],["F","B","f","b","3f","3b","4f","4b","5f","5b"]],cubesuff], // 11x11x11 (SiGN)

		"121212p": [[["U","D","2U","2D","3U","3D","4U","4D","5U","5D","6U"],["R","L","2R","2L","3R","3L","4R","4L","5R","5L","6R"],["F","B","2F","2B","3F","3B","4F","4B","5F","5B","6F"]],cubesuff], // 12x12x12 (prefix)
		"121212wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw","5Dw","6Uw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw","5Lw","6Rw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw","5Bw","6Fw"]],cubesuff], // 12x12x12 (prefix)
		"121212s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;","D&sup5;","U&sup6;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;","L&sup5;","R&sup6;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;","B&sup5;","F&sup6;"]],cubesuff], // 12x12x12 (suffix)
		"121212si": [[["U","D","u","d","3u","3d","4u","4d","5u","5d","6u"],["R","L","r","l","3r","3l","4r","4l","5r","5l","6r"],["F","B","f","b","3f","3b","4f","4b","5f","5b","6f"]],cubesuff], // 12x12x12 (SiGN)


		"131313p": [[["U","D","2U","2D","3U","3D","4U","4D","5U","5D","6U","6D"],["R","L","2R","2L","3R","3L","4R","4L","5R","5L","6R","6L"],["F","B","2F","2B","3F","3B","4F","4B","5F","5B","6F","6B"]],cubesuff], // 13x13x13 (prefix)
		"131313wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw","5Dw","6Uw","6Dw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw","5Lw","6Rw","6Lw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw","5Bw","6Fw","6Bw"]],cubesuff], // 13x13x13 (prefix)
		"131313s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;","D&sup5;","U&sup6;","D&sup6;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;","L&sup5;","R&sup6;","L&sup6;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;","B&sup5;","F&sup6;","B&sup6;"]],cubesuff], // 13x13x13 (suffix)
		"131313si": [[["U","D","u","d","3u","3d","4u","4d","5u","5d","6u","6d"],["R","L","r","l","3r","3l","4r","4l","5r","5l","6r","6l"],["F","B","f","b","3f","3b","4f","4b","5f","5b","6f","6b"]],cubesuff], // 13x13x13 (SiGN)

		"141414p": [[["U","D","2U","2D","3U","3D","4U","4D","5U","5D","6U","6D","7U"],["R","L","2R","2L","3R","3L","4R","4L","5R","5L","6R","6L","7R"],["F","B","2F","2B","3F","3B","4F","4B","5F","5B","6F","6B","7F"]],cubesuff], // 14x14x14 (prefix)
		"141414wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw","5Dw","6Uw","6Dw","7Uw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw","5Lw","6Rw","6Lw","7Rw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw","5Bw","6Fw","6Bw","7Fw"]],cubesuff], // 14x14x14 (prefix)
		"141414s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;","D&sup5;","U&sup6;","D&sup6;","U&sup7;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;","L&sup5;","R&sup6;","L&sup6;","R&sup7;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;","B&sup5;","F&sup6;","B&sup6;","F&sup7;"]],cubesuff], // 14x14x14 (suffix)
		"141414si": [[["U","D","u","d","3u","3d","4u","4d","5u","5d","6u","6d","7u"],["R","L","r","l","3r","3l","4r","4l","5r","5l","6r","6l","7r"],["F","B","f","b","3f","3b","4f","4b","5f","5b","6f","6b","7f"]],cubesuff], // 14x14x14 (SiGN)
		

		"151515p": [[["U","D","2U","2D","3U","3D","4U","4D","5U","5D","6U","6D","7U","7D"],["R","L","2R","2L","3R","3L","4R","4L","5R","5L","6R","6L","7R","7L"],["F","B","2F","2B","3F","3B","4F","4B","5F","5B","6F","6B","7F","7B"]],cubesuff], // 15x15x15 (prefix)
		"151515wca": [[["U","D","Uw","Dw","3Uw","3Dw","4Uw","4Dw","5Uw","5Dw","6Uw","6Dw","7Uw","7Dw"],["R","L","Rw","Lw","3Rw","3Lw","4Rw","4Lw","5Rw","5Lw","6Rw","6Lw","7Rw","7Lw"],["F","B","Fw","Bw","3Fw","3Bw","4Fw","4Bw","5Fw","5Bw","6Fw","6Bw","7Fw","7Bw"]],cubesuff], // 15x15x15 (prefix)
		"151515s": [[["U","D","U&sup2;","D&sup2;","U&sup3;","D&sup3;","U&sup4;","D&sup4;","U&sup5;","D&sup5;","U&sup6;","D&sup6;","U&sup7;","D&sup7;"],["R","L","R&sup2;","L&sup2;","R&sup3;","L&sup3;","R&sup4;","L&sup4;","R&sup5;","L&sup5;","R&sup6;","L&sup6;","R&sup7;","L&sup7;"],["F","B","F&sup2;","B&sup2;","F&sup3;","B&sup3;","F&sup4;","B&sup4;","F&sup5;","B&sup5;","F&sup6;","B&sup6;","F&sup7;","B&sup7;"]],cubesuff], // 15x15x15 (suffix)
		"151515si": [[["U","D","u","d","3u","3d","4u","4d","5u","5d","6u","6d","7u","7d"],["R","L","r","l","3r","3l","4r","4l","5r","5l","6r","6l","7r","7l"],["F","B","f","b","3f","3b","4f","4b","5f","5b","6f","6b","7f","7b"]],cubesuff], // 15x15x15 (SiGN)
		

		"cm3": [[[["U<","U>","U2"],["E<","E>","E2"],["D<","D>","D2"]],[["R^","Rv","R2"],["M^","Mv","M2"],["L^","Lv","L2"]]]], // Cmetrick
		"cm2": [[[["U<","U>","U2"],["D<","D>","D2"]],[["R^","Rv","R2"],["L^","Lv","L2"]]]], // Cmetrick Mini
		"233": [[[["U","U'","U2"]],["R2","L2"],["F2","B2"]]], // Domino/2x3x3
		"fto": [[["U","D"],["F","B"],["L","BR"],["R","BL"]],["","'"]], // FTO/Face-Turning Octa
		"gear": [[["U"],["R"],["F"]],["","2","3","4","5","6","'","2'","3'","4'","5'"]],
		"sfl": [[["R","L"],["U","D"]],cubesuff], // Super Floppy Cube
		"ufo": [[["A"],["B"],["C"],[["U","U'","U2'","U2","U3"]]]], // UFO
		"2gen": [[["U"],["R"]],cubesuff], // 2-generator <R,U>
		"2genl": [[["U"],["L"]],cubesuff], // 2-generator <L,U>
		"roux": [[["U"],["M"]],cubesuff], // Roux-generator <M,U>
		"3gen_F": [[["U"],["R"],["F"]],cubesuff], // 3-generator <F,R,U>
		"3gen_L": [[["U"],["R","L"]],cubesuff], // 3-generator <R,U,L>
		"RrU": [[["U"],["R","r"]],cubesuff], // 3-generator <R,r,U>
		"RrUu": [[["U","u"],["R","r"]],cubesuff], // <R,r,U,u>
		"minx2g": [[["U"],["R"]],minxsuff], // megaminx 2-gen
		"mlsll": [[[["R U R'","R U2 R'","R U' R'","R U2' R'"]],[["F' U F","F' U2 F","F' U' F","F' U2' F"]],[["U","U2","U'","U2'"]]]], // megaminx LSLL
		"half": [[["U","D"],["R","L"],["F","B"]],["2"]], // 3x3x3 half turns
		"lsll": [[[["R U R'","R U2 R'","R U' R'"]],[["F' U F","F' U2 F","F' U' F"]],[["U","U2","U'"]]]], // 3x3x3 last slot + last layer (old)
		"prco": [[["F","B"],["U","D"],["L","DBR"],["R","DBL"],["BL","DR"],["BR","DL"]],minxsuff], // Pyraminx Crystal (old style)
		"skb": [[["R"],["L"],["B"],["U"]],["","'"]], // Skewb
		"112": [[["R"],["R"]],cubesuff], // 1x1x2
	};
	
	var args2 = {
		'sia113': '#{[["U","u"],["R","r"]],%c} z2 #{[["U","u"],["R","r"]],%c}',
		'sia123': '#{[["U"],["R","r"]],%c} z2 #{[["U"],["R","r"]],%c}',
		'sia222': '#{[["U"],["R"],["F"]],%c} z2 y #{[["U"],["R"],["F"]],%c}',
		'335': '#{[[["U","U\'","U2"],["D","D\'","D2"]],["R2","L2"],["F2","B2"]]} / ${333}',
		'337': '#{[[["U","U\'","U2","u","u\'","u2","U u","U u\'","U u2","U\' u","U\' u\'","U\' u2","U2 u","U2 u\'","U2 u2"],["D","D\'","D2","d","d\'","d2","D d","D d\'","D d2","D\' d","D\' d\'","D\' d2","D2 d","D2 d\'","D2 d2"]],["R2","L2"],["F2","B2"]]} / ${333}',
		'r234': '2) ${222so}\n3) ${333}\n4) ${[444,40]}',
		'r2345': '${r234}\n5) ${["555",60]}',
		'r23456': '${r2345}\n6) ${["666p",80]}',
		'r234567': '${r23456}\n7) ${["777p",100]}',
		'r2345678': '${r234567}\n8) ${["888p",120]}',
		'r23456789': '${r2345678}\n9) ${["999p",140]}',
		'r2345678910': '${r23456789}\n10) ${["101010p",160]}',
		'r234567891011': '${r2345678910}\n11) ${["111111p",180]}',
		'r23456789101112': '${r234567891011}\n12) ${["121212p",200]}',
		'r2345678910111213': '${r23456789101112}\n13) ${["131313p",220]}',
		'r234567891011121314': '${r2345678910111213}\n14) ${["141414p",240]}',
		'r23456789101112131415': '${r234567891011121314}\n15) ${["151515",260]}'
	};

	// var edges = {
	// 	'4edge': ["r b2",["b2 r'","b2 U2 r U2 r U2 r U2 r"],["u"]],
	// 	'5edge': ["r R b B",["B' b' R' r'","B' b' R' U2 r U2 r U2 r U2 r"],["u","d"]], 
	// 	'6edge': ["3r r 3b b",      ["3b' b' 3r' r'","3b' b' 3r' U2 r U2 r U2 r U2 r","3b' b' r' U2 3r U2 3r U2 3r U2 3r","3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"],["u","3u","d"]],
	// 	'7edge': ["3r r 3b b",      ["3b' b' 3r' r'","3b' b' 3r' U2 r U2 r U2 r U2 r","3b' b' r' U2 3r U2 3r U2 3r U2 3r","3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"],["u","3u","3d","d"]]
	// 	'8edge': ["4r 3r r 4b 3b b",["4b' 3b' b' 3r' r'","4b' 3b' b' 3r' U2 r U2 r U2 r U2 r","3b' b' r' U2 3r U2 3r U2 3r U2 3r","3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"],["u","3u","3d","d"]]
	// }

	var edges = {
    	'4edge': ["r b2", ["b2 r'", "b2 U2 r U2 r U2 r U2 r"], ["u"]],
    	'5edge': ["r R b B", ["B' b' R' r'", "B' b' R' U2 r U2 r U2 r U2 r"], ["u", "d"]],
    	'6edge': ["3r r 3b b", ["3b' b' 3r' r'", "3b' b' 3r' U2 r U2 r U2 r U2 r", "3b' b' r' U2 3r U2 3r U2 3r U2 3r", "3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"], ["u", "3u", "d"]],
    	'7edge': ["3r r 3b b", ["3b' b' 3r' r'", "3b' b' 3r' U2 r U2 r U2 r U2 r", "3b' b' r' U2 3r U2 3r U2 3r U2 3r", "3b' b' r2 U2 3r U2 3r U2 3r U2 3r U2 r"], ["u", "3u", "3d", "d"]],
    	'8edge': ["4r r 4b b", ["4b' b' 4r' r'", "4b' b' 4r' U2 r U2 r U2 r U2 r", "4b' b' r' U2 4r U2 4r U2 4r U2 4r", "4b' b' r2 U2 4r U2 4r U2 4r U2 4r U2 r"], ["u", "4u", "d"]],
    	'9edge': ["4r r 4b b", ["4b' b' 4r' r'", "4b' b' 4r' U2 r U2 r U2 r U2 r", "4b' b' r' U2 4r U2 4r U2 4r U2 4r", "4b' b' r2 U2 4r U2 4r U2 4r U2 4r U2 r"], ["u", "4u", "4d", "d"]],
    	'10edge': ["5r r 5b b", ["5b' b' 5r' r'", "5b' b' 5r' U2 r U2 r U2 r U2 r", "5b' b' r' U2 5r U2 5r U2 5r U2 5r", "5b' b' r2 U2 5r U2 5r U2 5r U2 5r U2 r"], ["u", "5u", "d"]],
    	'11edge': ["5r r 5b b", ["5b' b' 5r' r'", "5b' b' 5r' U2 r U2 r U2 r U2 r", "5b' b' r' U2 5r U2 5r U2 5r U2 5r", "5b' b' r2 U2 5r U2 5r U2 5r U2 5r U2 r"], ["u", "5u", "5d", "d"]],
    	'12edge': ["6r r 6b b", ["6b' b' 6r' r'", "6b' b' 6r' U2 r U2 r U2 r U2 r", "6b' b' r' U2 6r U2 6r U2 6r U2 6r", "6b' b' r2 U2 6r U2 6r U2 6r U2 6r U2 r"], ["u", "6u", "d"]],
    	'13edge': ["6r r 6b b", ["6b' b' 6r' r'", "6b' b' 6r' U2 r U2 r U2 r U2 r", "6b' b' r' U2 6r U2 6r U2 6r U2 6r", "6b' b' r2 U2 6r U2 6r U2 6r U2 6r U2 r"], ["u", "6u", "6d", "d"]],
    	'14edge': ["7r r 7b b", ["7b' b' 7r' r'", "7b' b' 7r' U2 r U2 r U2 r U2 r", "7b' b' r' U2 7r U2 7r U2 7r U2 7r", "7b' b' r2 U2 7r U2 7r U2 7r U2 7r U2 r"], ["u", "7u", "d"]],
    	'15edge': ["7r r 7b b", ["7b' b' 7r' r'", "7b' b' 7r' U2 r U2 r U2 r U2 r", "7b' b' r' U2 7r U2 7r U2 7r U2 7r", "7b' b' r2 U2 7r U2 7r U2 7r U2 7r U2 r"], ["u", "7u", "7d", "d"]]
	};




	function megascramble(type, length) {
		var value = args[type];
		switch (value.length) {
			case 1: return mega(value[0], [""], length);
			case 2: return mega(value[0], value[1], length);
			case 3: return mega(value[0], value[1], value[2]);
		}
	}

	function edgescramble(type, length) {
		var value = edges[type];
		return edge(value[0], value[1], value[2], length);
	}

	function formatScramble(type, length) {
		var value = args2[type].replace(/%l/g, length).replace(/%c/g, '["","2","\'"]');
		var ret = scramble.formatScramble(value,length,true,true);
		return ret;
	}

	/**
	for (var i in args) {
		scramble.reg(i, megascramble);
	}

	for (var i in args2) {
		scramble.reg(i, formatScramble);
	}

	for (var i in edges) {
		scramble.reg(i, edgescramble);
	}
	**/

	function edge(start, end, moves, len) {
		var u=0,d=0,movemis=[];
		var triggers=[["R","R'"],["R'","R"],["L","L'"],["L'","L"],["F'","F"],["F","F'"],["B","B'"],["B'","B"]];
		var ud=["U","D"];
		var scramble = start;
		// initialize move misalignments
		for (var i=0; i<moves.length; i++) {
			movemis[i] = 0;
		}

		for (var i=0; i<len; i++) {
			// apply random moves
			var done = false;
			while (!done) {
				var v = "";
				for (var j=0; j<moves.length; j++) {
					var x = rn(4);
					movemis[j] += x;
					if (x!=0) {
						done = true;
						v += " " + moves[j] + cubesuff[x-1];
					}
				}
			}
			// apply random trigger, update U/D
			var trigger = rn(8);
			var layer = rn(2);
			var turn = rn(3);
			scramble += v + " " + triggers[trigger][0] + " " + ud[layer] + cubesuff[turn] + " " + triggers[trigger][1];
			if (layer==0) {u += turn+1;}
			if (layer==1) {d += turn+1;}
		}

		// fix everything
		for (var i=0; i<moves.length; i++) {
			var x = 4-(movemis[i]%4);
			if (x<4) {
				scramble += " " + moves[i] + cubesuff[x-1];
			}
		}
		u = 4-(u%4); d = 4-(d%4);
		if (u<4) {
			scramble += " U" + cubesuff[u-1];
		}
		if (d<4) {
			scramble += " D" + cubesuff[d-1];
		}
		scramble += " " + rndEl(end);
		return scramble;
	}

	  function get444WCAScramble(n) {
	  	return megascramble("444wca", n);
	  }

  	  function get444SiGNScramble(n) {
	  	return megascramble("444", n);
	  }

	  function get555WCAScramble(n) {
	  	return megascramble("555wca", n);
	  }

  	  function get555SiGNScramble(n) {
	  	return megascramble("555", n);
	  }

	  function get444edgesScramble(n) {
	  	return edgescramble("4edge", n);
	  }

  	  function get555edgesScramble(n) {
	  	return edgescramble("5edge", n);
	  }

  	  function get666WCAScramble(n) {
	  	return megascramble("666wca", n);
	  }

  	  function get666SiGNScramble(n) {
	  	return megascramble("666si", n);
	  }

	  function get666edgesScramble(n) {
	  	return edgescramble("6edge", n);
	  }

	  function get777WCAScramble(n) {
	  	return megascramble("777wca", n);
	  }

  	  function get777SiGNScramble(n) {
	  	return megascramble("777si", n);
	  }

	  function get777edgesScramble(n) {
	  	return edgescramble("7edge", n);
	  }

 	  function get888WCAScramble(n){
	  	return megascramble("888wca", n);
	  }

	  function get888SiGNScramble(n){
	  	return megascramble("888si", n);
	  }

	  function get888edgesScramble(n){
	  	return megascramble("8edge", n);
	  }

 	  function get999WCAScramble(n){
	  	return megascramble("999wca", n);
	  }

	  function get999SiGNScramble(n){
	  	return megascramble("999si", n);
	  }

	  function get999edgesScramble(n){
	  	return megascramble("9edge", n);
	  }

 	  function get101010WCAScramble(n){
	  	return megascramble("101010wca", n);
	  }

	  function get101010SiGNScramble(n){
	  	return megascramble("101010si", n);
	  }

	  function get101010edgesScramble(n){
	  	return megascramble("10edge", n);
	  }

 	  function get111111WCAScramble(n){
	  	return megascramble("111111wca", n);
	  }

	  function get111111SiGNScramble(n){
	  	return megascramble("111111si", n);
	  }

	  function get111111edgesScramble(n){
	  	return megascramble("11edge", n);
	  }

 	  function get121212WCAScramble(n){
	  	return megascramble("121212wca", n);
	  }

	  function get121212SiGNScramble(n){
	  	return megascramble("121212si", n);
	  }

	  function get121212edgesScramble(n){
	  	return megascramble("12edge", n);
	  }

 	  function get131313WCAScramble(n){
	  	return megascramble("131313wca", n);
	  }

	  function get131313SiGNScramble(n){
	  	return megascramble("131313si", n);
	  }

	  function get131313edgesScramble(n){
	  	return megascramble("13edge", n);
	  }

 	  function get141414WCAScramble(n){
	  	return megascramble("141414wca", n);
	  }

	  function get141414SiGNScramble(n){
	  	return megascramble("141414si", n);
	  }

	  function get141414edgesScramble(n){
	  	return megascramble("14edge", n);
	  }

 	  function get151515WCAScramble(n){
	  	return megascramble("151515wca", n);
	  }

	  function get151515SiGNScramble(n){
	  	return megascramble("151515si", n);
	  }

	  function get151515edgesScramble(n){
	  	return megascramble("15edge", n);
	  }

	  function get333_2genRU_scramble(){
	  	return megascramble("2gen", 25);
	  }

	  function get333_2genLU_scramble(){
	  	return megascramble("2genl", 25);
	  }

	  function get333_2genMU_scramble(){
	  	return megascramble("roux", 25);
	  }

	  function get333_3genFRU_scramble(){
	  	return megascramble("3gen_F", 25);
	  }

	  function get333_3genRUL_scramble(){
	  	return megascramble("3gen_L", 25);
	  }

	  function get333_3genRrU_scramble(){
	  	return megascramble("RrU", 25);
	  }

	  function get333_halfTurns_scramble(){
	  	return megascramble("half", 25);
	  }

	  function getSkewbULRBScramble(){
	  	return megascramble("skb", 25);
	  }

	  function get332scramble(){
	  	return megascramble("233", 25);
	  }

	  function get334scramble(){
	  	return megascramble("334", 40);
	  }

	  function get336scramble(){
	  	return megascramble("336", 40);
	  }

	  function get335scramble(n){
	  	return formatScramble("335", n);
	  }

 	  function get337scramble(n){
	  	return formatScramble("337", n);
	  }

 	  function get112scramble(n){
	  	return formatScramble("112", n);
	  }

 	  function getSuperFloppyScramble(){
	  	return megascramble("sfl", 25);
	  }

	  return {
	    get444WCAScramble: get444WCAScramble,
	    get444SiGNScramble: get444SiGNScramble,
	    get444edgesScramble: get444edgesScramble,

	    get555WCAScramble: get555WCAScramble,
	    get555SiGNScramble: get555SiGNScramble,
	    get555edgesScramble: get555edgesScramble,

	    get666WCAScramble: get666WCAScramble,
	    get666SiGNScramble: get666SiGNScramble,
	    get666edgesScramble: get666edgesScramble,

	    get777WCAScramble: get777WCAScramble,
	    get777SiGNScramble: get777SiGNScramble,
	    get777edgesScramble: get777edgesScramble,

	    get888WCAScramble: get888WCAScramble,
	    get888SiGNScramble: get888SiGNScramble,
	    get888edgesScramble: get888edgesScramble,

	    get999WCAScramble: get999WCAScramble,
	    get999SiGNScramble: get999SiGNScramble,
	    get999edgesScramble: get999edgesScramble,

	    get101010WCAScramble: get101010WCAScramble,
	    get101010SiGNScramble: get101010SiGNScramble,
	    get101010edgesScramble: get101010edgesScramble,

	    get111111WCAScramble: get111111WCAScramble,
	    get111111SiGNScramble: get111111SiGNScramble,
	    get111111edgesScramble: get111111edgesScramble,

	    get121212WCAScramble: get121212WCAScramble,
	    get121212SiGNScramble: get121212SiGNScramble,
	    get121212edgesScramble: get121212edgesScramble,

	    get131313WCAScramble: get131313WCAScramble,
	    get131313SiGNScramble: get131313SiGNScramble,
	    get131313edgesScramble: get131313edgesScramble,

	    get141414WCAScramble: get141414WCAScramble,
	    get141414SiGNScramble: get141414SiGNScramble,
	    get141414edgesScramble: get141414edgesScramble,

	    get151515WCAScramble: get151515WCAScramble,
	    get151515SiGNScramble: get151515SiGNScramble,
	    get151515edgesScramble: get151515edgesScramble,

	    get333_2genRU_scramble: get333_2genRU_scramble,
	    get333_2genLU_scramble: get333_2genLU_scramble,
	    get333_2genMU_scramble: get333_2genMU_scramble,
	    get333_3genFRU_scramble: get333_3genFRU_scramble,
	    get333_3genRUL_scramble: get333_3genRUL_scramble,
	    get333_3genRrU_scramble: get333_3genRrU_scramble,
	    get333_halfTurns_scramble: get333_halfTurns_scramble,

	    getSkewbULRBScramble: getSkewbULRBScramble,

	    get332scramble: get332scramble,
	    get334scramble: get334scramble,
	    get336scramble: get336scramble,
	    get335scramble: get335scramble,
	    get337scramble: get337scramble,
	    get112scramble: get112scramble,
	    getSuperFloppyScramble: getSuperFloppyScramble,

	  };

})(scramble.mega, mathlib.rn, mathlib.rndEl);