function getItem( id ){
  var hrefs =  $(id).attr("href-to-view-back") == true ? $(id).attr("href-to-view") : "views/" + $(id).attr("href-to-view");
  if ($(id).attr("href-to-menu") != undefined) {
		var contenido = $(id).attr("href-to-menu");
		$(".change-menu").find(".has-sub").removeClass("has-sub");
		$(".change-menu").find(".active").removeClass("active");
		$(".change-menu li a[href*='" + contenido + "']").parent("li").addClass("active has-sub");
	}
  var idelement  = { id : 0 };
  if( $(id).attr("href-to-view-data") != undefined){
      idelement.id = $(id).attr("href-to-view-data");
  }
  $.ajax({
    type: "get" ,
    url: hrefs + ".html",
    data: idelement,
    cache:false,
    success: function(dato){
      $(".main-content").fadeOut("slow",function(){
        $(this).html(dato).slideDown(10);
      });
    },error: function(XMLHttpRequest,textStatus,errorthrows){
        alert('Error: ' + errorthrows);
    }
  });
  
}
