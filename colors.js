var Body = {
    bgColor : function(color){
    // document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor', color);
  },
    setColor : function(color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  }
  };

  var Link = {
    setColor : function(color){
    // var links = document.querySelectorAll('a')
    // var i = 0;
    // while(i<links.length){
    //     links[i].style.color = color;
    //     i += 1;
    $('a').css('color', color);
      }
  }

  function night_day_handler(self){
    if(self.value === 'night'){
      Body.bgColor('black');
      Body.setColor('white');
      self.value = 'day';
      
      Link.setColor('powderblue');

    } else {
      Body.bgColor('white');
      Body.setColor('black');
      self.value = 'night';

      Link.setColor('tomato');
    }
  }