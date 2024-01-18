let sum = 0;
document.getElementById('add-button').onclick=()=> {
    const itemtNameInput = document.getElementById('item-name-input').value;
    const itemPriceInput = document.getElementById('item-price-input').value;

    const tbody = document.getElementById("tbody");

    document.getElementById('item-name-input').value= '';
    document.getElementById('item-price-input').value='';

    
    let grandTotalEle = document.querySelector('[data-ns-test=grandTotal]');
    
    
    
    if(itemtNameInput == '' && itemPriceInput <= 0) {
        alert('Please enter a Grocery List')
    }
    else {
        const tr = document.createElement('tr');

        const nameData = document.createElement('td');
        nameData.setAttribute("data-ns-test","item-name");

        const priceData = document.createElement('td');
        priceData.setAttribute("data-ns-test","item-price");

        nameData.textContent = itemtNameInput
        priceData.textContent = itemPriceInput


        tr.append(nameData);
        tr.append(priceData);

        tbody.append(tr);

        sum += parseInt(itemPriceInput);
        grandTotalEle.textContent = sum;

        

    }

}

