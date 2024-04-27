runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisGarcia(runtime));
});

function OnBeforeProjectStartDoThisGarcia(runtime)
{
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => IwarasUtiPuli(runtime));
	alert("GarciaUrPeep");
}

function IwarasUtiPuli(runtime)
{
	let sprite1Inst = runtime.objects.Sprite1.getFirstInstance();
	let sprite2Inst = runtime.objects.Sprite2.getFirstInstance();
	let sprite3Inst = runtime.objects.Sprite3.getFirstInstance();
	
	let maxMovement = 70;
	sprite1Inst.x += Math.random() * (maxMovement = 20) - maxMovement;
	sprite1Inst.y += Math.random() * (maxMovement = 20) - maxMovement;
	
	sprite2Inst.x += Math.random() * (maxMovement = 20) - maxMovement;
	sprite2Inst.y += Math.random() * (maxMovement = 20) - maxMovement;
	
	sprite3Inst.x += Math.random() * (maxMovement = 20) - maxMovement;
	sprite3Inst.y += Math.random() * (maxMovement = 20) - maxMovement;

}
