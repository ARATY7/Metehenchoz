/*
  But     : Classe contrôleur principale
  Auteur  : Noé Henchoz 300221
  Date    : 26.05.2022
*/

$().ready(function () {
  http = new Http();
  indexCtrl = new IndexCtrl();
  http.centraliserErreurHttp(mainCtrl.afficherErreurHttp);
});

class IndexCtrl {

  constructor() {
    this.loadHome();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadHome() {
    service.chargerVue("home", function () {
      new HomeCtrl();
    });
  }

}

/*function test(city) {
    $.ajax('https://api.weatherapi.com/v1/current.json', {
        type: 'GET',
        contentType: 'application/json',
        data: {
            key: 'b301c07a26014a9cbb355734222505',
            q: city,
            aqi: 'no'
        },
        success: function (data) {
            console.log(data.location)
            document.getElementById('test').innerHTML = data.location.country;

        }
    });
}

function lol() {
    console.log($("#abc").html());
    test($("#abc").html());
}

function reloadPage() {
    window.location.reload(true);
}*/
