let baseURL = `https://mv.overte.org/server/`

const overte = {
	getLoginToken: async (username, password) => {
		const data = new URLSearchParams();
		data.append('grant_type', 'password');
		data.append('scope', 'owner');
		data.append('username', username);
		data.append('password', password);
	
		let response = await (await fetch(`${baseURL}/oauth/token`, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
			},
			method: 'POST',
			body: data.toString(),
		})).json();
	
		// Success
		if (response.access_token) return response;
	
		// Errors
		else return {success: false, error_message: response.error ?? "Generic error"};
	}
}