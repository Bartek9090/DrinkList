const search = document.querySelector('.search')
const li = document.querySelectorAll('li')

const searchEngine = e => {
	const inputValue = e.target.value.toLowerCase();

	li.forEach(el => {
		const elLower = el.textContent;

		if (elLower.toLowerCase().indexOf(inputValue) !== -1){
			el.style.display = 'block'
		} else {
			el.style.display = 'none'

		}
	})

}


search.addEventListener('keyup', searchEngine)