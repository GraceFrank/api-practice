$(document).ready(function(){

        
    $('#submitButton').on('click', function(){
      var input =$('#wordInput').val();

        $.ajax({
            type:'GET',
            url:'https://jsonplaceholder.typicode.com/todos',
            success:function(data){
                alert("success");
                
                for(let i =0; i<data.length; i++){
                    if(data[i].title.includes(input)){
                        console.log(data[i])
                    }

                    }//end of for loop
                },
            error:function(){
                console.log("error getting details");
            }
            });


        });

});