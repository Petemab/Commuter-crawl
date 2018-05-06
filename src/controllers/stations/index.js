StationsIndexCtrl.$inject = ['$http', '$scope'];
function StationsIndexCtrl($http, $scope) {
  const vm = this;
  vm.all = [];
  vm.bars = [];

  function getStations(lineId) {
    $http
      .get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/inbound`)
      .then(res => {
        console.log(res.data);
        vm.all = res.data.stopPointSequences.map(sequence => {
          return sequence.stopPoint.map(station => {
            return {
              name: station.name.replace(' Underground Station', ''),
              location: {
                lat: station.lat,
                lng: station.lon
              }
            };
          });
        })
          .reduce((stations, branch) => stations.concat(branch), [])
          .filter((station, index, self) => self.findIndex(_station => _station.name === station.name) === index);
      });
  }

  function getBars(bars){
    vm.bars = bars;
    $scope.$apply();
    console.log(vm);
  }

  this.getStations = getStations;
  this.getBars = getBars;

}

export default StationsIndexCtrl;
