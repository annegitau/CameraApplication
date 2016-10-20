(function () {
    
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);
    var pictureSource, destinationType;
    
    function onDeviceReady() {
        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        
        document.getElementById("capturePhoto").onclick = function () {
            alert("Am here!");
            navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
                quality : 50, destinationType : destinationType.DATA_URL
            });
        }
        document.getElementById("geolocationdata")addEventListener("click",function(){
            navigator.geolocation.getCurrentLocation(onSuccess, onError, {enableHighAccuracy:true});
        });
    };
	 
     function onPhotoDataSuccess(imageData){
         var smallImage = document.getElementById('smallImage');
         smallImage.style.display = 'block';
         smallImage.src = "data:image/jpeg;base64," + imageData;
     }
    function onFail(message){
        alert("Failed because" + message);
    }
	   
    function onPhotoURLSuccess(imageURL){
         var largeImage = document.getElementById('largeImage');
         largeImage.style.display = 'block';
         largeImage.src = "data:image/jpeg;base64," + imageURL;
     };
	 cordova.plugins.barcodeScanner.encode(cordova.plugins.barcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com", function(success) {
            alert("encode success: " + success);
          }, function(fail) {
            alert("encoding failed: " + fail);
          });
	       // onSuccess Callback 
    //   This method accepts a `Position` object, which contains 
    //   the current GPS coordinates 
    // 
    function onSuccess(position) {
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitude: '  + position.coords.latitude      + '<br />' +
                            'Longitude: ' + position.coords.longitude     + '<br />' +
                            '<hr />'      + element.innerHTML;
    }
 
    // onError Callback receives a PositionError object 
    // 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    // Options: throw an error if no update is received every 30 seconds. 
    // 
    var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000 });
})();