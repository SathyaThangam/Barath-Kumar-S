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
    if (i == 1) {
      $(function () {
        $(".mx-site .yd").each(function () {
          $(this).attr('aria-pressed', 'false');
        })
        $(".mx-site .yd[title|='happiness']").attr('aria-pressed', 'true');
        $(".ke").css('background-image', 'url(https://media.mixbook.com/dead_simple_cms/main_page_scheduler/carousel/third_slide/url4-1576868816.jpg?1576868816)');
        $(".ke").attr('title', 'happiness');
      })
    };
    if (i == 2) {
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
  $(".cyCKx").click(function () {
    document.getElementById("list").classList.remove('fuUAUh');
    document.getElementById("list").classList.add('KAAHWn');

  })
  $(".UwRNw").click(function () {
    document.getElementById("list").classList.remove('KAAHWn');
    document.getElementById("list").classList.add('fuUAUh');
  })

});
//topnav
$(function () {
  var photo = '<div class="photo"><div class="sizes"><div class="Gi"><div class="gb cc qk"><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Everyday</a></div><div><a class="Pe Se Re Vh">Family</a></div><div><a class="Pe Se Re Vh">Kids</a></div><div><a class="Pe Se Re Vh">Seasonal</a></div><div><a class="Pe Se Re Vh">Holiday</a></div><div><a class="Pe Se Re Vh">Romance</a></div><div><a class="Pe Se Re Vh">Year in Review</a></div></div><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Wedding Photo Books</a></div><div><a class="Pe Se Re Vh">Wedding Guest Books</a></div><div><a class="Pe Se Re Vh">Travel Photo Books</a></div><div><a class="Pe Se Re Vh">Baby Photo Books</a></div><div><a class="Pe Se Re Vh">Sports</a></div><div><a class="Pe Se Re Vh">Yearbooks</a></div><div><a class="Pe Se Re Vh">Professional / Business</a></div></div><div class="Fb Bc rk"><div><a class="Pe Se Re Vh">Volume Discounts</a></div><div><a class="Pe Se Re Vh">Quick &amp; Easy Books</a></div><div><a class="Pe Se Re Vh Wh">Wedding Collection</a></div><div><a class="Pe Se Re Vh Wh">Designer Collection</a></div><div><a class="Pe Se Re Vh Wh">All</a></div></div></div></div></div></div>';
  var cards = '<div class="cards"><div class="sizes"><div><div class="Gi"><div class="gb cc"><div class="ak"><div id="bk" class="bk ek"><div class="Fb Bc ck">Featured Occasions</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Real Foil</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Holiday</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Wedding</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Baby</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Invitations</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Greeting Cards</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Graduation</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Stationery</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Labels</div></div><div id="bk" class="bk"><div class="Fb Bc ck">Magnets</div></div><div class="Fb Bc"><a href="/cards/create-christmas-holiday-photo" class="Pe Se Re dk">Holiday Collection</a></div><div class="Fb Bc"><a href="/wedding-collection" class="Pe Se Re dk">Wedding Collection</a></div><div class="Fb Bc"><a href="/designers" class="Pe Se Re dk">Designer Collection</a></div><div class="Fb Bc"><a href="/cards/all" class="Pe Se Re dk">View All</a></div></div><div class="gk"><div class="Gb Cc fk"><div><a href="/cards/holiday-photo-cards" class="Pe Se Re Vh">Holiday Photo Cards</a></div><div><a href="/cards/real-foil-holiday-photo-cards" class="Pe Se Re Vh">Real Foil Holiday Photo Cards</a></div><div><a href="/cards/real-foil-save-the-date" class="Pe Se Re Vh">Real Foil Save the Date</a></div><div><a href="/cards/thanksgiving-cards" class="Pe Se Re Vh">Thanksgiving Cards</a></div><div><a href="/cards/new-year-s-cards-invitations" class="Pe Se Re Vh">New Years Cards &amp; Invitations</a></div><div><a href="/cards/real-foil-wedding-invitations" class="Pe Se Re Vh">Real Foil Wedding Invitations</a></div><div><a href="/cards/photo-birth-announcements" class="Pe Se Re Vh">Photo Birth Announcements</a></div><div><a href="/cards/party-invitations" class="Pe Se Re Vh">Party Invitations</a></div><div><a href="/cards/engagement-announcements" class="Pe Se Re Vh">Engagement Announcements</a></div><div><a href="/cards/save-the-date-cards" class="Pe Se Re Vh">Save the Date Cards</a></div><div><a href="/cards/wedding-invitations" class="Pe Se Re Vh">Wedding Invitations</a></div><div><a href="/cards/thank-you-cards" class="Pe Se Re Vh">Thank You Cards</a></div><div><a href="/cards/adoption-announcements" class="Pe Se Re Vh">Adoption Announcements</a></div><div><a href="/cards/birthday-party-invitations" class="Pe Se Re Vh">Birthday Party Invitations</a></div></div></div></div></div></div></div><div class="Yg"><div class="Xg"></div></div></div>';
  var homedecor = '<div class ="home" ><div class ="sizes"><div class="padding"><div><a >Canvas Prints</a></div><div><a >Metal Prints</a></div><div><a >Acrylic Prints</a></div><div><a >Acrylic Blocks</a></div><div><a >Poster Prints</a></div></div></div></div>';

  $("#PB").on('mouseenter', function () {
    $(this).addClass("ji");
    $("#PB").append(photo);
  });
  $("#PB").on('mouseleave', function () {
    $(this).removeClass("ji");
    $(".photo").remove();
  });
  $("#C").on('mouseenter', function () {
    $(this).addClass("ji");
    $("#C").append(cards);
  });
  $("#C").on('mouseleave', function () {
    $(this).removeClass("ji");
    $(".cards").remove();
  });
  $("#homedecor").on('mouseenter', function () {
    $(this).addClass("ji");
    $("#homedecor").append(homedecor);
  });
  $("#homedecor").on('mouseleave', function () {
    $(this).removeClass("ji");
    $(".home").remove();
  });
});


