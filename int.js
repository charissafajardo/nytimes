

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
 var key = "&api-key=QFRwGFnbnrvxELAMVuBjVu3IATnA4NGv"
 
 // INPUT ID #search-term (&q=#search-term)   #number-records (&hits=#number-records)    #begin-date(&pub_year=#begin-date)     #end-date(&pub_year=#end-date)
 //Calls an API when the search fuction is activated
 $("#submit-button").on("click", function(e) {
     e.preventDefault();
    var searchTerm = $("#search-term").val();
    console.log(searchTerm)
    var numRec = "&hits=" + $("#number-records").val();
    console.log(numRec)
    var startYear = $("#begin-date").val();
    console.log(startYear)
    var endYear = $("#end-date").val();
    console.log(endYear);

    var queryURL = search + searchTerm + numRec + key;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);

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