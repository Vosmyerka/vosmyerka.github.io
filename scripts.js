let activeImageWrapper = null;

function zoomImage(image) {
    const imageWrapper = image.parentElement;

    if (activeImageWrapper !== imageWrapper) {
        if (activeImageWrapper) {
            activeImageWrapper.classList.remove('active');
        }

        imageWrapper.classList.add('active');
        activeImageWrapper = imageWrapper;
    } else {
        imageWrapper.classList.remove('active');
        activeImageWrapper = null;
    }
}

const images = document.querySelectorAll('.rounded-image');
images.forEach(image => {
    image.addEventListener('click', function () {
        zoomImage(this);
    });
});
