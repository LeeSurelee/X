Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut



sh = Screen.height
ratio = 812/sh
bottom2.y = sh  *ratio + 730 *ratio
bottom.y = 735/ratio
plus = 0

if Screen.width == 414
	plus = 76
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
	
	if distance <= 665 *ratio
		subtitle.y = 753 *ratio
		bottom.y = 735 /ratio
	if distance > 665  *ratio&& distance < 1040 *ratio
		subtitle.y = distance + 88 *ratio
		bottom.y = 735 /ratio
	else if distance >= 1040 *ratio
		subtitle.y = 1040 *ratio + 88 *ratio
		bottom.y = 735 /ratio + distance - 1040 *ratio
		
	if distance2 > 2002 + plus

		before.opacity = Utils.modulate(distance2,[2125 - 123+ plus,2175- 123+ plus],[1,0],true)
		after.opacity = Utils.modulate(distance2,[2125 - 123+ plus,2175 - 123+ plus],[0,1],true)
		icon.rotation = Utils.modulate(distance2,[2125- 123+ plus,2175 - 123+ plus],[0,180],true)
	if distance2 > (2175  - 123)*ratio
		Scroll.onScrollEnd ->
			if Scroll.direction == "down" && distance2 > 2175  - 123
				addscroll.animate
					y: 0
				wrap2.animate
					y: 0
				wrap.animate
					y: -2761
				top_1.animate
					opacity: 0
				bottom2.animate	
					y: 730
# 				print Scroll.direction
				
top_1.onTap ->
	addscroll.animate	
		y: sh
	
	wrap.animate
		y: -2761 + sh - 44
	icon.animate
		rotation: 0
	top_1.animate
		opacity: 1
	bottom2.animate
		y: sh+730

addscroll = new ScrollComponent
	width: Screen.width
	height: sh
	y: sh
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
				y: sh
			
			wrap.animate
				y: -2761 + sh - 44
			icon.animate
				rotation: 0
			top_1.animate
				opacity: 1
			bottom2.animate
				y: sh+730
# 	add.y = 0

# addscroll = ScrollComponent.wrap(wrap2)
# addscroll.scrollHorizontal = false
# addscroll.mouseWheelEnabled = true