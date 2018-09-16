function addActive(id){


	$("ul.components li").removeClass('active');
   
    $(id).parent().addClass("active");

    setTimeout(closeSidebar, 300);
 

}

function closeSidebar(){

    
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
 

}