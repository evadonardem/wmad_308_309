runOnStartup(runtime => {
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime) {
    console.log("On before project start");
    let buttonInst = runtime.objects.Button.getFirstInstance();
    buttonInst.addEventListener("click", () => OnButtonClick(runtime));
    alert("jan rensen"); 
	
}

function OnButtonClick(runtime) {
   let spriteInst= runtime.objects.Sprite.getFirstInstance();
    let spriteInst2= runtime.objects.Sprite2.getFirstInstance();
	 let spriteInst3= runtime.objects.Sprite3.getFirstInstance();
	 
	 let maxMovement =70;
	 spriteInst.x += Math.random() * (maxMovement * 2) - maxMovement;
	 spriteInst.y += Math.random() * (maxMovement * 2) - maxMovement;
	 
	 spriteInst2.x += Math.random() * (maxMovement * 2) - maxMovement;
	 spriteInst2.y += Math.random() * (maxMovement * 2) - maxMovement;
	 
	 spriteInst3.x += Math.random() * (maxMovement * 2) - maxMovement;
	 spriteInst3.y += Math.random() * (maxMovement * 2) - maxMovement;
   
}

