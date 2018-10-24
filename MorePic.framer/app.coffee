pics = [pic,pic_1]

Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

for layer in pics
	layer.image = Utils.randomImage()
flow = new FlowComponent
flow.showNext(home)

swipe.draggable.enabled = true
swipe.draggable.vertical = false

distance = 0
swipe.on "change:x", ->
	distance = swipe.x
# 	print distance
	swipe.onMouseUp ->
		if distance > -55
			swipe.animate
				x: 0
		else if distance <= -55
			flow.showNext(sec)
		swipe.animate
			x:0
	notice.opacity = Utils.modulate(distance,[-50,-55],[1,0],true)
	release.opacity = Utils.modulate(distance,[-50,-55],[0,1],true)
	
pic_1.draggable.enabled = true
pic_1.draggable.vertical = false
distance2 = 0
pic_1.on "change:x", ->
	distance2 = pic_1.x
# 	print distance2
	pic_1.onMouseUp ->
		if distance2 > -55
			pic_1.animate
				x: 0
		else if distance2 <= -55
			flow.showNext(home)
		pic_1.animate
			x: 0
	notice_1.opacity = Utils.modulate(distance2,[-50,-55],[1,0],true)
	release_1.opacity = Utils.modulate(distance2,[-50,-55],[0,1],true)