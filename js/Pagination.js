/* ** Gestion de la pagination d'une liste d'objets.
* Prends en charge le tri par ordre croissant et décroissant, sur plusieurs critères personnalisables.
*/

function Pagination(wrapper, data, config) {
	if (this.checkWrapper(wrapper)) {
		if (data instanceof Array) {
			this.datalist = JSON.parse(JSON.stringify(data))
			this.maxpage = Math.ceil(this.datalist.length / this.limit)
		} else {
			this.datalist = []
			this.maxpage = 1
			
			console.log('%cPagination : The second parameter of the init function must be an array.', 'color:white;background-color:red;padding:5px;')
		}
		
		this.datalistcopy = JSON.parse(JSON.stringify(this.datalist))
		
		if (this.checkConfig(config)) {
			if (config !== undefined) {
				this.config = config
				
				if (config.navclass) this.navClass = config.navclass
				if (config.limit) this.limit = config.limit
			}
		} else {
			console.log('%cPagination : The configuration appears to be incorrect. Check documentation.', 'color:white;background-color:red;padding:5px;')
		}
		
		if (this.limit == null) this.limit = 5
		
		this.themeSelection()
		this.sortingOptions()
		this.setPage(1)
		
		if (this.nav !== null && data instanceof Array) {
			this.ready = true
		} else {
			this.ready = false
		}
		
		if (this.config && this.config.callbacks && this.config.callbacks.init) {
			this.forEach(this.config.callbacks.init)
		}
		
		this.render()
	} else {
		console.log('%cPagination : The wrapper does not contain the required elements. Check documentation.', 'color:white;background-color:red;padding:5px;')
	}
}

Pagination.prototype.datalist = null // Liste des objets à paginer, immuable
Pagination.prototype.datalistcopy = null // Copie de la liste des objets à paginer, utile pour les fonctions de tri
Pagination.prototype.config = null // Configuration de la pagination, optionnelle
Pagination.prototype.ready = null // Indique si les données utilisateur sont prêtes
Pagination.prototype.page = null // Page actuellement affichée
Pagination.prototype.limit = null // Nombre d'objets par page
Pagination.prototype.maxpage = null // Nombe de page totale
Pagination.prototype.truncate = null // Nombre de caractères affichés pour un élément de datalistcopy

Pagination.prototype.wrapper = null // Élément HTML contenant tous les éléments HTML nécessaire pour la Pagination
Pagination.prototype.container = null // Élément HTML contenant la liste d'objet
Pagination.prototype.itemView = null // Représentation HTML d'un objet de _datalistcopy
Pagination.prototype.navigationContainer = null // Le container des liens de navigation
Pagination.prototype.theme = null // Le thème à utilisé pour la navigation de la pagination
Pagination.prototype.nav = null // Contient les liens de navigation
Pagination.prototype.navClass = null // La classe CSS qui doit être attribuée aux boutons de navigation

Pagination.prototype.single = null // Contient le contenu détaillé d'un item de this.datalist
Pagination.prototype.filter = null // Contient l'élément HTML pour filtrer this.datalist
Pagination.prototype.direction = null // Contient l'élément HTML pour définir l'ordre d'affichage des éléments filtrés par this.filter
Pagination.prototype.research = null // Contient l'élément HTML pour éffectuer une recherche sur les éléments de this.datalist

/* ** Vérifie que le wrapper contient bien les éléments HTML requis.
* Le wrapper doit obligatoirement contenir deux (2) éléments :
* 	- un élément avec l'attribut data-pagination-container
* 	- un élément avec l'attribut data-pagination-navigation
* Le wrapper peut, optionnellement, contenir deux (2) autres élements :
* 	-  un élément avec l'attribut data-pagination-options
* 	-  un élément avec l'attribut data-pagination-single
* 
* L'élément ayant pour attribut data-pagination-container doit obligatoirement avoir un élément enfant ayant l'attribut data-pagination-template=item
* 
* @param String wrapper Le nom du wrapper, contenu dans l'attribut data-pagination-wrapper.
* 
* @return Boolean Retourne true si le wrapper et son contenu sont corrects, false sinon.
* */
Pagination.prototype.checkWrapper = function(wrapper) {
	let selector = '[data-pagination-wrapper=' + wrapper + ']'
	let wrapperElm = document.querySelector(selector)
	
	let singleElm // Éléments  optionnels
	let containerElm, navigationElm, templateElm // Éléments obligatoires
	
	if (wrapperElm) {
		containerElm = wrapperElm.querySelector('[data-pagination-container]')
		navigationElm = wrapperElm.querySelector('[data-pagination-navigation]')
		
		// Traitement des éléments optionnels
		singleElm = wrapperElm.querySelector('[data-pagination-single=single]')
		
		if (singleElm) {
			this.single = singleElm
		}
		
		this.optionsElements(wrapperElm.querySelector('[data-pagination-options]'))
		
		// Traitement des éléments obligatoires
		if (containerElm && navigationElm) {
			templateElm = containerElm.querySelector('[data-pagination-template=item]')
			
			if (templateElm) {
				this.wrapper = wrapperElm
				this.container = containerElm
				this.navigationContainer = navigationElm
				
				this.setItemView(templateElm)
				this.checkNavigationTheme(navigationElm.dataset.paginationNavigation)
				
				return true
			}
		}
	}
	
	return false
}

