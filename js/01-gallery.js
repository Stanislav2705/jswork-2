import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const imageContainer = document.querySelector('.gallery')
const cardsMarkup = createImageCardsMarkup(galleryItems)


imageContainer.insertAdjacentHTML('beforeend', cardsMarkup)

imageContainer.addEventListener('click', openImageClick)

function createImageCardsMarkup(images) {
    return images.map(({ original, description, preview }) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="({${description}})"
            />
            </a>
        </div>
        `
    }).join('')
    
}

function openImageClick(evt) {
    evt.preventDefault()
    const isGalleryImageEl = evt.target.classList.contains('gallery__image')
    if (!isGalleryImageEl) {
        return
    }
    
    const dataSourceUrl = evt.target.dataset.source
    
    modalLightBox(dataSourceUrl)

}



function modalLightBox(url) {
    const instance = basicLightbox.create(`
    <img src='${url}' width='800' height='600'></img>
    `)
    instance.show()

    window.addEventListener('keydown', onKeyDown)

    function onKeyDown(evt) {
        if (evt.code === 'Escape') {
            instance.close()
            window.removeEventListener('keydown', onKeyDown)
        }
        
    }
}




