LoginCtrl.$inject = ['$auth', '$state'];

function LoginCtrl($auth, $state) {
  this.data = {};

  function handleLogin(){
    $auth.login(this.data)
      .then(() => $state.go('/'));
  }

  function authenticate(provider) {
    $auth.authenticate(provider)
      .then(() => $state.go('/'));
  }

  this.handleLogin = handleLogin;
  this.authenticate = authenticate;
}


export default LoginCtrl;
