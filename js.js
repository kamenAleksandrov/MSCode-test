function showAlert() {
    alert("Hello, World!");
}

/*
function idk() {
	alert('This is an alert!')
}*/

function addParagraph() {
    // Create a new paragraph element
    var newParagraph = document.createElement('p');

    // Add content to the paragraph (you can modify this text as needed)
    var paragraphText = document.createTextNode(chooseRandomUpgrade());

    // Append the text node to the paragraph element
    newParagraph.appendChild(paragraphText);

    // Get the container where paragraphs will be added
    var paragraphContainer = document.getElementById('paragraph-container');

    // Append the new paragraph to the container
    paragraphContainer.appendChild(newParagraph);
}

function chooseRandomUpgrade() {

    var upgrade = "";
    var x = Math.floor(Math.random() * 10); // multiply the math random to get a random number between 0 and the number you multiply by -1, in this example 0-9. Math floor returns an integer
    switch(x) {
        case 0:
            upgrade = "feat"
        break;
        case 1:
            upgrade = "level"
        break;
        case 2:
            upgrade = "weapon"
        break;
        case 3:
            upgrade = "gear"
        break;
        case 4:
            upgrade = "spell"
        break;
        case 5:
            upgrade = "gold"
        break;
        case 6:
            upgrade = "potion"
        break;
        case 7:
            upgrade = "mount"
        break;
        case 8:
            upgrade = "proficiency"
        break;
        case 9:
            upgrade = "HP reroll"
        break;
        default:
            upgrade = "what"
    }

    return upgrade;
}