/* ** Stocke les éléments HTML pour le filtrage et le tri des éléments de this.datalist.
* 
* @param HTMLElement optionsElm Un élément HTML, contenant les options de filtrage et de tri.
* */
Pagination.prototype.optionsElements = function(optionsElm) {
	let filterInput, dirInput, searchInput
	
	if (optionsElm) {
		filterInput = optionsElm.querySelector('[data-pagination-filter]')
		dirInput = optionsElm.querySelector('[data-pagination-dir]')
		searchInput = optionsElm.querySelector('[data-pagination-search]')
		
		if (filterInput) this.filter = filterInput
		if (dirInput) this.direction = dirInput
		if (searchInput) this.research = searchInput
	}
}

/* ** Vérifie que le thème choisi existe.
* Si le thème n'existe pas, le thème Counter est choisi par défaut.
* 
* @param String theme Le nom du thème à utilisé.
* */
Pagination.prototype.checkNavigationTheme = function(theme) {
	let themes_list = ['counter', 'input', 'arrow']
	
	if (themes_list.indexOf(theme) > -1) {
		this.theme = theme
	} else {
		this.theme = 'counter'
		
		console.log('%cPagination : The chosen theme (' + theme + ') does not exist.', 'color:white;background-color:red;padding:5px;')
	}
}

/* ** Vérifie la configuration.
* 
* @param Object config La configuration choisie.
* 
* @return Boolean Renvoie true si la configuration ne contient pas d'erreur, false sinon.
* */
Pagination.prototype.checkConfig = function(config) {
	let callbacks_available = ['init', 'setpage']
	let callbacks, property, pos
	
	if (config !== undefined) {
		if (config != null) {
			if (config.callbacks) {
				callbacks = config.callbacks
				
				for (property in callbacks) {
					pos = callbacks_available.indexOf(property)
					
					if (pos == -1) {
						console.log('%cPagination : Key "' + property + '" is not allowed.', 'color:white;background-color:red;padding:5px;')
						
						return false
					} else {
						if (!(callbacks[property] instanceof Function)) {
							console.log('%cPagination : The "' + callbacks[property] + '" function does not exist.', 'color:white;background-color:red;padding:5px;')
							
							return false
						}
					}
				}
			}
		} else {
			console.log('%cPagination : The configuration is null.', 'color:white;background-color:red;padding:5px;')
		}
	}
	
	return true
}

/* ** Parcourt l'ensemble des données de this.datalist.
* Pour chaque élément de l'ensemble appelle une fonction de rappel.
* 
* @param Function callback Une fonction de rappel, appelé pour chaque élément de l'ensemble.
* */
Pagination.prototype.forEach = function(callback) {
	var item = 0, elmset
	
	if (this.ready && callback instanceof Function) {
		for (; item < this.datalist.length; item ++) {
			elmset = callback(this.datalist[item])
			
			this.datalist[item] = elmset
			this.datalistcopy[item] = elmset
		}
	}
}

/* ** Supprime tous les enfants d'un élément HTML.
* */
Pagination.prototype.removeChild = function(elm) {
	if (elm !== null) {
		while (elm.children.length > 0) {
			elm.removeChild(elm.lastChild)
		}
	}
}

/* ** Stocke la représentation HTML d'un item de this.datalist dans this.itemView.
* Supprime les enfants du this.container
* 
* @param HTMLElement itemview Un élément HTML.
* */
Pagination.prototype.setItemView = function(itemview) {
	this.itemView = itemview.cloneNode(true)
	this.itemView.removeAttribute('style')
	
	// On supprime l'itemview.
	this.removeChild(this.container)
}

