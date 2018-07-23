{LottieLayer} = require 'LottieLayer'

headerHeight = 67
refreshThreshold = 140
startpoint = 50
endpoint = 140
Framer.Defaults.Animation =
# 	time: 0.3
	curve: Spring(damping:1)
# customAnim = new LottieLayer
# 	name: "customAnim"
# 	path: "images/loading.json"

soundTab = new Audio("sounds/Tab1.m4a")
soundRefresh = new Audio("sounds/Refresh.wav")

customAnim = new LottieLayer
	name: "customAnim"
	path: "images/loading.json"
	autoplay: false
	parent: X
	y: -50
	loop: true
	x: Align.center
	width: 120
	speed: 1
	direction: 1
customAnim.sendToBack()


Restart.animate
	y: 542
	options:
		curve: Spring(damping:.8)
		
Utils.delay 8, ->
	Restart.animate
		y: 667
scroll_1.draggable.enabled = true
scroll_1.draggable.horizontal = false
scroll_1.draggable.overdrag = false

scroll_1.draggable.onDragMove ->
	scroll_1.draggable.speedY = Utils.modulate(scroll_1.y, [0, refreshThreshold], [1, 0.1], true)
	if scroll_1.y < headerHeight
		scroll_1.y = headerHeight
scroll_1.draggable.onDragEnd ->
	if scroll_1.draggable.offset.y < 0
		return
	scroll_1.draggable.speedY = 1
	if scroll_1.y >= refreshThreshold
		scroll_1.animate
			y: refreshThreshold
		customAnim.play()
		Utils.delay Utils.randomNumber(1,3), ->
			scroll_1.animate
				y: headerHeight
			soundRefresh.play()
			Utils.delay 1, ->
				customAnim.goToAndStop(0)
	else
		scroll_1.animate
				y: headerHeight
distance = 0
scroll_1.on "change:y" ,->
	distance = scroll_1.y
# 	print distance
	customAnim.opacity = Utils.modulate(distance, [startpoint, endpoint], [0,1], true)
	customAnim.scale = Utils.modulate(distance, [startpoint, endpoint], [.6,1], true)
	customAnim.y = Utils.modulate(distance, [startpoint, endpoint], [-50, 80], true)

tabbar3.onClick ->
	soundTab.play()
	
