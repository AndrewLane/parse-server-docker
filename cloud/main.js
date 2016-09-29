
Parse.Cloud.define('hello', function(req, res) {
  var thedate = new Date();
  console.log('cloud code is running at ' + thedate);
  res.success('Hi at ' + thedate);
  
});
