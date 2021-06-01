Date.prototype.toDate = function (strDate = '', dateFormat = '') {
    strDate = strDate.trim();
    dateFormat = dateFormat.trim();
    if (strDate.length != dateFormat.length || strDate.length == 0 || dateFormat.length == 0) {
        throw new Error(`Params not suitable!`);
    }
    var position = {
        "D": dateFormat.search('D'),
        "M": dateFormat.search('M'),
        "Y": dateFormat.search('Y'),
        "h": dateFormat.search('h'),
        "m": dateFormat.search('m'),
        "s": dateFormat.search('s'),
    };
    var count = {};
    Object.keys(position).forEach(function (k) {
        if (dateFormat.includes(k)) {
            count[k] = dateFormat.split(k).length - 1;
        }
    });

    var currDate = this;
    var theYear = count['Y'] ? (strDate.substr(position['Y'], count['Y'])) : currDate.getFullYear().toString();
    if (theYear.length < 4) {
        theYear = currDate.getFullYear().toString().substr(0, 4 - theYear.length) + theYear;
    }
    var theMonth = count['M'] ? (strDate.substr(position['M'], count['M'])) : currDate.getMonth() + 1;
    var theDay = count['D'] ? (strDate.substr(position['D'], count['D'])) : currDate.getDate();
    var theHour = count['h'] ? (strDate.substr(position['h'], count['h'])) : 0;
    var theMin = count['m'] ? (strDate.substr(position['m'], count['m'])) : 0;
    var theSec = count['s'] ? (strDate.substr(position['s'], count['s'])) : 0;
    this.setFullYear(theYear);
    this.setMonth(theMonth);
    this.setDate(theDay);
    this.setHours(theHour);
    this.setMinutes(theMin);
    this.setSeconds(theSec);
    return this;
}