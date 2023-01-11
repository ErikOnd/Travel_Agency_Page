const footer = document.querySelector('footer .container');

let travelDestination = document.querySelectorAll('.travel-destination').length;

let pNode = document.createElement('p');
pNode.innerText = `Number of Destinations: ${travelDestination}`;
pNode.classList.add('mt-3')
footer.appendChild(pNode);
