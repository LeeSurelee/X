bg.image = Utils.randomImage()

scroll = ScrollComponent.wrap(list)
scroll.scrollHorizontal = false
scroll.y = 0
scroll.size = Screen.size
scroll.parent = device
scroll.placeBehind(mask)
scroll.contentInset =
	top: 248
	bottom: 100

title.opacity = 0
mask0.opacity = 0
distance = 0
scroll.content.on "change:y" , ->
	distance = scroll.scrollY
# 	print distance
	wording.y = -distance + 176
	if distance < 222 - 36*3 && distance > 100-36*3 +8

		mask.y = -distance + 100 -36*3 + 8
		mask0.y = -distance + 100-36*3 + 8
	mask.backgroundBlur = Utils.modulate(distance,[120,130],[0,10],true)
	bg.y = Utils.modulate(distance,[0,130],[0,-10],true)
	mask0.opacity = Utils.modulate(distance,[120,130],[0,.6],true)
	title.opacity = Utils.modulate(distance,[140,150],[0,1],true)
	title.y = Utils.modulate(distance,[140,150],[41,31],true)
	
# 	if distance