function calculateTotal() {
  let subtotal = 0;
  const rows = document.querySelectorAll("#invoice-table tbody tr");

  rows.forEach(row => {
    const quantity = row.querySelector(".quantity").value;
    const unitPrice = row.querySelector(".unit-price").value;
    const total = quantity * unitPrice;

    row.querySelector(".item-total").textContent = `$${total.toFixed(2)}`;
    subtotal += total;
  });

  document.getElementById("subtotal").textContent = `$${subtotal.toFixed(2)}`;
  const tax = subtotal * 0.10;
  document.getElementById("tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("grand-total").textContent = `$${(subtotal + tax).toFixed(2)}`;
}

function addRow() {
  const table = document.querySelector("#invoice-table tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" class="service" placeholder="Description"></td>
    <td><input type="number" class="quantity" value="1" min="1" oninput="calculateTotal()"></td>
    <td><input type="number" class="unit-price" value="0" min="0" oninput="calculateTotal()"></td>
    <td class="item-total">$0.00</td>
    <td><button onclick="removeRow(this)">Remove</button></td>
  `;

  table.appendChild(row);
}

function removeRow(button) {
  button.parentElement.parentElement.remove();
  calculateTotal();
}