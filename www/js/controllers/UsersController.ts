export module Controllers {
	export class UsersController {
		state: any;
		location: any;
		constructor($state, $location) {
			this.state = $state;
			this.location = $location;
		}
    create(user) {
			// TODO: Setup API
			window.localStorage.setItem('user', JSON.stringify(user));
			this.location.path('/dashboard/dash')
    }
	}
}
