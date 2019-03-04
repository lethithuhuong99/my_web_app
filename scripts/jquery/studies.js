// jQuery(document).ready(function(){
//     alert('Hello');
//   }
// );
// $(function(){
  //     alert('Hello');
  //   }
  // );

$(document).ready(function(){
    // alert('Hello');
    // var dts = $('td');
    // var highlighteds = $('.highlighted');
    var myTd = $('#my-td');
    $('td').on('click',function(event){
      event.preventDefault();
      $('.highlighted').removeClass("highlighted");
      $(this).addClass('highlighted');
    });
//-------------------------------------------
    $('tr').on('mouseover',function(event){
      event.preventDefault();
      $(this).addClass('highlight');
    });

    $('tr').on('mouseout', function(event) {
      event.preventDefault();
      $('.highlight').removeClass("highlight");
    });
//--------------------------------------------
    $('td').on('mouseover', function(event) {
       event.preventDefault();
       $('#my-td').html('<span>' +
            $(this).text() +
            '</span>'
      );
    });

    $('td').on('mouseout', function(event) {
       event.preventDefault();
       $('#my-td').html(null);
    });

  });
