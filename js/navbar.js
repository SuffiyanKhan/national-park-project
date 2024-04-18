document.querySelector("#navbar").innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand ps-5" href="#">
      <img src="./Assets/logo.png" style="width: 90px;" class="img-fluid" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-light text-capitalize fw-semibold" href="./index.html">home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light text-capitalize fw-semibold" href="./about.html">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light text-capitalize fw-semibold" href="./faq.html">FAQ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light text-capitalize fw-semibold" href="./contact.html">contact</a>
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
          other parks
        </a>
        <ul class="dropdown-menu">
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

// `
