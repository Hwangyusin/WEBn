var Links = {
  setcolor : function(color){
    // var alist = document .querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length) {
    //   alist[i].style.color = color;
    //   i++;
    // }
    $('a').css('color',color);
    //select 'a' tag
  }
}
var Body = {
  setcolor:function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color',color)
  },
  setBackgroundColor:function(color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
    if(self.value === 'night'){
      Body.setBackgroundColor('black');
      Body.setcolor('white');
      self.value = 'day'
      Links.setcolor('powderblue');
    } else {
      Body.setBackgroundColor('white');
      Body.setcolor('black');
      self.value = 'night'
      Links.setcolor('blue');
    }
  }
