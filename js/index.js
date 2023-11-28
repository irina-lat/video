window.addEventListener('DOMContentLoaded', () => {
    let arrowTel = document.querySelector('.header__arrow');
    let arrowTelephone = document.querySelector('.header__arrow-one');
    let arrowTelephoneHidden = document.querySelector('.header__arrow-two');
    let telephoneHeader = document.querySelector('.header__number-two');

    arrowTel.addEventListener('click', (e) => {
        const target = e.target.closest('.header__arrow-one');
        const targetTwo = e.target.closest('.header__arrow-two');

        if (target) {
        telephoneHeader.style.display = 'block';
        arrowTelephone.style.display = 'none';
        arrowTelephoneHidden.style.display = 'block';
        }
        
        if (targetTwo) {
        telephoneHeader.style.display = 'none';
        arrowTelephone.style.display = 'block';
        arrowTelephoneHidden.style.display = 'none';
        }
    });

// Swiper Hero

    const swiperHero = new Swiper('.hero__slider', {
        loop: true,
        spaceBetween: 30,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
      
        pagination: {
          el: '.hero__pagination',
        },
      
        navigation: {
          nextEl: '.hero__arrow-next',
          prevEl: '.hero__arrow-prev',
        },
      });

// Swiper Brands

      const swiperBrands = new Swiper('.brands__slider', {
        loop: true,
        spaceBetween: 30,
        breakpoints: {
          320: {
            slidesPerView: 2
          },
          769: {
            slidesPerView: 4
          }
        },
        navigation: {
          nextEl: '.brands__arrow-next',
          prevEl: '.brands__arrow-prev',
        },
      });

// Video

if (document.querySelector('.preview__play')) {
  const playVideo = document.querySelector('.preview__play');
  const previewVideo = document.querySelector('.preview__img');
  const videoText = document.querySelector('.video__text');
  const videoBg = document.querySelector('.video__bg');
  const videoWrap = document.querySelector('.video__player');
  const video = document.querySelector('.video__wrap iframe');

  playVideo.addEventListener('click', () => {
    playVideo.style.display = 'none';
    previewVideo.style.display = 'none';
    videoText.style.display = 'none';
    video.style.display = 'block';
    video.style.marginTop = '-50rem';
    video.style.position = 'relative';
    video.style.zIndex = '100';
    videoBg.style.zIndex = '0';
    videoWrap.style.minHeight = '50rem';
  } )
  
  // доработать на классы

  }

// Swiper Reviews

  const swiperReviews = new Swiper('.reviews__slider', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3
      }
    }
  });

  const swiperRev = new Swiper('.rev__slider', {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3
      }
    }
    
  });





});