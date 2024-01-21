document.addEventListener('DOMContentLoaded', function() {
    var typedElement = document.querySelector('#site-title'); // 将选择器替换成存放副标题的元素
    if (typedElement) {
      var typed = new Typed('.your-element-selector', { // 这应和上面的选择器一致
        strings: ["从现在开始，做一个幸福的人。"],
        typeSpeed: 50,
        loop: true
      });
    }
  });