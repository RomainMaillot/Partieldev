const $gallery = document.querySelector('.js-gallery')
const $images = $gallery.querySelectorAll('.image--container img')

for(const $image of $images)
{
    const image = new GalleryImage($image)
}

