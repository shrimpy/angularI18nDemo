var app = angular.module('Multilingual', ['ui.router', 'pascalprecht.translate']);

app.config(['$stateProvider','$translateProvider', function($stateProvider, $translateProvider) {

  // $translateProvider
  // .translations('ar', {
  //   'HELLO': 'مرحبا'
  // })
  // .translations('en', {
  //   'HELLO': 'Hello'
  // })
  // .preferredLanguage('ar');

  $translateProvider.useStaticFilesLoader({
      prefix: '/lang/',
      suffix: '.json'
  });

  $translateProvider.preferredLanguage("ar");
  $translateProvider.fallbackLanguage("en");
  console.log("foo " + Date.now());
}]);

