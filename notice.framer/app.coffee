Framer.Defaults.Animation =
	time: 0.6
	curve: Bezier.easeInOut
	
bg.clip = true

word2.y = 40

word2.opacity = 0

word.states.add
	a:
		y:-26
		opacity: 0
	b:
		y:12
		opacity:1
	c:
		y: 40
		opacity: 0
		
word2.states.add
	a:
		y:12
		opacity:1
	b:
		y:40
		opacity:0
	c:
		y:-26
		opacity:0

word.stateCycle('a')
word2.stateCycle('a')

Utils.interval 3,->
	word.stateSwitch('b')
	word2.stateSwitch('b')
	word.stateCycle('a')
	word2.stateCycle('a')

# state = 1
# if state == 1
# 	Utils.delay 3,->
# 		word.stateSwitch('b')
# 		word2.stateSwitch('b')
# 		word.stateCycle('a')
# 		word2.stateCycle('a')
# 		Utils.delay 1,->
# 			state = 0
# else 
# 	Utils.delay 3,->
# 		word.stateSwitch('b')
# 		word2.stateSwitch('b')
# 		word.stateCycle('a')
# 		word2.stateCycle('a')
# 		Utils.delay 1,->
# 			state = 1


		

