const shoppingListForm = document.getElementById('shopping-list-form');
const shoppingListContainer = document.getElementById('shopping-list-container');

shoppingListForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const item = document.getElementById('item').value;
    addItemToList(item);
});


function addItemToList(item) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = item;
    row.appendChild(cell);
    const deleteButton = document.createElement('td');
    deleteButton.innerHTML = '<button class="btn btn-danger">Удалить</button>';
    deleteButton.firstChild.addEventListener('click', function() {
        shoppingListContainer.removeChild(row);
        const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
        const index = shoppingList.indexOf(item);
        if (index !== -1) {
            shoppingList.splice(index, 1);
            localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
        }
    });
    row.appendChild(deleteButton);
    shoppingListContainer.appendChild(row);
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
        localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
    }
}





const savedShoppingList = localStorage.getItem('shoppingList');
if (savedShoppingList) {
    const shoppingList = JSON.parse(savedShoppingList);
    shoppingList.forEach(addItemToList);
}

