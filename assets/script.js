let yourName = "Avery Herring"

let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

document.getElementById('credit').textContent = `Created by ${yourName}`;



let buttonIds = [
    {
        name: 'minus-gb',
        action: () => {
            if (gb <= 0) {
                alert("You don't have any Ginger Bread cookies on your order.");
                return;
            }
            gb--;
            updateCount('qty-gb', gb);
        }
    },
    {
        name: 'add-gb',
        action: () => {
            gb++;
            updateCount('qty-gb', gb);
        }
    },
    {
        name: 'minus-cc',
        action: () => {
            if (cc <= 0) {
                alert("You don't have any Chocolate Chip cookies on your order.");
                return;
            }
            cc--;
            updateCount('qty-cc', cc);
        }
    },
    {
        name: 'add-cc',
        action: () => {
            cc++;
            updateCount('qty-cc', cc);
        }
    },
    {
        name: 'add-sugar',
        action: () => {
            sugar++;
            updateCount('qty-sugar', sugar);
        }
    },
    {
        name: 'minus-sugar',
        action: () => {
            if (sugar <= 0) {
                alert("You don't have any Sugar cookies on your order.");
                return;
            }
            surgar--;
            updateCount('qty-sugar', sugar);
        }
    }
];

const loadListeners = () => {
    buttonIds.forEach(id => {
        document.getElementById(id.name).addEventListener('click', () => {
            id.action();
            console.log(`${id.name} button clicked.`);
        });
    });
};

window.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Button Click Event Listeners.');
    loadListeners();
});



function updateCount(id, qty) {
    let element = document.getElementById(id);
    element.innerText = qty;

    let totalElement = document.getElementById('qty-total');

    totalElement.innerText = (sugar + cc + gb);
}