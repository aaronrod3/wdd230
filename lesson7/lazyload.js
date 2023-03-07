// get all imgs with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

//optional parameters being set for the IntersectionalObserver
let imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

// first check to see if intersectional observer is supported
if('IntersectionObserver' in window) {
    const imgObserver = new InterSectionObserver((items, observer) => {
        items.foreach((item) => {
        });
    }, imgOptions);

    // loop through each img and check status and load if necessary
    imagesToLoad.foreach((img) => {
        imgObserver.observe(img);
    });
}
else { //just load All images if not supported
    imagesToLoad.foreach((img) => {
        loadImages(img);
    });
}

