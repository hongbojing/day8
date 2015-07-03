
//element methods can only be used with an element and NOT directy I.E. rect.click()
//1 animate()
var paper14=Raphael("code-left-14",500,400);

var rect_14_1=paper14.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
function animate_14_2(){
  rect_14_1.animate({
    "width":"250",
    "height":"150"
  },600,'easeIn');
}
function reset_14_3(){
  rect_14_1.animate({
    "width":"150",
    "height":"80"
  },600,'linear');
}

//2 attr()
var paper15=Raphael("code-left-15",400,400);

var rect_15_1=paper15.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
function changeColor_15_2(){
  rect_15_1.attr({
    "fill":"#ddd",
    "stroke":"#F2773F"
  });
}
function backColor_15_3(){
  rect_15_1.attr({
    "fill":"#17A9C6",
    "stroke":"#2A6570"
  });
}

//click()
var paper16=Raphael("code-left-16",400,400);
var rect_16_1=paper16.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":4
});
rect_16_1.click(function(){
  rect_16_1.animate({
    "transform":"r90"
  },1000,"linear");
});

var paper17=Raphael("code-left-17",400,400);
var rect_17_1=paper17.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":4
});
rect_17_1.dblclick(function(){
  rect_17_1.animate({
    "transform":"t100,0"
  },1000,"linear");
});

//mousedown()
var paper18=Raphael("code-left-18",400,400);
var text_18_1=paper18.text(20,20,"text to test mousedown ").attr({
  "fill":"#17A9C6",
  "font-size":30,
  "text-anchor":"start",
  "font-family":"century gothic"
});
text_18_1.mousedown(function(){
  text_18_1.attr({
    "fill":"#F2773F"
  });
});


//mouseup(function(){})
var paper19=Raphael("code-left-19",400,400);
var text_19_1=paper19.text(20,20,"text to test mouse up").attr({
  "fill":"#17A9C6",
  "font-size":30,
  "text-anchor":"start"
});
text_19_1.mouseup(function(){
  text_19_1.attr({
    "font-size":40
  });
});

//mousemove(function(){})
var paper20=Raphael("code-left-20",400,400);
var circle_20_1=paper20.circle(200,200,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
circle_20_1.mousemove(function(){
  circle_20_1.attr({
    "fill":"#ddd"
  });
});
circle_20_1.mouseout(function(){
  circle_20_1.attr({
    "fill":"#17A9C6"
  });
});

//mouseover()
var paper21=Raphael("code-left-21",400,400);
var rect_21_1=paper21.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":4
});

var wd=150;
rect_21_1.mouseover(function(){
  wd+=5;

  rect_21_1.attr({
    'width':wd
  });
});


//mouseover + mouseout
var paper22=Raphael("code-left-22",400,400);
var rect_22_1=paper22.rect(50,50,100,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":4
});

rect_22_1.mouseover(function(){
  rect_22_1.animate({
    transform:'s2'
  },500,'elastic');
});
rect_22_1.mouseout(function(){
  rect_22_1.animate({
    transform:'s0.5'
  },500,'bounce');
});

//clone()
var paper23=Raphael("code-left-23",400,400);
var rect_23_1=paper23.rect(50,50,160,80,10).attr({
  "fill":"#ddd",
  "stroke":"#2A6570",
  "stroke-width":2
});
var new_rect_23_1=rect_23_1.clone();
new_rect_23_1.attr({
  "fill":"#000000",
  transform:'t100,100'
});


//ele.data('key','value')
//or ele.data({'key1':'value1','key2':'value2'})
var paper24=Raphael("code-left-24",400,300);
var cir_24_1=paper24.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
//assign a value of 'Hongbo' to the 'name' key
cir_24_1.data({
  "name":"hongbo",
  "age":25,
  "address":"Gainesville"
});
cir_24_1.click(function(){ document.getElementById("span_24_1").innerHTML=this.data('name');
                         });
cir_24_1.mouseout(function(){
  document.getElementById("span_24_2").innerHTML=this.data('age');
  document.getElementById("span_24_3").innerHTML=this.data('address')
});
//var paper25=Raphael("code-left-25",400,400);

//getBBox()
var paper26=Raphael("code-left-26",400,200);
var cir_26_1=paper26.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
var obj_26_2=cir_26_1.getBBox();
cir_26_1.getBBox({
  isWithoutTransform:true
});
console.log(obj_26_2);
document.getElementById("span_26_x_1").innerHTML=obj_26_2.x;
document.getElementById("span_26_y_1").innerHTML=obj_26_2.y;
document.getElementById("span_26_x_2").innerHTML=obj_26_2.x2;
document.getElementById("span_26_y_2").innerHTML=obj_26_2.y2;
document.getElementById("span_26_width_1").innerHTML=obj_26_2.width;
document.getElementById("span_26_height_1").innerHTML=obj_26_2.height;


//getPointAtLength()
var paper27=Raphael("code-left-27",400,200);
var line_27_1=paper27.path("M10,10H200");
var line_obj_27_2=line_27_1.getPointAtLength("M10,10H200",50);
console.log(line_obj_27_2);

document.getElementById("span_27_x_1").innerHTML=line_obj_27_2.x;
document.getElementById("span_27_y_1").innerHTML=line_obj_27_2.y;
document.getElementById("span_27_alpha_1").innerHTML=line_obj_27_2.alpha;

//toFront()
var paper28=Raphael("code-left-28",400,300);
var cir_28_1=paper28.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
var rect_28_1=paper28.rect(100,100,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#ddd",
  "stroke-width":8
});

function cir_to_front_28(){
  cir_28_1.toFront();
}
function rect_to_front_28(){
  rect_28_1.toFront();
}

//toBack()
var paper29=Raphael("code-left-29",400,400);

var cir_29_1=paper29.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
var rect_29_1=paper29.rect(100,100,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#ddd",
  "stroke-width":8
});

function cir_to_back_29(){
  cir_29_1.toBack();
}
function rect_to_back_29(){
  rect_29_1.toBack();
}

//hide() & show()
var paper30=Raphael("code-left-30",400,400);
var cir_30_1=paper30.circle(100,100,80).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":8
});
function cir_30_hide(){
  cir_30_1.hide();
}
function cir_30_show(){
  cir_30_1.show();
}

//transform()
//elem.transform('string')
//elem.attr({"transform":"string"})
//elem.attr("transform","string")
var paper31=Raphael("code-left-31",400,400);
var rect_31_origin=paper31.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});
//var rect_31_transformed=paper31.rect(50,50,150,80,10).attr({
//  "fill":"#17A9C6",
//  "fill-opacity":0.3,
//  "stroke":"#2A6570",
//  "stroke-width":2
//}).transform("s1.5t100,100r90");
//or
var rect_31_transformed=paper31.rect(50,50,150,80,10).attr({
  "fill":"#17A9C6",
  "fill-opacity":0.3,
  "stroke":"#2A6570",
  "stroke-width":2,
  "transform":"s1.5t100,100r90"
});


//remove()
var paper32=Raphael("code-left-32",400,400);
var rect_32_origin=paper32.rect(10,10,100,50,10).attr({
  "fill":"#17A9C6",
  "stroke":"#2A6570",
  "stroke-width":2
});

var rect_32_removed=paper32.rect(90,90,150,80,10).attr({
  "fill":"#ddd",
  "stroke":"#2A6570",
  "stroke-width":2
});

function rect_32_remove(){
  rect_32_removed.remove();
}
