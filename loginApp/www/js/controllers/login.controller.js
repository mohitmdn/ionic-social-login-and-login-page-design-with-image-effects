(function () {
    'use strict';

    function loginController($rootScope, $timeout, $interval, $cordovaOauth) {
        var vm = this;
        var current_image = 1;
        var max_images = 5;

        $interval(function () {
            jQuery('.bg-image .img').addClass('fadeOut');
            if (current_image == max_images) {
                current_image = 1;
            } else {
                current_image += 1;
            }
            jQuery('.bg-image').css('background-image', jQuery('.bg-image .img').css('backgroundImage'));
            $timeout(function () {
                var img = jQuery('.bg-image .img').css('backgroundImage', 'url(../img/backgrounds/' + current_image + ".jpg)");
                img.removeClass('fadeOut');
            }, 500);
        }, 2000);


        vm.googleLogin = function () {
            $cordovaOauth.google("app-id", ["email", "profile"]).then(function (result) {

            }, function (error) {

            });
        }



        vm.facebookLogin = function () {
            $cordovaOauth.facebook("yourAppID", ["email", "public_profile"], { redirect_uri: "http://codingscripts.com/callback" }).then(function (result) {
                alert(result.access_token);
            }, function (error) {
                alert("Error: " + error);
            });
        }




        vm.twitterLogin = function () {
            var api_key = "myyQyjg27eREc9vlj5xxxxxxxx"; //Enter your Consumer Key (API Key)
            var api_secret = "mrNFr0MTwJ8Gj3LDh00KaeuplaS5Izvxxxxxxxx"; // Enter your Consumer Secret (API Secret)
            $cordovaOauth.twitter(api_key, api_secret, { redirect_uri: 'http://codingscripts.com' }).then(function (result) {


            }, function (error) {

            });
        }

    };

    angular.module('starter').controller('loginController', loginController);

})();