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
//topnav
 $(function(){
   var photo='<div class="photo"><div class="sizes"><div class="Gi"><div class="gb cc qk"><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Everyday</a></div><div><a class="Pe Se Re Vh">Family</a></div><div><a class="Pe Se Re Vh">Kids</a></div><div><a class="Pe Se Re Vh">Seasonal</a></div><div><a class="Pe Se Re Vh">Holiday</a></div><div><a class="Pe Se Re Vh">Romance</a></div><div><a class="Pe Se Re Vh">Year in Review</a></div></div><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Wedding Photo Books</a></div><div><a class="Pe Se Re Vh">Wedding Guest Books</a></div><div><a class="Pe Se Re Vh">Travel Photo Books</a></div><div><a class="Pe Se Re Vh">Baby Photo Books</a></div><div><a class="Pe Se Re Vh">Sports</a></div><div><a class="Pe Se Re Vh">Yearbooks</a></div><div><a class="Pe Se Re Vh">Professional / Business</a></div></div><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Volume Discounts</a></div><div><a class="Pe Se Re Vh">Quick &amp; Easy Books</a></div><div><a class="Pe Se Re Vh Wh">Wedding Collection</a></div><div><a class="Pe Se Re Vh Wh">Designer Collection</a></div><div><a class="Pe Se Re Vh Wh">All</a></div></div></div></div></div></div>';
   var cards='<div class="cards"><div class="sizes"><div><div class="Gi"><div class="gb cc"><div class="ak"><div id="bk" class="bk ek"><div class="Fb Bc ck">Featured Occasions</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Real Foil</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Holiday</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Wedding</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Baby</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Invitations</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Greeting Cards</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Graduation</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Stationery</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Labels</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Magnets</div></div><div class="Fb Bc"><a href="/cards/create-christmas-holiday-photo" class="Pe Se Re dk">Holiday Collection</a></div><div class="Fb Bc"><a href="/wedding-collection" class="Pe Se Re dk">Wedding Collection</a></div><div class="Fb Bc"><a href="/designers" class="Pe Se Re dk">Designer Collection</a></div><div class="Fb Bc"><a href="/cards/all" class="Pe Se Re dk">View All</a></div></div><div class="gk"><div class="Gb Cc fk"><div><a href="/cards/holiday-photo-cards" class="Pe Se Re Vh">Holiday Photo Cards</a></div><div><a href="/cards/real-foil-holiday-photo-cards" class="Pe Se Re Vh">Real Foil Holiday Photo Cards</a></div><div><a href="/cards/real-foil-save-the-date" class="Pe Se Re Vh">Real Foil Save the Date</a></div><div><a href="/cards/thanksgiving-cards" class="Pe Se Re Vh">Thanksgiving Cards</a></div><div><a href="/cards/new-year-s-cards-invitations" class="Pe Se Re Vh">New Years Cards &amp; Invitations</a></div><div><a href="/cards/real-foil-wedding-invitations" class="Pe Se Re Vh">Real Foil Wedding Invitations</a></div><div><a href="/cards/photo-birth-announcements" class="Pe Se Re Vh">Photo Birth Announcements</a></div><div><a href="/cards/party-invitations" class="Pe Se Re Vh">Party Invitations</a></div><div><a href="/cards/engagement-announcements" class="Pe Se Re Vh">Engagement Announcements</a></div><div><a href="/cards/save-the-date-cards" class="Pe Se Re Vh">Save the Date Cards</a></div><div><a href="/cards/wedding-invitations" class="Pe Se Re Vh">Wedding Invitations</a></div><div><a href="/cards/thank-you-cards" class="Pe Se Re Vh">Thank You Cards</a></div><div><a href="/cards/adoption-announcements" class="Pe Se Re Vh">Adoption Announcements</a></div><div><a href="/cards/birthday-party-invitations" class="Pe Se Re Vh">Birthday Party Invitations</a></div></div></div></div></div></div></div><div class="Yg"><div class="Xg"></div></div></div>';
   var homedecor='<div class ="home" ><div class ="sizes"><div class="padding"><div><a >Canvas Prints</a></div><div><a >Metal Prints</a></div><div><a >Acrylic Prints</a></div><div><a >Acrylic Blocks</a></div><div><a >Poster Prints</a></div></div></div></div>';

    $("#PB").on('mouseenter',function(){
    $(this).addClass("ji");
    $("#PB").append(photo);
  });
  $("#PB").on('mouseleave',function(){  
    $(this).removeClass("ji");
    $(".photo").remove();
    });
    $("#C").on('mouseenter',function(){
      $(this).addClass("ji");
      $("#C").append(cards);
    });
    $("#C").on('mouseleave',function(){    
      $(this).removeClass("ji");
      $(".cards").remove();
      });
  $("#homedecor").on('mouseenter',function(){
    $(this).addClass("ji");
    $("#homedecor").append(homedecor);
  });
  $("#homedecor").on('mouseleave',function(){    
    $(this).removeClass("ji");
    $(".home").remove();
    });
  });


  //DOM manupulation
  $(function(){
    var rows = [{
      name:"PHOTO BOOKS",
      cost:"$15.99",
      image:"http://cdn.mixbook.com/apps/site/public/mainPagePhotoBooks-bc68bc2e382d986a65f3.webp"
    },{
      name:"PHOTO CARDS",
      cost:"$0.69",
      image:"http://cdn.mixbook.com/apps/site/public/mainPageCards-8985bc9c48b7d434cdc8.webp"
    },{
      name:"REVIEW PHOTOBOOKS",
      cost:"$15.99",
      image:"https://media.mixbook.com/dead_simple_cms/main_page/product_grid_dynamic_item/url.jpg?1576796266"
    },{
      name:"CANVAS PRINTS ",
      cost:"$49.99",
      image:"http://cdn.mixbook.com/apps/site/public/mainPageCanvasPrints-ce695f9927ac9796c38a.webp"
    },{
      name:"MORDERN METAL PRINTS",
      cost:"$19.99",
      image:"http://cdn.mixbook.com/apps/site/public/mainPageMetalPrints-2b846bac6349fd77080c.webp"
    },{
      name:"MEMORABLE CALENDERS",
      cost:"$24.99",
      image:"http://cdn.mixbook.com/apps/site/public/mainPageCalendars-fc36820ad88fb80218ff.webp"
    }];
    var html = '<div>';
    for(var i=0;i<rows.length;i++){
      html+='<div class="Qa ob Mb kc Fj F"><a href="/photo-books" class="De Ee Fe Gj">';
      html+='<figcaption class="Qa Mb">';
      html+='<h2 class="P T W">'+rows[i].name+'</h2>';
      html+='<div class="Ea Hj">As low as<span class="Go">'+rows[i].cost+'</span></div>';
      html+='</figcaption><img src="'+rows[i].image+'"class="Ij">';
      html+='</a></div>';
    }
    html+='</div>';
    $("#DOM").html(html);
  });
  