//DOM manupulation
$(function () {
  var rows = [{
    name: "PHOTO BOOKS",
    cost: "$15.99",
    image: "http://cdn.mixbook.com/apps/site/public/mainPagePhotoBooks-bc68bc2e382d986a65f3.webp"
  }, {
    name: "PHOTO CARDS",
    cost: "$0.69",
    image: "http://cdn.mixbook.com/apps/site/public/mainPageCards-8985bc9c48b7d434cdc8.webp"
  }, {
    name: "REVIEW PHOTOBOOKS",
    cost: "$15.99",
    image: "https://media.mixbook.com/dead_simple_cms/main_page/product_grid_dynamic_item/url.jpg?1576796266"
  }, {
    name: "CANVAS PRINTS ",
    cost: "$49.99",
    image: "http://cdn.mixbook.com/apps/site/public/mainPageCanvasPrints-ce695f9927ac9796c38a.webp"
  }, {
    name: "MORDERN METAL PRINTS",
    cost: "$19.99",
    image: "http://cdn.mixbook.com/apps/site/public/mainPageMetalPrints-2b846bac6349fd77080c.webp"
  }, {
    name: "MEMORABLE CALENDERS",
    cost: "$24.99",
    image: "http://cdn.mixbook.com/apps/site/public/mainPageCalendars-fc36820ad88fb80218ff.webp"
  }];
  var html = '<div>';
  for (var i = 0; i < rows.length; i++) {
    html += '<div class="Qa ob Mb kc Fj F"><a href="/photo-books" class="De Ee Fe Gj">';
    html += '<figcaption class="Qa Mb">';
    html += '<h2 class="P T W">' + rows[i].name + '</h2>';
    html += '<div class="Ea Hj">As low as<span class="Go">' + rows[i].cost + '</span></div>';
    html += '</figcaption><img src="' + rows[i].image + '"class="Ij">';
    html += '</a></div>';
  }
  html += '</div>';
  $("#DOM").html(html);
});
//

