Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut

flow = new FlowComponent

flow.showNext($1)

ad.onClick ->
	flow.showNext($2)
	
	
$2.onClick ->
	flow.showPrevious()
	
flow.draggable.enabled = false
flow.width = 375
flow.height = 812
# flow.clip = true
# flow.scale = Screen.height/ 812
flow.y = 
flow.x = Align.center

realheight = Screen.height

$1.width = 375
$1.height = 812
$1.clip = true
$1.scale = Screen.height/ 812
$1.y = 
$1.x = Align.center
# if Screen.height< 812

$2.width = 375
$2.height = 812
$2.clip = true
$2.scale = Screen.height/ 812
$2.y = 
$2.x = Align.center

# print $1.superLayer

	
plus = 0
addition = 0
	
sh = $1.height
ratio1 = 812/sh

sw = $1.width
ratio2 = 375/sw
ratio = 1#ratio1

wrap.height = 2303

	
content.height = 2303
content.y = 0


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

fixedstiky = 766
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
		
 
back=()->
	addscroll.animate	
		y: sh
	wrap.animate
		y: -(1794-29)*ratio + sh - bottom.height - more.height - 10
	icon.animate
		rotation: 0
	top_1.animate
		opacity: 1
	bottom2.animate
		y: sh+$1.height- 77
	bottom.animate
		y: sh - bottom.height
	before.animate
		opacity: 1
top_1.onTap ->
	back()



adddis = 0
adddis1 = 0