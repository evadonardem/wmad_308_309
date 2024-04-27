runOnStartup(runtime =>
{
    runtime.addEventListener("beforeprojectstart", () => 
    OnBeforeProjectStartdothisrefordson(runtime));
});

function OnBeforeProjectStartdothisrefordson(runtime)
{
    console.log("On before project start");
    let buttonInst = runtime.objects.Button.getFirstInstance();
    buttonInst.addEventListener("click", () => OnButtonClick(runtime));
        alert("refordson");
}   

function OnButtonClick(runtime)
{
    let spriteinst = runtime.objects.Sprite.getFirstInstance();
    let spriteinst2 = runtime.objects.Sprite2.getFirstInstance();
    let spriteinst3 = runtime.objects.Sprite3.getFirstInstance();
    let spriteinst4 = runtime.objects.Sprite4.getFirstInstance();
    
    let maxMovement = 70;
    spriteinst.x += Math.random() * (maxMovement * 2) - maxMovement;
    spriteinst.y += Math.random() * (maxMovement * 2) - maxMovement;
    
    spriteinst2.x += Math.random() * (maxMovement * 2) - maxMovement;
    spriteinst2.y += Math.random() * (maxMovement * 2) - maxMovement;
    
    spriteinst3.x += Math.random() * (maxMovement * 2) - maxMovement;
    spriteinst3.y += Math.random() * (maxMovement * 2) - maxMovement;
    
    spriteinst4.x += Math.random() * (maxMovement * 2) - maxMovement;
    spriteinst4.y += Math.random() * (maxMovement * 2) - maxMovement;
}
