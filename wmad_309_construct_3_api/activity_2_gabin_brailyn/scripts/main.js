runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartOnThisDave(runtime));
});

function OnBeforeProjectStartOnThisDave(runtime)
{
	
	console.log("By: Brailyn Sharie B. Gabin");
	
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => BunnyScatter(runtime));

}

function BunnyScatter(runtime)
{

	for (let inst of runtime.objects.Sprite.getAllInstances())
	{
		inst.x = 480 * Math.random();
		inst.y = 854 * Math.random();
	}
}