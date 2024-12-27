function calculateSum() {

		
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;

		let pimg = [];
		pimg[0] = '';
		pimg[1] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/01.jpg';
		pimg[2] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/02.jpg';
		pimg[3] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/03.jpg';
		pimg[4] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/04.jpg';
		pimg[5] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/05.jpg';
		pimg[6] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/06.jpg';
		pimg[7] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/07.jpg';
		pimg[8] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/08.jpg';
		pimg[9] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/09.jpg';
		pimg[10] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/10.jpg';
		pimg[11] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/11.jpg';
		pimg[12] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/12.jpg';
		pimg[13] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/13.jpg';
		pimg[14] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/14.jpg';
		pimg[15] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/15.jpg';
		pimg[16] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/16.jpg';
		pimg[17] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/17.jpg';
		pimg[18] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/18.jpg';
		pimg[19] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/19.jpg';
		pimg[20] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/20.jpg';
		pimg[21] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/21.jpg';
		pimg[22] =	'https://raw.githubusercontent.com/taronumerologie/taronumerologie.github.io/refs/heads/main/img/22.jpg';


		

		// [1] [2] Получаем значения
		result01 = parseInt(birthdate);
		while ( result01 > 22 ) { result01 = result01 - 22 };
		result02 = parseInt(birthmonth);
		while ( result02 > 22 ) { result02 = result02 - 22 };

		// [3]
		var yearsum = 0;
		for (var i = 0; i < birthyear.length; i++) {
			yearsum += parseInt(birthyear[i]);
		}
		result03 = yearsum;
		while ( result03 > 22 ) { result03 = result03 - 22 };

		// [4]
		result04 = result01 + result02
		if ( result04 == 0 ) { result04 = 22 };
		while ( result04 > 22 ) { result04 = result04 - 22 };

		// [5]
		result05 = result02 + result03
		if ( result05 > 22 ) { result05 = result05 - 22 };
		if ( result05 == 0 ) { result05 = 22 };
		while ( result05 > 22 ) { result05 = result05 - 22 };

		// [6]
		result06 = result04 + result05
		if ( result06 == 0 ) { result06 = 22 };
		while ( result06 > 22 ) { result06 = result06 - 22 };

		// [7]
		result07 = result01 + result05
		if ( result07 == 0 ) { result07 = 22 };
		while ( result07 > 22 ) { result07 = result07 - 22 };

		// [8]
		result08 = result02 + result06
		if ( result08 == 0 ) { result08 = 22 };
		while ( result08 > 22 ) { result08 = result08 - 22 };

		// [9]
		result09 = result07 + result08
		if ( result09 == 0 ) { result09 = 22 };
		while ( result09 > 22 ) { result09 = result09 - 22 };

		// [10]
		result10 = result01 + result04 + result06
		if ( result10 == 0 ) { result10 = 22 };
		while ( result10 > 22 ) { result10 = result10 - 22 };

		// [11]
		result11 = result03 + result05 + result06
		if ( result11 == 0 ) { result11 = 22 };
		while ( result11 > 22 ) { result11 = result11 - 22 };

		// [12]
		result12 = result01 + result02 + result03 + result04 + result05 + result06
		if ( result12 == 0 ) { result12 = 22 };
		while ( result12 > 22 ) { result12 = result12 - 22 };


		

		// [13]
		result13 = result01 - result02
		if ( result13 < 0 ) { result13 = result13 - result13 - result13 };
		if ( result13 == 0 ) { result13 = 22 };
		while ( result13 > 22 ) { result13 = result13 - 22 };

		// [14]
		result14 = result02 - result03
		if ( result14 < 0 ) { result14 = result14 - result14 - result14 };
		if ( result14 == 0 ) { result14 = 22 };
		while ( result14 > 22 ) { result14 = result14 - 22 };

		// [15]
		result15 = result13 - result14
		if ( result15 < 0 ) { result15 = result15 - result15 - result15 };
		if ( result15 == 0 ) { result15 = 22 };
		while ( result15 > 22 ) { result15 = result15 - 22 };

		// [16]
		result16 = ( result13 + result14 + result15 ) - result07
		if ( result16 < 0 ) { result16 = result16 - result16 - result16 };
		if ( result16 == 0 ) { result16 = 22 };
		while ( result16 > 22 ) { result16 = result16 - 22 };

		// [17]
		result17 = result13 + result14 + result15
		if ( result17 == 0 ) { result17 = 22 };
		while ( result17 > 22 ) { result17 = result17 - 22 };

		// [18]
		result18 = result01 + result03 + result04 + result05
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		if ( result18 == 0 ) { result18 = 22 };
		while ( result18 > 22 ) { result18 = result18 - 22 };

		// [19]
		result19 = result15 + result06
		if ( result19 < 0 ) { result19 = result19 - result19 - result19 };
		if ( result19 == 0 ) { result19 = 22 };
		while ( result19 > 22 ) { result19 = result19 - 22 };

		// [20]
		result20 = result15 + result08
		if ( result20 < 0 ) { result20 = result20 - result20 - result20 };
		if ( result20 == 0 ) { result20 = 22 };
		while ( result20 > 22 ) { result20 = result20 - 22 };

		// [21]
		result21 = result01 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result21 > 22 ) { result21 = result21 - 22 };

		// [22]
		result22 = result02 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result22 > 22 ) { result22 = result22 - 22 };

		// [23]
		result23 = result05 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result23 > 22 ) { result23 = result23 - 22 };

		// [24]
		result24 = result06 + 10
		//if ( result13 > 22 ) { result13 = result12 - 22 };
		while ( result24 > 22 ) { result24 = result24 - 22 };

		
		document.getElementById('rr01').textContent = convertToRoman(result01);
			document.getElementById('rs01').textContent = convertToSub(result01);
			document.getElementById('ri01').src = pimg[result01];
		document.getElementById('rr02').textContent = convertToRoman(result02);
			document.getElementById('rs02').textContent = convertToSub(result02);
			document.getElementById('ri02').src = pimg[result02];
		document.getElementById('rr03').textContent = convertToRoman(result03);
			document.getElementById('rs03').textContent = convertToSub(result03);
			document.getElementById('ri03').src = pimg[result03];
		document.getElementById('rr04').textContent = convertToRoman(result04);
			document.getElementById('rs04').textContent = convertToSub(result04);
			document.getElementById('ri04').src = pimg[result04];
		document.getElementById('rr05').textContent = convertToRoman(result05);
			document.getElementById('rs05').textContent = convertToSub(result05);
			document.getElementById('ri05').src = pimg[result05];
		document.getElementById('rr06').textContent = convertToRoman(result06);
			document.getElementById('rs06').textContent = convertToSub(result06);
			document.getElementById('ri06').src = pimg[result06];
		document.getElementById('rr07').textContent = convertToRoman(result07);
			document.getElementById('rs07').textContent = convertToSub(result07);
			document.getElementById('ri07').src = pimg[result07];
		document.getElementById('rr08').textContent = convertToRoman(result08);
			document.getElementById('rs08').textContent = convertToSub(result08);
			document.getElementById('ri08').src = pimg[result08];
		document.getElementById('rr09').textContent = convertToRoman(result09);
			document.getElementById('rs09').textContent = convertToSub(result09);
			document.getElementById('ri09').src = pimg[result09];
		document.getElementById('rr10').textContent = convertToRoman(result10);
			document.getElementById('rs10').textContent = convertToSub(result10);
			document.getElementById('ri10').src = pimg[result10];
		document.getElementById('rr11').textContent = convertToRoman(result11);
			document.getElementById('rs11').textContent = convertToSub(result11);
			document.getElementById('ri11').src = pimg[result11];
		document.getElementById('rr12').textContent = convertToRoman(result12);
			document.getElementById('rs12').textContent = convertToSub(result12);
			document.getElementById('ri12').src = pimg[result12];
		document.getElementById('rr13').textContent = convertToRoman(result13);
			document.getElementById('rs13').textContent = convertToSub(result13);
			document.getElementById('ri13').src = pimg[result13];
		document.getElementById('rr14').textContent = convertToRoman(result14);
			document.getElementById('rs14').textContent = convertToSub(result14);
			document.getElementById('ri14').src = pimg[result14];
		document.getElementById('rr15').textContent = convertToRoman(result15);
			document.getElementById('rs15').textContent = convertToSub(result15);
			document.getElementById('ri15').src = pimg[result15];


		document.getElementById('kr13').textContent = convertToRoman(result13);
			document.getElementById('ks13').textContent = convertToSub(result13);
			document.getElementById('ki13').src = pimg[result13];
		document.getElementById('kr14').textContent = convertToRoman(result14);
			document.getElementById('ks14').textContent = convertToSub(result14);
			document.getElementById('ki14').src = pimg[result14];
		document.getElementById('kr15').textContent = convertToRoman(result15);
			document.getElementById('ks15').textContent = convertToSub(result15);
			document.getElementById('ki15').src = pimg[result15];
		document.getElementById('kr16').textContent = convertToRoman(result16);
			document.getElementById('ks16').textContent = convertToSub(result16);
			document.getElementById('ki16').src = pimg[result16];
		document.getElementById('kr17').textContent = convertToRoman(result17);
			document.getElementById('ks17').textContent = convertToSub(result17);
			document.getElementById('ki17').src = pimg[result17];
		document.getElementById('kr18').textContent = convertToRoman(result18);
			document.getElementById('ks18').textContent = convertToSub(result18);
			document.getElementById('ki18').src = pimg[result18];
		document.getElementById('kr19').textContent = convertToRoman(result19);
			document.getElementById('ks19').textContent = convertToSub(result19);
			document.getElementById('ki19').src = pimg[result19];
		document.getElementById('kr20').textContent = convertToRoman(result20);
			document.getElementById('ks20').textContent = convertToSub(result20);
			document.getElementById('ki20').src = pimg[result20];
		document.getElementById('kr21').textContent = convertToRoman(result21);
			document.getElementById('ks21').textContent = convertToSub(result21);
			document.getElementById('ki21').src = pimg[result21];
		document.getElementById('kr22').textContent = convertToRoman(result22);
			document.getElementById('ks22').textContent = convertToSub(result22);
			document.getElementById('ki22').src = pimg[result22];
		document.getElementById('kr23').textContent = convertToRoman(result23);
			document.getElementById('ks23').textContent = convertToSub(result23);
			document.getElementById('ki23').src = pimg[result23];
		document.getElementById('kr24').textContent = convertToRoman(result24);
			document.getElementById('ks24').textContent = convertToSub(result24);
			document.getElementById('ki24').src = pimg[result24];


		

		shadow01 = result01 + result04;  // alpha
			while ( shadow01 > 22 ) { shadow01 = shadow01 - 22 };
		shadow02 = result02 + result04;  // betta
			while ( shadow02 > 22 ) { shadow02 = shadow02 - 22 };
		shadow03 = result02 + result05;  // gamma
			while ( shadow03 > 22 ) { shadow03 = shadow03 - 22 };
		shadow04 = result03 + result05;  // delta
			while ( shadow04 > 22 ) { shadow04 = shadow04 - 22 };
		shadow05 = result04 + result06;  // epsilon
			while ( shadow05 > 22 ) { shadow05 = shadow05 - 22 };
		shadow06 = result05 + result06;  // dzeta
			while ( shadow06 > 22 ) { shadow06 = shadow06 - 22 };
		shadow07 = result06 + 15;  // yota
			while ( shadow07 > 22 ) { shadow07 = shadow07 - 22 };
		shadow08 = result05 + 15;  // Kappa
			while ( shadow08 > 22 ) { shadow08 = shadow08 - 22 };
		shadow09 = shadow01 + shadow05;  // lambda
			while ( shadow09 > 22 ) { shadow09 = shadow09 - 22 };
		shadow10 = result04 + 15;  // Pi
			while ( shadow10 > 22 ) { shadow10 = shadow10 - 22 };
		shadow11 = shadow02 + shadow06;  // Sigma
			while ( shadow11 > 22 ) { shadow11 = shadow11 - 22 };
		shadow12 = shadow03 + shadow04;  // Omega
			while ( shadow12 > 22 ) { shadow12 = shadow12 - 22 };


		
		document.getElementById('sr01').textContent = convertToRoman(shadow01); // alpha
			document.getElementById('st01').textContent = convertToSub(shadow01);
			document.getElementById('si01').src = pimg[shadow01];
		document.getElementById('sr02').textContent = convertToRoman(shadow02); // betta
			document.getElementById('st02').textContent = convertToSub(shadow02);
			document.getElementById('si02').src = pimg[shadow02];
		document.getElementById('sr03').textContent = convertToRoman(shadow03); // gamma
			document.getElementById('st03').textContent = convertToSub(shadow03);
			document.getElementById('si03').src = pimg[shadow03];
		document.getElementById('sr04').textContent = convertToRoman(shadow04); // delta
			document.getElementById('st04').textContent = convertToSub(shadow04);
			document.getElementById('si04').src = pimg[shadow04];
		document.getElementById('sr05').textContent = convertToRoman(shadow05); // epsilon
			document.getElementById('st05').textContent = convertToSub(shadow05);
			document.getElementById('si05').src = pimg[shadow05];
		document.getElementById('sr06').textContent = convertToRoman(shadow06); // dzeta
			document.getElementById('st06').textContent = convertToSub(shadow06);
			document.getElementById('si06').src = pimg[shadow06];
		document.getElementById('sr07').textContent = convertToRoman(shadow07); // yota
			document.getElementById('st07').textContent = convertToSub(shadow07);
			document.getElementById('si07').src = pimg[shadow07];
		document.getElementById('sr08').textContent = convertToRoman(shadow08); // Kappa
			document.getElementById('st08').textContent = convertToSub(shadow08);
			document.getElementById('si08').src = pimg[shadow08];
		document.getElementById('sr09').textContent = convertToRoman(shadow09); // lambda
			document.getElementById('st09').textContent = convertToSub(shadow09);
			document.getElementById('si09').src = pimg[shadow09];
		document.getElementById('sr10').textContent = convertToRoman(shadow10); // Pi
			document.getElementById('st10').textContent = convertToSub(shadow10);
			document.getElementById('si10').src = pimg[shadow10];
		document.getElementById('sr11').textContent = convertToRoman(shadow11); // Sigma
			document.getElementById('st11').textContent = convertToSub(shadow11);
			document.getElementById('si11').src = pimg[shadow11];
		document.getElementById('sr12').textContent = convertToRoman(shadow12); // Omega
			document.getElementById('st12').textContent = convertToSub(shadow12);
			document.getElementById('si12').src = pimg[shadow12];

}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}


