const images = [
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
		description: 'Hokkaido Flower',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
		description: 'Container Haulage Freight',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
		description: 'Aerial Beach View',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
		description: 'Flower Blooms',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
		description: 'Alpine Mountains',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
		description: 'Mountain Lake Sailing',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
		description: 'Alpine Spring Meadows',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
		description: 'Nature Landscape',
	},
	{
		preview: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
		original: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
		description: 'Lighthouse Coast Sea',
	},
]

document.addEventListener('DOMContentLoaded', () => {
	const galleryContainer = document.querySelector('.gallery')

	function createGalleryItem(image) {
		const liElement = document.createElement('li')
		liElement.className = 'gallery-item'

		const anchorElement = document.createElement('a')
		anchorElement.className = 'gallery-link'
		anchorElement.href = image.original
		anchorElement.onclick = event => event.preventDefault()

		const imgElement = document.createElement('img')
		imgElement.className = 'gallery-image'
		imgElement.src = image.preview
		imgElement.alt = image.description
		imgElement.setAttribute('data-source', image.original)
		imgElement.loading = 'lazy' // Dodanie atrybutu loading="lazy"

		anchorElement.appendChild(imgElement)
		liElement.appendChild(anchorElement)

		return liElement
	}

	const galleryItems = images.map(createGalleryItem)
	galleryContainer.append(...galleryItems)

	galleryContainer.addEventListener('click', event => {
		if (event.target.className === 'gallery-image') {
			event.preventDefault()
			const originalImage = event.target.getAttribute('data-source')
			const instance = basicLightbox.create(`
        <img src="${originalImage}" alt="${event.target.alt}" style="width: auto; height: auto; max-width: 100%; max-height: 100%;" />
      `)
			instance.show()

			// Close modal on escape key press
			document.onkeydown = e => {
				if (e.key === 'Escape' && instance.visible()) {
					instance.close()
				}
			}
		}
	})
})
