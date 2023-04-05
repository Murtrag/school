$(()=>{
	$('#controlers #x_num').on('change', (el)=>{
		const unknownNumber = $(el.target).val();
		$('#equation').append(equationTemplate(1, 0))
	})
	$('#controlers #eq_num').on('change', (el)=>{
		console.log('more eq');
		console.log($(el.target).val())
	})
})
