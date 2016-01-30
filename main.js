$(function () {
  var complete = function (data) {
    $('#panel').html(data);
  };

  $('nav a').on('click', function () {
    var $this = $(this);

    if ($this.hasClass('one')) {
      $.ajax('./panel-1.html').done(complete);
    } else {
      $.ajax('./panel-2.html').done(complete);
    }
  });

  $('#name').on('keyup', function () {
    $('#name-result').text('My name is ' + $(this).val());
  });

  // Old Ajax Call
  function fake () {
    var httpRequest;

    if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
      httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function (data) {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
          $('#panel').html(data);
        } else {
          alert('Algo salio mal');
        }
      }
    };

    httpRequest.open('GET', './panel-1.html', true);
    httpRequest.send(null);
  }
});
