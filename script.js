//your JS code here. If required.
function changeColour() {
    const blockIdInput = document.getElementById("block_id");
    const colourInput = document.getElementById("colour_id");

    const blockId = blockIdInput.value;
    const colour = colourInput.value;

    if (blockId < 1 || blockId > 9) {
        alert("Please enter a valid block ID between 1 and 9.");
        return;
    }

    const targetBlock = document.getElementById(blockId.toString());
    targetBlock.style.backgroundColor = color;
}

function resetColors() {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
    });
}