function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}

document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('btnradio1').addEventListener('click', function() {
		document.getElementById('r01').classList.toggle('axismint');
		document.getElementById('r06').classList.toggle('axismint');
		document.getElementById('r08').classList.toggle('axismint');
		document.getElementById('r10').classList.toggle('axismint');
	});

	document.getElementById('btnradio2').addEventListener('click', function() {
		document.getElementById('r02').classList.toggle('axislavender');
		document.getElementById('r05').classList.toggle('axislavender');
		document.getElementById('r09').classList.toggle('axislavender');
		document.getElementById('r12').classList.toggle('axislavender');
	});

	document.getElementById('btnradio3').addEventListener('click', function() {
		document.getElementById('r03').classList.toggle('axisslate');
		document.getElementById('r04').classList.toggle('axisslate');
		document.getElementById('r07').classList.toggle('axisslate');
		document.getElementById('r11').classList.toggle('axisslate');
	});

	document.getElementById('btnradio4').addEventListener('click', function() {
		document.getElementById('r01').classList.toggle('axispeach');
		document.getElementById('r02').classList.toggle('axispeach');
		document.getElementById('r03').classList.toggle('axispeach');
		document.getElementById('r04').classList.toggle('axispeach');
		document.getElementById('r05').classList.toggle('axispeach');
		document.getElementById('r06').classList.toggle('axispeach');
	});

	document.getElementById('btnradio5').addEventListener('click', function() {
		document.getElementById('r13').classList.toggle('d-none');
		document.getElementById('r14').classList.toggle('d-none');
		document.getElementById('r15').classList.toggle('d-none');
	});

});
