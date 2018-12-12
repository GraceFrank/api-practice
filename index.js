$(document).ready(function(){

    $('#submitButton').on('click', function(){
      

        $.ajax({
            type:'GET',
            url:'https://jsonplaceholder.typicode.com/todos',
            success:function(data){
                alert("success");
                },
            error:function(){
                console.log("error getting details");
            }
            });


        });

});