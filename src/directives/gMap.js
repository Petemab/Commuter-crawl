/* global google */


function gMap() {
  return {
    restrict: 'A',
    scope: {
      center: '=',
      stations: '=',
      bars: '=',
      getBars: '&'
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 51.515, lng: -0.078 },
        zoom: 14
      });

      const placesService = new google.maps.places.PlacesService(map);

      let markers = [];
      const infowindow = new google.maps.InfoWindow();
      $scope.$watch('center', () => {
        map.setCenter($scope.center);
      });

      $scope.$watch('stations', () => {
        markers.forEach(marker => marker.setMap(null));
        markers = $scope.stations.map(station => {
          const marker = new google.maps.Marker({
            position: station.location,
            map
          });
          marker.addListener('click', () => {
            // infowindow.setContent('<div><strong>' + station.name + '</strong><br>');
            // infowindow.open(map, marker);
            placesService.nearbySearch({
              location: marker.getPosition(),
              radius: 500,
              type: ['bar']
            }, (results) => {
              $scope.getBars({ bars: results });
              markers = $scope.bars.map(bar => {
                const marker = new google.maps.Marker({
                  position: bar.geometry.location,
                  map
                  // icon: <i class="fas fa-beer"></i>
                });
                marker.addListener('click', () => {
                  infowindow.setContent(
                    '<div><strong>'
                    + bar.name +
                    '</strong><br><p>'
                    + bar.vicinity + '</p></div>');
                  infowindow.open(map, marker);
                });
              });
              // console.log(results);
            });
          });
          return marker;
        });
      });


    }
  };
}

export default gMap;
