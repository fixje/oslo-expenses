
function getWeekNumber(d) {
	// Copy date so don't modify original
	d = new Date(d);
	d.setHours(0,0,0);
	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setDate(d.getDate() + 4 - (d.getDay()||7));
	// Get first day of year
	var yearStart = new Date(d.getFullYear(),0,1);
	// Calculate full weeks to nearest Thursday
	var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
		// Return array of year and week number
		return [d.getFullYear(), weekNo];
}

function stats2data(s) {
	return google.visualization.arrayToDataTable([
			['Kategorie', 'Ausgaben'],
			['Lebensmittel/Drogerie', s.L],
			//['Miete', s.M],
			['Genussmittel', s.G],
			['Klamotten/Ausrüstung', s.K],
			['Einrichtung', s.E],
			['Sonstiges', s.S],
			['Transport', s.T],
			['Eintrittsgelder', s.F],
			['Alkohol', s.A]
			]);
}

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart', 'table']});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(getTableData);

function getTableData() {
	var query = new google.visualization.Query('http://spreadsheets.google.com/tq?key=0ArlwvcX1Fjp0dE9rLXhsSnpkSkZuTS1xWjdWUjN5d0E&range=A3:E10000&headers=1' ) ;
	query.send(processData);
}

function processData(response) {
	if (response.isError()) {
		alert('Error in query: ' + response.getMessage() + ' ' + 
				response.getDetailedMessage());
		return;
	}
	var data = response.getDataTable();

	// draw table for all rows
	//var table_viz = new google.visualization.Table(document.getElementById("table_container"));
	//table_viz.draw(data, null);

	var monthly_stats = { };
	var weekly_stats = {  };
	// prepare stats for April
	for(var i = 0; i < data.getNumberOfRows(); i++) {
		var d = data.getValue(i, 0);
		var date = new Date("20" + d[6] + "" + d[7] + "-" + d[3] + "" + d[4] + "-" + d[0] + "" + d[1]);
		var desc = data.getValue(i, 1);
		var nok = data.getValue(i, 2);
		var eur = data.getValue(i, 3);
		var kat = data.getValue(i, 4);

		// ignore rent
		if (kat == "M") {
			continue;
		}

		// all stats in EUR
		if (monthly_stats[date.getMonth()+1] === undefined) {
			monthly_stats[date.getMonth()+1] = { total:0, M:0, L:0, G:0, K:0, E:0, A:0, S:0, T:0, F:0, coldata: new Array(["Datum", "Beschreibung", "NOK", "EUR", "Kat"]) };
		}
		monthly_stats[date.getMonth()+1].total += eur;
		monthly_stats[date.getMonth()+1][kat] += eur;
		monthly_stats[date.getMonth()+1].coldata.push([d, desc, nok, eur, kat]);

		if (weekly_stats[getWeekNumber(date)[1]] === undefined) {
			weekly_stats[getWeekNumber(date)[1]] = { total:0, M:0, L:0, G:0, K:0, E:0, A:0, S:0, T:0, F:0, coldata: new Array(["Datum", "Beschreibung", "NOK", "EUR", "Kat"]) };
		}
		weekly_stats[getWeekNumber(date)[1]].total += eur;
		weekly_stats[getWeekNumber(date)[1]][kat] += eur;
		weekly_stats[getWeekNumber(date)[1]].coldata.push([d, desc, nok, eur, kat]);

	}


	var mm = new Array("", "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
	// produce monthly stats
	for (month in monthly_stats) {
		var s = monthly_stats[month];
		showStatData(document.getElementById("monthly_content"), s, "stat-monthly"+month, mm[month], true, document.getElementById("monthly-index-list"));
	}
	//

	// produce weekly stats
	for (week in weekly_stats) {
		var s = weekly_stats[week];
		showStatData(document.getElementById("weekly_content"), s, "stat-weekly"+week, "KW " + week, false, document.getElementById("weekly-index-list"));
	}
	//
}

function showStatData(anchor, stat_data, id_template, caption, hide_table_default, index_list) {
	if(hide_table_default === undefined) { hide_table_default = true; }
	var ch_data = stats2data(stat_data);
	/* Layout:
	 *
	 * ------- anchor div --------------
	 * |                               |
	 * | --------- n_div ------------- |
	 * | |                           | |
	 * | | <h2> Caption </h2>        | |
	 * | | <p> Total </p>            | |
	 * | | ----- chart_container --- | |
	 * | | |                       | | |
	 * | | ------------------------- | |
	 * | | <button> show list </btn> | |
	 * | | ----- list_container ---- | |
	 * | | |                       | | |
	 * | | ------------------------- | |
	 * | ----------------------------- |
	 * ---------------------------------
	 */

	// prepare containers and control elements
	var n_div = document.createElement("div");
	n_div.setAttribute("id", "container-"+id_template);
	n_div.className = "stat-container";
	var chart_container = document.createElement("div");
	chart_container.setAttribute("id", "chart-cont-"+id_template);
	var list_container = document.createElement("div");
	list_container.setAttribute("id", "list-"+id_template);

	var caption_elem = document.createElement("h2");
	var caption_anchor = document.createElement("a");
	caption_anchor.setAttribute("name", id_template);
	caption_elem.appendChild(caption_anchor);
	caption_anchor.textContent = caption;

	var index_elem = document.createElement("li");
	var index_link = document.createElement("a");
	index_link.setAttribute("href", "#"+id_template);
	index_link.textContent = caption;
	index_elem.appendChild(index_link);
	index_list.appendChild(index_elem);

	var p_total = document.createElement("p");
	p_total.textContent = "Gesamtausgaben: " + stat_data.total.toFixed(2) + "€";

	var btn = document.createElement("button");
	if(hide_table_default) {
		btn.textContent = "Liste anzeigen";
		list_container.style.visibility = "hidden";
	} else {
		btn.textContent = "Liste verbergen";
	}
	btn.onclick = function() {
		var list = document.getElementById("list-"+id_template);
		if(list.style.visibility === "hidden") {
			list.style.visibility = "visible";
			list.style.height = "auto";
			this.textContent = "Liste verbergen";
		} else {
			list.style.visibility = "hidden";
			list.style.height = 0;
			this.textContent = "Liste anzeigen";
		}
	}


	n_div.appendChild(caption_elem);
	n_div.appendChild(p_total);
	n_div.appendChild(chart_container);
	n_div.appendChild(btn);
	n_div.appendChild(list_container);
	anchor.appendChild(n_div);
	//

	var table_viz = new google.visualization.Table(list_container);
	table_viz.draw(google.visualization.arrayToDataTable(stat_data.coldata), null);
	if(hide_table_default) { list_container.style.height = 0; };

	var options = {'title': caption,
		'width':500,
		'height':350, is3D:true };
	var chart = new google.visualization.PieChart(chart_container);
	chart.draw(ch_data, options);
}

