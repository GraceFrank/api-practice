$(document).ready(function(){

    function findNumber(input){
        $.ajax({
            type:'GET',
            url:'https://jsonplaceholder.typicode.com/todos',
            success:function(data){
                alert("success");
                
                for(let i =0; i<data.length; i++){
                    if(data[i].id == input){console.log(data[i])}
    
                    }//end of for loop
                },
            error:function(){
                console.log("error getting details");
            }
            });
        }//end of findNumber

function findText(input){
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
}
        
    $('#submitButton').on('click', function(){
      var input =$('#wordInput').val();
        findText(input);
        
        });

     $('#submitButton2').on('click', function(){
        var input =$('#NumberInput').val();
              findNumber(input);
              
            });

});