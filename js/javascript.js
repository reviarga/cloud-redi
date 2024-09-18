
$(function() {
  
    $('input[name=plan]').on('change', function() {
      let $this = $(this);
      let $label = $this.parent('label');
      
      if(!($label.hasClass('label-checked'))) {
        $('label').removeClass('label-checked');
        $('label').find('.radio-check').hide();
        $label.addClass('label-checked');
        $label.find('.radio-check').show();
      }
       
    });
    
  });

  function handleShowPasword() {
    var x = document.getElementById("floatingPassword");
    var y = document.getElementsByClassName("field-icon")
    if (x.type === "password") {
      x.type = "text";
      y[0].style.color = "#36b666";
    } else {
      x.type = "password";
      y[0].style.color = "#6c757d";
    }
  }
  function handleShowConfirmPasword() {
  var a = document.getElementById("floatingPassword2");
  var b = document.getElementsByClassName("field-icon2")
  if (a.type === "password") {
    a.type = "text";
    b[0].style.color = "#36b666";
  } else {
    a.type = "password";
    b[0].style.color = "#6c757d";
  }
}
