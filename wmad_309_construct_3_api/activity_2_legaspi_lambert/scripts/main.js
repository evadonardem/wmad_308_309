runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisLambert(runtime));
});

function OnBeforeProjectStartDoThisLambert(runtime)
{
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => Kumalatkayobois(runtime));
}

function Kumalatkayobois(runtime)
{
	console.log(runtime);
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x = 780 * Math.random();
		inst.y = 400 * Math.random();
	}
}