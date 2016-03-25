(function(){
  'use strict';

    angular.module('Mifos_Self_Service')
        .service('ClientService', ['$q', '$http', '$rootScope', '$resource', 'BASE_URL', ClientService]);

    function ClientService($q, $http, $rootScope, $resource, BASE_URL) {

        this.getAllClients = function(data) {
        	return $resource(BASE_URL+'/self/clients', data);
        };

        this.getClient = function(id) {
            return $resource(BASE_URL+'/self/clients/'+id);
        }

        this.getClientImage = function(id) {
            return $resource(BASE_URL+'/self/clients/'+id+'/images');
        }

        this.getClientCharges = function(id) {
            return $resource(BASE_URL+'/self/clients/'+id+'/charges?pendingPayment=true');
        }

        this.getClientAccounts = function(id) {
            return $resource(BASE_URL+'/self/clients/'+id+'/accounts');
        }

    }

})();