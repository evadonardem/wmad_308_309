
runOnStartup(runtime => {
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDothisjessyboy(runtime));
});

function OnBeforeProjectStartDothisjessyboy(runtime) {
    let buttonInst = runtime.objects.Button.getFirstInstance();
    buttonInst.addEventListener("click", () => OnButtonClick(runtime));
    alert("jessyboy"); // Moved the alert here to ensure it's shown on startup
}

function OnButtonClick(runtime) {
    console.log("Button clicked!");
    let height = 470;
    let width = 850;
    let inst = runtime.objects.Sprite.getFirstInstance();
	  let inst2 = runtime.objects.Sprite2.getFirstInstance();

    // Generate random coordinates within the layout bounds
    let newX = Math.floor(Math.random() * (width - 5)) + 5; // Adjusted to ensure the sprite remains within the layout
    let newY = Math.floor(Math.random() * (height - 5)) + 5;

    // Update the position of the sprite
    inst.x = newX;
    inst.y = newY;
	  inst2.x = newY;
    inst2.y = newX;
}