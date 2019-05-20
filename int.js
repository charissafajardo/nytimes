

//Api for Archive parameter
 //var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv";
 var archive = "https://api.nytimes.com/svc/archive/v1/"
 //Api fro search parameter
 var search = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="

 var inputYear = ""
 var inputSearch = ""
 var key = "api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv"
 

 //Calls an API when the search fuction is activated
 $("#inputSearch").on("click", function() {
 
    var queryURL = search + inputSearch + key;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {

    });
});

//calls an API when the search fuction is activated
$("#inputArchive").on("click", function() {
 
    var queryURL = archive + inputYear + key;
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function(response) {

    });
});