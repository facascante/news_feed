'use strict';
(function() {
    
    var app = angular.module('news-feeds',['ngResource']);
    app.controller('FeedsController', function($resource,$scope){
        var socket = io();
        $scope.feeds = [];
        $resource('/api/news').query().$promise.then(function(data){
            $scope.feeds = data;
        });
        
    })
    
})();