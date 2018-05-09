LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {
  this.data = {};

  function handleLogin(){
    $auth
      .login(this.data)
      .then(() => $state.go('crawlsNew'))
      .catch(() => this.data.error = 'Please fill in required fields.');
  }
  //
  // function handleSubmit(User){
  //   if(this.form.$invalid) return false;
  //
  //   User.create(this.newPlace)
  //     .this(() => $state.go('home'));
  // }

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('crawlsNew'));
  }

  this.handleLogin = handleLogin;
  this.authenticate = authenticate;
  // this.handleSubmit = handleSubmit;
}


export default LoginCtrl;
