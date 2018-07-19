

Framer.Defaults.Animation =
	time: 0.5
	curve: Spring(damping:.8)
# customAnim = new LottieLayer
# 	name: "customAnim"
# 	path: "images/loading.json"

{LottieLayer} = require 'LottieLayer'



Guidance = new LottieLayer
	name: "Guidance"
	path: "images/Guidance_Designed.json"
	autoplay: true
	parent: BG
	y: 250
	loop: true
	width: 220
	x: Align.center
	speed: 1
	direction: 1

Restart.y = Screen.height

state = 0
play = ->
	state = 1
	Guidance.pause()
	BG.animate
		opacity: 0
	Utils.delay .5, ->
		Restart.animate
			y: Screen.height - 76
# 	print state
Utils.delay 5, ->
	play()
# 	state = 1

Restart.propagateEvents = false
BG.propagateEvents = false
Restart.onClick ->
	if state == 1
		state = 0
		Restart.animate
			y: Screen.height
		Guidance.goToAndPlay(0)
		BG.animate
			opacity: 1
# 		Utils.delay 5, ->
# 			play()
# 			state = 1
	
BG.onClick ->
# 	print state
	if state == 0
# 		state = 1
		play()