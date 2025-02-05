const domainCardTemplate = qs(`#domain-card-template`);

function populateDomainList(){
	const domains = overte.getDomains();

	if (domains) {
		for (let i = 0; i < domains.length; ++i) {
			const domain = domains[i];
			const card = domainCardTemplate.cloneNode(true);
			card.querySelector(`.name`).textContent = domain.name;
			card.querySelector(`.players`).textContent = domain.current_attendance;
		}
	}
}