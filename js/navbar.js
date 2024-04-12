document.querySelector("#navbar").innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark sticky-top ">
<div class="container-fluid ">
  <a class="navbar-brand ps-5" href="#">
    <img src="./Assets/logo.png " style="width:  90px;" class="img-fluid" alt="">
    <!-- <img src="./Assets/logo.png " style="width:  90px;" class="img-fluid" alt=""> -->
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
            <a class="nav-link text-light  text-capitalize fw-semibold" href="./index.html">home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light text-capitalize fw-semibold" href="./about.html">about</a>
          </li>
      <li class="nav-item dropdown">
        <a class="nav-link text-light dropdown-toggle text-capitalize fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          service
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./services.html">service</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./servicesDetails.html">service details</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./members.html">membership</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link text-light dropdown-toggle text-capitalize fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          blog
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./blogs.html"> blogs</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./classicalBlogs.html"> classic blog</a></li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link text-light text-capitalize fw-semibold" href="./contact.html">contact</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link text-light dropdown-toggle text-capitalize fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          other
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./animals.html">animal</a></li>       
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./animalDetalis.html">animal details</a></li>                       
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./gallery.html">gallery</a></li>       
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./faq.html">faq</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./policy.html">privacy & policy</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
`
let nav = document.querySelector('.navigation-wrap');
window.onscroll = ()=>{
if(document.documentElement.scrollTop > 20){
nav.classList.add('scroll-on')
}else{
nav.classList.remove('scroll-on')

}
}