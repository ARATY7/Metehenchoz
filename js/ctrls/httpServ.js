/*
  But     : Server ctrl
  Auteur  : Noé Henchoz
  Date    : 26.05.2022 / v1.0 
*/

class HttpServ {

  constructor() {}

  httpErrors(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = 'No access to the requested resource...';
        } else if (xhr.status === 401) {
          msg = 'The API key is not provided or is invalid...';
        } else if (xhr.status === 400) {
          msg = 'Error with city entry...';
        } else if (exception === 403) {
          msg = 'The number of calls available to the API has been exceeded...';
        } else {
          msg = 'Unknown error : ' + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  loadView(vue, callback) {
    if (vue === 'footer') {
      $('#footer').load('views/' + vue + '.html', () => {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    } else {
      $('#views').load('views/' + vue + '.html', () => {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    }
  }

  loadSubView(vue, callback) {
    $('#subViews').load('views/subViews/' + vue + '.html', () => {
      if (typeof callback !== 'undefined') {
        callback();
      }
    });
  }

  getCurrent(city, successCallBack) {
    $.ajax({
      url: 'https://api.weatherapi.com/v1/current.json',
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      data: {
        key: API_KEY,
        q: city
      },
      success: successCallBack
    });
  }

  getForecast(city, successCallBack, errorCallBack) {
    $.ajax({
      url: 'https://api.weatherapi.com/v1/forecast.json',
      method: 'GET',
      contentType: 'application/json; charset=utf-8',
      data: {
        key: API_KEY,
        q: city,
        days: 3
      },
      success: successCallBack,
      error: errorCallBack
    });
  }
}
