fetch('glossary.json')
	.then(response => response.json())
	.then(result => populateData(result))

function populateData(data) {
	for (var i = 0; i < data.length; i++) {
		var entry = data[i];
		var els = document.getElementsByClassName("tooltip");
		for (var j = 0; j < els.length; j++) {
			var field = els[j];
			var t = field.innerHTML;
			var term = field.getAttribute("term");
			if ((term == null) || (term == "")) {
				term = t;
			}
			if (term.toLowerCase() == entry.term.toLowerCase()) {
				field.innerHTML = '<a href="glossary.html#' + entry.id + '" title="' + entry.defn + '">' + t + '</a>';
			}
		}
	}
}

