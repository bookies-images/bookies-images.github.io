document.addEventListener('DOMContentLoaded', function(event) {
  var fileExt = [".png", ".jpg", ".PNG", ".JPG"];
  $.ajax({
    url: '../img/26.01/',
    success: function(data) {
      $(data).find("a:contains(" + fileExt[0] + "),a:contains(" + fileExt[1] + "),a:contains(" + fileExt[2] + "),a:contains(" + fileExt[3] + ")").each(function() {
        var filename = this.href.replace(window.location.host, "").replace("http://", "http://127.0.0.1:5500");

        $("#fileNames").append("<li>" + '<a href="' + filename + '">' + filename + '</a>' + "</li>");
      });
    }
  });
});