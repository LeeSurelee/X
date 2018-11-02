picholder = [cover,Avatar2,Avatar3,Avatar1,Avatar6,Avatar4,Avatar5]
for layer in picholder
	layer.image = Utils.randomImage()

Framer.Defaults.Animation =
	time: 0.5
# 	curve: Bezier.easeInOut
	curve: Spring(damping: 1)

ActionsCollapse.opacity = 0

video = new VideoLayer
	parent: home
	y: Align.center
	x: Align.center
	width: Screen.width
	height: Screen.width/64*36
# 	video: "images/Fall.mp4"
	opacity: 0

Notice.states.add
	Notice:
		y: 8
	
h = 0
w = 0
a = 0
Placeholder = new Layer
	parent: home
	width: 375
	height: Screen.width * Utils.randomChoice([9/16,1,667/375])
	y: Align.center
	backgroundColor: Utils.randomColor()
	opacity: .3
	
h = Placeholder.height
w = Placeholder.width

Placeholder.sendToBack()

video.sendToBack()
# video.player.play()

Comments.parent = home
Comments.bringToFront()
Comments.states.add
	Collapse:
		y: Screen.height
	Upper:
		y: 210
Comments.stateSwitch('Collapse')

UpperAll =->
	Comments.stateCycle('Upper')
	Title.animate
		opacity: 0
	Actions.animate
		y: 172
	Topic.animate
		opacity: 0
	Like.animate
		opacity: 0
	video.stateCycle('Upper')
	Placeholder.stateCycle('Upper')

Count = 0
CollapseAll =->
	Comments.stateCycle('Collapse')
	video.animate
		y: Align.center
	Actions.animate
		y: Screen.height - 17 - 38
	Utils.delay .3,->
		Actions.animate
			opacity: 1
		Title.animate
			opacity: 1
		Like.animate
			opacity: 1
		Topic.animate
			opacity: 1
	Placeholder.animate
		y: Screen.height/2 - h/2
		width: w
		height: h
		x: Screen.width/2 - w/2
	if Count < 2
		Utils.delay 1,->
			Notice.stateCycle('Notice')
			Count += 1
			Utils.delay 3,->
				Notice.stateCycle('default')

Scroll1 = new ScrollComponent
	parent: Comments
	width: Screen.width
	height: Screen.height - 210 - 44
	backgroundColor: null
	scrollHorizontal: false
	
Content1.parent = Scroll1.content
Title1.parent = Scroll1.content
Title1.bringToFront()
Comment1.bringToFront()

distance1 = 0
Scroll1.onMove ->
	distance1 = Scroll1.scrollY
# 	print distance1
	Actions.opacity = Utils.modulate(distance1,[0,-40],[1,0],true)
	if distance1 > 0 
		Title1.y = distance1
	if distance1 < 22
		BG1.y = -distance1 + 44
Scroll1.onScroll ->
	if distance1 < 0 
		video.y = -distance1
		Actions.y = - distance1 + 172

		if w/h <= 1
			Placeholder.height = 210 - distance1
			a = Placeholder.height
# 			print a
			Placeholder.width = a * w/h
			Placeholder.x = Screen.width/2- a * w/h /2
Scroll1.onScrollEnd ->
	if distance1 < -50
		CollapseAll()
	else
		UpperAll()
video.states.add
	Upper:
		y: 0

Placeholder.states.add
	Upper:
		y: 0
		height: 210
		width: w * 210/h
		x: Screen.width/2-w*210/h/2

Like.onClick ->
	UpperAll()
Title1.onSwipeDown ->
	CollapseAll()
	
# home.onClick ->
# 	Comments.stateCycle('Collapse')

Title.states.add
	Upper:
		opacity: 0
		
Replys.parent = home
Replys.bringToFront()
Replys.states.add
	Collapse:
		y: Screen.height
	Upper:
		y: 210
Replys.stateSwitch('Collapse')

Content1.onClick ->
	Replys.stateCycle('Upper')
Scroll2 = new ScrollComponent
	parent: Replys
	width: Screen.width
	height: Screen.height - 210 - 44
	backgroundColor: null
	scrollHorizontal: false

Comment1.y += Screen.height - 667
Comment2.y += Screen.height - 667

Content2.parent = Scroll2.content
Title2.parent = Scroll2.content
Title2.bringToFront()
Comment2.bringToFront()

distance2 = 0
Scroll2.onMove ->
	distance2 = Scroll2.scrollY
# 	print distance1
	if distance2 > 0 
		Title2.y = distance2
	if distance2 < 22
		BG2.y = -distance2 + 44
Scroll2.onScrollEnd ->
	if distance2 < -50
		Replys.stateCycle('Collapse')
		
Title2.onClick ->
	Replys.stateCycle('Collapse')
