Framer.Defaults.Animation =
	time: 0.4
	curve: Spring(damping: .8)
content.draggable.enabled = true
content.draggable.horizontal = false
content.image = Utils.randomImage()
distance = 0
content.on "change:y" ,->
	distance = content.y - 297
# 	print distance
	bg.opacity = Utils.modulate(distance,[0,400],[1,0],true)

button.y = Screen.height
content.onDragEnd ->
	if distance < 100

		content.animate
			y: 297
	else if distance >= 100
		bg.animate
			opacity: 0
		content.animate
			y: 812
		Utils.delay 1,->
			content.animate
				y: 297
			bg.animate
				opacity: 1
show =->
	Utils.delay 0.6, ->
		button.animate
			y: Screen.height - 87
show()
refresh.onClick ->
	button.y = Screen.height
	show()