function showImage(id) {
  document.getElementById(id).style.opacity = '1';
}

function hideImages() {
  var images = ['broda', 'broda2','usta'];
  images.forEach(function(id) {
    document.getElementById(id).style.opacity = '0';
  });
}