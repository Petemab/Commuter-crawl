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
      let pubMarkers = [];

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
      });

      $scope.$watch('stations', () => {
        console.log($scope.stations);
        markers.forEach(marker => marker.setMap(null));
        markers = $scope.stations.map(station => {
          const marker = new google.maps.Marker({
            position: station.location,
            map
          });

          marker.addListener('click', () => {
            console.log(station.name);
            console.log(station.location.lat);
            placesService.nearbySearch({
              location: marker.getPosition(),
              radius: 750,
              type: ['bar']
            }, (results) => {
              $scope.getBars({ bars: results });
              console.log(results);
              let bars = results;
              pubMarkers.forEach(marker => marker.setMap(null));
              pubMarkers = $scope.bars.map(bar => {
                const pubMarker = new google.maps.Marker({
                  position: bar.location,
                  map
                });
                return pubMarker;
              });
            });
          });
          return marker;
        });
      });
    }
  };
}

export default gMap;
