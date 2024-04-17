fetch('./js/animals_detail.json')
.then(res => res.json())
.then(res => {
    let data = res.animals;
    for(let key in data){
        console.log(data[key].image)

        document.querySelector(".imageRow").innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="blog-post">
            <img src='${data[key].image}' alt="image" class="blog-post__img">
            <div class="blog-post__overlay">
              <div class="blog-post__date">
                <div class="blog-post__date-content">
                  <h5 class="mt-0 mb-1 text-center text--white">10</h5>
                  <h6 class="m-0 text-center text--white">MAY</h6>
                </div>
              </div>
              <div class="blog-post__content">
                <h4 class="blog-post__title">
                  <a class="t-link blog-post__title-link">
                    Dedicated to the wild meat trade that is rapidly
                  </a>
                </h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor eius dolore   </p>
              </div>
            </div>
          </div>
        </div>
        `;
    }
})
.catch(err => console.error(err));
