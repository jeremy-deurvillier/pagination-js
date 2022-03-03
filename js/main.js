/* ** Point d'entrée de l'application.
* 
* TODO : Splitset
* 	- Travailler le thème arrow
* 	- Voir design personnalisable pour thème input (dans config ?)
*/

function changepage(wrapper, page) {
	let parent = wrapper.querySelector('[data-pagination-navigation] > ul')
	let selector = '[data-pagination-page="' + page + '"]'
	
	for (let item = 0; item < parent.children.length; item ++) {
		parent.children[item].setAttribute('class', '')
	}
	
	if (parent.querySelector(selector)) {
		parent.querySelector(selector).parentNode.setAttribute('class', 'active')
	}
}

/* ** Ajoute une clé pour chaque donnée.
* */
function setAddedbyKey(elm) {
	const authors = ['Jérémy D.', 'Jean D.', 'Hanna L.', 'Clara B.']
	let random = Math.floor(Math.random() * (authors.length - 0)) + 0
	
	elm['added-by'] = authors[random]
	
	return elm
}

let config = {
	navclass: 'pagination row>col s1'
}

let config1 = {
	navclass: 'pagination',
	limit: 6,
	callbacks: {
		init: setAddedbyKey,
		setpage: changepage
	}
}

document.addEventListener('DOMContentLoaded', function() {
	let modals = document.querySelectorAll('.modal')
	let modal_instances = M.Modal.init(modals, {})
})

let marvelWithOptions = new Pagination('heroes-list-with-options', bdd, config1)
