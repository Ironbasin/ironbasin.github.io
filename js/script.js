document.addEventListener('DOMContentLoaded', () => {
    // 返回顶部按钮
    const createBackToTop = () => {
      const backToTop = document.createElement('div');
      backToTop.classList.add('back-to-top');
      backToTop.innerHTML = '↑';
      document.body.appendChild(backToTop);
      
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          backToTop.classList.add('show');
        } else {
          backToTop.classList.remove('show');
        }
      });
      
      backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    };
    
    createBackToTop();
  });