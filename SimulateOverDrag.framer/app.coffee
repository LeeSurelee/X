img.image = Utils.randomImage()
img.draggable.enabled = true
img.draggable.horizontal = false
Framer.Defaults.Animation =
	time: 0.6
	curve: Spring(damping: .8)
img.states.a =
	y: -50
	scale: 0.2
	


distance = 0
img.onMove ->
	distance = img.y
# 	print distance
	
state = 0
img.onDragEnd ->
		state += 1
		if state < 2
			img.stateCycle('default')
		else 
			img.stateCycle('a')
# 	if distance <= 50 
# 
# 	else if distance > 50
# 		img.stateCycle('default')
		
img.onClick ->
	if state > 1
		img.stateCycle('default')
		state = 0