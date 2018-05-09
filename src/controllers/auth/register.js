RegisterCtrl.$inject = ['$auth', '$state'];

function RegisterCtrl($auth, $state) {
  this.data = {};

  function handleRegister() {
    $auth.signup(this.data)
      .then(() => $state.go('login'));
  }

  function handleSubmit(Register){
    if(this.form.$invalid) return false;

    Register.create(this.user)
      .then(() => $state.go('login'));
  }

  this.handleRegister = handleRegister;
  this.handleSubmit = handleSubmit;

}

export default RegisterCtrl;
