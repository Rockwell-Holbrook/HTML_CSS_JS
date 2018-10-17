$(document).ready(function() {
    
    $("#sortButton").click(function(e){
        console.log("Sort Button Was Clicked!")
        e.preventDefault();
        
        var name = $("#myName").val();
        
        var url = "https://www.potterapi.com/v1/sortingHat";
        
        $.ajax({
            url : url,
            dataType : "json",
                success : function(parsed_json) {
                    console.log(parsed_json);
                    
                    $("#sortValue").text("hmmmm.. interesting.. " + name + ".. your house is.. " + parsed_json + "!!!");
                }
        });
    });
});