(function(scope) {var home = new Layer({"name":"home","backgroundColor":"hsl(0, 0%, 0%)","width":375,"height":812,"constraintValues":{"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var swipe = new Layer({"parent":home,"name":"swipe","backgroundColor":null,"width":402,"height":584,"constraintValues":{"height":584,"centerAnchorX":0.53600000000000003,"width":402,"bottom":108,"right":-27,"top":120,"centerAnchorY":0.5073891625615764},"blending":"normal","clip":false,"borderStyle":"solid","y":120});var pic = new Layer({"parent":swipe,"name":"pic","backgroundColor":"rgba(0, 170, 255, 0.5)","width":375,"height":584,"constraintValues":{"height":584,"centerAnchorX":0.46641791044776121,"width":375,"bottom":0,"right":27,"centerAnchorY":0.5},"blending":"normal","clip":false,"borderStyle":"solid"});var notice = new TextLayer({"parent":swipe,"name":"notice","backgroundColor":null,"width":17,"x":385,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":8,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif"}}],"text":"左滑查看更多图片"}]},"height":155,"constraintValues":{"left":null,"height":155,"centerAnchorX":0.97885572139303478,"width":17,"right":0,"top":208,"centerAnchorY":0.48886986301369861},"blending":"normal","autoSize":false,"y":208});var release = new TextLayer({"parent":swipe,"name":"release","backgroundColor":null,"width":17,"x":385,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":8,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif"}}],"text":"释放查看更多图片"}]},"height":155,"constraintValues":{"left":null,"height":155,"centerAnchorX":0.97885572139303478,"width":17,"right":0,"top":208,"centerAnchorY":0.48886986301369861},"blending":"normal","opacity":0,"autoSize":false,"y":208});var sec = new Layer({"name":"sec","backgroundColor":"hsl(0, 0%, 0%)","width":375,"x":475,"height":812,"constraintValues":{"left":475,"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var pic_1 = new Layer({"parent":sec,"name":"pic","backgroundColor":"rgba(0, 170, 255, 0.5)","width":375,"height":584,"constraintValues":{"height":584,"centerAnchorX":0.5,"width":375,"bottom":108,"right":0,"top":120,"centerAnchorY":0.5073891625615764},"blending":"normal","clip":false,"borderStyle":"solid","y":120});var notice_1 = new TextLayer({"parent":pic_1,"name":"notice","backgroundColor":null,"width":17,"x":385,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":8,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif"}}],"text":"左滑查看更多图片"}]},"height":155,"constraintValues":{"left":null,"height":155,"centerAnchorX":1.0493333333333332,"width":17,"right":-27,"top":208,"centerAnchorY":0.48886986301369861},"blending":"normal","autoSize":false,"y":208});var release_1 = new TextLayer({"parent":pic_1,"name":"release","backgroundColor":null,"width":17,"x":385,"styledText":{"blocks":[{"inlineStyles":[{"startIndex":0,"endIndex":8,"css":{"fontSize":"16px","WebkitTextFillColor":"hsl(0, 0%, 100%)","letterSpacing":"0px","fontWeight":400,"lineHeight":"1.2","tabSize":4,"fontFamily":"\"HelveticaNeue\", \"Helvetica Neue\", sans-serif"}}],"text":"释放查看更多图片"}]},"height":155,"constraintValues":{"left":null,"height":155,"centerAnchorX":1.0493333333333332,"width":17,"right":-27,"top":208,"centerAnchorY":0.48886986301369861},"blending":"normal","opacity":0,"autoSize":false,"y":208});if(release_1 !== undefined){release_1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|release_1","targetName":"release_1","vekterClass":"TextNode","text":"释放查看更多图片"}};if(notice !== undefined){notice.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|notice","targetName":"notice","vekterClass":"TextNode","text":"左滑查看更多图片"}};if(sec !== undefined){sec.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|sec","targetName":"sec","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(pic_1 !== undefined){pic_1.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|pic_1","targetName":"pic_1","vekterClass":"FrameNode"}};if(pic !== undefined){pic.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|pic","targetName":"pic","vekterClass":"FrameNode"}};if(swipe !== undefined){swipe.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|swipe","targetName":"swipe","vekterClass":"FrameNode"}};if(home !== undefined){home.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|home","targetName":"home","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(release !== undefined){release.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|release","targetName":"release","vekterClass":"TextNode","text":"释放查看更多图片"}};if(notice_1 !== undefined){notice_1.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|notice_1","targetName":"notice_1","vekterClass":"TextNode","text":"左滑查看更多图片"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {home, swipe, pic, notice, release, sec, pic_1, notice_1, release_1});scope["__vekterVariables"] = ["home", "swipe", "pic", "notice", "release", "sec", "pic_1", "notice_1", "release_1"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);