/* ** Modifie la page actuellement affichée.
* 
* @param Integer page La nouvelle page à affichée.
* */
Pagination.prototype.setPage = function(page) {
	var max_page = Math.ceil(this.datalistcopy.length / this.limit)
	
	if (page > 0 && page <= max_page) {
		this.page = page
	} else {
		this.page = 1
	}
	
	if (this.config && this.config.callbacks && this.config.callbacks.setpage) this.config.callbacks.setpage(this.wrapper, this.page)
}

/* ** Sélectionne le thème pour les liens de navigation de la pagination.
* Appel la méthode de création des liens de navigation correspondant.
* Par défaut, le thème "Counter" est utilisé.
* */
Pagination.prototype.themeSelection = function() {
	let themes_list = ['counter', 'input', 'arrow']
	let navigation, theme
	
	switch (this.theme) {
		case 'counter':
			this.nav = this.theme_counter()
			break
		case 'input':
			this.nav = this.theme_input()
			break
		case 'arrow':
			this.nav = this.theme_arrow()
			break
		default:
			this.nav = this.theme_counter()
	}
	
	this.navigationContainer.appendChild(this.nav)
	
}

/* ** Créé les liens de navigation pour le thème Counter.
* */
Pagination.prototype.theme_counter = function() {
	let self = this
	
	let nav = document.createElement('ul')
	let wrapperClass, childClass
	let page_wrapper, page_number, text_page, counter = 0
	let maxpage = Math.ceil(this.datalistcopy.length / this.limit)
	
	if (this.navClass !== null) {
		if (this.navClass.indexOf('>') > -1) {
			wrapperClass = this.navClass.split('>')[0]
			childClass = this.navClass.split('>')[1]
		} else {
			wrapperClass = this.navClass
			childClass = 'pagination-navigation'
		}
	} else {
		wrapperClass = 'pagination-navigation-container'
		childClass = 'pagination-navigation'
	}
	
	nav.setAttribute('class', wrapperClass)
	
	for (; counter < maxpage; counter ++) {
		page_wrapper = document.createElement('li')
		page_number = document.createElement('a')
		text_page = document.createTextNode(counter + 1)
		
		page_number.setAttribute('href', '#pagination-page=' + (counter + 1))
		page_number.setAttribute('class', childClass)
		page_number.setAttribute('data-pagination-page',(counter + 1))
		page_number.addEventListener(
			'click',
			function(e) {
				e.preventDefault()
				
				self.setPage(Number.parseInt(this.href.split('=')[1]))
				self.render()
				
			}
		)
		
		page_number.appendChild(text_page)
		page_wrapper.appendChild(page_number)
		nav.appendChild(page_wrapper)
	}
	
	return nav
}

/* ** Créé les liens de navigation pour le thème Input.
* */
Pagination.prototype.theme_input = function() {
	let self = this
	
	let nav = document.createElement('ul')
	let prev = document.createElement('li')
	let prevlink = document.createElement('a')
	let prevText = document.createTextNode('prev')
	let actualpage = document.createElement('li')
	let input = document.createElement('span') // L'input est un élément HTML SPAN éditable
	let inputCSS = 'display:inline-block; min-width:42px; max-width:42px; min-height:32px; max-height:32px; border:1px solid black; overflow:hidden; padding:4px;'
	let totalpage = document.createElement('span')
	let maxpage = Math.ceil(this.datalistcopy.length / this.limit)
	let totalpageText = document.createTextNode(' / ' + maxpage)
	let next = document.createElement('li')
	let nextlink = document.createElement('a')
	let nextText = document.createTextNode('next')
	
	let wrapperClass, childClass
	let listnav = [prev, actualpage, next], item = 0, elm
	
	if (this.navClass !== null) {
		if (this.navClass.indexOf('>') > -1) {
			wrapperClass = this.navClass.split('>')[0]
			childClass = this.navClass.split('>')[1]
		} else {
			wrapperClass = this.navClass
			childClass = 'pagination-navigation'
		}
	} else {
		wrapperClass = 'pagination-navigation-container'
		childClass = 'pagination-navigation'
	}
	
	nav.setAttribute('class', wrapperClass)
	
	prev.setAttribute('style', 'padding: 5px;')
	prevlink.setAttribute('href', '#')
	input.innerHTML = 1
	input.setAttribute('contenteditable', 'true')
	input.setAttribute('style', inputCSS + 'vertical-align:middle;')
	next.setAttribute('style', 'padding: 5px;')
	nextlink.setAttribute('href', '#')
	
	input.addEventListener(
		'keyup',
		function(e) {
			let value
			
			if (e.keyCode == 13) {
				value = Number.parseInt(this.innerHTML)
				
				self.setPage(value)
				self.render()
				
				this.innerHTML = self.page
			}
		}
	)
	
	prevlink.appendChild(prevText)
	prev.appendChild(prevlink)
	actualpage.appendChild(input)
	totalpage.appendChild(totalpageText)
	actualpage.appendChild(totalpage)
	nextlink.appendChild(nextText)
	next.appendChild(nextlink)
	
	for (; item < listnav.length; item ++) {
		elm = listnav[item]
		
		elm.setAttribute('class', childClass)
		
		nav.appendChild(elm)
	}
	
	return nav
}

