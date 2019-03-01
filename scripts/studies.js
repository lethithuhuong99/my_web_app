window.onload = function(){
  //alert ("Hello!");
  var tds = document.getElementsByTagName('td');
  var highlighteds = document.getElementsByClassName('highlighted');
  var myTd = document.getElementById('my-td');


  for (var i=0; i < tds.length; i++){
    //tds[i].addEventListener('click',myFunction);
    //tds[i].addEventListener('mouseover',myFunction);
    //tds[i].addEventListener('scroll',myFunction);
    tds[i].addEventListener('click',function(event){
      event.preventDefault();
      
      var highlighteds = document.getElementsByClassName('highlighted');
      for (var i=highlighteds.length-1; i>=0;i--){
        highlighteds[i].classList.remove('highlighted')
      }

      this.classList.add("highlighted")
    });
  }

  // function myFunction(event){
  //   //console.log('TD');
  //   this.classList.add('highlighted');
  //   console.log(event);
  // }
}
