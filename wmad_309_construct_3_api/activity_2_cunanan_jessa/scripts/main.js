runOnStartup(runtime => {
  runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStartDoThisJessa(runtime));
});

function OnBeforeProjectStartDoThisJessa(runtime) {
  let buttonInst = runtime.objects.Button.getFirstInstance();
  buttonInst.addEventListener("click", () => OnButtonClick(runtime));
 
}

function OnButtonClick(runtime) {
  let spriteInst = runtime.objects.Sprite.getFirstInstance();
  let spriteInst2 = runtime.objects.Sprite2.getFirstInstance();
  let spriteInst3 = runtime.objects.Sprite3.getFirstInstance();
  let spriteInst4 = runtime.objects.Sprite4.getFirstInstance();
 
  let maxMovement = 70;
  spriteInst.x += Math.random() * (maxMovement * 2) - maxMovement;
  spriteInst.y += Math.random() * (maxMovement * 2) - maxMovement;

  spriteInst2.x += Math.random() * (maxMovement * 2) - maxMovement;
  spriteInst2.y += Math.random() * (maxMovement * 2) - maxMovement;
 
  spriteInst3.x += Math.random() * (maxMovement * 2) - maxMovement;
  spriteInst3.y += Math.random() * (maxMovement * 2) - maxMovement;
 
  spriteInst4.x += Math.random() * (maxMovement * 2) - maxMovement;
  spriteInst4.y += Math.random() * (maxMovement * 2) - maxMovement;

}
