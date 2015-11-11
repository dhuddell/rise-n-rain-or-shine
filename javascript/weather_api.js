'use strict';
var weather_api = {
  url: 'http://localhost:3000',

  ajax: function(config, cb) {
    $.ajax(config).done(function(data, textStatus, jqxhr) {
      cb(null, data);
    }).fail(function(jqxhr, status, error) {
      cb({jqxher: jqxhr, status: status, error: error});
    });
  },

//////////////////////////////////////////////////////////////////////////////////////////

  register: function register(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/register',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function login(credentials, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/login',
      contentType: 'application/json',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function logout(id, token, callback) {
    this.ajax({
      method: 'DELETE',
      url: this.url + '/logout/' + user_id,
      headers: {
          Authorization: 'Token token=' + token
      },
      contentType: 'application/json',
      dataType: 'json'
    }, callback);
  },

//////////////////////////////////////////////////////////////////////////////////////////

createProfile: function createProfile(profile, user_id, token, callback) {
  this.ajax({
    method: 'POST',
    url: this.url + '/users/' + user_id + '/profile',
    headers: {
        Authorization: 'Token token=' + token
    },
    contentType: 'application/json',
    data: JSON.stringify(profile),
    dataType: 'json'
  }, callback);
},

updateProfile: function updateProfile(profile, user_id, token, callback) {
  this.ajax({
    method: 'PATCH',
    url: this.url + '/users/' + user_id + '/profile',
    headers: {
        Authorization: 'Token token=' + token
    },
    contentType: 'application/json',
    data: JSON.stringify(profile),
    dataType: 'json'
  }, callback);
},

readProfile: function readProfile(user_id, token, callback) {
  this.ajax({
    method: 'GET',
    url: this.url + '/users/' + user_id + '/profile',
    headers: {
      Authorization: 'Token token=' + token
    },
    dataType: 'json'

  }, callback);
},

showPairs: function showPairs(token, callback) {
  this.ajax({
    method: 'GET',
    url: this.url +  '/profile/weather_pairs',
    headers: {
      Authorization: 'Token token=' + token
    },
    dataType: 'json'

  }, callback);
},


createWeatherPair: function createWeatherPair(weather_pair, token, callback){
  this.ajax({
    method: 'POST',
    url: this.url + '/profile' + '/weather_pairs',
    headers: {
        Authorization: 'Token token=' + token
    },
    contentType: 'application/json',
    data: JSON.stringify(weather_pair),    //NEED TO ADD PROFILE ID TO THIS
    dataType: 'json'
    }, callback)
},



// Call to forecast.io asking for weather object
get_weather: function get_weather(id, callback) {
    this.ajax({
      method: 'GET',
      url: 'https://api.forecast.io/forecast/0d2fae036c63eb41ba914a58600cb1ef/' + current_user.zip_code,
      headers: {},
      contentType: 'application/json; charset=utf-8'
    }, callback);
  },
//////////////////////////////////////////////////////////////////////////////////////////

  //Authenticated api actions
  listGames: function (token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/games',
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
      }, callback);
  },

  createGame: function (token, callback) {
    this.ajax({
      method: 'POST',
      url: this.url + '/games',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify({}),
      dataType: 'json',
    }, callback);
  },

  showGame: function (id, token, callback) {
    this.ajax({
      method: 'GET',
      url: this.url + '/games/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      dataType: 'json'
    }, callback);
  }
};

// };


// //$(document).ready(...
// $(function() {


//   $('#login').on('submit', function(e) {
//     var credentials = wrap('credentials', form2object(this));
//     var cb = function cb(error, data) {
//       if (error) {
//         callback(error);
//         return;
//       }
//       callback(null, data);
//       $('.token').val(data.user.token);
//     };
//     e.preventDefault();
//     weather_api.login(credentials, cb);
//   });

//   $('#create-game').on('submit', function(e) {
//     var token = $(this).children('[name="token"]').val();
//     e.preventDefault();
//     weather_api.createGame(token, callback);
//   });
//



