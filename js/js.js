document.addEventListener('DOMContentLoaded', function(event) {
  // var fileExt = [".png", ".jpg", ".PNG", ".JPG"];
  // $.ajax({
  //   url: 'img/26.01/',
  //   success: function(data) {
  //     $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + "),a:contains(" + fileExt[3] + ")").each(function() {
  //       // var filename = this.href.replace(window.location.host, "").replace("http://", "http://127.0.0.1:5500");
  //       // var filename = this.href.replace(window.location.host, "").replace("http://", "https://bookies-images.github.io");
  //       var filename = $(this).attr("href");
  //       console.log(filename);

  //       // $("#fileNames").append("<li>" + '<a href="' + filename + '">' + filename + '</a>' + "</li>");
  //     });
  //   }
  // });



  var folder = "img/26.01/";

  $.get({
    url: folder,
    success: function(data) {
      $(data).find("a").attr("href", function(i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $("body").append("<img src='" + val + "'>");
          console.log(val);
        }
      });
    }
  });
});