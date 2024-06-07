runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisCosme(runtime));
});

function OnBeforeProjectStartDoThisCosme(runtime)
{
	console.log("On before project start");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => KumalatKayoMgaKawal(runtime));
	
	
}

		const height = 480;
		const width = 854;

function KumalatKayoMgaKawal(runtime)
{
	console.log(runtime);
	for (let inst of runtime.objects.Sprite.instances())
	{
		inst.x = height * Math.random();
		inst.y =  width * Math.random();
	}
}