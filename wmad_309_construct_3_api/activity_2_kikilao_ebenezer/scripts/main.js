runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnClick(runtime));
}

function OnClick(runtime)
{
	console.log(runtime);
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x = 800 * Math.random();
		inst.y = 400 * Math.random();
	}
}