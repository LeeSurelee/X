Pics = [Pic1, Pic2, Pic3, Pic5, Pic4, Pic6, PicMore, Avatar, Video, Avatar_Video]
Cards = [card1, card2]

pic_clip.clip = true

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
for i in [0...16]
	medium = i
	layer = Utils.randomChoice(Cards).copy()
	layer.x = Align.center
	layer.parent = scroll.content
	if i <= 1
		layer.y = 64
	else
		layer.y = homePageCard[medium - 1].y + homePageCard[medium - 1].height

	homePageCard.push(layer)
	

