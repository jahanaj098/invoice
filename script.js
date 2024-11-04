document.getElementById('date').innerText = new Date().toLocaleDateString();
document.getElementById('due-date').innerText = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString();

const items = [
    { qty: 1, description: 'Frontend design restructure', unitPrice: 9999 },
    { qty: 2, description: 'Custom icon package', unitPrice: 975 },
    { qty: 3, description: 'Gandhi mouse pad', unitPrice: 99 },
];

function populateItems() {
    const itemList = document.getElementById('item-list');
    let subtotal = 0;

    items.forEach(item => {
        const amount = item.qty * item.unitPrice;
        subtotal += amount;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.qty}</td>
            <td>${item.description}</td>
            <td>₹${item.unitPrice.toFixed(2)}</td>
            <td>₹${amount.toFixed(2)}</td>
        `;
        itemList.appendChild(row);
    });

    document.getElementById('subtotal').innerText = subtotal.toFixed(2);
    document.getElementById('total').innerText = subtotal.toFixed(2);
}

function downloadInvoice() {
    const invoice = document.getElementById('invoice');
    html2canvas(invoice).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'invoice.png';
        link.click();
    });
}

populateItems();
