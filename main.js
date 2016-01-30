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
});
