export module Controllers {
	export class LoginController {
		ngFB: any;
		location: any;
		constructor($location, ngFB) {
			this.ngFB = ngFB;
			this.location = $location;
		}
		authenticate(loginData) {
			// TODO: Setup API
			window.localStorage.setItem('user', JSON.stringify(loginData));
			this.location.path('/dashboard/dash')
		}
		authenticateWithFacebook() {
			this.ngFB
				.login({scope: 'email'})
				.then(function (response) {
	        if (response.status === 'connected') {
						console.log( response );
	          console.log('Facebook login succeeded');
	        } else {
	          alert('Facebook login failed');
	        }
        });
		}
	}
}
