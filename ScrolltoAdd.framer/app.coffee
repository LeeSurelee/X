Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

bottom2.y = 812 + 730

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
	if distance2 > 2175 
		Scroll.onScrollEnd ->
			if Scroll.direction == "down" && distance2 > 2175 
				addscroll.animate
					y: 0
				wrap2.animate
					y: 0
				wrap.animate
					y: -2937
				top_1.animate
					opacity: 0
				bottom2.animate	
					y: 730
# 				print Scroll.direction
				
top_1.onTap ->
	addscroll.animate	
		y: 812
	
	wrap.animate
		y: -2937 + 812
	icon.animate
		rotation: 0
	top_1.animate
		opacity: 1
	bottom2.animate
		y: 812+730

addscroll = new ScrollComponent
	width: 375
	height: 812
	y: 812
addscroll.scrollHorizontal = false
wrap2.parent = addscroll.content
addscroll.parent = $1
addscroll.placeBehind(top2)
addscroll.mouseWheelEnabled = true

adddis = 0
adddis1 = 0
addscroll.content.on 'change:y',->
	adddis = addscroll.scrollY
	adddis2 = addscroll.scrollY
# 	print adddis
# 	bottom2.y = 730 + adddis
	if adddis > 635
		subtitle2.y = adddis + 87
	before2.opacity = Utils.modulate(adddis,[-35,-85],[1,0],true)
	after2.opacity = Utils.modulate(adddis,[-35,-85],[0,1],true)
	icon2.rotation = Utils.modulate(adddis,[-35,-85],[0,180],true)
	addscroll.onScrollEnd ->
		if addscroll.direction == "up" && adddis < -60 
			addscroll.animate	
				y: 812
			
			wrap.animate
				y: -2937 + 812
			icon.animate
				rotation: 0
			top_1.animate
				opacity: 1
			bottom2.animate
				y: 812+730
# 	add.y = 0

# addscroll = ScrollComponent.wrap(wrap2)
# addscroll.scrollHorizontal = false
# addscroll.mouseWheelEnabled = true