discount.onchange = function() {
  var button = document.body.getElementsByClassName('inner-fieldset__input_active')[0];
  var colorArray = document.getElementsByClassName('inner-fieldset__input_active');
  if(button.disabled) {
    button.disabled = false;
    colorArray[0].style.backgroundColor = '#F2F0F9';
  } else {
    button.disabled = true;
    colorArray[0].style.backgroundColor = '#E5E5E5';
  }
}