//
var srcid,destid;
function handleFromSearch() {
  console.clear();
  let srcInput = document.querySelector('#src').value;
  const myNode = document.getElementById("from");
  myNode.innerHTML = '';
  let option = '<ul id="autofill" class="autofill">';
  $.getJSON(`https://www.redbus.in/Home/SolarSearch?search=${srcInput}`, function (data) {
    for (i = 0; i < data.response.docs.length; i++) {
      option += '<li id="'+  data.response.docs[i].ID+'" onclick="disappearfrom(this.id)">' + data.response.docs[i].Name + '</li>';
      console.log(data.response.docs[i].Name);
    }
    option += '</ul>';
    $('#from').append(option);
  });
}

function disappearfrom(id) {
  document.getElementById('src').value = document.getElementById(id).innerHTML;
  srcid = id;
  const myNode = document.getElementById("from");
  myNode.innerHTML = '';
}
function disappearto(id) {
  document.getElementById('dest').value = document.getElementById(id).innerHTML;
  destid= id;
  const myNode = document.getElementById("to");
  myNode.innerHTML = '';
}
function handleToSearch() {
  console.clear();
  const myNode = document.getElementById("to");
  myNode.innerHTML = '';  
  let destInput = document.querySelector('#dest').value;
  let option = '<ul id="autofill" class="autofill">';
  $.getJSON(`https://www.redbus.in/Home/SolarSearch?search=${destInput}`, function (data) {
    for (i = 0; i < data.response.docs.length; i++) {
      option += '<li id="'+data.response.docs[i].ID+'"onclick="disappearto(this.id);">' + data.response.docs[i].Name + '</li>';      
    }
    option += '</ul>';
    $('#to').append(option);
  });
}
function date(){
  var d = new Date();
  var strDate = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
  $('#dat').attr({"min":strDate});
}
function search() {
  const myNode = document.getElementById("bus");
  myNode.innerHTML = '';
  var dat=document.getElementById('dat').value;
  var mon;
        switch(dat.split('-')[1]){
          case '1' : mon='Jan';
          break;
          case '2' : mon='Feb';
          break;
          case '3' : mon='Mar';
          break;
          case '4' : mon='Apr';
          break;
          case '5' : mon='May';
          break;
          case '6' : mon='Jun';
          break;
          case '7' : mon='Jul';
          break;
          case '8' : mon='Aug';
          break;
          case '9' : mon='Sep';
          break;
          case '10' : mon='Oct';
          break;
          case '11' : mon='Nov';
          break;
          case '12' : mon='Dec';
          break;
        }
  let date=dat.split('-')[2]+'-'+mon;
  var dest=document.getElementById('dest').value;
  var src=document.getElementById('src').value;
  let header = new Headers()
  header.append("Content-Type", 'application/json')
  let bus='<ul class="bus-items">';
  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://www.redbus.in/search/SearchResults?fromCity=${srcid}&toCity=${destid}&src=${src}&dst=${dest}&DOJ=${dat}&sectionId=0&groupId=0&limit=0&offset=0&sort=0&sortOrder=0&meta=true&returnSearch=0`,
    type: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    dataType: 'json',
    success: function (data) {
      for(var i=0;i<data.inv.length;i++)
      {
        let hr = `${(data.inv[i].Duration/60)}`.split('.')[0];
        let min= data.inv[i].Duration%60;
        let dt = data.inv[i].dt.split(' ')[1];
        dt=dt.split(':')[0]+':'+dt.split(':')[1];
        let at = data.inv[i].at.split(' ')[1];
        at=at.split(':')[0]+':'+at.split(':')[1];
        bus+='<div>';
        bus+='<li id="10153548" class="row-sec clearfix">';
        bus+='<div class="clearfix bus-item">';
        bus+='<div class="clearfix bus-item-details">';
        bus+='<div class="clearfix row-one">';
        bus+='<div class="column-two p-right-10 w-30 fl">';
        bus+='<div class="travels lh-24 f-bold d-color">'+data.inv[i].Tvs+'</div>';
        bus+='<div class="bus-type f-12 m-top-16 l-color">'+data.inv[i].bt+'</div>';
        bus+='</div>';
        bus+='<div class="column-three p-right-10 w-10 fl">';
        bus+='<div class="dp-time f-19 d-color f-bold">'+dt+'</div>';
        bus+='<div class="dp-loc l-color w-wrap f-12 m-top-42" title="'+data.inv[i].StdBp+'">'+data.inv[i].StdBp+'</div>';
        bus+='</div>';
        bus+='<div class="column-four p-right-10 w-10 fl">';
        bus+='<div class="dur l-color lh-24">'+hr+'h'+min+'m</div>';
        bus+='</div>';
        bus+='<div class="column-five p-right-10 w-10 fl">';
        bus+='<div class="bp-time f-19 d-color disp-Inline">'+at+'</div>';
        bus+='<div class="next-day-dp-lbl m-top-16">'+date+'</div>';
        bus+='<div class="bp-loc l-color w-wrap f-12 m-top-8" title="'+data.inv[i].StdDp+'">'+data.inv[i].StdDp+'</div>';
        bus+='</div>';
        bus+='<div class="column-six p-right-10 w-10 fl">';
        bus+='<div class="rating-sec lh-24">';
        bus+='<div class="lh-18 rating rat-green"><i class="icon icon-ic-star d-block"></i><span class="">'+data.inv[i].rt.totRt+'</span></div></div>';
        bus+='<div class="no-ppl m-top-16 l-color"><i class="icon d-block icon-rating_ppl"></i>'+data.inv[i].rt.ct+'</div></div>';
        bus+='<div class="column-seven p-right-10 w-15 fl">';
        bus+='<div class="seat-fare ">';
        bus+='<div class="starts">Starts from </div>';
        bus+='<div class="fare d-block">INR <span class="f-19 f-bold">'+data.inv[i].minfr+'</span></div></div></div>';
        bus+='<div class="column-eight w-15 fl">';
        bus+='<div class="seat-bar ">';
        bus+='<div class="light-g-bar">';
        bus+='<div class="orange-bar w-55"></div>';
        bus+='</div>';
        bus+='</div>';
        bus+='<div class="seat-left m-top-30">'+data.inv[i].nsa+'<span class="l-color"> Seats available</span></div>';
        bus+='<div class="window-left m-top-8">'+data.inv[i].WnSt+'<span class="l-color"> Window</span></div></div></div></div>';
        bus+='<div class="clearfix m-top-16">';
        bus+='<div class="button view-seats fr">View Seats</div>';
        bus+='<div><ul class="fr bottom-panel d-color"><li class="amenties b-p-list"><span class="txt-val ">Amenities</span></li><li class="amenties b-p-list"><span class="txt-val ">Bus Photos</span></li><li class="amenties b-p-list"><span class="txt-val ">Boarding &amp; Dropping Points</span></li><li class="amenties b-p-list"><span class="txt-val ">Reviews</span></li><li class="amenties b-p-list"><span class="txt-val ">Cancellation Policy</span></li><li class="amenties b-p-list"><span class="txt-val ">Rest Stops <span>(2)</span></span></li></ul><div class="clearfix"></div><div class="panel-loader hide"></div></div></div></div></li></div>';
      }
      bus+='</ul>';
      $('#bus').append(bus);
        console.log(data.inv);
    }
})
}
$(function(){
  var btns = document.getElementById("btn-s");
  var btnl = document.getElementById("btn-l");
  var btna = document.getElementById("btn-a");
  var modals= document.getElementById("modal-signup");
  var modall= document.getElementById("modal-login");
  var modala= document.getElementById("modal-account");
  var spans = document.getElementById("close-s");
  var spanl = document.getElementById("close-l");
  var spana = document.getElementById("close-a");
  var loggedout=document.querySelectorAll(".logged-out");
  var loggedin=document.querySelectorAll(".logged-in");

  // const setupUi=(user)=>
  // {
  //   if(user){
  //     loggedin.forEach(item=> item.style.display = 'block'); 
  //     loggedout.forEach(item=> item.style.display = 'none');
  //   }else{
  //     loggedin.forEach(item=> item.style.display = 'none'); 
  //     loggedout.forEach(item=> item.style.display = 'block');
  //   }
  // }
  btns.onclick = function() {
    modals.style.display = "block";
  }
  btnl.onclick = function() {
    modall.style.display = "block";
  }
  btna.onclick = function() {
    modala.style.display = "block";
  }
  spans.onclick = function() {
    modals.style.display = "none";
  }
  spanl.onclick = function() {
    modall.style.display = "none";
  }
  spana.onclick = function() {
    modala.style.display = "none";
  }
})

