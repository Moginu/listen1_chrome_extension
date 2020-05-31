/* global angular chrome localStorage Github window */
/* eslint-disable global-require */
const ngLogin = angular.module('login', []);


ngLogin.factory('login', ['$rootScope',
  $rootScope => ({

  }),
]);

ngLogin.provider('login',  function() {

  return{
    $get : function() {
      return {
        login: function() {
          console.log('login');
        }
      }
    }
  }
});

