runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisJehanne (runtime));
});

function OnBeforeProjectStartDoThisJehanne(runtime)
{
	console.log("On before project start");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClick(runtime));
}
function OnButtonClick(runtime)
{
	console.log(runtime);
	let inst = runtime.objects.Sprite.getFirstInstance();
	inst.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
	inst.y = Math.floor(Math.random() * (1 + window.innerHeight- 5)) + 5;
	
	let inst2 = runtime.objects.Sprite3.getFirstInstance();
	inst2.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
	inst2.y = Math.floor(Math.random() * (1 + window.innerHeight- 5)) + 5;
	
	let inst3 = runtime.objects.Sprite4.getFirstInstance();
	inst3.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
	inst3.y = Math.floor(Math.random() * (1 + window.innerHeight- 5)) + 5;
}