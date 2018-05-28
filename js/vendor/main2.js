$(document).ready(function ($) {

    controller = new ScrollMagic();

//關於我們(P文字)
    // build tween
    var animate1 = new TimelineMax()
        .add([
            TweenMax.from(".effect01", 1.5, {
            autoAlpha: 0, x:30,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect02", 1.5, {
            autoAlpha: 0, x:30,delay:0.25,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect03", 1.5, {
            autoAlpha: 0, x:30,delay:0.5,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene1 = new ScrollScene({
            triggerElement: ".effect01",
           triggerHook: .9,
            reverse: true
        })
        .setTween(animate1)
        .addTo(controller);
    
    
//關於我們(圖)
    // build tween
    var animate2 = new TimelineMax()
        .add([
            //圖片
            TweenMax.from(".effect_7_01", 1, {
            autoAlpha: 0,delay:.5,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_02", 1.2, {
            autoAlpha: 0,delay:1.2,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_03", 1, {
            autoAlpha: 0,delay:1.8,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_04", 1, {
            autoAlpha: 0,delay:1.5,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_05", 1, {
            autoAlpha: 0,delay:.8,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_06", 1, {
            autoAlpha: 0,delay:2.2,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_07", 1, {
            autoAlpha: 0,delay:2.6,ease:Power3.easeInOut
            }),
            //文字
            TweenMax.from(".effect_7_p_left", 1.8, {
            autoAlpha: 0,x:-50,delay:2.6,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_p_right", 1.8, {
            autoAlpha: 0,x:50,delay:2.6,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_span_left", 1.8, {
            autoAlpha: 0,x:-50,delay:2.6,ease:Power3.easeInOut
            }),
            TweenMax.from(".effect_7_span_right", 1.8, {
            autoAlpha: 0,x:50,delay:2.6,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene2 = new ScrollScene({
            triggerElement: ".effect_7_01",
            triggerHook: 1,
            reverse: true
        })
        .setTween(animate2)
        .addTo(controller);


//關於我們(P文字)
    // build tween
    var animate3 = new TimelineMax()
        .add([
            //斜斜文字            
            TweenMax.from(".effect04", 1.8, {
            autoAlpha: 0,x:0,delay:0,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene3 = new ScrollScene({
            triggerElement: ".effect04",
            triggerHook: 1,
            reverse: true
        })
        .setTween(animate3)
        .addTo(controller);
    

//聯絡我們兩張卡片
    // build tween
    var animate3 = new TimelineMax()
        .add([
            //斜斜文字            
            TweenMax.from(".contact_card1", 1.8, {
            autoAlpha: 0,x:-30,delay:0,ease:Power3.easeInOut
            }),
            TweenMax.from(".contact_card2", 1.8, {
            autoAlpha: 0,x:30,delay:0,ease:Power3.easeInOut
            })
    ]);

    // build scene
    var scene3 = new ScrollScene({
            triggerElement: ".contact_card1",
            triggerHook: .8,
            reverse: true
        })
        .setTween(animate3)
        .addTo(controller);
    


//結尾
});