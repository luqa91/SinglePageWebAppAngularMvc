﻿var ViewProductController = function ($scope, $uibModalInstance, data) {
    $scope.selectedProduct = data;

    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.series = ['Series A', 'Series B'];

    $scope.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
}

ViewProductController.$inject = ['$scope', '$uibModalInstance'];