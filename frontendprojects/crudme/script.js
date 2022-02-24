// Load HTML Table
function loadTableData(data) {
  let rowHtml = "";
  console.log(data);
  const table = document.querySelectorAll("table tbody");
  if (Object.keys(data).length === 0) {
    table[0].innerHTML = "<tr><td colspan='8'>No data</td></tr>";
  } else {
    table[0].innerHTML = "";
    for (let emp in data) {
      rowHtml += `<tr>
      <td>${emp}</td>
      <td>${data[emp].name}</td>
      <td>${data[emp].age}</td>
      <td>${data[emp].dept}</td>
      <td>${data[emp].designation}</td>
      <td>${data[emp].email}</td>
      <td>${data[emp].address}</td>
      <td class="operation">
        <button 
        id="${emp}" 
        type="button" 
        class="btn btn-primary" 
        data-toggle="modal"
        data-target="#updateModalCenter"
        onclick="editEmployeeBtn(${emp});">
          Edit
        </button>
        <div></div>
        <button 
        id="${emp}" 
        type="button" 
        class="btn btn-danger"
        onclick="deleteEmployee(${emp})">
          Delete
        </button>
      </td>
      </tr>`;
    }
    table[0].innerHTML = rowHtml;
  }
}

// Create Operation
function createEmployee(event) {
  event.preventDefault();

  const nameInput = document.querySelector("#name");
  const name = nameInput.value;
  nameInput.value = "";

  const ageInput = document.querySelector("#age");
  const age = ageInput.value;
  ageInput.value = "";

  const deptInput = document.querySelector("#dept");
  const dept = deptInput.value;
  deptInput.value = "";

  const designationInput = document.querySelector("#designation");
  const designation = designationInput.value;
  designationInput.value = "";

  const emailInput = document.querySelector("#email");
  const email = emailInput.value;
  emailInput.value = "";

  const addressInput = document.querySelector("#address");
  const address = addressInput.value;
  addressInput.value = "";

  EmployeeMaster[id] = {
    name: name,
    age: age,
    dept: dept,
    designation: designation,
    email: email,
    address: address,
  };

  id += 1;
  localStorage.setItem("EmployeeMaster", JSON.stringify(EmployeeMaster));
  localStorage.setItem("id", id);

  loadTableData(EmployeeMaster);
}

// Update Operation
function editEmployee(event, id) {
  event.preventDefault();
  const nameInput = document.querySelector(".employeeUpdateForm #name");
  const name = nameInput.value;
  nameInput.value = "";

  const ageInput = document.querySelector(".employeeUpdateForm #age");
  const age = ageInput.value;
  ageInput.value = "";

  const deptInput = document.querySelector(".employeeUpdateForm #dept");
  const dept = deptInput.value;
  deptInput.value = "";

  const designationInput = document.querySelector(
    ".employeeUpdateForm #designation"
  );
  const designation = designationInput.value;
  designationInput.value = "";

  const emailInput = document.querySelector(".employeeUpdateForm #email");
  const email = emailInput.value;
  emailInput.value = "";

  const addressInput = document.querySelector(".employeeUpdateForm #address");
  const address = addressInput.value;
  addressInput.value = "";

  EmployeeMaster[id] = {
    name: name,
    age: age,
    dept: dept,
    designation: designation,
    email: email,
    address: address,
  };
  loadTableData(EmployeeMaster);
  localStorage.setItem("EmployeeMaster", JSON.stringify(EmployeeMaster));
}

function deleteEmployee(id) {
  delete EmployeeMaster[id];
  loadTableData(EmployeeMaster);
  localStorage.setItem("EmployeeMaster", JSON.stringify(EmployeeMaster));
}

function editEmployeeBtn(id) {
  const modal = document.querySelector("#updateFormInsert");
  modal.innerHTML = `
  <form class="employeeUpdateForm" id="${id}" onsubmit="editEmployee(event, this.id)">
  <input
    class="form-control"
    type="text"
    name="name"
    id="name"
    placeholder="Name"
    required="required"
    value="${EmployeeMaster[id].name}"
  />
  <input
    class="form-control"
    type="number"
    name="age"
    id="age"
    placeholder="Age"
    required="required"
    value="${EmployeeMaster[id].age}"
    min="0"
    max="150"
  />
  <input
    class="form-control"
    type="text"
    name="dept"
    id="dept"
    placeholder="Department"
    required="required"
    value="${EmployeeMaster[id].dept}"
  />
  <input
    class="form-control"
    type="text"
    name="designation"
    id="designation"
    placeholder="Designation"
    required="required"
    value="${EmployeeMaster[id].designation}"
  />
  <input
    class="form-control"
    type="email"
    name="email"
    id="email"
    placeholder="E-Mail"
    required="required"
    value="${EmployeeMaster[id].email}"
  />
  <input
    class="form-control"
    type="text"
    name="address"
    id="address"
    placeholder="Address"
    required="required"
    value="${EmployeeMaster[id].address}"
  />
  <input
    type="submit"
    class="btn btn-primary"
    id="updateBtn"
    value="Update"
  />
  </form>`;
}

// REad / Search Functionality
function searchEmployee(event, name) {
  event.preventDefault();
  // alert("called");
  let result = {};
  if (name === "") {
    // alert("called");
    result = Object.assign({}, EmployeeMaster);
  } else {
    for (let emp in EmployeeMaster) {
      // console.log("THis is :"+name);
      // console.log(EmployeeMaster[emp].name);
      if (EmployeeMaster[emp].name.toLowerCase() === name.toLowerCase()) {
        result[emp] = Object.assign({}, EmployeeMaster[emp]);
      }
    }
  }
  console.log(result);
  loadTableData(result);
}

// Data Storing Variables
const sampleData = {
  1: {
    name: "Julie",
    age: "23",
    dept: "CS",
    designation: "SDE-2",
    email: "julie@gmail.com",
    address: "US",
  },
  2: {
    name: "Adam",
    age: "34",
    dept: "Design",
    designation: "UX Lead",
    email: "adma@gmail.com",
    address: "UK",
  },
  3: {
    name: "Alex",
    age: "55",
    dept: "HR",
    designation: "HR Lead",
    email: "alex@gmail.com",
    address: "UK",
  },
  4: {
    name: "June",
    age: "34",
    dept: "CS",
    designation: "SDE-1",
    email: "june@gmail.com",
    address: "UK",
  },
  5: {
    name: "Adam",
    age: "30",
    dept: "Finance",
    designation: "Analyst",
    email: "maria@gmail.com",
    address: "UK",
  },
};
const EmployeeMaster =
  localStorage.getItem("EmployeeMaster") === null
    ? sampleData
    : JSON.parse(localStorage.getItem("EmployeeMaster"));
let id =
  localStorage.getItem("id") === null
    ? parseInt(Object.keys(EmployeeMaster).length + 1)
    : parseInt(localStorage.getItem("id"));

// Adding Event Listner to Create Employee Form
let form = document.getElementById("employeeForm");
form.addEventListener("submit", createEmployee);

window.onbeforeunload = function () {
  localStorage.setItem("EmployeeMaster", JSON.stringify(EmployeeMaster));
  localStorage.setItem("id", id);
};

window.onload = function () {
  const EmployeeMaster =
    localStorage.getItem("EmployeeMaster") === null
      ? sampleData
      : JSON.parse(localStorage.getItem("EmployeeMaster"));
  let id =
    localStorage.getItem("id") === null
      ? parseInt(Object.keys(EmployeeMaster).length + 1)
      : parseInt(localStorage.getItem("id"));
  loadTableData(EmployeeMaster);
};
