var client = new XMLHttpRequest();
client.open('GET', '/CatFacts.txt');
client.onreadystatechange = function() {
    var facts_str = client.responseText;
    var facts = facts_str.split("\n");
	document.getElementById("CatFact").innerHTML = facts[Math.floor(Math.random() * (facts.length))];//textContent
}
client.send();