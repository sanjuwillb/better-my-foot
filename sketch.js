var cat, mouse, back, cats, mouses, backs, catz, mousez, caty
function preload() {
    //load the images here
    caty = loadImage("cat4.png")
    cats = loadImage("cat2.png")
    catz = loadImage("cat1.png")
    backs = loadImage("garden.png")
    mouses = loadImage("mouse3.png")
    mousez = loadImage("mouse1.png")
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back = createSprite(500, 400)
    mouse = createSprite(100, 700)
    cat = createSprite(900, 700)
    back.addImage(backs)
    mouse.addImage(mouses)
    cat.addImage(caty)
    cat.scale = 0.12
    mouse.scale = 0.08
    back.scale = 1.2
    cat.debug = true
    mouse.debug = true
}
function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if (mouse.x-cat.x < mouse.width/2+cat.width/2&&cat.x-mouse.x<cat.width/2+mouse.width/2){
        mouse.addImage(mousez)
        cat.addImage(catz)
    }
    else{
        mouse.addImage(mouses)
        cat.addImage(caty)
        if (keyDown("left_arrow")){
            cat.x = cat.x-3
            cat.addImage(cats)
        }
    }
    drawSprites();
}