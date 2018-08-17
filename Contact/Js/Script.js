var map,map2, marker, infoWindow;

  function initMap() {
      var infowindow = new google.maps.InfoWindow;
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: {
          lat: 24.8102174,
        lng: 67.0153858
      },
      disableDefaultUI: false,
      //START STYLE
     styles: [
              {elementType: 'geometry', stylers: [{"visibility": "on"}]},
              {elementType: 'labels.text.stroke', stylers: [{"visibility": "off"}]},
              {elementType: 'labels.text.fill', stylers: [{"visibility": "on"}]},
              
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{"visibility": "off"}]
              },
             
              
            ]
        //END STYLE
    });
    
    var image = {
      url: "http://www.clker.com/cliparts/e/1/u/W/s/K/maps-th.png",
      scaledSize: new google.maps.Size(50, 50),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(32,65),
    labelOrigin: new google.maps.Point(20,70)
    };
    var markerLabel = 'MID NIGHT RESTURANT !';    
    marker = new google.maps.Marker({
      map: map,
      draggable: true,
      icon: image,
      animation: google.maps.Animation.DROP,
      label: {
      text: markerLabel,
      color: "#eb3a44",
      fontSize: "16px",
      fontWeight: "bold",
      
     
    },
      position: {
          lat: 24.8102174,
        lng: 67.0153858
      }
    });
    var infowindow = new google.maps.InfoWindow;
    map2 = new google.maps.Map(document.getElementById('maptwo'), {
      zoom: 17,
      center: {
          lat: 32.736259, 
        lng: -96.864586
      },
      disableDefaultUI: false,
      //START STYLE
     styles: [
              {elementType: 'geometry', stylers: [{"visibility": "on"}]},
              {elementType: 'labels.text.stroke', stylers: [{"visibility": "off"}]},
              {elementType: 'labels.text.fill', stylers: [{"visibility": "on"}]},
              
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{"visibility": "off"}]
              },
             
              
            ]
        //END STYLE
    });
    //CUSTOM MARKER ICON
    var image = {
      url: "http://www.clker.com/cliparts/e/1/u/W/s/K/maps-th.png",
      scaledSize: new google.maps.Size(50, 50),
     origin: new google.maps.Point(0, 0),
     anchor: new google.maps.Point(32,65),
    labelOrigin: new google.maps.Point(20,70)
    };
    var markerLabel = 'MID NIGHT HEAD OFFICE !';    
    marker = new google.maps.Marker({
      map: map2,
      draggable: true,
      icon: image,
      animation: google.maps.Animation.DROP,
      label: {
      text: markerLabel,
      color: "#eb3a44",
      fontSize: "16px",
      fontWeight: "bold",
      
     
    },
      position: {
          lat: 32.736259, 
        lng: -96.864586
      }
    });
    marker.addListener('click', toggleBounce);
    //END CUSTOM MARKER ICON
  
    // GET POSITION        
    infoWindow = new google.maps.InfoWindow;
  }
  
  //BOUNCE WHEN MARKER IS PRESSED
  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
  //END BOUNCE WHEN MARKER IS PRESSED
  
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
  
