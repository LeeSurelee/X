Pics = [Pic1, Pic2, Pic3, Pic5, Pic4, Pic6, PicMore, Avatar, Video, Avatar_Video]
Cards = [card1, card2]

pic_clip.clip = true
Framer.Defaults.Animation =
	time: 0.2
	curve: Bezier.easeIn

for layer in Pics
	layer.image = Utils.randomImage()
scroll = new ScrollComponent
	height: Screen.height
	width: Screen.width
	backgroundColor: null
	parent: home
	scrollHorizontal: false
	contentInset: bottom: 200
scroll.sendToBack()

homePageCard = []
for i in [0...20]
	medium = i
	layer = Utils.randomChoice(Cards).copy()
	layer.x = Align.center
	layer.parent = scroll.content
	if i <= 1
		layer.y = 64
	else
		layer.y = homePageCard[medium - 1].y + homePageCard[medium - 1].height

	homePageCard.push(layer)
	
ScrollOverlayUp.propagateEvents = true
ScrollOverlayDown.propagateEvents = true 

yDelta = 0
LastPosition = 0
stateup = 0
statedown = 0
scroll.on Events.Move, (event) ->
	yDelta = LastPosition - scroll.scrollY
	LastPosition = scroll.scrollY
# 	print yDelta
	ScrollOverlayUp.opacity = Utils.modulate(yDelta,[-5,-1],[.8,0],true)
	ScrollOverlayDown.opacity = Utils.modulate(yDelta,[1,5],[0,.8],true)
# 	if yDelta < -1
# 		stateup = 1
# 	else if yDelta > 1
# 		statedown = 1
# 	else if yDelta < 0.8 or yDelta > -0.8
# 		stateup = 0
# 		statedown = 0
# 	if stateup == 1
# 		ScrollOverlayUp.animate
# 			opacity: 1
# 	if statedown == 1
# 		ScrollOverlayDown.animate
# 			opacity: 1
# 	if stateup == 0
# 		ScrollOverlayUp.animate
# 			opacity: 0
# 			animationOptions:
# 				time: .1
# 				curve: Bezier.easeIn
# 	if statedown == 0
# 		ScrollOverlayDown.animate
# 			opacity: 0
# 			animationOptions:
# 				time: .1
# 				curve: Bezier.easeIn
