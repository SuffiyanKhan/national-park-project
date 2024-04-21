const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('name')) {
    const name = urlParams.get('name');
    fetch('./js/animals_detail.json')
        .then(res => res.json())
        .then(res => {
            const animals = res.animals;
            const foundAnimal = animals.find(animal => animal.name === name);
            if (foundAnimal) {
                console.log("Data found for:", foundAnimal);
                document.querySelector(".image").innerHTML = `
                <div class="col-lg-12 col-md-12 border col-sm-12">
                    <img src="${foundAnimal.thumnail}" class="img-fluid"  style="object-fit: cover;" alt="">
                </div>
            `
                document.querySelector(".details").innerHTML = `
            <div class="col-lg-8 col-md-6 col-sm-12 mt-3 py-5 ">
                    <h5 class="text-uppercase text-bold fs-1">${foundAnimal.name}</h5>
                    <p class="">${foundAnimal.description}</p>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12 mt-3 py-5 d-flex justify-content-center ">
                   <div class="border border-success rounded h-100 w-75 p-4">
                    <h5 class="text-uppercase">mass :</h5>
                <p class="text-dark text-capitalize">${foundAnimal.mass}</p>
                <h5 class="text-uppercase">speed :</h5>
                <p class="text-dark text-capitalize">${foundAnimal.speed}</p>
                <h5 class="text-uppercase">lifespan :</h5>
                <p class="text-dark text-capitalize">${foundAnimal.lifespan}</p>
                <h5 class="text-uppercase">diet :</h5>
                <p class="text-dark text-capitalize">${foundAnimal.diet}</p>
                <a href=${foundAnimal.download} download=${foundAnimal.name}  class="button btn fw-bold button--wapasha button--round-s">
                    Download file
                </a>
                   </div>
                </div>
            `
            } else {
                console.log("Data not found for:", name);
            }
        })
        .catch(error => console.error("Error fetching data:", error));
} else {
    console.log("name parameter missing in URL");
}
