let data = [
    "Adam",
    "Azhar",
    "Akhtar",
    "Bilal",
    "Bruno",
    "Cactus",
    "DailyTubes",
    "danyal",
    "Daniel",
    "Haris",
    "Rauf",
    "Saheen",
    "Dani"
]

function searchinArray(query) {
    let array = [];
    data.map((e) => {
        let Query = query.toLowerCase();
        let n = e.toLowerCase();
        if (n.includes(Query) == true) {
            array.push(e);
        } 
    });
    array.map((e) => {
        let x = document.getElementById('items').appendChild(document.createElement("p"));
        x.innerHTML = e;
    })
    console.log(`Final Array : ${array}`);
    return array;
}


function validate() {
    let val = document.forms["search"]["field"].value;
    if (val == "") {
        document.getElementById('items').innerHTML = '<p>please enter something</p> </br>'
    } else {
            searchinArray(val);
    }
    return val;
}