/* ** Créé les liens de navigation pour le thème Arrow.
* */
Pagination.prototype.theme_arrow = function() {}

/* **  Utilise un élément HTML qui va représenter un élément de _datalist.
* 
* @param Object obj Un objet à représenter visuellement dans le DOM.
* @param Integer pos La position de l'élément dans this.datalistcopy.
* 
* @return HTMLElement Un élément HTML.
* */
Pagination.prototype.createElement = function(obj, pos) {
	let self = this
	let props = Object.keys(obj)
	let clone, tags, tag, datas, property, found, element, attrList, attrElm, attr, node, link, regex, regex_matched, regex_replace
	
	clone = this.itemView
	tags = clone.querySelectorAll('[data-pagination]')
	
	for (let item = 0; item < tags.length; item ++) {
		tag = tags[item]
		datas = tag.dataset.pagination.split('.')
		property, found = obj
		
		if (datas[0] != 'attr' && datas[0] != 'target') {
			for (let pos = 0; pos < datas.length; pos ++) {
				property = datas[pos]
				found = found[property]
				
				if (found == undefined) {
					console.log('%cPagination : The "' + property + '" key does not exist.', 'color:white;background-color:red;padding:5px;')
					break
				}
			}
			
			tag.innerHTML = found
		}
	}

	element = clone.cloneNode(true)
	
	regex = /(?:\({2})+(?:\w+|\*)+(?:\){2})/i
	
	attrList = element.querySelectorAll('[data-pagination=attr]')
	
	for (node = 0; node < attrList.length; node ++) {
		attrElm = attrList[node]
		
		if (attrElm) {
			attr = attrElm.dataset.paginationAttr
			
			if (attrElm[attr]) {
				regex_matched = attrElm[attr].match(regex)
				
				if (regex_matched !== null) {
					regex_replace = regex_matched[0].slice(2, -2)
					
					if (obj.hasOwnProperty(regex_replace)) {
						attrElm.setAttribute(attr, obj[regex_replace])
					}
				}
			}
		}
	}
	
	regex_matched = null
	regex_replace = null
	
	link = element.querySelector('[data-pagination=target]')
	
	if (link) {
		link.setAttribute('data-p-cursor', pos)
		
		if (link.tagName.upperCase = 'A') {
			regex_matched = link.href.match(regex)
			
			if (regex_matched !== null) {
				regex_replace = regex_matched[0].slice(2, -2)
				
				if (obj.hasOwnProperty(regex_replace)) {
					link.href = link.href.replace(regex, obj[regex_replace])
				} else {
					link.href = link.href.replace(regex, pos)
				}
			}
			
			if (this.single != null) {
				link.addEventListener(
					'click',
					function(e) {
						self.openTarget(e, self)
					}
				)
			}
		}
	}
	
	return element
}

/* ** Affiche les éléments de la page actuelle.
* */
Pagination.prototype.render = function() {
	let begin, buffer = [], counter = 0, item, element, pos = 0
	
	if (this.ready) {
		begin = (this.page > 1)?((this.page - 1) * this.limit):0
		
		this.removeChild(this.container)
		
		for (; counter < this.limit; counter ++) {
			item = begin + counter
			
			if (item < this.datalistcopy.length) {
				element = this.datalistcopy[item]
				
				buffer.push(this.createElement(element, item))
			}
		}
		
		for (; pos < buffer.length; pos ++) {
			this.container.appendChild(buffer[pos])
		}
	}
}

