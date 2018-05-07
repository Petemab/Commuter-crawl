Crawl.$inject = ['$http'];
function Crawl($http) {


  function findById(id) {
    return $http.get(`/api/crawls/${id}`);

  }

  function updateById(id, data){
    return $http.put(`/api/crawls/${id}`, data);
  }
  this.findById = findById;
  this.updateById = updateById;
}

export default Crawl;
