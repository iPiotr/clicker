function Order($scope) {
    
    $scope.services = [{
        name: 'Necessary expenses',
        price: 3000,
        active: true
    }, {
        name: 'Credit',
        price: 2000,
        active: false
    }, {
        name: 'Fuel',
        price: 400,
        active: false
    }, {
        name: 'Car',
        price: 2200,
        active: false
    }, {
        name: 'Food',
        price: 200,
        active: true
    }];

    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };

    $scope.total = function () {

        let total = 0;

        angular.forEach($scope.services, function (s) {
            if (s.active) {
                total += s.price;
            }
        });

        return total;
    };

}