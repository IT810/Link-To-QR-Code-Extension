document.addEventListener('DOMContentLoaded', function() {
    var convertButton = document.getElementById('convertButton');
    var urlInput = document.getElementById('urlInput');
    var qrCode = document.getElementById('qrCode');
  
    convertButton.addEventListener('click', function() {
      var url = urlInput.value;
      if (url) {
        var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(url);
        qrCode.innerHTML = '<img src="' + qrCodeUrl + '">';
      }
    });
  });