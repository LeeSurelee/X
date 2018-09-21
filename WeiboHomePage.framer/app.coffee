Framer.Defaults.Animation =
	time: 0.3
	curve: Bezier.easeInOut


bb.states.a =
	y: 66
	

cc.states.a =
	y: 132
	

dd.states.a =
	y: 198
	

ee.states.a =
	y: 264
	
hover.opacity = 0

	
astate = true
bstate = false
cstate = false
dstate = false
estate = false

a.onClick ->
	bb.stateCycle('default')
	cc.stateCycle('default')
	dd.stateCycle('default')
	ee.stateCycle('default')
	cover.animate
		y: 64
	bstate = false
	cstate = false
	dstate = false
	estate = false

b.onClick ->
	if bstate == false
		bb.stateCycle('a')
	# 	cc.stateCycle('a')
	# 	dd.stateCycle('a')
	# 	ee.stateCycle('a')
		bstate = true
		cstate = false
		dstate = false
		estate = false
		cc.stateCycle('default')
		dd.stateCycle('default')
		ee.stateCycle('default')
		cover.animate
			y: 64
	else
		bb.stateCycle('default')

		bstate = false

c.onClick ->
	if cstate == false
		bb.stateCycle('a')
		cc.stateCycle('a')
	# 	dd.stateCycle('a')
	# 	ee.stateCycle('a')
		cstate = true
		bstate = false
		estate = false
		dstate = false
		dd.stateCycle('default')
		ee.stateCycle('default')
		cover.animate
			y: 64
	else 
		cc.stateCycle('default')
		cstate = false
		

d.onClick ->
	if dstate == false
		bb.stateCycle('a')
		cc.stateCycle('a')
		dd.stateCycle('a')
		ee.stateCycle('default')
	# 	ee.stateCycle('a')
		dstate = true
		bstate = false
		cstate = false
		estate = false
		cover.animate
			y: 64
	else
		dd.stateCycle('default')
		dstate = false

e.onClick ->
	if estate == false
		bb.stateCycle('a')
		cc.stateCycle('a')
		dd.stateCycle('a')
		ee.stateCycle('a')
		cover.animate
			y: 350
		estate = true
		bstate = false
		cstate = false
		dstate = false
	else
		ee.stateCycle('default')
		estate = false
		cover.animate
			y: 64

open = false
hover.onClick ->
	if open == false
		hover.animate
			opacity: 1
			y: 215
		open = true
	else
		hover.animate
			y: 225
			opacity: 0
		open = false
# hover.onClick ->
# 	hover.animate
# 		y: 225
# 		opacity: 0