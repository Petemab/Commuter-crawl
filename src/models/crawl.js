Crawl.$inject = ['$http'];
function Crawl($http) {


  function findById(id) {
    return $http.get(`/api/crawls/${id}`);

  }
  this.findById = findById;
}

export default Crawl;
