function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  var leftReveals = document.querySelectorAll(".leftReveal");
  var rightReveals = document.querySelectorAll(".rightReveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  for (var i = 0; i < leftReveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = leftReveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      leftReveals[i].classList.add("leftActive");
    } else {
      leftReveals[i].classList.remove("leftActive");
    }
  }
  for (var i = 0; i < rightReveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = rightReveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      rightReveals[i].classList.add("rightActive");
    } else {
      rightReveals[i].classList.remove("rightActive");
    }
  }
}

window.addEventListener("scroll", reveal);
