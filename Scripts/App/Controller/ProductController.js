MiApp.controller('ProductController', function ($scope, ProductServices) {
    console.log(ProductServices);
    init();
    $scope.product = [];
    getProducts();

    $scope.functions = {
        deleteProduct: deleteProduct,
        addProduct: addProduct,
        loadForm: loadForm,
    }

    function getProducts() {
        ProductServices.getAll().then(function (response) {
            console.log(response.data);
            $scope.product = response.data;
        }, function (error) {
            alert("Error cargando los datos");
        });

    }

    function deleteProduct(product) {
        console.log(product)
        ProductServices.delete(product.Id).then(function (response) {
            console.log(response);
            getProducts();

        }, function (error) {
            console.log(error);
            alert("Error al eliminar producto");

        });
    }

    function addProduct() {

        if ($scope.Idupdate == null) {
            createProduct();
        }
        else {
            updateProduct();
        }
        
    }

    function loadForm(product) {
        console.log(product);
        $scope.Product = {
            Nombre: product.Nombre,
            Sku: product.Sku,
            Descripcion: product.Descripcion,
            Cantidad: product.Cantidad,
            IdCategoria: product.IdCategoria,
        };
        $scope.Idupdate = product.Id;

    }

    function createProduct() {
        ProductServices.create($scope.Product).then(
            function (response) {
                console.log(response);
                init();
                getProducts();

            }, function (error) {
                console.log(error);
                alert("Error al crear producto");
            });
    }

    function updateProduct() {
        ProductServices.update($scope.Idupdate, $scope.Product).then(
            function (response) {
                console.log(response);
                init();
                getProducts();

            },
            function (error) {
                console.log(error);
                alert("Error al actualizar producto");
            });
    }

    function init() {
        $scope.Product = {
            Nombre: "",
            Sku: "",
            Descripcion: "",
            Cantidad: "",
            IdCategoria: ""
        };
        $scope.Idupdate = null;
    }


});



