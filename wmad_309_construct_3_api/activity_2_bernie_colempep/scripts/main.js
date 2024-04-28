runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisbernie(runtime));
});

function OnBeforeProjectStartDoThisbernie(runtime)
{
	console.log("On before project start");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClick(runtime));
	alert("bernie colempep");
}
function OnButtonClick(runtime)
{
	console.log(runtime);
	let inst = runtime.objects.Sprite.getFirstInstance();
	inst.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
	inst.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
	
	let inst1 = runtime.objects.Sprite2.getFirstInstance();
	inst1.x = Math.floor(Math.random() * (1 + window.innerWidth - 10)) + 10;
	inst1.y = Math.floor(Math.random() * (1 + window.innerHeight - 10)) + 10;
	
	let inst2 = runtime.objects.Sprite3.getFirstInstance();
	inst2.x = Math.floor(Math.random() * (1 + window.innerWidth - 100)) + 100;
	inst2.y = Math.floor(Math.random() * (1 + window.innerHeight - 100)) + 100;
	
	let inst3 = runtime.objects.Sprite4.getFirstInstance();
	inst3.x = Math.floor(Math.random() * (1 + window.innerWidth - 50)) + 50;
	inst3.y = Math.floor(Math.random() * (1 + window.innerHeight - 50)) + 50;
}