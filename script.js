function showPopup () {
  var popup = document.getElementById('popup');
  popup.classList.add('show')
}

function hidePopup () {
  var popup = document.getElementById('popup');
  popup.classList.remove('show')
}


var filterizd = $('.filter-container').filterizr({
   animationDuration: .5,

});
