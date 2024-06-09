'use strict'

function getElementWidth(content, padding, border) {
	//  parseFloat konwertuje ciąg znaków na liczbę
	const contentWidth = Number.parseFloat(content)
	const paddingWidth = Number.parseFloat(padding) * 2 // Liczymy dwa boki, więc razy dwa
	const borderWidth = Number.parseFloat(border) * 2 // Tutaj też liczymy dwa boki, więc razy dwa

	// Wszystkie liczby razem, aby uzyskać całkowitą szerokość
	const totalWidth = contentWidth + paddingWidth + borderWidth

	// Wynik jako liczba całkowita, zaokrąglona do najbliższej całkowitej
	return Math.round(totalWidth)
}

// Testy, które pokazują, jak funkcja działa
console.log(getElementWidth('50px', '8px', '4px')) // 74
console.log(getElementWidth('60px', '12px', '8.5px')) // 101
console.log(getElementWidth('200px', '0px', '0px')) // 200
