images = [video,TopicImage_1,TopicImage,video_1,video_2, video_3,TopicImage_2]
for layer in images
	layer.image = Utils.randomImage()

Framer.Extras.Hints.disable()

Framer.Defaults.Animation =
	time: 0.4
	curve: Spring(damping: 0.8)
scroll = new ScrollComponent
	width: Screen.width
	height: Screen.height
	scrollHorizontal: false
	backgroundColor: null
	parent: X
	contentInset: bottom: 100

videoScroll = ScrollComponent.wrap(video)
videoScroll.parent = X
videoScroll.borderRadius = 6


ovalp.backgroundBlur = 10
ovalp.opacity = 0

distance = 0
scroll.onMove ->
# 	print scroll.scrollY
	distance = scroll.scrollY
	videoScroll.y = -distance + 186

scroll.sendToBack()
BG.sendToBack()
BG.opacity = 0

card1.parent = scroll.content
card2.parent = scroll.content
# card3.parent = scroll.content


videoScroll.states.add
	a:
		x: 0
		y: Align.center
		width: Screen.width
		borderRadius: 0
	out:
		x: 0
		y: 667
		width: Screen.width
		borderRadius: 0
	hover:
		x: 375-160-16
		y: 66
		width: 160
		height: 90
		borderRadius: 4

play.states.add
	a:
		x: 160
		opacity: 0

slider.states.add
	a:
		y: Screen.height - slider.height - 5
		opacity: 1

closeV.states.add
	a:
		y: 0
		opacity: 1

BG.states.add
	a:
		opacity: 1

newlayer = ->
	layer = videoScroll.copy()
	layer.parent = card1
	layer.x = 20
	layer.y = 119
	layer.width = 333
	layer.borderRadius = 6

newlayer()
isOpen = false
backtoOrigin = ->
	newlayer()
	BG.stateCycle('default')
# 	videoScroll.stateCycle('default')
	videoScroll.animate
		y: -distance + 186
		x: 20
		width: 333
		borderRadius: 6
	play.stateCycle('default')
	slider.stateCycle('default')
	closeV.stateCycle('default')
	isOpen = false

	Navi.placeBefore(videoScroll)
	Utils.delay 0.5, ->
		BG.sendToBack()
# 		videoScroll.y = -distance + 186
# 		videoScroll.x = 20
# 		videoScroll.width = 333
# 		videoScroll.borderRadius = 6
	layer.destroy()
	videoScroll.draggable.enabled = false
	videoScroll.draggable.horizontal = false
		

videoScroll.on Events.Click, ->
	return if videoScroll.isDragging
	return if videoScroll.isMoving
	if isOpen is false
		Navi.placeBehind(videoScroll)
		BG.placeBehind(videoScroll)
		BG.stateCycle("a")
		videoScroll.stateCycle('a')
		play.stateCycle('a')
		slider.stateCycle('a')
		closeV.stateCycle('a')
		isOpen = true
		videoScroll.draggable.enabled = true
		videoScroll.draggable.horizontal = false
	else if isOpen = true
		backtoOrigin()
closeV.on Events.Click, ->
	return if videoScroll.isDragging
	return if videoScroll.isMoving
	if isOpen is false
		Navi.placeBehind(videoScroll)
		BG.placeBehind(videoScroll)
		BG.stateCycle('a')
		videoScroll.stateCycle('a')
		play.stateCycle('a')
		slider.stateCycle('a')
		closeV.stateCycle('a')
		isOpen = true
		videoScroll.draggable.enabled = true
		videoScroll.draggable.horizontal = false
	else if isOpen = true
		backtoOrigin()

# video.onMouseDown (event,layer) ->
# 	event.preventDefault()
dragDistance1 = 0
dragDistance2 = 0
videoScroll.onDragMove ->
	dragDistance1 = videoScroll.y - 297 + 59
# 	print dragDistance1
	BG.opacity = Utils.modulate(dragDistance1,[0,150],[1,0],true)
videoScroll.onMove ->
	dragDistance2 = videoScroll.y - 297 + 59
	slider.y = Utils.modulate(dragDistance2,[0,38],[Screen.height - slider.height - 5,667],true)
	slider.opacity = Utils.modulate(dragDistance2,[0,19],[1,0],true)
	closeV.y = Utils.modulate(dragDistance2,[0,50],[0,-50],true)
	closeV.opacity = Utils.modulate(dragDistance2,[0,25],[1,0],true)
	ovalp.opacity =  Utils.modulate(dragDistance2,[250,260],[0,1],true)
	ovalp.y =  Utils.modulate(dragDistance2,[250,260],[597,587],true)

# video.onDragStart ->
videoScroll.onDragEnd ->
	if dragDistance1 < 100
		videoScroll.stateCycle('a')
		BG.stateCycle('a')
	else if dragDistance1 >= 100 && dragDistance1 < 260
		newlayer()
		BG.stateCycle('default')
		videoScroll.stateCycle('out')
		play.stateCycle('default')
		slider.stateCycle('default')
		closeV.stateCycle('default')
		Utils.delay 0.5, ->
			Navi.placeBefore(videoScroll)
			BG.sendToBack()
			videoScroll.y = -distance + 186
			videoScroll.x = 20
			videoScroll.width = 333
			videoScroll.borderRadius = 6
			layer.destroy()
		videoScroll.draggable.enabled = false
		videoScroll.draggable.horizontal = false
		isOpen = false
		Utils.delay .5,->
			slider.stateCycle('default')
			closeV.stateCycle('default')
	else if dragDistance1 >= 260
		videoScroll.stateCycle('hover')	