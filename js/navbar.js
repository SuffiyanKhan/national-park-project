document.querySelector("#navbar").innerHTML = `
<nav class="navbar fixed-top navbar-expand-sm " >
  <div class="container-fluid">
    <a class="navbar-brand " href="#">
      <img src="./Assets/logo.png" style="width: 100px;" class="img-fluid" alt="logo">
    </a>
    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class=" icon-color"><i class="fa-solid fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav fs-5 ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link btn btn text-light text-capitalize fw-semibold" href="./index.html">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn text-light text-capitalize fw-semibold" href="./about.html">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn text-light text-capitalize fw-semibold" href="./faq.html">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link btn btn text-light text-capitalize fw-semibold" href="./contact.html">contact</a>
        </li>
        <li class="nav-item dropdown">
        <a class="nav-link btn btn text-light dropdown-toggle text-capitalize fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          service
        </a>
        <ul class="dropdown-menu fs-5 py-3 px-2">
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./services.html">service</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./servicesDetails.html">service details</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./members.html">membership</a></li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link btn btn text-light dropdown-toggle text-capitalize fw-semibold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          National parks
        </a>
        <ul class="dropdown-menu fs-5 py-3 px-2">
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./HillPark.html">Hill Park</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./NisarShaheedPark.html">Nisar Shaheed Park</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./ZamzamaPark.html">Zamzama Park</a></li>
          <li><a class="dropdown-item text-capitalize fw-semibold" href="./JheelPark.html">Jheel Park</a></li>
        </ul>
      </li>
      </ul>
    </div>
  </div>
</nav>
 `
document.onreadystatechange = function () {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function (e) {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition > 100)
      navbar.classList.add('navbar-dark');
    else
      navbar.classList.remove('navbar-dark');
  });
} 