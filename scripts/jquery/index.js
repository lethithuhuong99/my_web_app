$(window).resize(logScreenSize);


$(function(){
  logScreenSize();
});


function logScreenSize(){

  var size;

  switch (true) {

    case Modernizr.mq('(min-width: 1200px)'):
      size = 'xl';
      break;

    case Modernizr.mq('(min-width: 992px)'):
      size = 'lg';
      break;

    case Modernizr.mq('(min-width: 768px)'):
      size = 'md';
      break;

    case Modernizr.mq('(min-width: 576px)'):
      size = 'sm';
      break;

    default:
      size = 'xs';
      break;

  }


  console.log(`The size of your screen is ${size}`);

}
