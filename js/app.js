// Instantiate Classes
const ui = new UI;

// Creating the items's array
const buyList = ["Papel Toalha", "Arroz", "Feijão", "Açúcar", "Óleo", "Sabonete", "Creme Dental", "Vinagre", "Água Sanitária", "Manteiga", "Café", "Biscoito", "Leite", "Macarrão", "Farofa", "Azeite", "Bom Bril", "Fósforo", "Bucha", "Papel Higiênico", "Amaciante de Roupa", "Detergente", "Sabão em Pó", "Desodorante", "Listerine"];

// DOM Elements
const saveChanges = document.querySelector('.save-changes');
const deleteChanges = document.querySelector('.delete-changes');
const listQuantifiersWrapper = document.querySelector('#list-quantifiers-wrapper');

// Load all the event listeners
function loadEventListeners() {
    document.addEventListener('DOMContentLoaded', getQuantifier);
    saveChanges.addEventListener('click', saveQuantifierValues);
    deleteChanges.addEventListener('click', clearStoreQuantifier);
}

// Get items from localStorage
function getQuantifier() {
    let items;
    if(localStorage.getItem('buyListQuantifiers') === null ) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('buyListQuantifiers'));
    }

    items.forEach(item => {
        listQuantifiersWrapper.innerHTML += `
            <div class="list-quantifier-single">
                <div class="list-quantifier-text">
                    <p>Qtd.</p>
                    <span>${item}</span>
                </div>
            </div>
        `;
    });
}

// Save quantifier values to localStorage
function saveQuantifierValues() {
    let quantifierValues = document.querySelectorAll('#quantifier'); 

    quantifierValues.forEach( quantifier => {
        storeQuantifier(quantifier.value);
    })

    alert('A página será atualizada com as quantidades salvas \n\nCaso clique duas vezes em "Salvar", clique em "Apagar"');

    window.location.reload();
}

// Store quantifier values to localStorage
function storeQuantifier(item) {
    let items;
    if(localStorage.getItem('buyListQuantifiers') === null ) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('buyListQuantifiers'));
    }

    items.push(item);

    localStorage.setItem('buyListQuantifiers', JSON.stringify(items));
}

// Clear localStorage
function clearStoreQuantifier() {
    window.location.reload();
    localStorage.clear();
}

// Running methods & functions
ui.addItems(buyList);
ui.countAmount();
ui.takedItem();
loadEventListeners();