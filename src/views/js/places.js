// hasAccount();

function hasAccount() {
	if (getCookie("user") == null) window.location.href = "/login";
}