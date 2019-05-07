(function(scope) {var screenA = new Layer({"name":"screenA","backgroundColor":"rgba(255,255,255,1)","width":375,"height":812,"constraintValues":{"height":812,"heightFactor":1,"width":375,"widthFactor":1},"blending":"normal","clip":true,"borderStyle":"solid"});var bg = new Layer({"parent":screenA,"name":"bg","backgroundColor":null,"width":375,"height":295,"constraintValues":{"height":295,"centerAnchorX":0.5,"width":375,"bottom":429,"right":0,"top":88,"centerAnchorY":0.29002463054187194},"blending":"normal","clip":false,"borderStyle":"solid","y":88});var text = new TextLayer({"parent":bg,"name":"text","backgroundColor":null,"width":97,"x":12,"styledText":{"blocks":[{"inlineStyles":[{"css":{"fontSize":"16px","WebkitTextFillColor":"hsla(0, 0%, 0%, 0.2)","whiteSpace":"pre","fontWeight":400,"letterSpacing":"0px","tabSize":4,"fontFamily":"\"SFUIText-Regular\", sans-serif","lineHeight":"1.2"},"startIndex":0,"endIndex":6}],"text":"分享新鲜事…"}],"alignment":"left"},"height":19,"constraintValues":{"left":12,"height":19,"centerAnchorX":0.15733333333333333,"width":97,"top":15,"centerAnchorY":0.04076539101497504},"blending":"normal","autoSize":true,"y":15});var emotion = new Layer({"parent":screenA,"name":"emotion","shadows":[{"spread":0,"x":0,"type":"inset","y":0.5,"blur":0,"color":"hsla(0, 0%, 0%, 0.1)"}],"backgroundColor":"rgba(246, 246, 246, 1.00)","width":375,"height":216,"constraintValues":{"height":216,"centerAnchorX":0.5,"width":375,"bottom":34,"right":0,"top":null,"centerAnchorY":0.82512315270935965},"blending":"normal","clip":true,"borderStyle":"solid","y":562});var emotionTab = new Layer({"parent":emotion,"name":"emotionTab","backgroundColor":"rgb(255, 255, 255)","width":375,"height":37,"constraintValues":{"height":37,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.91435185185185186},"blending":"normal","clip":false,"borderStyle":"solid","y":179});var __layer_0__ = new Layer({"parent":emotionTab,"backgroundSize":"fill","backgroundColor":null,"width":99,"height":37,"constraintValues":{"aspectRatioLocked":true,"height":37,"centerAnchorX":0.13200000000000001,"width":99,"top":null,"centerAnchorY":0.5},"blending":"normal","image":"images\/design\/pZttmFYTPj41TKmNAoalzg8PznzmBaWcpKlPyQTw9OlqfnZSeTgMPdE5LXTwCoDkWk6nLEYJ8RFxkFw8CJQ.png","clip":true,"borderStyle":"solid"});var selectors = new Layer({"parent":emotion,"name":"selectors","backgroundSize":"fill","backgroundColor":null,"width":104,"x":135,"height":6,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":6,"centerAnchorX":0.49866666666666665,"width":104,"bottom":49,"top":null,"centerAnchorY":0.7592592592592593},"blending":"normal","image":"images\/design\/blvgZzyP3ZwozlbczlYp1w5WZdUdX9RvCZdL5f04HshCRHUErYWltTk6lyNgrRw2nf8zMgRTKQSfItPDCU7w.png","clip":true,"borderStyle":"solid","visible":false,"y":161});var SendButton = new Layer({"parent":screenA,"name":"SendButton","backgroundSize":"fill","backgroundColor":null,"width":48,"x":318,"height":32,"constraintValues":{"left":null,"aspectRatioLocked":true,"height":32,"centerAnchorX":0.91200000000000003,"width":48,"right":9,"top":50,"centerAnchorY":0.09895052473763119},"blending":"normal","image":"images\/design\/9MAhqnPYoahk3SitBcH7cBqELIDh9JroM23GAQTVe7e6IqOKZEeJ1aYGoLcsEBfQXeJyX0GgTzQ7kPhJe1Q.png","clip":true,"borderStyle":"solid","y":50});var iPhoneXStatuBar = new Layer({"parent":screenA,"name":"iPhoneXStatuBar","backgroundSize":"fill","backgroundColor":null,"width":375,"height":88,"constraintValues":{"height":88,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.065967016491754127,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/j4d8DzmhUWU6db8Mn1WSdZNOqbSvvTHPiDPKqZOn4JIdV5Log860ubTWbfM18rdyrLE41yVutAY6jiONdFlYw.png","clip":true,"borderStyle":"solid"});var __layer_1__ = new Layer({"parent":screenA,"name":"Bottom","backgroundSize":"fill","backgroundColor":null,"width":375,"height":34,"constraintValues":{"aspectRatioLocked":true,"height":34,"centerAnchorX":0.5,"width":375,"bottom":0,"right":0,"top":null,"centerAnchorY":0.97906403940886699},"blending":"normal","image":"images\/design\/0DsyaLJuTAhqWFoVrZ9y7hZ5JQ2V88qx1aMmamxxv95iyst7LFKqkUs1qQkvrCzLWZiFKEKMNaHJxHQ3Q.png","clip":false,"borderStyle":"solid","y":778});var __layer_2__ = new Layer({"parent":screenA,"name":"Toolbar","backgroundSize":"fill","backgroundColor":null,"width":375,"height":47,"constraintValues":{"aspectRatioLocked":true,"height":47,"centerAnchorX":0.5,"width":375,"bottom":249,"right":0,"top":null,"centerAnchorY":0.66440886699507384},"blending":"normal","image":"images\/design\/Tex5ZW45dvlquqvsdkUgHPXNBb7XDEAG2K2TD7EiNhm01Py6TqZAabEGfQpIfRcDgI6JMdD0YTY0LJPvlw.png","clip":false,"borderStyle":"solid","y":516});var __layer_3__ = new Layer({"parent":screenA,"name":"Place","backgroundSize":"fill","backgroundColor":null,"width":375,"height":47,"constraintValues":{"aspectRatioLocked":true,"height":47,"centerAnchorX":0.5,"width":375,"bottom":296,"right":0,"top":null,"centerAnchorY":0.60652709359605916},"blending":"normal","image":"images\/design\/pxgQGTUISxmtE4uJrhQgEazPB61mKetSVCSYKHTnU6T5Rv2t4iadGa48Q2pei2ye3mPpLppSMAg8SJ6lThrA.png","clip":false,"borderStyle":"solid","y":469});var Em = new Layer({"name":"Em","backgroundColor":"rgba(255,255,255,1)","width":375,"x":385,"height":179,"constraintValues":null,"blending":"normal","clip":true,"borderStyle":"solid","y":562});var $8 = new Layer({"parent":Em,"name":"8","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/EEvXXRiTfe3WB95AYPt3IkhVoiHVyQc7xoGlztA4gaZ5JRKjD9X5PZCqQm7AUGglRjWXiRmWbMwPHYqXIrg.png","clip":false,"borderStyle":"solid"});var $7 = new Layer({"parent":Em,"name":"7","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/Mfd0RUoxfmA68lBKGBHD54j1Dp9KySwRMP5jTjod0xU9lKlaImAYPMERSClrP2F1Jf46wEIQdfM8tw06NwB9w.png","clip":false,"borderStyle":"solid"});var $6 = new Layer({"parent":Em,"name":"6","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/i94fvItpt0Eh5FqNX0IiixzjMXgdBp3sYg7wZsDm06fz0ZiUSbQCeGxFnFQZrDEfFuZXd6FdzDhTD4uzSeKQ.png","clip":false,"borderStyle":"solid"});var $5 = new Layer({"parent":Em,"name":"5","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/dw5eGIJ6GK0bQTNeyd2c4bukuqnI1a1T34X7jC8QN5GtOVU6btJhhCI3CGoAEofwLbKqtEIv9fJ6hhniFsw.png","clip":false,"borderStyle":"solid"});var $4 = new Layer({"parent":Em,"name":"4","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/KFwL9yeyEfm9ITdeOTaVcTowaMLkClY1OUuJgc25NwhU7VqdJx0idQHzJYPlYYXj2nCtY4YFQza0XNlB058Q.png","clip":false,"borderStyle":"solid"});var $3 = new Layer({"parent":Em,"name":"3","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/5vaPnsU9nH5NRr0OfMnH2dsJzxwjpllaAPQSQvWFMJ4xXdCoPgTeHhEhRYPhZQoxL70YEensCVCEsIMk8SdVA.png","clip":false,"borderStyle":"solid"});var $2 = new Layer({"parent":Em,"name":"2","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/Vdq4A9fSCqiLiXOxCvdmZwlGvxodKnNlcs2MJp0D7dY7C0A7IfVDUCg0fActOFhPSgwKDC65diQKXBbeiJepQ.png","clip":false,"borderStyle":"solid"});var $1 = new Layer({"parent":Em,"name":"1","backgroundSize":"fill","backgroundColor":null,"width":375,"height":179,"constraintValues":{"height":179,"centerAnchorX":0.5,"width":375,"right":0,"centerAnchorY":0.5,"aspectRatioLocked":true},"blending":"normal","image":"images\/design\/CKwgnfGIlrAbn9jkDqizjuBhykpX0aIhrVVDQ5bMvFdrHuFBvoy9tmfPhcCBmH8Y7fAjMv4nxLmw7gUJ4A.png","clip":false,"borderStyle":"solid"});var hold = new Layer({"parent":Em,"name":"hold","backgroundColor":null,"width":375,"height":22,"constraintValues":{"height":22,"centerAnchorX":0.5,"width":375,"bottom":4,"right":0,"top":null,"centerAnchorY":0.91620111731843579},"blending":"normal","clip":false,"borderStyle":"solid","y":153});var dotBG = new Layer({"parent":hold,"name":"dotBG","backgroundColor":"rgba(0, 0, 0, 0.05)","width":138,"x":119,"height":18,"constraintValues":{"left":null,"height":18,"centerAnchorX":0.5013333333333333,"width":138,"bottom":2,"top":2,"centerAnchorY":0.5},"blending":"normal","borderRadius":10,"clip":false,"borderStyle":"solid","y":2});var dots = new Layer({"parent":Em,"name":"dots","backgroundColor":null,"width":118,"x":129,"height":6,"constraintValues":{"left":null,"height":6,"centerAnchorX":0.5013333333333333,"width":118,"bottom":12,"top":null,"centerAnchorY":0.91620111731843579},"blending":"normal","clip":false,"borderStyle":"solid","y":161});var __layer_4__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(255, 130, 22, 1.00)","width":6,"strokeWidth":1,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(255, 130, 22, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_qWo32MrtR\" fill=\"rgba(255, 130, 22, 1.00)\" name=\"dot1\"><\/path><\/svg>"});var dot1;if(__layer_4__.elements !== undefined){dot1 = __layer_4__.elements["id_qWo32MrtR"];
};var __layer_5__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":80,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_TZBE5kfxW\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot6\"><\/path><\/svg>"});var dot6;if(__layer_5__.elements !== undefined){dot6 = __layer_5__.elements["id_TZBE5kfxW"];
};var __layer_6__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":64,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_vzTJAQjLn\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot5\"><\/path><\/svg>"});var dot5;if(__layer_6__.elements !== undefined){dot5 = __layer_6__.elements["id_vzTJAQjLn"];
};var __layer_7__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":48,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_f4AisJzrR\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot4\"><\/path><\/svg>"});var dot4;if(__layer_7__.elements !== undefined){dot4 = __layer_7__.elements["id_f4AisJzrR"];
};var __layer_8__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":32,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_TLVUGQn4w\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot3\"><\/path><\/svg>"});var dot3;if(__layer_8__.elements !== undefined){dot3 = __layer_8__.elements["id_TLVUGQn4w"];
};var __layer_9__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":16,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_v0Bhbim4n\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot2\"><\/path><\/svg>"});var dot2;if(__layer_9__.elements !== undefined){dot2 = __layer_9__.elements["id_v0Bhbim4n"];
};var __layer_10__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":96,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_tnAuP_2Yz\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot7\"><\/path><\/svg>"});var dot7;if(__layer_10__.elements !== undefined){dot7 = __layer_10__.elements["id_tnAuP_2Yz"];
};var __layer_11__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(205, 205, 205, 1.00)","width":6,"strokeWidth":1,"x":112,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(205, 205, 205, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_xC6XlpNkL\" fill=\"rgba(205, 205, 205, 1.00)\" name=\"dot8\"><\/path><\/svg>"});var dot8;if(__layer_11__.elements !== undefined){dot8 = __layer_11__.elements["id_xC6XlpNkL"];
};var __layer_12__ = new SVGLayer({"parent":dots,"name":".SVGLayer","backgroundColor":"rgba(255, 130, 22, 1.00)","width":6,"strokeWidth":1,"htmlIntrinsicSize":{"height":6,"width":6},"rotation":null,"height":6,"fill":"rgba(255, 130, 22, 1.00)","opacity":null,"svg":"<svg xmlns=\"http:\/\/www.w3.org\/2000\/svg\" width=\"6\" height=\"6\"><path d=\"M 3 0 C 4.657 0 6 1.343 6 3 C 6 4.657 4.657 6 3 6 C 1.343 6 0 4.657 0 3 C 0 1.343 1.343 0 3 0 Z\" id=\"id_QPLkVMbme\" fill=\"rgba(255, 130, 22, 1.00)\" name=\"dot0\"><\/path><\/svg>"});var dot0;if(__layer_12__.elements !== undefined){dot0 = __layer_12__.elements["id_QPLkVMbme"];
};if(hold !== undefined){hold.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|hold","targetName":"hold","vekterClass":"FrameNode"}};if(screenA !== undefined){screenA.__framerInstanceInfo = {"deviceName":"Apple iPhone X","framerClass":"Layer","hash":"#vekter|screenA","targetName":"screenA","vekterClass":"FrameNode","deviceType":"apple-iphone-x-space-gray"}};if(__layer_9__ !== undefined){__layer_9__.__framerInstanceInfo = {"hash":"#vekter|__layer_9__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(dot3 !== undefined){dot3.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot3","targetName":"dot3","vekterClass":"OvalShapeNode"}};if(dot7 !== undefined){dot7.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot7","targetName":"dot7","vekterClass":"OvalShapeNode"}};if(__layer_10__ !== undefined){__layer_10__.__framerInstanceInfo = {"hash":"#vekter|__layer_10__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if($6 !== undefined){$6.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$6","targetName":"$6","vekterClass":"FrameNode"}};if(__layer_0__ !== undefined){__layer_0__.__framerInstanceInfo = {"hash":"#vekter|__layer_0__","vekterClass":"FrameNode","framerClass":"Layer"}};if($4 !== undefined){$4.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$4","targetName":"$4","vekterClass":"FrameNode"}};if($3 !== undefined){$3.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$3","targetName":"$3","vekterClass":"FrameNode"}};if($7 !== undefined){$7.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$7","targetName":"$7","vekterClass":"FrameNode"}};if(dots !== undefined){dots.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|dots","targetName":"dots","vekterClass":"FrameNode"}};if(dot5 !== undefined){dot5.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot5","targetName":"dot5","vekterClass":"OvalShapeNode"}};if(dot8 !== undefined){dot8.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot8","targetName":"dot8","vekterClass":"OvalShapeNode"}};if(__layer_12__ !== undefined){__layer_12__.__framerInstanceInfo = {"hash":"#vekter|__layer_12__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(emotionTab !== undefined){emotionTab.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|emotionTab","targetName":"emotionTab","vekterClass":"FrameNode"}};if(text !== undefined){text.__framerInstanceInfo = {"framerClass":"TextLayer","hash":"#vekter|text","targetName":"text","vekterClass":"TextNode","text":"分享新鲜事…"}};if($8 !== undefined){$8.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$8","targetName":"$8","vekterClass":"FrameNode"}};if(__layer_4__ !== undefined){__layer_4__.__framerInstanceInfo = {"hash":"#vekter|__layer_4__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(dot4 !== undefined){dot4.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot4","targetName":"dot4","vekterClass":"OvalShapeNode"}};if(dot0 !== undefined){dot0.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot0","targetName":"dot0","vekterClass":"OvalShapeNode"}};if(iPhoneXStatuBar !== undefined){iPhoneXStatuBar.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|iPhoneXStatuBar","targetName":"iPhoneXStatuBar","vekterClass":"FrameNode"}};if($2 !== undefined){$2.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$2","targetName":"$2","vekterClass":"FrameNode"}};if($1 !== undefined){$1.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$1","targetName":"$1","vekterClass":"FrameNode"}};if(__layer_7__ !== undefined){__layer_7__.__framerInstanceInfo = {"hash":"#vekter|__layer_7__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(emotion !== undefined){emotion.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|emotion","targetName":"emotion","vekterClass":"FrameNode"}};if(__layer_2__ !== undefined){__layer_2__.__framerInstanceInfo = {"hash":"#vekter|__layer_2__","vekterClass":"FrameNode","framerClass":"Layer"}};if($5 !== undefined){$5.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|$5","targetName":"$5","vekterClass":"FrameNode"}};if(__layer_8__ !== undefined){__layer_8__.__framerInstanceInfo = {"hash":"#vekter|__layer_8__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(selectors !== undefined){selectors.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|selectors","targetName":"selectors","vekterClass":"FrameNode"}};if(__layer_11__ !== undefined){__layer_11__.__framerInstanceInfo = {"hash":"#vekter|__layer_11__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(dot2 !== undefined){dot2.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot2","targetName":"dot2","vekterClass":"OvalShapeNode"}};if(dot1 !== undefined){dot1.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot1","targetName":"dot1","vekterClass":"OvalShapeNode"}};if(SendButton !== undefined){SendButton.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|SendButton","targetName":"SendButton","vekterClass":"FrameNode"}};if(bg !== undefined){bg.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|bg","targetName":"bg","vekterClass":"FrameNode"}};if(__layer_1__ !== undefined){__layer_1__.__framerInstanceInfo = {"hash":"#vekter|__layer_1__","vekterClass":"FrameNode","framerClass":"Layer"}};if(Em !== undefined){Em.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|Em","targetName":"Em","vekterClass":"FrameNode"}};if(dotBG !== undefined){dotBG.__framerInstanceInfo = {"framerClass":"Layer","hash":"#vekter|dotBG","targetName":"dotBG","vekterClass":"FrameNode"}};if(__layer_6__ !== undefined){__layer_6__.__framerInstanceInfo = {"hash":"#vekter|__layer_6__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if(__layer_3__ !== undefined){__layer_3__.__framerInstanceInfo = {"hash":"#vekter|__layer_3__","vekterClass":"FrameNode","framerClass":"Layer"}};if(dot6 !== undefined){dot6.__framerInstanceInfo = {"framerClass":"SVGPath","hash":"#vekter|dot6","targetName":"dot6","vekterClass":"OvalShapeNode"}};if(__layer_5__ !== undefined){__layer_5__.__framerInstanceInfo = {"hash":"#vekter|__layer_5__","vekterClass":"OvalShapeNode","framerClass":"SVGLayer"}};if (scope["__vekterVariables"]) { scope["__vekterVariables"].map(function(variable) { delete scope[variable] } ) };Object.assign(scope, {screenA, bg, text, emotion, emotionTab, selectors, SendButton, iPhoneXStatuBar, Em, $8, $7, $6, $5, $4, $3, $2, $1, hold, dotBG, dots, dot1, dot6, dot5, dot4, dot3, dot2, dot7, dot8, dot0});scope["__vekterVariables"] = ["screenA", "bg", "text", "emotion", "emotionTab", "selectors", "SendButton", "iPhoneXStatuBar", "Em", "$8", "$7", "$6", "$5", "$4", "$3", "$2", "$1", "hold", "dotBG", "dots", "dot1", "dot6", "dot5", "dot4", "dot3", "dot2", "dot7", "dot8", "dot0"];if (typeof Framer.CurrentContext.layout === 'function') {Framer.CurrentContext.layout()};})(window);