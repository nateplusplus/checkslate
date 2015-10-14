'use strict';

var url = 'js/model.js';
var controllers = angular.module('checkslate.controllers', []);

controllers.controller('appCtrl', function ($scope, $http) {
    $scope.edit = false;
    $scope.items = '';
    $http.get(url).success(function(data){
        $scope.items = data;
    });
    $scope.toggleEdit = function(){
        if($scope.edit){
            $scope.edit = false;
        } else {
            $scope.edit = true;
        }
    }
    $scope.itemClicked = function(clicked){
        
        for ( var i = 0; i < $scope.items.length; i++ ) {
            if ( clicked.name === $scope.items[i].name ) {
                if ( $scope.items[i].complete === false ){
                    $scope.items[i].complete = true;
                } else {
                    $scope.items[i].complete = false;
                }
            }
        }
    }
    $scope.addItem = function(item){
        var newItem = { "name" : item, "complete" : false };
        console.log();
            if ( item != undefined && /[A-Za-z]/g.test(item) ){
                $scope.items.unshift(newItem);
            }
        //document.getElementById('addItemInput').value = '';
        $scope.newItem = '';
    }
    $scope.keyboardHandler = function(keyEvent, item){
        if(keyEvent.which === 13){
            $scope.addItem(item);
        }
    }
    $scope.deleteItem = function(clicked){
        for ( var i = 0; i < $scope.items.length; i++ ) {
            if ( clicked.name === $scope.items[i].name ) {
                $scope.items.splice(i, 1);
            }
        }
    }
    $scope.clean = function(){
        for ( var i = 0; i < $scope.items.length; i++ ) {
            $scope.items[i].complete = false;
        }
    }
});