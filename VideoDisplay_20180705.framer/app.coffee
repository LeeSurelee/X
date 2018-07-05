w = 1
h = 1
ratio = 0
imaw2 = (Screen.width - 40)*2/3
imaw25 = (Screen.width - 40)*5/6
ima.image = Utils.randomImage()
ima.width = imaw2*1.1
# 		ima.width = imaw2/2.5
ima.height = imaw2*1.45

slider1 = new SliderComponent
	y: 600
	x: Align.center

slider2 = new SliderComponent
	y: 600
	x: Align.center
	opacity: 0
slider2.sendToBack()
h = 40
displayIma = ->
	wid1.template =
		w: Utils.round(ima.width)
		h: Utils.round(ima.height)
		
changepic = ->
	ratio = w/h
	rate.template =
		r: Math.round(ratio*1000)/1000
	betaValue.template = 
# 		b: Utils.round(event.beta)
	wid.template =
		w: Utils.round(ratio * 222)
		h: Utils.round(222/ratio)
	# Gamma values define rotation around the x-axis. Ranging from -180 and 180.
# 	gamma.x = Utils.modulate(event.gamma, [-90, 90], [0, 80], true)
	gammaValue.template = 
# 		g: Utils.round(event.gamma)

	# Move ball around.
	ball.rotation = Utils.round(-alpha.rotation)
# 	ball.midY = Utils.modulate(event.beta, [-90, 90], [0, container.height], true)
# 	ball.midX = Utils.modulate(event.gamma, [-90, 90], [0, container.width], true)
	if ratio >= 1 && ratio <= 16/9
		ima.width = (9/28*ratio + 13/14)*imaw2
# 			Utils.modulate(ratio,[1,16/9],[imaw25,335],true)
		ima.height = (-45/224*ratio+269/224)*imaw2
# 			Utils.modulate(ratio,[1,16/9],[imaw2,335/16*9],true)
		displayIma()
	else if ratio > 16/9
# 		ima.height = imaw2/2.5 
		ima.height = 335/16*9
		ima.width = 335
		displayIma()

	else if ratio >= 9/16 && ratio < 1
		ima.height = (-36/35*ratio + 71/35)*imaw2 
		#Utils.modulate(ratio,[9/16,1],[imaw2*1.5,imaw2],true)
		ima.width =  (12/35*ratio + 127/140)*imaw2 
		#Utils.modulate(ratio,[9/16,1],[imaw2*1.1,imaw25],true)
		displayIma()
	else if ratio < 9/16 
		ima.width = imaw2*1.1
# 		ima.width = imaw2/2.5
		ima.height = imaw2*1.45
		displayIma()
slider1num = 0
slider2num = 0

slider1.on Events.SliderValueChange, ->
	slider1num = slider1.value
	w = Math.round(slider1num * 100)
# 	print w
	changepic()
# slider2.on Events.SliderValueChange, ->
# 	slider2num = slider2.value
# 	h = Math.round(slider2num * 100)
# 	changepic()
window.addEventListener "deviceorientation", (event) ->
	# Alpha values define rotation around the z-axis. Ranging from 0 to 360. 	
	alpha.rotation = Utils.round(event.alpha)
	alphaValue.template = 
		a: Utils.round(event.alpha)
	
	# Beta values define rotation around the y-axis. Ranging from -180 and 180.
	beta.y = Utils.modulate(event.beta, [-90, 90], [0, 80], true)


# 	print slider.value
# 	w = Utils.modulate(beta.y,[35,45],[10,1000],true)
# 	h = Utils.modulate(gamma.x,[35,45],[10,1000],true)
