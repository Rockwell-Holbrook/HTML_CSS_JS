angular.module('demo', [])
.controller('mainCtrl', function($scope, $http) {
    $http.get('https://www.potterapi.com/v1/houses?key=$2a$10$qHP0eb3Zdr1ZaeDMOvJwH.LgkWvNh4x53UrQz0Wy/RTlALo5grtNO').
        then(function(response) {
            $scope.characters = response.data;
            console.log($scope.characters);
        });
        
    $scope.houseName;
    $scope.headOfHouse;
    $scope.houseGhost;
    $scope.founder;
    $scope.values;
    $scope.mascot;
        
    $scope.classByIndex = function (index) {
        $scope.houseName = $scope.characters[index]['name'];
        console.log($scope.houseName);
        $scope.headOfHouse = $scope.characters[index]['headOfHouse'];
        $scope.houseGhost = $scope.characters[index]['houseGhost'];
        $scope.founder = $scope.characters[index]['founder'];
        $scope.values = $scope.characters[index]['values'][0] + ", " + $scope.characters[index]['values'][1] + 
        ", " + $scope.characters[index]['values'][2] + ", " + $scope.characters[index]['values'][3];
        $scope.mascot = $scope.characters[index]['mascot'];
        
        $scope.createWebElement();
    }
    
    $scope.createWebElement = function() {
        var elementString = '<p> <strong> House Name: </strong>' + $scope.houseName + '</p>' +
            '<p> <strong> Head of House: </strong>' + $scope.headOfHouse + '</p>' +
            '<p> <strong> Founder: </strong>' + $scope.founder + '</p>' +
            '<p> <strong> House Ghost: </strong>' + $scope.houseGhost + '</p>' +
            '<p> <strong> Mascot: </strong>' + $scope.mascot + '</p>' +
            '<p> <strong> Values: </strong>' + $scope.values + '</p>'
            
        if($scope.houseName === "Gryffindor") {
            elementString += '<img src="gryffindor.jpeg" alt="gryffindor flag" style="width:300px;height:168px;">'
        }
        
        else if($scope.houseName === "Ravenclaw") {
            elementString += '<img src="revenclaw.jpeg" alt="gryffindor flag" style="width:300px;height:168px;">'
        }
        
        else if($scope.houseName === "Slytherin") {
            elementString += '<img src="slytherin.jpeg" alt="gryffindor flag" style="width:300px;height:168px;">'
        }
        
        else {
            elementString += '<img src="hufflepuff.jpeg" alt="gryffindor flag" style="width:300px;height:168px;">'
        }
            
        var newEle = angular.element(elementString)
        var target = document.getElementById('houseInformation');
        angular.element(target).html('');
        angular.element(target).append(newEle);
    }
    
})

