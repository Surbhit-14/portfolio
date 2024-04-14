const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight /2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '3FF7F66', '#FFA500', '#36A2EB', '#9BD0F5', '#9BD0F5', 'FFB1C1', 'grey']


//Event Listners
let mouseDown = false
addEventListener('mousedown', () => {
    // mouse.x = event.clientX
    // mouse.y = event.clientY
    mouseDown = true 
})

addEventListener('mouseup', () => {
    // mouse.x = event.clientX
    // mouse.y = event.clientY
    mouseDown = false
})

addEventListener('touchmove', () => {
    // mouse.x = event.clientX
    // mouse.y = event.clientY
    mouseDown = true 
})
addEventListener('touchend', () => {
    // mouse.x = event.clientX
    // mouse.y = event.clientY
    mouseDown = false
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

class CreateObjects{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.shadowColor = this.color
        c.shadowBlur = 15
        c.fillStyle = this.color
        c.fill()
        
    }

    update(){
        this.draw()
    }
}

function randomcolor(){
    return colors[Math.floor(Math.random() * colors.length)]
}


let objects
function init(){
    objects = []
     for(let i = 0; i < 5000; i++){
        const canvasW = canvas.width + 600
        const canvasH = canvas.height + 600
        const x = Math.abs(Math.random()) * canvasW - (canvasW / 2)
        const y = Math.abs(Math.random()) * canvasH - (canvasH / 2)
        const radius = Math.random() * 2
        objects.push(new CreateObjects(x, y, radius, randomcolor()))
     }
}


//Animation Loop
let radians = 0
let alpha = 1
function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = `rgba(10, 10, 10, ${alpha})`
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    c.save()
    c.translate(canvas.width / 2, canvas.height / 2)
    c.rotate(radians)
    objects.forEach(particle => {
        particle.update()
    });
    c.restore()

    radians += 0.0009

    if(mouseDown && alpha >= 0.01){
        alpha -= 0.1
    }
    else if(!mouseDown && alpha < 1){
        alpha += 0.01
    }
}
init()
animate()
