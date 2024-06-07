runOnStartup(runtime => {
    runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});
function OnBeforeProjectStart(runtime) {
    let buttonInst = runtime.objects.Button.getFirstInstance();
    buttonInst.addEventListener("click", () => OnButtonClick(runtime));

    let button7Inst = runtime.objects.Button7.getFirstInstance();
    button7Inst.addEventListener("click", () => OnButton7Click(runtime));

    let button2Inst = runtime.objects.Button2.getFirstInstance();
    button2Inst.addEventListener("click", () => OnButton2Click(runtime));

    let button3Inst = runtime.objects.Button3.getFirstInstance();
    button3Inst.addEventListener("click", () => OnButton3Click(runtime));

    let button4Inst = runtime.objects.Button4.getFirstInstance();
    button4Inst.addEventListener("click", () => OnButton4Click(runtime));

    let button5Inst = runtime.objects.Button5.getFirstInstance();
    button5Inst.addEventListener("click", () => OnButton5Click(runtime));

    let button6Inst = runtime.objects.Button6.getFirstInstance();
    button6Inst.addEventListener("click", () => OnButton6Click(runtime));
}
function OnButtonClick(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.x += 5; 
	}
}
function OnButton2Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.x -= 5; 
	}
}
function OnButton3Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.y -= 5;
	}
}

function OnButton4Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.y += 5; 
	}
}

function OnButton5Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.x -= 100; 
	}
}

function OnButton6Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.x += 100; 
	}
}

function OnButton7Click(runtime) {
    for (let inst of runtime.objects.Sprite.getAllInstances()){
    inst.x = 700 * Math.random();
    inst.y = 500 * Math.random();
	}
}
