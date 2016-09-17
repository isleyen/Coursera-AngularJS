(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckCountroller', LunchCheckCountroller);

LunchCheckCountroller.$inject = ['$scope'];
function LunchCheckCountroller($scope) {
  $scope.stringText = "";
  $scope.counter = "-1"; //initial value

//  $scope.statusColor --> to changeMmessage Font color0
//  $scope.statusTxtBox --> to change TextBox Border Color

  $scope.sayMessage = function () {
  if (parseInt($scope.counter)==-1) {
      return "";
  }
  else if(parseInt($scope.counter)==0){
      $scope.statusColor = "red";
      $scope.statusTxtBox = "emptyTxtBox";
      return "Please enter data first";
  }
  else if (parseInt($scope.counter)<=3) {
      $scope.statusColor = "green";
      $scope.statusTxtBox = "filledTxtBox";
      return "Enjoy!";
    }
  else if (parseInt($scope.counter)>3) {
      $scope.statusColor = "green";
      $scope.statusTxtBox = "filledTxtBox";
      return "Too much!";
  }

  };
  $scope.CountLunch = function () {
    $scope.counter = "-1"; //when button clicked, counter --> initial value
    if($scope.stringText!==""){
        var sperator = ',';
        var list = $scope.stringText.split(sperator);
        $scope.counter = list.length;
    }
    else{
        $scope.counter = "0";
    }
  };
}
})();
