$(document).ready(function() {
    
    $("#characterButton").click(function(e){
    e.preventDefault();
    $(".characterP").html("");
      
    var initial = $("#characterNameField").val();
    console.log(initial);
    var initialArray = initial.split(" ");
    var value = "";
    
    var i;
    for (i = 0; i < initialArray.length; i++) {
        var foo = initialArray[i];
        foo = foo.charAt(0).toUpperCase() + foo.slice(1)
        
        if(i == 0 && initialArray.length == 2) {
            foo += "%20"
        }
        
        value += foo;
    }
    
    var myurl = "character/" + value;
    
    console.log(value);
    console.log(myurl);
    
    $.ajax({
            url : myurl,
            dataType : "json",
                success : function(parsed_json) {
                    console.log(parsed_json);
                    
                    if(parsed_json['length'] == 0) {
                         $("#errorMessage").html("<i>It appears that search wasn't found.. Make sure to include the character's full name. IE 'Harry Potter' rather then just 'Harry'. " + "\n" + "If you need help finding a name take a look at this URL: " + "\n" + "https://en.wikipedia.org/wiki/List_of_Harry_Potter_characters</i>");
                    }
                    
                    else {
                    
                        $("#name").html("<strong> Name: </strong> " + parsed_json[0]['name']);
                        
                        if(parsed_json[0]['school'] !== undefined) {
                            $("#school").html("<strong> School: </strong> " + parsed_json[0]['school']);
                        }
                        
                        if(parsed_json[0]['house'] !== undefined) {
                            $("#house").html("<strong> House: </strong> " + parsed_json[0]['house']);
                        }
                        
                        if(parsed_json[0]['bloodStatus'] !== undefined) {
                           $("#bloodStatus").html("<strong> Blood Status: </strong> " + parsed_json[0]['bloodStatus']);
                        }
                        
                        $("#species").html("<strong> Species: </strong> " + parsed_json[0]['species']);
                    }
                },
                
          });
      
     });
});
