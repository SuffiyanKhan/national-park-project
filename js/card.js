fetch('./js/animals_detail.json')
    .then(res => res.json())
    .then(res => {
        let data = res.animals;
        for (let key in data) {
            let uniqueId = generateUniqueId();
            console.log(data[key]);
            document.querySelector(".gallery").innerHTML += `
                <div class="col-md-6 col-lg-4 gallery-cards ">
                    <div class="blog-post">
                        <img src="${data[key].image}" alt="image" class="gallery-card">
                        <div class="blog-post__overlay">
                            <div class="blog-post__date">
                                <div class="blog-post__date-content">
                                    <h5 class="mt-0 mb-1 text-center text--white">10</h5>
                                    <h6 class="m-0 text-center text--white">MAY</h6>
                                </div>
                            </div>
                            <div class="blog-post__content">
                                <h4 class="text-light text-capitalize">${data[key].name}</h4>
                                <h6 class="text-light">${data[key].title}</h6>
                                <button onclick="abc('${uniqueId}', '${data[key].name}')" class="button btn fw-bold button--wapasha button--round-s">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }
    })
    .catch(err => console.error(err));

function abc(uniqueId, title) {
    let url = `detailPage.html?name=${encodeURIComponent(title)}&id=${uniqueId}`;
    window.location.href = url;
}

function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}
