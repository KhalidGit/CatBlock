var selectors = ["#ad_main", "[id*='-ad']:first"];
var i = 0;
var j = 0;



for(i=0;i<selectors.length;i++) {
    while($(selectors[i]).length){
        $(selectors[i]).replaceWith("<img src=\"http://thecatapi.com/api/images/get?format=src&type=gif&size=med&dummy="+Math.random()+"\" width=\"300px\">");
    }
}

//thecatapi.com/api/images/get?format=xml&results_per_page=20&type=gif