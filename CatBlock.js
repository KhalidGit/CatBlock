var selectors = ['*[id^="ad"]', "[id*='-ad']", "[id*='_ad']", "[id*=' ad']", '*[class^="ad"]'];
var i = 0;

for(i=0;i<selectors.length;i++){
    selectors[i] = selectors[i]+":first";
}


//do we want to make the width set a different way other than constant 300?
for(i=0;i<selectors.length;i++) {
    while($(selectors[i]).length){
        $(selectors[i]).replaceWith("<img src=\"http://thecatapi.com/api/images/get?format=src&type=gif&size=med&dummy="+Math.random()+"\" width=\"300px\">");
    }
}

//thecatapi.com/api/images/get?format=xml&results_per_page=20&type=gif