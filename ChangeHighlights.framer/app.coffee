Framer.Defaults.Animation =
	curve: Spring(damping: 1)
	time: .6

Notice.states.add
	Notice:
		y: 50
Utils.delay 1,->
	Notice.stateCycle('Notice')
	Utils.delay 3,->
		Notice.stateCycle('default')
state = 0
round = 0
Click.onClick ->
	if state == 0
		round += 360
		refresh.animate
			rotationZ: round
			options: 
				time: 1
		state = 1
	else if state == 1
		round += 360 
		refresh.animate
			rotationZ: round
			options: 
				time: .6
				repeat: 4
				curve: Bezier.linear
		state = 0