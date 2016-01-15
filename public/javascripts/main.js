'use strict';
(function() {
    
    var app = angular.module('news-feeds',['ngResource']);
    app.controller('FeedsController', function($resource,$scope,socket){
        var News = $resource('/api/news',{id:'@_id'});
        $scope.newsList = $resource('/api/news').query();
        $scope.news = new News();
        $scope.saveFeed = function(){
            console.log($scope.news,"chitosss");
            $scope.news.$save();
            $scope.news = new News();
            $scope.newsList = $resource('/api/news').query();
            socket.emit('save-feed',true);
        }
        socket.on('latest-feed', function (data) {
            console.log(data);
            $scope.newsList = $resource('/api/news').query();
        });
    });
    app.factory('socket', function ($rootScope) {
        var socket = io.connect();
        return {
            on: function (eventName, callback) {
            socket.on(eventName, function () {  
                var args = arguments;
                $rootScope.$apply(function () {
                callback.apply(socket, args);
                });
            });
            },
            emit: function (eventName, data, callback) {
            socket.emit(eventName, data, function () {
                var args = arguments;
                $rootScope.$apply(function () {
                if (callback) {
                    callback.apply(socket, args);
                }
                });
            })
            }
        };
    });
    
})();