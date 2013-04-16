// TODO 
//   - add categories: medical

var loader_anim_data = "data:image/gif;base64,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";

/*
 * An object which stores our strings
 * for different languages.
 *
 */
var StringStore = (function() {
	var language = "en";
	var self = this;
	var instance = null;
	var _mappings = {
		"expenses": {
			"en": "expenses",
			"de": "Ausgaben"
		},
		"week": {
			"en":"week",
			"de":"Woche"
		},
		"category": {
			"en":"category",
			"de":"Kategorie"
		},
		"food": {
			"en":"food/drugs",
			"de":"Lebensmittel/Drogerie"
		},
		"alcohol": {
			"en":"alcohol",
			"de":"Alkohol"
		},
		"furniture": {
			"en":"furniture",
			"de":"Einrichtung"
		},
		"transport": {
			"en":"transport",
			"de":"Transport"
		},
		"entrance": {
			"en":"entrance fees",
			"de":"Eintrittsgelder"
		},
		"misc": {
			"en":"misc",
			"de":"Sonstiges"
		},
		"clothes": {
			"en":"clothes/supplies",
			"de":"Klamotten/Ausrüstung"
		},
		"semiluxury": {
			"en":"semiluxury food",
			"de":"Genussmittel"
		},
		"total_expenses": {
			"en":"total expenses",
			"de":"Gesamtausgaben"
		},
		"show_list": {
			"en":"show list",
			"de":"Liste anzeigen"
		},
		"hide_list": {
			"en":"hide list",
			"de":"Liste verbergen"
		},
		"date": {
			"en":"date",
			"de":"Datum"
		},
		"description": {
			"en":"description",
			"de":"Beschreibung"
		},
		"category": {
			"en":"category",
			"de":"Kategorie"
		},
		"january": {
			"en":"January",
			"de":"Januar"
		},
		"february": {
			"en":"February",
			"de":"Februar"
		},
		"march": {
			"en":"March",
			"de":"März"
		},
		"april": {
			"en":"April",
			"de":"April"
		},
		"may": {
			"en":"May",
			"de":"Mai"
		},
		"june": {
			"en":"June",
			"de":"Juni"
		},
		"july": {
			"en":"July",
			"de":"Juli"
		},
		"august": {
			"en":"August",
			"de":"August"
		},
		"september": {
			"en":"September",
			"de":"September"
		},
		"october": {
			"en":"October",
			"de":"Oktober"
		},
		"november": {
			"en":"November",
			"de":"November"
		},
		"december": {
			"en":"December",
			"de":"Dezember"
		},
		"monthly_stats": {
			"en":"monthly statistics",
			"de":"Monatsübersicht"
		},
		"weekly_stats": {
			"en":"weekly statistics",
			"de":"Wochenübersicht"
		},
		"trend": {
			"en":"trend",
			"de":"Trend"
		}

	};
	
	// return string
	var s = function(str) {
		return _mappings[str][language];
	}

	// return string with first letter as capital
	var S = function(str) {
		var r = s(str);
		return r.charAt(0).toUpperCase() + r.slice(1);
	}
        function init(lang) {
                language = lang;
                return {
                        s: s,
			S: S
                };
        };

        // singleton
        return {
                getInstance: function(language) {
                        if(!instance) {
                                return instance = init(language);
                        }
                        return instance;
                }
        };
})();

/* 
 * input: d - a Date object
 * returns [y,n] - y is the year and n the number of week
 */
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


/*
 * options:
 *	anchor: default "#osloExpenses" will be created and appended to body
 *	language: ("de"|"en"), default "en"
 */
