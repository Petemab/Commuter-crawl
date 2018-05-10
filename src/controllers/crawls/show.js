CrawlsShowCtrl.$inject = ['Crawl', '$state', '$http', '$scope'];

function CrawlsShowCtrl(Crawl, $state) {
  this.crawl = {};
  this.data = {};

  Crawl.findById($state.params.id)
    .then(res => this.crawl = res.data);

  function handleDelete() {
    Crawl.removeById($state.params.id)
      .then(() => $state.go('home'));
    // need to add the location to go to
  }
  this.handleDelete = handleDelete;

}

export default CrawlsShowCtrl;
