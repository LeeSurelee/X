Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut


rec = new Layer
	parent: more
	width: Screen.width
	height: 10
	x: 0,y: -10
	backgroundColor: '#F2F2F2'
	

	
sh = Screen.height
ratio = 812/sh
bottom2.y = sh  *ratio + 730 *ratio
bottom.y = 735/ratio
plus = 0
addition = 0
wrap.height = 1794*ratio

if Screen.width == 414
	plus = 76
	addition = 1
	
content.height = 1794*ratio
content.y = 0
more.y = 1794*ratio + 10


Scroll = ScrollComponent.wrap(wrap)
Scroll.height = Screen.height - bottom.height
Scroll.y = 0 + 9*addition
Scroll.scrollHorizontal = false
Scroll.parent = $1
Scroll.placeBehind(bottom)

Scroll.mouseWheelEnabled = true
distance = 0
distance2 = 0
state = 1

fixedstiky = 1040 + 60
Scroll.content.on 'change:y',->
	distance = Scroll.scrollY
	distance2 = Scroll.scrollY
# 	print distance2
	if distance <= 586 *ratio
		subtitle.y = 675 *ratio - 9*addition
		bottom.y = 735 /ratio
	if distance > 586  *ratio&& distance < fixedstiky *ratio
		subtitle.y = distance + 88 *ratio - 9*addition
		bottom.y = 735 /ratio
	else if distance >= fixedstiky *ratio
		subtitle.y = fixedstiky *ratio + 88 *ratio- 9*addition
# 		bottom.y = 735 /ratio + distance - fixedstiky *ratio
		
	if distance2 > (1125+140*addition)*ratio
		before.opacity = Utils.modulate(distance2,[(1125+140*addition)*ratio,(1125+140*addition)*ratio+30],[1,0],true)
		after.opacity = Utils.modulate(distance2,[(1125+140*addition)*ratio+20,(1125+140*addition)*ratio+50],[0,1],true)
		icon.rotation = Utils.modulate(distance2,[(1125+140*addition)*ratio,(1125+140*addition)*ratio+50],[0,180],true)
	if distance2 > (1125+140*addition)*ratio+50
		Scroll.onScrollEnd ->
			if Scroll.direction == "down" && distance2 > (1125+140*addition)*ratio+50
				addscroll.animate
					y: 0 + 6*addition
				wrap2.animate
					y: 0
				wrap.animate
					y: -1794*ratio
				top_1.animate
					opacity: 0
				bottom2.animate	
					y: Screen.height - 77
# 				print Scroll.direction

back=()->
	addscroll.animate	
		y: sh
	wrap.animate
		y: -1794*ratio + sh - more.height - bottom.height - 10
	icon.animate
		rotation: 0
	top_1.animate
		opacity: 1
	bottom2.animate
		y: sh+Screen.height - 77
top_1.onTap ->
	back()

addscroll = new ScrollComponent
	width: Screen.width
	height: sh - bottom.height
	y: sh
addscroll.scrollHorizontal = false
wrap2.parent = addscroll.content
addscroll.parent = $1
addscroll.placeBehind(top2)
addscroll.mouseWheelEnabled = true
# addscroll.content.height = 2994*ratio
# addscroll.content.y = 0
# content2.y = 0
# wrap2.height = addscroll.content.height

adddis = 0
adddis1 = 0
subtitle2.y = 723
addscroll.content.on 'change:y',->
	adddis = addscroll.scrollY
	adddis2 = addscroll.scrollY
# 	print adddis
# 	bottom2.y = 730 + adddis
	if adddis <= 635 *ratio - 3*addition
		subtitle2.y = 723*ratio - 6*addition
	else if adddis > 635 * ratio - 3*addition
		subtitle2.y = adddis + top_1.height - 1 - 6*addition
	before2.opacity = Utils.modulate(adddis,[-35,-65],[1,0],true)
	after2.opacity = Utils.modulate(adddis,[-65,-85],[0,1],true)
	icon2.rotation = Utils.modulate(adddis,[-35,-85],[0,180],true)
	addscroll.onScrollEnd ->
		if addscroll.direction == "up" && adddis < -60 
			back()
# 	add.y = 0

# addscroll = ScrollComponent.wrap(wrap2)
# addscroll.scrollHorizontal = false
# addscroll.mouseWheelEnabled = true