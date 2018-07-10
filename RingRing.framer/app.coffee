

Framer.Defaults.Animation =
# 	time: 0.3
	curve: Spring(damping:1)
# customAnim = new LottieLayer
# 	name: "customAnim"
# 	path: "images/loading.json"

{LottieLayer} = require 'LottieLayer'

PlayRing =->
# 	Utils.delay 3,->
		Me.animate
	# 		scale: .5
			opacity: 0
		Utils.delay .3,->
			customAnim.animate
				opacity: 1
			customAnim.goToAndPlay(0)

customAnim = new LottieLayer
	name: "customAnim"
	path: "images/RingRing.json"
	autoplay: false
	parent: X
	y: 619
	loop: false
	x: 289
	width: 34
	speed: 1
	direction: 1
	opacity: 0


like = new LottieLayer
	name: "like"
	path: "images/LikeAnimation.json"
	autoplay: true
	parent: X
	y: 414
	loop: true
	x: 12
	width: 38
	speed: 1
	direction: 1

likeBig = new LottieLayer
	name: "likeBig"
	path: "images/LikeAnimation.json"
	autoplay: true
	parent: X
	y: 230
	loop: true
	x: Align.center
	width: 120
	speed: 1
	direction: 1
	
	
Utils.delay 1, ->
	PlayRing()
customAnim.onClick ->
	customAnim.animate
		opacity: 0
	Utils.delay .3,->
		Me.animate
			opacity: 1
	Utils.delay 3, ->
		PlayRing()