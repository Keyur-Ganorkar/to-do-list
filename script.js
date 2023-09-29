$(function() {
    $('.box').draggable();
    

    $('#box1').draggable({ scroll: true,revert: "invalid" });

    $('#box2').draggable({ axis: "x" });
    $('#box3').draggable({ axis: "y" });
    $('#box4').draggable({ containment: ".container",revert:"invalid" });

    //droppable
   $('#droppable').droppable({
    accept: '#box1'
    //this will not accept another 
    ,drop: function(){
        $(this).text("when a box get altitude,drop it!")
    }
   }); 


   //sortable
   $('#sortable').sortable({connectWith:"#sortableToo",placeholder:"placeholderBox"});
   $('#sortableToo').sortable({connectWith:"#sortable"});

   //accordian
   $('#accordion').accordion({collapsible : true, heightStyle: "content"});


   //datepicker
   $('.date').datepicker({
    showOtherMonths: true //make visible dates of prev and nxt moth
    ,selectOtherMonths: true//this will make able to select prev and next moth dates 
    ,showButtonPanel: true//this will show button for today and or next
    ,changeMonth: false//allow us to change moth 
    ,changeYear:false//allow us tyo chnage year 
    ,numberOfMonths:2  //this will show 5 moth will choosing 
    ,minDate: 0//this will only allow after that day not before 
    ,maxDate:"+2w" // this will allow to give option to select from next seven not more
    
   });

   //TO-DO LIST
   $('#todoList ul').sortable({
    items:"li:not('.listTitle, .addItem')"
    ,connectWith:"ul"
    ,dropOnEmpty: true
    ,placeholder:"emptySpace"
   });

   $('input').keydown(function(e) {
    if(e.keyCode == 13) {
        var item = $(this).val();
        
        $(this).parent().parent().append('<li>' + item + '</li>');
        $(this).val('');
    }

    $('#trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});
   
});