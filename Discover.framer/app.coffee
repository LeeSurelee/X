flow = new FlowComponent
flow.showNext(Discover)
flow.header = NavigationBar_Found

	
Framer.Defaults.Animation =
	time: 0.5
	curve: Spring(damping: .8)
Card1Scroll = new PageComponent
	parent: Card1Aggre
	backgroundColor: null
	scrollVertical: false
	width: Screen.width
	contentInset: left: 20;right: 20
	x: -20
Card1Image.image = Utils.randomImage()
Card1.parent = Card1Scroll.content
Card1Numb = 10
for i in [0...Card1Numb]
	layer = Card1.copy()
	layer.x = Card1.x + Card1.width * i + 10 * i
	layer.y = Card1.y
	layer.parent = Card1Scroll.content
	Card1Image.image = Utils.randomImage()

Cards.y = Card1Aggre.y + Card1Aggre.height + 20
# More.onClick ->
# 	flow.showNext(DiscoverMore)
Push.parent = Discover
tabbar3.parent = Discover
tabbar3.y = Screen.height - tabbar3.height
tabbar3.placeBehind(Push)
Push.y = 622
Push.states.a=
	y: 552
	opacity: 1
state = 0
follow.onClick ->
	if state == 0
		follow.text = "已关注"
		follow.color = "#999"
		state = 1
		Push.stateCycle('a')
		Utils.delay 5, ->
			Push.stateCycle('default')
	else if state == 1
		follow.text = "关注"
		follow.color = "#3699FD"
		state = 0
Push.onClick ->
		Push.stateCycle('default')
		