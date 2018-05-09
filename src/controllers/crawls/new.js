CrawlsNewCtrl.$inject = ['Crawl', '$state', '$scope', '$http'];
function CrawlsNewCtrl(Crawl, $state, $scope, $http) {
  const vm = this;
  vm.data = {
    pubs: []
  };
  vm.stations = [];
  vm.bars = [];
  vm.showMap = false;

  function handleCreate() {
    console.log(vm.form);
    if(vm.form.$invalid) return false;
    Crawl.create(vm.data)
      .then(() => $state.go('crawlsIndex'));

  }

  function getStations(lineId) {
    if(!lineId) return false;
    $http
      .get(`https://api.tfl.gov.uk/Line/${lineId}/Route/Sequence/inbound`)
      .then(res => {
        vm.stations = res.data.stopPointSequences.map(sequence => {
          return sequence.stopPoint
            .filter(station => ['1', '2'].includes(station.zone))
            .map(station => {
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
  function getCrawlStations() {
    const startIndex = vm.stations.indexOf(vm.data.startPoint);
    const endIndex = vm.stations.indexOf(vm.data.endPoint);

    if(endIndex > startIndex) {
      vm.crawlStations = vm.stations.slice(startIndex, endIndex +1);
    } else {
      vm.crawlStations = vm.stations.slice(endIndex, startIndex +1);
    }
    vm.showMap = true;
  }
  function getBars(bars){
    vm.bars = bars;
    $scope.$apply();
  }

  function addBar(bar) {
    console.log('add bar ----------->', bar);
    vm.data.pubs.push(bar);
  }
  vm.addBar = addBar;
  vm.getBars = getBars;
  vm.handleCreate = handleCreate;
  $scope.$watch(() => vm.data.tubeLine, () => getStations(vm.data.tubeLine));
  vm.getCrawlStations = getCrawlStations;
}

export default CrawlsNewCtrl;
