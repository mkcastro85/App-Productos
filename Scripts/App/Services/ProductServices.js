MiApp.factory("ProductServices", function ($http) {
    return {
        getAll: function () {
            return $http.get("http://localhost:7000/api/Productos");
        },
        delete: function (id) {
            return $http.delete("http://localhost:7000/api/Productos/" + id);
        },
        create: function (product) {
            return $http.post("http://localhost:7000/api/Productos", product);
        },
        update: function (id, product) {
            return $http.put("http://localhost:7000/api/Productos/" + id, product);
        },

    }
});


