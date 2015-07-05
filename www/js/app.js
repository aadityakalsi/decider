var app = angular.module("decider", ["ionic"]);

var decider_ctrl = function ($scope, $log) {
    $scope.show_chats = function() {
        $log.info("show_chats() called");
    }
};

app.controller("decider_ctrl", ["$scope", "$log", decider_ctrl]);
