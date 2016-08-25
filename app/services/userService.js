module.exports = function($http) {
    var urlBase = 'https://livedemo.xsolla.com/fe/test-task/baev';
    var UserHttp = {};

    UserHttp.getUser = function(id) {
        return $http.get(urlBase + '/users/' + id);
    }

    UserHttp.createUser = function(user) {
        return $http({
            url: urlBase + '/users',
            method: 'POST',
            data: {
                user_id: user.user_id,
                user_name: user.user_name,
                user_custom: user.user_custom,
                email: user.user_email
            }
        })
    }

    UserHttp.getOperations = function(id, start, end) {
        var d_start = new Date(start);
        var d_end = new Date(end);
        return $http({
            url: urlBase + '/users/' + id + '/transactions',
            method: 'GET',
            params: {
                datetime_from: ISODateString(d_start),
                datetime_to: ISODateString(d_end)
            }
        })
    }

    function ISODateString(d) {
        function pad(n) {
            return n < 10 ? '0' + n : n
        }
        return d.getUTCFullYear() + '-' +
            pad(d.getUTCMonth() + 1) + '-' +
            pad(d.getUTCDate()) + 'T' +
            pad(d.getUTCHours()) + ':' +
            pad(d.getUTCMinutes()) + ':' +
            pad(d.getUTCSeconds()) + 'Z'
    }



    return UserHttp;
}
