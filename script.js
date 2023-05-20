// starts by selecting the input field with the id 'fruit' and the ul element with the class 'suggestions'.
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions li');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// DEFINING INPUT WITH THE SEARCH FUNCTION: 
// search function takes string as input 
// returns array of matching strings by iterating through 'fruit' array 
// checking if the input string matches any of the fruit names.
function search(str) {
	let results = [];
	for (let i = 0; i < fruit.length; i++) {
		const fruitName = fruit[i];
		if (fruitName.toLowerCase().indexOf(str.toLowerCase()) >= 0) {
			results.push(fruitName);
		}
	}
	return results;
}

// HANDLING USER SELECTION: 
// setting the value of the clicked suggestion to the input field 
// hides the suggestion list
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.innerText;
		suggestions.style.display = 'none';
	}
}

// FILTERING THE USER INPUT: 
// searchHandler function is called. 
// takes input value, uses it to call the search function
// results passed to showSuggestions function
function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

// DISPLAYING THE SEARCH RESULTS: 
// showSuggestions function takes the array of matching strings  
// creates a list item element for each result
// list items are added to unordered list element
// if no results or the input is empty, the suggestions list is hidden
function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	if (inputVal !== '') {
		results.forEach(result => {
			const li = document.createElement('li');
			li.innerText = result;
			suggestions.appendChild(li);
		});
		suggestions.style.display = 'inline';
	} else {
		suggestions.style.display = 'none';
	}
}

// - EVENT LISTENERS: 
// The searchHandler function is called when the user types in the input field. 
// The useSuggestion function is called when the user clicks on a suggestion.
input.addEventListener('input', searchHandler);
suggestions.addEventListener('click', useSuggestion);