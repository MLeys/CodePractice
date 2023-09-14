function createButtonDiv() {
    const div = document.createElement("div");
    div.id = "btns";
    return div;
}

function createButton(number) {
    const btn = document.createElement("button");
    btn.id = `btn${number}`;
    btn.classList.add("grid-btn");
    btn.innerHTML = number;
    return btn;
}

function rotateNumbers() {
    const order = [1, 2, 3, 6, 9, 8, 7, 4];
    const values = order.map(i => document.getElementById(`btn${i}`).innerHTML);
    
    for (let i = 0; i < order.length; i++) {
        document.getElementById(`btn${order[(i+1) % 8]}`).innerHTML = values[i];
    }
}

function init() {
    const btnsDiv = createButtonDiv();

    for (let i = 1; i <= 9; i++) {
        const btn = createButton(i);
        if (i === 5) {
            btn.addEventListener("click", rotateNumbers);
        }
        btnsDiv.appendChild(btn);
    }

    document.body.appendChild(btnsDiv);
}

document.addEventListener("DOMContentLoaded", init);


// CSS

<script>
    
</script>