const text = document.getElementById("add");
const btn = document.getElementById("btn");
const list = document.getElementById("list-todo");
var el = document.getElementsByTagName("li");

//fungsi untuk menambahkan data
function addTodo() {
  const input = text.value;
  if (input == "") {
    alert("Masukkan Data");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input;
    list.insertBefore(li, list.childNodes[0]);
    text.value = "";
  }
}

list.onclick = function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("cek");
  }
};
