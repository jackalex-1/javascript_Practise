let od = document.getElementById("submit_emp").addEventListener("click", () => {
  let namev = document.forms["from1"]["emp_name"].value;
  let agev = document.forms["from1"]["emp_age"].value;
  let addressv = document.forms["from1"]["emp_f_address"].value;
  let experiencev = document.forms["from1"]["emp_experience"].value;

  var checkedValue = [];
  var inputElements = document.getElementsByClassName("checkbox");
  for (var i = 0; inputElements[i]; ++i) {
    if (inputElements[i].checked) {
      checkedValue.push(inputElements[i].value.toLowerCase());
    }
  }
  let emp_Obj = new Employee(namev, agev, addressv, experiencev, checkedValue);
  let jEmplpoyee = JSON.stringify(emp_Obj);
  emp_Obj.store(jEmplpoyee);
});

class Employee {
  constructor(name, age, fullAddress, experience, technologies) {
    this.name = name;
    this.age = age;
    this.fullAddress = fullAddress;
    this.experience = experience;
    this.Technologies = technologies;
  }

  store(Object) {
    let empObject;
    let val = localStorage.getItem("employee");
    if (val != null) {
      empObject = [];
    } else {
      empObject = JSON.parse(Object);
    }
    let a = [
      {
        value: "string",
      },
      {
        value: "Number",
      },
      {
        value: "Array  ",
      },
      {
        value: "Bool",
      },
      {
        value: "null",
      },
    ];
    for (let key in a) {
      console.log(key);
    }
    // console.log(empObject);
  }
}
