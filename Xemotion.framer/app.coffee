# Elayer.draggable.enabled = true
# Elayer.draggable.horizontal = false
Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut
# 	

scroll = ScrollComponent.wrap(Elayer)
scroll.height = 330
scroll.scrollHorizontal = false
scroll.y = 168
Emotion.y = 42
scroll.contentInset = 
	top: 64

scroll.scrollY = -140
# scroll.y = 63
scroll.onMove (event,layer) ->
	distance = scroll.scrollY
# 	print distance
	scrollbar.opacity = Utils.modulate(distance,[60,64],[0,1],true)
	if distance >= 64
		scrollbar.y = distance - 64
		bar.y = distance - 59
		up = true
	else
		up = false
		scrollbar.y = 0
		bar.y = 5
scroll.states.add
	upper:
		scrollY: 64
	lower:
		scrollY: -71

Upper = ->
	scroll.stateCycle('upper')

Lower = ->
	scroll.stateCycle('lower')
	


scrollbar.onSwipeUp (event, layer) ->
	Upper()
	
scrollbar.onSwipeDown (event, layer) ->
	Lower()

up = false
scrollbar.onClick ->
	if up
		scroll.stateCycle('lower')
		scrollbar.y = 0
		bar.y = 5
		scrollbar.opacity = 0
		up = false
	else if not up
		scroll.stateCycle('upper')
		up = true

scroll.onSwipeUp ->
	if not up
		Upper()
		up = true
# scroll.onSwipeDown ->
# 	if up
# 		Lower()
# 		up = false
Emotion.onClick ->
	cover.x += 32
	Wording.opacity = 0
	Guide.opacity = 0
	Rest.opacity = 1

Rest.onClick ->
	cover.x += 32
	Wording.opacity = 0
	Guide.opacity = 0
	Rest.opacity = 1
	
Keyboard.onClick ->
	cover.x -= 32
	if cover.x == 14
		Wording.opacity = .6
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	