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


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션); -> gsap library
  gsap.to(fadeEl, 1, {
    //index -> Zero based numbering (0부터 시작)
    delay: (index + 1) * .6,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 // Default 3000(3s)
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', ()=>{ //이벤트 핸들러
  isHidePromotion = !isHidePromotion // !(NOT) 연산자
  if(isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});