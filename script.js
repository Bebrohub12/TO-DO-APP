let textBox = document.getElementById("inp1");
let listBox = document.getElementById("list-box");

textBox.addEventListener("keydown", function AddListItem(key) {
    // console.log(key)

    if (key.key == 'Enter') {
        // console.log("helo");
        let li = document.createElement("li");
        listBox.appendChild(li)
        li.innerHTML = `${textBox.value} <i class="fa-sharp fa-solid fa-circle-xmark" style="color: #020c1d;"></i>`
        textBox.value = ""

        li.addEventListener("click", function () {
            // alert("heloo")
            li.classList.toggle("text-strick")


        })

        li.querySelector("i").addEventListener("click", function () {
            li.remove()
        })


    }


})