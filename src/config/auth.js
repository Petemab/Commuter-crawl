Auth.$inject = ['$authProvider', '$httpProvider'];

function Auth($authProvider, $httpProvider) {
  $authProvider.loginUrl = '/api/login';
  $authProvider.signupUrl = '/api/register';

  $httpProvider.interceptors.push(() => {
    return {
      request(config) {
        if(config.url.startsWith('https://api.tfl.gov.uk')) {
          delete config.headers.Authorization;
        }
        return config;
      }
    };
  });

}



export default Auth;
