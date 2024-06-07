runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisTayaban(runtime));
});

function OnBeforeProjectStartDoThisTayaban(runtime)
{
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => Kumalatkayomgabata(runtime));
}

function Kumalatkayomgabata(runtime)
{
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x = 780 * Math.random();
		inst.y = 400 * Math.random();
	}
}