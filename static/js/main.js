$(document).ready(function(){
  $.ajax({
    url: "https://tools.rijnieks.com/impressum.php", 
    success: function(result){
      $('#impressum').html(result);
    }
  });
});
