const countWords = (text) => {
	let textArr = text.replace(/[^0-9a-z\s]/gi, '').split(' ')
	const textMap = textArr.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map())

	// to get the pairs [element, frequency]
	let results = [...textMap.entries()]
	let bucket = []

	results.forEach((element) => {
		if (parseInt(element[1]) > 1) {
			bucket.push(element[0].toLowerCase() + ':' + element[1])
		}
	})

	bucket.sort().forEach((element) => {
		console.log(`"${element.split(':')[0]}":${element.split(':')[1]}`)
	})

    return bucket
}

const sentence = 'I am a very very nice man, am I not? What do you think? I think I am!'
countWords(sentence)
