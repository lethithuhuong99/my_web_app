window.onload = function(){
  var tds = document.getElementsByTagName('td');
  var highlighteds = document.getElementsByClassName('highlighted');
  var myTd = document.getElementById('my-td');

  for (var i=0; i < tds.length; i++){
    tds[i].addEventListener('click',function(event){
      event.preventDefault();

      var highlighteds = document.getElementsByClassName('highlighted');
      for (var i=highlighteds.length-1; i>=0;i--){
        highlighteds[i].classList.remove('highlighted')
      }

      this.classList.add("highlighted")
    });
  }

//create mouseover
  var trs = document.getElementsByTagName('tr');
  var highlighteds = document.getElementsByClassName('highlight');
  for (var i=0; i < trs.length; i++){
    trs[i].addEventListener('mouseover',function(event){
      event.preventDefault();

      var highlighteds = document.getElementsByClassName('highlight');
      for (var i=highlighteds.length-1; i>=0;i--){
        highlighteds[i].classList.remove('highlight');
      }

      this.classList.add("highlight");
    });
  }

  for (var i=0; i < trs.length; i++){
    trs[i].addEventListener('mouseout',function(event){
      event.preventDefault();
        highlighteds[i].classList.remove('highlight');
    });
  }

}
