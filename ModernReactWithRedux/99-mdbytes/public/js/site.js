const activePage = function () {
  let $page = document.querySelector("#page-indicator").innerHTML;

  let $pageLinks = document.getElementsByClassName("nav-link");
  for (let i = 0; i < $pageLinks.length; i++) {
    if ($pageLinks[i].innerHTML == $page) {
      $pageLinks[i].classList.add("active");
    } else {
      $pageLinks[i].classList.remove("active");
    }
  }

  let $homeLink = document.querySelector("#home-link");
  let $servicesLink = document.querySelector("#services-link");
  let $portfolioLink = document.querySelector("#portfolio-link");
  let $contactLink = document.querySelector("#contact-link");
  let $privacyLink = document.querySelector("#privacy-link");
  let $mobileButton = document.querySelector("nav > button");

  $homeLink.addEventListener("click", (e) => {
    $homeLink.classList.add("active");
    $servicesLink.classList.remove("active");
    $portfolioLink.classList.remove("active");
    $contactLink.classList.remove("active");
    $privacyLink.classList.remove("active");
    $mobileButton.click();
  });

  $servicesLink.addEventListener("click", (e) => {
    $homeLink.classList.remove("active");
    $servicesLink.classList.add("active");
    $portfolioLink.classList.remove("active");
    $contactLink.classList.remove("active");
    $privacyLink.classList.remove("active");
    $mobileButton.click();
  });

  $portfolioLink.addEventListener("click", (e) => {
    $homeLink.classList.remove("active");
    $servicesLink.classList.remove("active");
    $portfolioLink.classList.add("active");
    $privacyLink.classList.remove("active");
    $contactLink.classList.remove("active");
    $mobileButton.click();
  });

  $contactLink.addEventListener("click", (e) => {
    $homeLink.classList.remove("active");
    $servicesLink.classList.remove("active");
    $portfolioLink.classList.remove("active");
    $contactLink.classList.add("active");
    $privacyLink.classList.remove("active");
    $mobileButton.click();
  });

  $privacyLink.addEventListener("click", (e) => {
    $homeLink.classList.remove("active");
    $servicesLink.classList.remove("active");
    $portfolioLink.classList.remove("active");
    $contactLink.classList.remove("active");
    $privacyLink.classList.add("active");
    $mobileButton.click();
  });
};
