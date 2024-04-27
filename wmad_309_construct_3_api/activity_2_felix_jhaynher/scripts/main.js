runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisJhaynher(runtime));
});

function OnBeforeProjectStartDoThisJhaynher(runtime)
{
	
	console.log("On before project start - FELIX, JHAYNHER");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => KumalatKayoMgaKawal(runtime));
}

function KumalatKayoMgaKawal(runtime)
{
	console.log(runtime);
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x= 854 *Math.random();
		inst.y= 480 *Math.random();
	}
}