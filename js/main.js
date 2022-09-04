/* main.js */
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', ()=>{
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', ()=>{
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', ()=>{
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

// _.throttle() 함수가 한번에 너무 많이 실행되지 않도록 일정한 제한을 걸어줌
// _.throttle(함수, 시간) -> lodash library
window.addEventListener('scroll', _.throttle(()=>{
  console.log(window,scrollY);
  if(window.scrollY > 500) {
    //배지 숨기기
    // gsap.to(요소, 지속시간, 옵션); -> gsap library
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));