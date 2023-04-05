const result = () => $(`<input type="text" >`).prop('outerHTML')
const unknown = (name) => ${`<span><input type="text">x<sub>${name}</sub></span>`}

const equationTemplate = (unknownNumber, equationNumber) => {
	console.log(unknownNumber);
	return $(` <p><label><input type="text" >x</label> = ${result()}</p>`)
}
