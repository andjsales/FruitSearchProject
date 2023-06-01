// selecting what we'll be working with
// input field and suggestions list
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions li');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// pushing matching strings to "results array" based on user input
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

// after clicking, copies suggestion value into the user input 
// also hides the suggestion list
function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.innerText;
		suggestions.style.display = 'none';
	}
}

// takes input value, uses it to call the search function AS user is TYPING
// results passed to showSuggestions function
function searchHandler(e) {
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results, inputVal);
}

// the function that actually displays the suggestions underneath input bar  
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

input.addEventListener('input', searchHandler); // as a user types
suggestions.addEventListener('click', useSuggestion); // when a user clicks on a suggestion