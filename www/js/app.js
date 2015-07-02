var app = angular.module("decider", ["ionic"]);

var decider_ctrl = function ($scope, $log) {
    $scope.chats = [];
    $scope.show_chats = function() {
        $log.info("show_chats() called");
        var date = new Date();
        $scope.chats.unshift({
            author: "Adi",
            time: date.getTime(),
            question: "Short question",
            detail_question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ipsam. Iure dignissimos corporis, consequuntur minus sint expedita vitae ipsum ex consectetur adipisci impedit repellendus explicabo id aliquam saepe, nihil deserunt."
        });
        $scope.$broadcast("scroll.refreshComplete");
    }
};

app.controller("decider_ctrl", ["$scope", "$log", decider_ctrl]);
