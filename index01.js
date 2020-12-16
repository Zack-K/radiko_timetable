function message(x) {
	var x = parseInt(document.sample.var1.value, 10);
	x += parseInt(document.sample.var2.value, 10);
	document.body.innerHTML += x + '<br/>';
	alert(x);
}

// date decriment
// decr日前の日付を返す
function date_decr(date, decr) {
	date.setDate(date.getDate() - decr);
	return date;
}

function weekday_obi(hhmmss, capt, channel, table_id) {
	if (hhmmss <= 40000) {
		//　未明の場合 曜日の表示を1日ずらす
		for (var i = 7; i >= 0; i--) {
			var time1 = hhmmss;
			var date = date_decr(new Date(), i);
			var day = ""
			switch (date.getDay()) {
				case 1:
					day = "日";
					$(table_id).append("<a class='col-1 btn' >" + "放送休止" + "</a>");
					continue;
				case 2:
					day = "月";
					break;
				case 3:
					day = "火";
					break;
				case 4:
					day = "水";
					break;
				case 5:
					day = "木";
					break;
				case 6:
					day = "金";
					break;
				case 0:
					day = "土";
					break;
				//$(table_id).append("<a class='col-1 btn' >" +　" " + "</a>");
				//continue;
			}
			var y = date.getFullYear();
			var m = ("00" + (date.getMonth() + 1)).slice(-2);
			var d = ("00" + date.getDate()).slice(-2);
			var ymd1 = "http://radiko.jp/share/?sid=" + channel + "&t=" + y + m + d + time1;
			$(table_id).append("<a class='col-1 btn alert-info' href=" + ymd1 + ">" + capt + " " + day + "</a>");
		}
	} else {
		// 未明でない場合
		for (var i = 7; i >= 0; i--) {
			var time1 = hhmmss;
			var date = date_decr(new Date(), i);
			var day = ""
			switch (date.getDay()) {
				case 0:
					day = "日";
					$(table_id).append("<a class='col-1 btn' >" + " " + "</a>");
					continue;
				case 1:
					day = "月";
					break;
				case 2:
					day = "火";
					break;
				case 3:
					day = "水";
					break;
				case 4:
					day = "木";
					break;
				case 5:
					day = "金";
					break;
				case 6:
					day = "土";
					$(table_id).append("<a class='col-1 btn' >" + " " + "</a>");
					continue;
			}
			var y = date.getFullYear();
			var m = ("00" + (date.getMonth() + 1)).slice(-2);
			var d = ("00" + date.getDate()).slice(-2);
			var ymd1 = "http://radiko.jp/share/?sid=" + channel + "&t=" + y + m + d + time1;
			$(table_id).append("<a class='col-1 btn alert-info' href=" + ymd1 + ">" + capt + " " + day + "</a>");
		}
	}
	$(table_id).append("<br>");
	return ymd1;
}

function header(table_id) {
	// make header
	for (var i = 7; i >= 0; i--) {
		var date = date_decr(new Date(), i);
		var day = "";
		var cls = "";
		switch (date.getDay()) {
			case 0:
				day = "日";
				cls = "alert-danger";
				break;
			case 1:
				day = "月";
				cls = "alert-secondary";
				break;
			case 2:
				day = "火";
				cls = "alert-secondary";
				break;
			case 3:
				day = "水";
				cls = "alert-secondary";
				break;
			case 4:
				day = "木";
				cls = "alert-secondary";
				break;
			case 5:
				day = "金";
				cls = "alert-secondary";
				break;
			case 6:
				day = "土";
				cls = "alert-primary";
				break;
		}
		var y = date.getFullYear();
		var m = ("00" + (date.getMonth() + 1)).slice(-2);
		var d = ("00" + date.getDate()).slice(-2);
		$(table_id).append("<div class='col-1 btn " + cls + "'>" + m + "/" + d + " (" + day + ")</div>");
	}
	$(table_id).append("<br>");
	return;
}

//　ロード時に動く関数
window.addEventListener('load', function () {
	// sssss
})
$(document).ready(function () {
	header("#timetable");
	header("#timetable2");
	weekday_obi("000000", "24時台", "TBS", "#timetable");
	weekday_obi("010000", "JUNK", "TBS", "#timetable");
	weekday_obi("050000", "ヒロシ", "TBS", "#timetable");
	weekday_obi("083000", "ラジオと(1)", "TBS", "#timetable");
	weekday_obi("100000", "ラジオと(2)", "TBS", "#timetable");
	weekday_obi("110000", "スー", "TBS", "#timetable");
	weekday_obi("130000", "たまむすび", "TBS", "#timetable");
	weekday_obi("153000", "ACTION", "TBS", "#timetable");
	weekday_obi("175000", "アト6 18時台", "TBS", "#timetable");
	weekday_obi("190000", "アト6 19時台", "TBS", "#timetable");
	weekday_obi("200000", "アト6 20時台", "TBS", "#timetable");
	weekday_obi("210000", "21:00", "TBS", "#timetable");
	weekday_obi("213000", "21:30", "TBS", "#timetable");
	weekday_obi("220000", "session22", "TBS", "#timetable");
	weekday_obi("010000", "ANN", "LFR", "#timetable2");
	weekday_obi("030000", "ANN 0", "LFR", "#timetable2");
});

function url() {
	var time = $('#calendar').val()
	var station = $('#station').val()
	//var ymd = "http://radiko.jp/#!/ts/" + station + "/" + time + "00";
	var ymd = "http://radiko.jp/share/?sid=" + station + "&t=" + time + "00";
	//alert(ymd);
	if (time == "") {
		return;
	}
	document.location.href = ymd;
}