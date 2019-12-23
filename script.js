$(document).ready(function () {
  var i = 0;
  setInterval(function () {
    if (i == 0) {
      $(function () {
        $(".mx-site .yd").each(function () {
          $(this).attr('aria-pressed', 'false');
        })
        $(".mx-site .yd[title|='customizable']").attr('aria-pressed', 'true');
        $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/second_slide/url4-1576868815.jpg?1576868815)');
        $(".ke").attr('title', 'customizable');
      })
    };
    if(i == 1) {
      $(function () {
        $(".mx-site .yd").each(function () {
          $(this).attr('aria-pressed', 'false');
        })
        $(".mx-site .yd[title|='happiness']").attr('aria-pressed', 'true');
        $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/third_slide/url4-1576868816.jpg?1576868816)');
        $(".ke").attr('title', 'happiness');
      })
    };
    if(i == 2){
      $(function () {
        $(".mx-site .yd").each(function () {
          $(this).attr('aria-pressed', 'false');
        })
        $(".mx-site .yd[title|='offer']").attr('aria-pressed', 'true');
        $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/first_slide/url4-1576868813.jpg?1576868814)');
        $(".ke").attr('title', 'offer');
      })
      
    };
    i = (i + 1) % 3;
  }, 6000);
  $(".mx-site .yd[title|='offer']").click(function () {
    $(".mx-site .yd").each(function () {
      $(this).attr('aria-pressed', 'false');
    })
    $(this).attr('aria-pressed', 'true');
    $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/first_slide/url4-1576868813.jpg?1576868814)');
    $(".ke").attr('title', 'offer');
  })
  $(".mx-site .yd[title|='customizable']").click(function () {
    $(".mx-site .yd").not(this).each(function () {
      $(this).attr('aria-pressed', 'false');
    })
    $(this).attr('aria-pressed', 'true');
    $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/second_slide/url4-1576868815.jpg?1576868815)');
    $(".ke").attr('title', 'customizable');
  })
  $(".mx-site .yd[title|='happiness']").click(function () {
    $(".mx-site .yd").not(this).each(function () {
      $(this).attr('aria-pressed', 'false');
    })
    $(this).attr('aria-pressed', 'true');
    $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/third_slide/url4-1576868816.jpg?1576868816)');
    $(".ke").attr('title', 'happiness');
  })
  $(".cyCKx").click(function(){
    document.getElementById("list").classList.remove('fuUAUh');
    document.getElementById("list").classList.add('KAAHWn');
    
  })
  $(".UwRNw").click(function(){
    document.getElementById("list").classList.remove('KAAHWn');
    document.getElementById("list").classList.add('fuUAUh');
  })
});

