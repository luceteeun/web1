(function($){
  
  // 메인버튼 마우스 오버시 메인슬라이드 다운 (slide up/down사용)
  // $('.main-btn').mouseenter(function(){
  //   $('.sub').stop().slideUp(0);
  //   $(this).stop().next().slideDown(300);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
    
  // });

  // $('#nav').mouseleave(function(){
  //   $('.sub').stop().slideUp(300);
  //   $('.main-btn').removeClass('on');
  // });

//fade in/out 사용
  // $('.main-btn').mouseenter(function(){
  //   $('.sub').stop().fadeOut(0);
  //   $(this).stop().next().fadeIn(600);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
    
  // });

  // 객체방식 ES5방식
  $('.main-btn').on({
    mouseenter: function(){
      $('.sub').stop().fadeOut(0);
      $(this).stop().next().fadeIn(600);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    },
    focusin: function(){
      $('.sub').stop().fadeOut(0);
      $(this).stop().next().fadeIn(600);
  
      $('.main-btn').removeClass('on');
      $(this).addClass('on');
    }
  });




// 탭으로 서브메뉴 나오게 하기 = focusin으로 
  // $('.main-btn').focusin(function(){
  //   $('.sub').stop().fadeOut(0);
  //   $(this).stop().next().fadeIn(600);

  //   $('.main-btn').removeClass('on');
  //   $(this).addClass('on');
    
  // });



  $('#nav').mouseleave(function(){
    $('.sub').stop().fadeOut(300);
    $('.main-btn').removeClass('on');
  });





  //메인슬라이드 섹션1 부분 애니메이션
  let cnt=0;
  const slideWrap = $('.slide-wrap');
  const n = 3-1;   //전체슬라이드 갯수

  //1.메인슬라이드함수
  function mainSlide(){
    console.log(cnt);
    $('.slide-wrap').stop().animate({left: `${-100*cnt}%`}, 600, function(){
      cnt>2?cnt=0:cnt;
      cnt<0?cnt=2:cnt;
      $('.slide-wrap').stop().animate({left: `${-100*cnt}%`}, 0);
    })
  }
  //2.다음카운트함수
  function nextCount(){
    cnt++;
    mainSlide()
  }
  //3.자동타이머함수
  function autoTimer(){
    setInterval(nextCount, 3000);
  }
  autoTimer();


  // 공지사항 & 갤러리 탭메뉴 클릭 이벤트
  // $('.gallery-btn').click(function(){
  //   $('.notice-btn').addClass('on');
  //   $('.gallery-btn').addClass('on');
  //   $('.gallery-box').addClass('on');
  //   $('.notice-box').addClass('on');
  // });

  // $('.notice-btn').click(function(){
  //   $('.notice-btn').removeClass('on');
  //   $('.gallery-btn').removeClass('on');
  //   $('.gallery-box').removeClass('on');
  //   $('.notice-box').removeClass('on');
  // });

  $('.gallery-btn').on({
    click: function(){
      $('.notice-btn').addClass('on');
      $('.gallery-btn').addClass('on');
      $('.gallery-box').addClass('on');
      $('.notice-box').addClass('on');
    }
  });

  $('.notice-btn').on({
    click: function(){
      $('.notice-btn').removeClass('on');
      $('.gallery-btn').removeClass('on');
      $('.gallery-box').removeClass('on');
      $('.notice-box').removeClass('on');
    }
  });




  // 레이어팝업창
  $('.link-btn').click(function(){
    $('#modal').stop().fadeIn(600);
  });

  $('.close-btn').click(function(){
    $('#modal').stop().fadeOut(300);
  });

  // $('.link-btn').on({
  //   click: function(){
  //     $('#modal').stop().fadeIn(600);
  //   }
  // });

  // $('.close-btn').on({
  //   click: function(){
  //     $('#modal').stop().fadeOut(300);
  //   }
  // });







})(jQuery);