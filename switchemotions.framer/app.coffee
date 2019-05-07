Framer.Defaults.Animation =
	time: 0.1
	curve: Bezier.easeInOut

Emos = [$1,$2,$3,$4,$5,$6,$7]
# for layer,i in Emos
# 	this.x = 375*i + 0
Dots = [dot1,dot2,dot3,dot4,dot5,dot6,dot7,dot8,dot0]
	
dot0.scale = 1.2
Emopage = new PageComponent
	parent: emotion
	height: 179
	width: 375
	scrollVertical: false
for layer,i in Emos
	layer.parent = Emopage.content
	layer.x = 375 * i

Emopage.addPage($8,"right")

# Emopage.content.width = 375*8

# Em.parent = Emoscroll.content
Em.x = 0
Em.y = 0

dots.parent = emotion

for layer,i in Dots
	layer.color = "#cdcdcd"
Dots[8].color = "#ff8216"

pagenumber = 0

EmosOffsetX = 0
Emopage.content.on "change:x", ->
# 	print Emopage.content.x
	EmosOffsetX = Emopage.content.x
	dot0.x = (-EmosOffsetX)/375*16

hold.parent = emotion
hold.placeBehind(dots)

#adjust
# hold.y = 0
# dots.y = 10


dotBG.opacity = 0
error = 10

hold.on Events.TouchStart, (event, layer) ->
	touchX = Events.touchEvent(event).clientX
# 	touchY = Events.touchEvent(event).clientY
# 	print touchX
	if 170 - error < touchX <= 170 + error
		dot0.animate
			x: 0
		Emopage.snapToPage(Emos[0],false)
	else if 190 - error < touchX <= 190 + error
		dot0.animate
			x: 16
		Emopage.snapToPage(Emos[1],false)
	else if 211 - error < touchX <= 211 + error
		dot0.animate
			x: 32
		Emopage.snapToPage(Emos[2],false)
	else if 230 - error < touchX <= 230 + error
		dot0.animate
			x: 48
		Emopage.snapToPage(Emos[3],false)
	else if 251 - error < touchX <= 251 + error
		dot0.animate
			x: 64
		Emopage.snapToPage(Emos[4],false)
	else if 273 - error < touchX <= 273 + error
		dot0.animate
			x: 80
		Emopage.snapToPage(Emos[5],false)
	else if 294 - error < touchX <= 294 + error
		dot0.animate
			x: 96
		Emopage.snapToPage(Emos[6],false)
	else if touchX > 314 - error
		dot0.animate
			x: 112
			Emopage.content.x = -375*7
	
	
hold.on Events.Pan, (event, layer) ->
	touchX = Events.touchEvent(event).clientX 
	dotBG.animate
		opacity: 1
	holdOffsetX = dot0.x
	dot0.x = Utils.modulate(touchX,[169,314],[0,113],true)
	if holdOffsetX < 8
		Emopage.snapToPage(Emos[0],false)
	else if holdOffsetX <= 24
		Emopage.snapToPage(Emos[1],false)
	else if holdOffsetX <= 40
		Emopage.snapToPage(Emos[2],false)
	else if holdOffsetX <= 56
		Emopage.snapToPage(Emos[3],false)
	else if holdOffsetX <= 72
		Emopage.snapToPage(Emos[4],false)
	else if holdOffsetX <= 88
		Emopage.snapToPage(Emos[5],false)
	else if holdOffsetX <= 104
		Emopage.snapToPage(Emos[6],false)
	else 
		Emopage.content.x = -375*7
	
hold.onMouseUp ->
	holdOffsetX = dot0.x
	dotBG.animate
		opacity: 0
	if holdOffsetX < 8
		dot0.animate
			x: 0
	else if holdOffsetX <= 24
		dot0.animate
			x: 16
	else if holdOffsetX <= 40
		dot0.animate
			x: 32
	else if holdOffsetX <= 56
		dot0.animate
			x: 48
	else if holdOffsetX <= 72
		dot0.animate
			x: 64
	else if holdOffsetX <= 88
		dot0.animate
			x: 80
	else if holdOffsetX <= 104
		dot0.animate
			x: 96
	else 
		dot0.animate
			x: 112



	
# hold.onTouchStart ->
# 	print hold.touchEvent.clientX - layer.x
		

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	