function OsloExpenses(datasource, options) {
	if(datasource == null) {
		throw "no proper data source";
		return;
	}
	this.language = "en";
	this.anchor = document.getElementById("osloExpenses");
	if(this.anchor == undefined) {
		this.anchor = document.createElement("div");
		this.anchor.setAttribute("id", "osloExpenses");
		document.getElementsByTagName("body")[0].appendChild(this.anchor);
	}

	if(options !== undefined) {
		if(options.anchor !== undefined) {
			this.anchor = options.anchor;
		}
		if(options.language !== undefined) {
			this.language = options.language;
		}
	}
	this.stringStore = StringStore.getInstance(this.language);
	var self = this;

	// set up loader
	this.loader = document.createElement("div");
	var spinner = document.createElement("img");
	spinner.setAttribute("src", loader_anim_data);
	this.loader.appendChild(spinner);
	var lText = document.createElement("span");
	lText.textContent = "Loading Statistics";
	this.loader.appendChild(lText);
	while (this.anchor.hasChildNodes()) {
	   this.anchor.removeChild(this.anchor.lastChild);
	}
	this.anchor.appendChild(this.loader);




	//set up nodes we need
	this.nodes = {};
	this.nodes.container = {
		monthly: document.createElement("div"),
		weekly: document.createElement("div"),
		index: document.createElement("div"),
		weekly_trend: document.createElement("div"),
		monthly_index: document.createElement("div"),
		weekly_index: document.createElement("div")
	};
	this.nodes.container.monthly.setAttribute("id", "monthly_container");
	this.nodes.container.weekly.setAttribute("id", "weekly_container");
	this.nodes.container.monthly.style.visibility = "hidden";
	this.nodes.container.weekly.style.visibility = "hidden";
	this.nodes.container.index.style.visibility = "hidden";
	this.nodes.container.weekly_trend.style.visibility = "hidden";

	this.nodes.content = {
		monthly: document.createElement("div"),
		weekly: document.createElement("div"),
		weekly_trend: document.createElement("div")

	};
	this.nodes.content.monthly.setAttribute("id", "monthly_content");
	this.nodes.content.weekly.setAttribute("id", "weekly_content");
	
	this.nodes.index = {
		monthly: document.createElement("ul"),
		weekly: document.createElement("ul")
	};
	this.nodes.container.monthly_index.appendChild(this.nodes.index.monthly);
	this.nodes.container.weekly_index.appendChild(this.nodes.index.weekly);

	var tp = document.createElement("h4");
	tp.textContent = "Index";
	this.nodes.container.index.className = "well";
	this.nodes.container.index.appendChild(tp);
	this.nodes.container.index.appendChild(this.nodes.container.monthly_index);
	this.nodes.container.index.appendChild(this.nodes.container.weekly_index);
	this.anchor.appendChild(this.nodes.container.index);

	tp = document.createElement("h2");
	tp.innerHTML = "<a name=\"oETrend\">" + this.stringStore.S("trend") + "</a>";
	this.nodes.container.weekly_trend.appendChild(tp);
	tp = document.createElement("li");
	tp.innerHTML = "<a href=\"#oETrend\">" + this.stringStore.S("trend") + "</a>";
	this.nodes.index.weekly.appendChild(tp);
	this.nodes.container.weekly_trend.appendChild(this.nodes.content.weekly_trend);
	this.nodes.content.weekly_trend.className = "well";
	this.anchor.appendChild(this.nodes.container.weekly_trend);

	var pt = document.createElement("h2");
	pt.textContent = this.stringStore.S("monthly_stats");
	this.nodes.container.monthly.appendChild(pt);
	this.nodes.container.monthly.appendChild(this.nodes.content.monthly);
	this.anchor.appendChild(this.nodes.container.monthly);

	var pt = document.createElement("h2");
	pt.textContent = this.stringStore.S("weekly_stats");
	this.nodes.container.weekly.appendChild(pt);
	this.nodes.container.weekly.appendChild(this.nodes.content.weekly);
	this.anchor.appendChild(this.nodes.container.weekly);

	google.setOnLoadCallback(function() {
		var query = new google.visualization.Query(datasource) ;
		query.send(function(response) {
			// this wrapper is necessary not to confuse the
			// OsloExpense object!
			self.processData(response) 
		});
	});
}


/*
 * convert my self-created stat object to a Google
 * DataTable.
 */ 
OsloExpenses.prototype.stats2data = function(s) {
	return google.visualization.arrayToDataTable([
			[ this.stringStore.S("category"),  this.stringStore.S("expenses")],
			[ this.stringStore.S("food"), s.L],
			//['Miete', s.M],
			[ this.stringStore.S("semiluxury"), s.G],
			[ this.stringStore.S("clothes"), s.K],
			[ this.stringStore.S("furniture"), s.E],
			[ this.stringStore.S("misc"), s.S],
			[ this.stringStore.S("transport"), s.T],
			[ this.stringStore.S("entrance"), s.F],
			[ this.stringStore.S("alcohol"), s.A]
			]);
}

/*
 * creates all visual elements
 */ 
