

//Api for Archive example
 //var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv";
 //Api for search example 
 //var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv";
 
 //Api for Archive parameter
 //var archive = "https://api.nytimes.com/svc/archive/v1/"
 //Api fro search parameter
 var search = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="

 //var inputYear = ""
 //var inputSearch = ""
 var key = "api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv"
 

 //Calls an API when the search fuction is activated
 $("#btn btn-primary").on("click", function() {
    
    var queryURL = search + inputSearch + key;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {
        console.log(this)
    });
});

//calls an API when the search fuction is activated
// $("#number-records").on("mousedown", function() {
 
//     var queryURL = archive + inputYear + key;
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   })
//     .then(function(response) {

//     });
// });