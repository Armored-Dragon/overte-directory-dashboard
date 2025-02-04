// TODO: Get base domain from server

qs("#login-submit").addEventListener('click', login)

function login(){
	const username = qs('#username').value;
	const password = qs('#password').value;
	overte.getLoginToken(username, password)
	.then(_saveToken)
	.then(_redirect)
	.catch();
}

function _saveToken(account_data){
	setCookie('user', JSON.stringify(account_data), account_data.expires_in);
}
function _redirect(){
	window.location.href = "/"
}