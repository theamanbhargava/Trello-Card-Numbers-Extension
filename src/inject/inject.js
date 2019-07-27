chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
        let cards = document.querySelectorAll(".card-short-id.hide")
        cards.forEach((elem) => {
            elem.classList.remove("hide")
            elem.innerHTML = `<strong>${elem.textContent}<strong> `
        })
		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.debug("Added Card Numbers to Trello");
		// ----------------------------------------------------------

	}
	}, 10);
});