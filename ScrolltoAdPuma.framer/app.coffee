Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

# default_w = 375
# default_h = 812
# 
# screen_width = Framer.Device.$1.width 
# screen_height = Framer.Device.$1.height
# Framer.Device.contentScale = ratio
# 
# 
# ratio = screen_width / default_w

# Framer.Device.customize
# 	screenWidth: 414	
# 	screenHeight: 896
# block.height = 675 / 375 * content.width
# content.height = content.width * 1794 / 375

$1.width = 375
$1.height = 812
$1.clip = true
$1.center()
# if Screen.height< 812
$1.scale = Screen.height/ 812


# print $1.superLayer

rec = new Layer
	parent: more
	width: $1.width
	height: 10
	x: 0,y: -10
	backgroundColor: '#F2F2F2'
	
plus = 0
addition = 0
	
sh = $1.height
ratio1 = 812/sh

sw = $1.width
ratio2 = 375/sw
ratio = 1#ratio1
# if $1.width == 414 
# 	plus = 76
# 	addition = 1
# 	ratio = 1#Math.max(ratio1,ratio2)
	
# else if $1.height== 667 or sh == 640
# 	ratio = 1#Math.min(ratio1,ratio2)
# ratio = Math.max(ratio1,ratio2)
# print ratio
	
bottom2.y = sh  *ratio + 730 *ratio
# bottom.y = sh - bottom.height

wrap.height = 1794*ratio

	
content.height = 1794*ratio
content.y = 0
more.y = 1794*ratio + 10


Scroll = ScrollComponent.wrap(wrap)
# Scroll.height = $1.height- bottom.height
Scroll.y = 0 + 9*addition
Scroll.height = $1.height - bottom.height
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
# 		bottom.y = sh - bottom.height#735 /ratio
	if distance > 586  *ratio&& distance < fixedstiky *ratio
		subtitle.y = distance + 88 *ratio - 9*addition
# 		bottom.y = sh - bottom.height#735 /ratio
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
					y: 0
				wrap2.animate
					y: 0
				wrap.animate
					y: -1794*ratio
				top_1.animate
					opacity: 0
				bottom2.animate	
					y: $1.height - 77
				bottom.animate
					y: -bottom.height
# 				print Scroll.direction

back=()->
	addscroll.animate	
		y: sh
	wrap.animate
		y: -1794*ratio + sh - bottom.height - more.height - 10
	icon.animate
		rotation: 0
	top_1.animate
		opacity: 1
	bottom2.animate
		y: sh+$1.height- 77
	bottom.animate
		y: sh - bottom.height
top_1.onTap ->
	back()

addscroll = new ScrollComponent
	width: $1.width
	height: $1.height-bottom2.height
	y: sh
addscroll.scrollHorizontal = false
wrap2.parent = addscroll.content
addscroll.parent = $1
addscroll.placeBehind(bottom)
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
	after2.opacity = Utils.modulate(adddis,[-55,-85],[0,1],true)
	icon2.rotation = Utils.modulate(adddis,[-35,-85],[0,180],true)
	addscroll.onScrollEnd ->
		if addscroll.direction == "up" && adddis < -60 
			back()
# 	add.y = 0

# addscroll = ScrollComponent.wrap(wrap2)
# addscroll.scrollHorizontal = false
# addscroll.mouseWheelEnabled = true