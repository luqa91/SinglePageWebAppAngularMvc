var ApiService = function ($http) {
    var result;
    this.GetApiCall = function (controllerName, method, callback) {
        result = $http.get('api/' + controllerName + '/' + method).then(
            function (data, status) {
                var event = {
                    result: data,
                    hasErrors: false
                };
                callback(event);
            }).catch(
            function (data, status) {
                var event = {
                    result: "",
                    hasErrors: true,
                    error: data
                };
                callback(event);
            }
            );
    }

    this.PostApiCall = function (controllerName, methodName, obj, callback) {
        result = $http.post('api/' + controllerName + '/' + methodName, obj).then(function (data, status) {
            var event = {
                result: data,
                hasErrors: false
            };
            callback(event);
        }).catch(function () {
            var event = {
                result: "",
                hasErrors: true,
                error: data
            };
            callback(event);
        });
        return result;
    };

}