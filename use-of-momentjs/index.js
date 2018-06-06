var moment = require('moment');

console.log("Format Dates");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));
console.log(moment().format("MMM Do YY"));

console.log('\nRelative Time');
console.log(moment("20111031", "YYYYMMDD").fromNow());
console.log(moment("20120620", "YYYYMMDD").fromNow());
console.log(moment().startOf('day').fromNow());
console.log(moment().endOf('dat').fromNow());
console.log(moment().startOf('hour').fromNow());