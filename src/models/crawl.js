Crawl.$inject = ['$http'];
function Crawl($http) {

  function findById(id) {
    return $http.get(`/api/crawls/${id}`);

  }

  function updateById(id, data){
    return $http.put(`/api/crawls/${id}`, data);
  }

  function create(data) {
    return $http.post('/api/crawls', data);
  }

  this.findById = findById;
  this.updateById = updateById;
  this.create = create;
}

export default Crawl;
