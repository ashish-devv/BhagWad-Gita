var app = angular.module("myapp", []);
var urlforchapter = "https://vedicscripturesapi.herokuapp.com/gita/chapters";
var urlforparticularshlok = "https://vedicscripturesapi.herokuapp.com/gita/";
app.controller("mycontroller", ($scope, $http) => {
  $http.get(urlforchapter).then(
    (response) => {
      console.log(response.data);
      $scope.chaptersdata = response.data;
    },
    (error) => {
      console.log(error);
    }
  );
  $scope.changeverseoptions = (chaptersofgita) => {
    console.log(chaptersofgita);
    if (chaptersofgita == 0) {
    } else {
      var noofverse = $scope.chaptersdata[chaptersofgita - 1].verses_count;
      $scope.noofverse = noofverse;
      console.log(noofverse);
    }
  };

  $scope.getSelectedVerse = () => {
    $http
      .get(urlforparticularshlok + $scope.chaptersofgita + "/" + $scope.verse)
      .then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };
});

app.filter("range", function () {
  return function (input, min, max) {
    min = parseInt(min);
    max = parseInt(max);
    for (var i = min; i <= max; i++) input.push(i);
    return input;
  };
});
