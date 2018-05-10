/* global google */


function gMapsShow() {
  return {
    restrict: 'A',
    scope: {
      center: '=',
      pubs: '='
    },
    link($scope, $element) {

      const map = new google.maps.Map($element[0], {
        center: { lat: 51.515, lng: -0.078 },
        zoom: 14,
        disableDefaultUI: true
      });

      const transitLayer = new google.maps.TransitLayer();
      transitLayer.setMap(map);

      let markers = [];

      $scope.$watch('center', () => {
        map.setCenter($scope.center);
      });

      $scope.$watch('pubs', () => {
        if(!$scope.pubs) return false;
        markers.forEach(marker => marker.setMap(null));
        markers = $scope.pubs.map(pub => {
          $scope.center = pub.location;
          const marker = new google.maps.Marker({
            position: pub.location,
            map
          });
          return marker;
        });
      });


    }


  };
}


export default gMapsShow;
