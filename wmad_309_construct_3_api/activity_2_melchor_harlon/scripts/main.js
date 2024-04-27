runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

function OnBeforeProjectStart(runtime)
{
	let buttonInst = runtime.objects.toRight.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClick(runtime));
}

function OnButtonClick(runtime)
{
	for(let inst of runtime.objects.Sprite.getAllInstances())
	{
		inst.x = 480 * Math.random();
		inst.y = 854 * Math.random();
	}
}