runOnStartup(runtime =>
{
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisJanel(runtime));
});

function OnBeforeProjectStartDoThisJanel(runtime)
{
	alert("JANEL CAMSOL!");
	let buttonInst = runtime.objects.Button.getFirstInstance();
	buttonInst.addEventListener("click", () => OnButtonClicked(runtime));
}
function OnButtonClicked(runtime)
{
	console.log(runtime);
	
	let inst = runtime.objects.Sprite.getFirstInstance();
		inst.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
	
	let inst2 = runtime.objects.Sprite2.getFirstInstance();
		inst2.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst2.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
		
	let inst3 = runtime.objects.Sprite3.getFirstInstance();
		inst3.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst3.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
	
	let inst4 = runtime.objects.Sprite4.getFirstInstance();
		inst4.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst4.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
		
	let inst5 = runtime.objects.Sprite5.getFirstInstance();
		inst5.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst5.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
			
	let inst6 = runtime.objects.Sprite6.getFirstInstance();
		inst6.x = Math.floor(Math.random() * (1 + window.innerWidth - 5)) + 5;
		inst6.y = Math.floor(Math.random() * (1 + window.innerHeight - 5)) + 5;
}

