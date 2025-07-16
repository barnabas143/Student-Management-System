const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();
  const grade = document.getElementById("grade").value.trim();

  if (name && roll && grade) {
    const newRow = table.insertRow();

    const nameCell = newRow.insertCell(0);
    const rollCell = newRow.insertCell(1);
    const gradeCell = newRow.insertCell(2);
    const actionCell = newRow.insertCell(3);

    nameCell.textContent = name;
    rollCell.textContent = roll;
    gradeCell.textContent = grade;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
      table.deleteRow(newRow.rowIndex - 1);
    };

    actionCell.appendChild(deleteBtn);

    form.reset();
  }
});