/* ** Lie la vue HTML au fonctionnalités de tri via des datasets spécifiques.
* */
Pagination.prototype.sortingOptions = function() {
	let self = this
	
	if (this.filter != null) { // filtre
		this.filter.addEventListener(
			'change',
			function(e) {
				let value = this.value
				let direction = 'ASC'
				
				if (self.direction) direction = self.direction.value.toUpperCase()
				
				self.sort(value, direction)
			}
		)
	}
	
	if (this.direction) { // ordre (asc ou desc)
		this.direction.addEventListener(
			'change',
			function(e) {
				let direction = this.value.toUpperCase()
				let value = ''
				
				if (self.filter) value = self.filter.value
				
				self.sort(value, direction)
			}
		)
	}
	
	if (this.research) { // recherche
		this.research.addEventListener(
			'keyup',
			function(e) {
				let term = this.value.trim()
				
				if (term === '') {
					self.datalistcopy = JSON.parse(JSON.stringify(self.datalist))
				} else {
					self.search(term)
				}
				
				self.maxpage = Math.ceil(self.datalistcopy.length / self.limit)
				
				self.removeChild(self.navigationContainer)
				self.themeSelection()
				
				self.setPage(1)
				self.render()
			}
		)
	}
}

/* ** Trie les données contenu dans this.datalistcopy.
* Chaque propriété d'un élément de l'ensemble this.datalistcopy peut-être trié par ordre alphabétique croissant ou décroissant.
* 
* @param String property Une propriété d'un élément de _datalist.
* @param String direction Un ordre valant soit ASC, soit DESC. Par défaut, vaut ASC.
* */
Pagination.prototype.sort = function(property, direction) {
	if (direction == undefined) direction = 'ASC'
	
	this.datalistcopy.sort(function(a, b) {
		if (a[property] < b[property]) return -1
		if (a[property] > b[property]) return 1
		
		return 0
	})
	
	if (direction == 'DESC') this.datalistcopy.reverse()
	
	this.setPage(1)
	this.render()
}

/* ** Filtre les données contenu dans this.datalistcopy.
* 
* @param String term Le terme à recherché.
* */
Pagination.prototype.search = function(term) {
	let item = 0, elm, props, property, field, pos
	let newlist = []
	
	for (; item < this.datalist.length; item ++) {
		elm = this.datalist[item]
		props = Object.keys(elm)
		
		for (property in props) {
			field = props[property]
			pos = (elm[field] + '').indexOf(term) // cast en String
			
			if (pos > -1) {
				newlist.push(elm)
				
				break
			}
		}
	}
	
	this.datalistcopy = newlist
}

/* ** Affichage détaillé d'un item de l'ensemble this.datalistcopy.
* */
Pagination.prototype.openTarget = function(e, self) {
	let item = e.target.dataset.pCursor
	let obj = self.datalistcopy[item]
	let props = Object.keys(obj)
	let selector, property, element
	
	e.preventDefault()
	
	/*for (property in props) {
		selector = '[data-pagination=' + props[property] + ']'
		element = self.single.querySelector(selector)
		
		if (element) element.innerHTML = obj[props[property]]
	}*/
	
	clone = self.single
	tags = clone.querySelectorAll('[data-pagination]')
	
	for (let item = 0; item < tags.length; item ++) {
		tag = tags[item]
		datas = tag.dataset.pagination.split('.')
		property, found = obj
		
		if (datas[0] != 'attr' && datas[0] != 'target') {
			for (let pos = 0; pos < datas.length; pos ++) {
				property = datas[pos]
				found = found[property]
				
				if (found == undefined) {
					console.log('%cPagination : The "' + property + '" key does not exist.', 'color:white;background-color:red;padding:5px;')
					break
				}
			}
			
			tag.innerHTML = found
		}
	}
	
	//~ element = clone.cloneNode(true)
	
	regex = /(?:\({2})+(?:\w+|\*)+(?:\){2})/i
	
	attrList = clone.querySelectorAll('[data-pagination=attr]')
	
	for (node = 0; node < attrList.length; node ++) {
		attrElm = attrList[node]
		
		if (attrElm) {
			attr = attrElm.dataset.paginationAttr
			
			if (attrElm[attr]) {
				regex_matched = attrElm[attr].match(regex)
				
				if (regex_matched !== null) {
					regex_replace = regex_matched[0].slice(2, -2)
					
					if (obj.hasOwnProperty(regex_replace)) {console.log(obj[regex_replace])
						attrElm.setAttribute(attr, obj[regex_replace])
					}
				}
			}
		}
	}
}
