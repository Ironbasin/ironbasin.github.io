document.addEventListener('DOMContentLoaded', function() {
    var typedElement = document.querySelector('#site-title');
    if (typedElement) {
      var typed = new Typed(typedElement, {
        strings: ["从现在开始，做一个幸福的人。"],
        typeSpeed: 50,
        loop: true
      });
    }
  });
  