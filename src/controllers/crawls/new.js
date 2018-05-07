CrawlsNewCtrl.$inject = ['Crawl', '$state'];
function CrawlsNewCtrl(Crawl, $state) {
  this.data = {};

  function handleCreate() {
    console.log(this.form);
    if(this.form.$invalid) return false;
    Crawl.create(this.data)
      .then(() => $state.go('crawlsIndex'));

  }

  this.handleCreate = handleCreate;
}

export default CrawlsNewCtrl;