OsloExpenses.prototype.showStatData = function(anchor, stat_data, id_template, caption, hide_table_default, index_list) {
	if(hide_table_default === undefined) { hide_table_default = true; }
	var ch_data = this.stats2data(stat_data);
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
	n_div.className = "well";
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
	p_total.textContent =  this.stringStore.S("total_expenses") + ": " + stat_data.total.toFixed(2) + "€";

	var btn = document.createElement("button");
	if(hide_table_default) {
		btn.textContent =  this.stringStore.S("show_list");
		list_container.style.visibility = "hidden";
	} else {
		btn.textContent =  this.stringStore.S("hide_list");
	}
	var self = this;
	btn.onclick = function() {
		var list = document.getElementById("list-"+id_template);
		if(list.style.visibility === "hidden") {
			list.style.visibility = "visible";
			list.style.height = "auto";
			this.textContent =  self.stringStore.S("hide_list");
		} else {
			list.style.visibility = "hidden";
			list.style.height = 0;
			this.textContent =  self.stringStore.S("show_list");
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

/*
 * process data we received from Google Spreadsheet
 * This will do the main part of our work like creating
 * the statistics.
 *
 */ 
OsloExpenses.prototype.processData = function(response) {
	var self = this;
	if (response.isError()) {
		var errDiv = document.createElement("div");
		errDiv.className = "alert alert-error";
		var ht = document.createElement("h4");
		ht.textContent = "Error: " + response.getMessage();
		var pt = document.createElement("p");
		pt.innerHTML = response.getDetailedMessage();
		errDiv.appendChild(ht);
		errDiv.appendChild(pt);
		this.anchor.appendChild(errDiv);
		this.hideLoader();
		return;
	}
	var data = response.getDataTable();

	// draw table for all rows
	//var table_viz = new google.visualization.Table(document.getElementById("table_container"));
	//table_viz.draw(data, null);

	var monthly_stats = { };
	var weekly_stats = {  };
	// prepare stats
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
			monthly_stats[date.getMonth()+1] = { total:0, M:0, L:0, G:0, K:0, E:0, A:0, S:0, T:0, F:0, coldata: new Array([ this.stringStore.S("date"),  this.stringStore.S("description"), "NOK", "EUR", this.stringStore.S("category")]) };
		}
		monthly_stats[date.getMonth()+1].total += eur;
		monthly_stats[date.getMonth()+1][kat] += eur;
		monthly_stats[date.getMonth()+1].coldata.push([d, desc, nok, eur, kat]);

		if (weekly_stats[getWeekNumber(date)[1]] === undefined) {
			weekly_stats[getWeekNumber(date)[1]] = { total:0, M:0, L:0, G:0, K:0, E:0, A:0, S:0, T:0, F:0, coldata: new Array([ this.stringStore.S("date"),  this.stringStore.S("description"), "NOK", "EUR", this.stringStore.S("category")]) };
		}
		weekly_stats[getWeekNumber(date)[1]].total += eur;
		weekly_stats[getWeekNumber(date)[1]][kat] += eur;
		weekly_stats[getWeekNumber(date)[1]].coldata.push([d, desc, nok, eur, kat]);

	}


	var mm = new Array("", this.stringStore.S("january"), this.stringStore.S("february"), this.stringStore.S("march"), this.stringStore.S("april"), this.stringStore.S("may"), this.stringStore.S("june"), this.stringStore.S("july"), this.stringStore.S("august"), this.stringStore.S("september"), this.stringStore.S("october"), this.stringStore.S("november"), this.stringStore.S("december"));
	// produce monthly stats
	for (month in monthly_stats) {
		var s = monthly_stats[month];
		self.showStatData(this.nodes.content.monthly, s, "stat-monthly"+month, mm[month], true, this.nodes.index.monthly);
	}
	//

	// produce weekly stats
	for (week in weekly_stats) {
		var s = weekly_stats[week];
		self.showStatData(this.nodes.content.weekly, s, "stat-weekly"+week, "KW " + week, false, this.nodes.index.weekly);
	}
	//
	
	// produce trend
	var wt = new Array(['x', this.stringStore.S("expenses")]);
	for (week in weekly_stats) {
		var s = weekly_stats[week];
		wt.push([week, s.total ]); 
	}
	this.makeTrendChart(google.visualization.arrayToDataTable(wt));
	//
	
	// hide loader and show content
	this.nodes.container.monthly.style.visibility = "visible";
	this.nodes.container.weekly.style.visibility = "visible";
	this.nodes.container.index.style.visibility = "visible";
	this.nodes.container.weekly_trend.style.visibility = "visible";
	this.hideLoader();
}

OsloExpenses.prototype.makeTrendChart = function(data) {
	var c = new google.visualization.LineChart(this.nodes.content.weekly_trend)
	c.draw(data, {curveType: "function", width: 700, height: 300,
		hAxis: {title: "KW"}, legend: {position: "none"}});
}

OsloExpenses.prototype.hideLoader = function() {
	this.loader.style.visibility = "hidden";
	this.loader.style.height = 0;
}
