angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

        $scope.searchresults =[
            {value:'1',Name:'Holden Barina' ,description:'Auto FWD',price:'$18,500', year:'2014', image:'ford-hatch.jpg'},
            {value:'2',Name:'Ford Focus' ,description:'Ambiente Powershirt FWD',price:'$23,500', year:'2013', image:'holden-hatch.jpg'},
            {value:'3',Name:'Volkswagon Beetle' ,description:'MK II TSI DSG FWD',price:'$24,800', year:'2014', image:'beetle-hatch.jpg'},
            {value:'4',Name:'Volkswagon Golf' ,description:'MKVII 90TSI DSG FWD',price:'$25,500', year:'2014', image:'golf-hatch.jpg'},
            {value:'5',Name:'Toyota Corolla' ,description:'ZRE182R 1.8 Ascent CVT FWD',price:'$19,650', year:'2014', image:'toyota-hatch.jpg'},
            {value:'6',Name:'Nissan Micra' ,description:'K13 1.2 STAuto FWD', year:'2013',price:'$17,200', image:'nissan-hatch.jpg'},
            {value:'7',Name:'Honda Civic' ,description:'FK 1.8 VTi-S Auto FWD', year:'2014',price:'$22,800', image:'honda-hatch.jpg'},
            {value:'8',Name:'Hyundai Veloster' ,description:'FS3 1.6 GDi Plus DCT FWD', year:'2014',price:'$26,773', image:'hyundai-hatch.jpg'},
            {value:'9',Name:'Mazda 3' ,description:'2.2 XD Astina Auto FWD', year:'2014',price:'$36,263', image:'mazda-hatch.jpg'}
        ];



  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})



.controller("CameraCtrl", function($scope, $cordovaCamera, $cordovaFile, $window) {

   $scope.photo ='';
   $scope.filesystem ='';

    $scope.takePicture = function() {
        var options = {
            quality : 90,
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.CAMERA,
            allowEdit : true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 901,
            targetHeight: 601,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: true
        };

        $cordovaCamera.getPicture(options).then(function(imageURI) {

            //$scope.imgURI = "data:image/jpeg;base64," + imageData;

           // var image = document.getElementById('myImage');
           // image.src = imageURI;

            //$window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);



            //$window.resolveLocalFileSystemURL(imageURI, onResolveSuccess, fail);

            $scope.photo = imageURI;

        }, function(err) {
            // An error occured. Show a message to the user
        });

        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
            $scope.filesystem = fileSystem.name;
        }

        function onResolveSuccess(fileEntry) {
            $scope.photo = fileEntry.name;
            console.log(fileEntry.name);
        }

        function fail(evt) {
            console.log(evt.target.error.code);
        }



    }

});




