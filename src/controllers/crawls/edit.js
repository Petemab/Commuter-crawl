CrawlsEditCtrl.$inject = ['Crawl', '$state'];

function CrawlsEditCtrl(Crawl, $state) {
  this.crawl = {};

  Crawl.findById($state.params.id)
    .then(res => this.crawl = res.data);

  function handleUpdate(){
    Crawl.updateById($state.params.id, this.crawl)
      .then(() => $state.go('crawlShow', $state.params));
  }
  this.handleUpdate = handleUpdate;
}

export default CrawlsEditCtrl;
