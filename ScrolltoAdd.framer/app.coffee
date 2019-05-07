Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

Scroll = ScrollComponent.wrap(wrap)
Scroll.scrollHorizontal = false
Scroll.parent = $1
Scroll.placeBehind(bottom)

Scroll.mouseWheelEnabled = true
distance = 0
distance2 = 0
state = 1

Scroll.content.on 'change:y',->
	distance = Scroll.scrollY
	distance2 = Scroll.scrollY
# 	print distance2
	
	if distance <= 709
		subtitle.y = 797
		bottom.y = 735
	if distance > 709 && distance < 1373
		subtitle.y = distance + 88
		bottom.y = 735
	else if distance >= 1373
		subtitle.y = 1373 + 88
		bottom.y = 735 + distance - 1373
		
	if distance2 > 2125

		before.opacity = Utils.modulate(distance2,[2125,2175],[1,0],true)
		after.opacity = Utils.modulate(distance2,[2125,2175],[0,1],true)
		icon.rotation = Utils.modulate(distance2,[2125,2175],[0,180],true)
	if distance2 > 2225 
		Scroll.onScrollEnd ->
			if Scroll.direction == "down" && distance2 > 2225 
				add.animate
					y: 88
				wrap.animate
					y: -2937
# 				print Scroll.direction
				
top_1.onTap ->
	add.animate	
		y: 812
	wrap.animate
		y: -2937 + 812
	icon.animate
		rotation: 0
