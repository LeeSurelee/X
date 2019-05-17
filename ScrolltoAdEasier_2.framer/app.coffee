Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut


realheight = Screen.height
$1.width = 375
$1.height = 812
$1.clip = true
$1.scale = Screen.height/ 812
$1.y = 
$1.x = Align.center
# if Screen.height< 812



# print $1.superLayer
	
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

wrap.height = 4646

	
content.height = 4646
content.y = 0

wrap.clip = true

Scroll = ScrollComponent.wrap(wrap)
# Scroll.height = $1.height- bottom.height
Scroll.y = 0 + 9*addition
Scroll.height = $1.height - bottom.height
Scroll.scrollHorizontal = false
Scroll.parent = $1
Scroll.placeBehind(bottom)

# Scroll.content.draggable.momentum = no
# Scroll.mouseWheelEnabled = true
distance = 0
distance2 = 0
state = 1
totheend = 0

nextpage =() ->
	Scroll.animate
		scrollY: 1200
	top_1.animate
		opacity: 0
	bottom2.animate	
		y: $1.height - 77
	bottom.animate
		y: -bottom.height
# 				print Scroll.direction
	totheend = 0
fixedstiky = 1040 + 60
Scroll.content.on 'change:y',->
	distance = Scroll.scrollY
	distance2 = Scroll.scrollY
	print distance2
# 	print totheend
	if distance <= 586 *ratio
		subtitle.y = 675 *ratio - 9*addition
# 		bottom.y = sh - bottom.height#735 /ratio
	if distance > 586  *ratio&& distance < fixedstiky *ratio
		subtitle.y = distance + 88 *ratio - 9*addition
# 		bottom.y = sh - bottom.height#735 /ratio
# 	else if distance >= fixedstiky *ratio
# 		subtitle.y = fixedstiky *ratio + 88 *ratio- 9*addition
# # 		bottom.y = 735 /ratio + distance - fixedstiky *ratio
# 	if distance2 > 500
# 		Scroll.onScrollEnd ->
# 			if Scroll.direction == "down" && distance2 > 500
# 				nextpage()
	if distance2 > 501
		totheend = 1

	if totheend == 1
		nextpage()
	

back=()->
	addscroll.animate	
		y: sh
	wrap.animate
		y: -4646 + sh - bottom.height + 1
	top_1.animate
		opacity: 1
	bottom2.animate
		y: sh+$1.height- 77
	bottom.animate
		y: sh - bottom.height
	totheend = 0
top_1.onTap ->
	back()
