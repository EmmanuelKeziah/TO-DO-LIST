// console.log (document.getElementById("inputBox"));
function addNewTask() {
    let inputBox = document.getElementById("inputBox");

    console.log(inputBox.value);

    document.getElementById("newText").textContent = inputBox.value;
}