runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => 
	OnBeforeProjectStartDoThisbandisa(runtime));
});

function OnBeforeProjectStartDoThisbandisa(runtime)
{
	console.log("On before project start");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClick(runtime));
	alert("Bandisa Jeofrey");
}
function OnButtonClick(runtime)
{
	console.log(runtime);
	let inst = runtime.objects.Sprite.getFirstInstance();
	inst.x = Math.floor(Math.random() * (1 + window.innerWidth -2)) + 2;
	inst.y = Math.floor(Math.random() * (1 + window.innerHeight -2)) + 2;

	let inst1 = runtime.objects.dara.getFirstInstance();
	inst1.x = Math.floor(Math.random() * (1 + window.innerWidth -2)) + 2;
	inst1.y = Math.floor(Math.random() * (1 + window.innerHeight -2)) + 2;
}