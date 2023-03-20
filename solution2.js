const parseText = (text) => {
	const textArr = text.replace(/[^0-9a-z\s]/gi, '').split(' ')
	let frequencyObj = {}

	for (const word of textArr) {
		if (word in frequencyObj) {
			frequencyObj[word]++
		} else {
			frequencyObj[word] = 1
		}
	}

	const sortedObj = Object.fromEntries(
		Object.entries(frequencyObj).sort((a, b) => a[0].localeCompare(b[0]))
	)

	for (let word in sortedObj) {
		if (sortedObj[word] > 1) {
			console.log(`"${word}": ${sortedObj[word]}`)
		}
	}
}

const sentence = 'I am a very very nice man, am I not? What do you think? I think I am!.'
parseText(sentence)
