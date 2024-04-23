document.querySelector("#footer").innerHTML = `
<div class="subscribe-section mt-1">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="subscribe-section__content">
                <div class="row g-4 align-items-center">
                  <div class="col-md-6">
                    <div class="text-center text-md-start d-grid gap-2">
                      <!-- Logo  -->
                      <a href="index.html" class="logo mx-auto ms-md-0 ">
                        <img src="./Assets/logo.png" alt="National Park" class="img-fluid logo__is">
                      </a>
                      <!-- Logo End -->
                      
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="text-center text-md-end">
                      <h5 class="mt-0 text--white">Subscribe Our Newsletters</h5>
                      <div class="newsletter mx-auto ms-md-auto me-md-0">
                        <div class="newsletter__container rounded-pill">
                          <input type="text" class="form-control form--control newsletter__input flex-grow-1 rounded-pill" placeholder="Subscribe now..">
                          <button class="btn xxl-text lh-1 text--white rounded-pill sm-text">
                              <i class="far fa-paper-plane"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<footer class="footer">
        <div class="section">
          <div class="container">
            <div class="row g-4 justify-content-xl-between">
              <div class="col-md-6 col-lg-3">
                <h4 class="info-section__title mt-0 text--white">Contact info</h4>
                <ul class="list" style="--gap: .5rem;">
                  <li>
                    <div class="list list--row">
                      <span class="info-section__icon">
                        <i class="fas fa-map-marker-alt"></i>
                      </span>
                      <p class="mb-0 text--white t-short-para">
                        New York 10460 , Old city town
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="list list--row">
                      <span class="info-section__icon">
                        <i class="far fa-envelope"></i>
                      </span>
                      <ul class="list" style="--gap: 0.5rem">
                        <li>
                          <p class="mb-0 text--white t-short-para">
                            support24/7.com
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div class="list list--row">
                      <span class="info-section__icon">
                        <i class="fas fa-phone-alt"></i>
                      </span>
                      <ul class="list" style="--gap: 0.5rem">
                        <li>
                          <p class="mb-0 text--white t-short-para">
                            +123 - 456 - 789000
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <ul class="list list--row" style="--gap: .5rem;">
                      <li>
                        <a href="#" id="facebook" class="t-link icon icon--circle icon--xs expert-card__icon">
                          <i class="fab fa-facebook-f" ></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" id="twitter" class="t-link icon icon--circle icon--xs expert-card__icon">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" id="instagram" class="t-link icon icon--circle icon--xs expert-card__icon">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" id="linkdine" class="t-link icon icon--circle icon--xs expert-card__icon">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-2">
                <h4 class="info-section__title mt-0 text--white">
                  Animals
                </h4>
                <ul class="list list--column">
                  <li class="list--column__item">
                    <a href="about.html" class="t-link t-link--base text--white d-inline-block">
                      About Us
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="faq.html" class="t-link t-link--base text--white d-inline-block">
                      FAQ
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="members.html" class="t-link t-link--base text--white d-inline-block">
                      Membership
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="blogs.html" class="t-link t-link--base text--white d-inline-block">
                      Blog
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="contact.html" class="t-link t-link--base text--white d-inline-block">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-2">
                <h4 class="info-section__title mt-0 text--white">
                  Useful Link
                </h4>
                <ul class="list list--column">
                  <li class="list--column__item">
                    <a href="animals.html" class="t-link t-link--base text--white d-inline-block">
                      Animals
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="gallery.html" class="t-link t-link--base text--white d-inline-block">
                    Gallery
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="policy.html" class="t-link t-link--base text--white d-inline-block">
                      Privacy & Policy
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href=" ticket.html" class="t-link t-link--base text--white d-inline-block">
                      Event Ticket
                    </a>
                  </li>
                  <li class="list--column__item">
                    <a href="cart.html" class="t-link t-link--base text--white d-inline-block">
                      Cart
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 col-lg-3 col-xl-4">
                <h4 class="info-section__title mt-0 text--white">
                  Opening Time
                </h4>
                <ul class="list list--underline">
                  <li>
                    <div class="list list--row justify-content-between">
                      <div class="list list--row align-items-center" style="--gap: 0.5rem">
                        <span class="text--base">
                          <i class="far fa-clock"></i>
                        </span>
                        <span class="d-inline-block text--white sm-text">
                          10.00 AM
                        </span>
                      </div>
                      <span class="d-inline-block text--white sm-text">
                        Zoo Opens
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list list--row justify-content-between">
                      <div class="list list--row align-items-center" style="--gap: 0.5rem">
                        <span class="text--base">
                          <i class="far fa-clock"></i>
                        </span>
                        <span class="d-inline-block text--white sm-text">
                          03.45 PM
                        </span>
                      </div>
                      <span class="d-inline-block text--white sm-text">
                        Sea Lion Feeding
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list list--row justify-content-between">
                      <div class="list list--row align-items-center" style="--gap: 0.5rem">
                        <span class="text--base">
                          <i class="far fa-clock"></i>
                        </span>
                        <span class="d-inline-block text--white sm-text">
                          04.20 PM
                        </span>
                      </div>
                      <span class="d-inline-block text--white sm-text">
                        Exhibits Close
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="list list--row justify-content-between">
                      <div class="list list--row align-items-center" style="--gap: 0.5rem">
                        <span class="text--base">
                          <i class="far fa-clock"></i>
                        </span>
                        <span class="d-inline-block text--white sm-text">
                          05.00 PM
                        </span>
                      </div>
                      <span class="d-inline-block text--white sm-text">
                        Zoo Close
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__copyright py-3">
          <p class="mb-0 sm-text text--white text-center">
            Copyright © 2022. All Rights Reserved By
            <a href="#" class="t-link t-link--base text--base">Viserlife</a>
          </p>
        </div>
      </footer>
`