runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartkaycie(runtime));
});

function OnBeforeProjectStartkaycie(runtime)
{
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClick(runtime));
}

function OnButtonClick(runtime)
{
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x = 854* Math.random();
		inst.y = 480* Math.random();
	}
}