$(document).ready(function (){
// $("#selectPlayer")

// HIDE FIGHTERS



// ARENA


    $("#beach").hover(function()  {
            $(".container").css("background-image", "url('img/beach.jpg')");
            console.log("hover");
    });
    
    $("#dojo").hover(function()  {
        $(".container").css("background-image", "url('img/dojo.jpg')");
        console.log("hover");
    });

    $("#snow").hover(function()  {
        $(".container").css("background-image", "url('img/snow.jpg')");
        console.log("hover");
    });

    $("#forest").hover(function()  {
        $(".container").css("background-image", "url('img/forest.jpg')");
        console.log("hover");
    });

    $("#earth").hover(function()  {
        $(".container").css("background-image", "url('img/earth.jpg')");
        console.log("hover");
    });

    $("#matrix").hover(function()  {
        $(".container").css("background-image", "url('img/matrix.jpg')");
        console.log("hover");
    });




    $("button").click(function (){
        $(".selectPlayer").show();
        $(".selectArena").hide();
        console.log("select player func");
    });

// PLAYERS

    var flag = false;

    $("#mikey").hover(function(){
        $("#mikeyP").attr("src", "img/mikey.png");        
        console.log("Hover Player");
        flag = false;
    }, function(){
        if(flag == false){
            $("#mikeyP").attr("src", "");       
            console.log("unhover");
        }
    });

    

    $("#mikey").click(function(){
        $("#mikeyP").attr("src", "img/mikey.png");
        // $("#mikeyP").css("display", "inline-block");
        flag = true;
        console.log("CLICK!")
    });


//------------------------------------------------- 

    var flag = false;

    $("#leo").hover(function(){
        $("#leoP").attr("src", "img/leo.png");        
        console.log("Hover Player");
        flag = false;
    }, function(){
        if(flag == false){
            $("#leoP").attr("src", "");       
            console.log("unhover");
        }
    });

    

    $("#leo").click(function(){
        $("#leoP").attr("src", "img/leo.png");
        // $("#mikeyP").css("display", "inline-block");
        flag = true;
        console.log("CLICK!")
    });


//------------------------------------------------- 

    var flag = false;

        $("#raphael").hover(function(){
            $("#raphaelP").attr("src", "img/raphael.png");        
            console.log("Hover Player");
            flag = false;
        }, function(){
            if(flag == false){
                $("#raphaelP").attr("src", "");       
                console.log("unhover");
            }
        });

        

        $("#raphael").click(function(){
            $("#raphaelP").attr("src", "img/raphael.png");
            // $("#mikeyP").css("display", "inline-block");
            flag = true;
            console.log("CLICK!")
        });


//------------------------------------------------- 

    var flag = false;

        $("#donny").hover(function(){
            $("#donnyP").attr("src", "img/donny.png");        
            console.log("Hover Player");
            flag = false;
        }, function(){
            if(flag == false){
                $("#donnyP").attr("src", "");       
                console.log("unhover");
            }
        });

        

        $("#donny").click(function(){
            $("#donnyP").attr("src", "img/donny.png");
            // $("#mikeyP").css("display", "inline-block");
            flag = true;
            console.log("CLICK!")
        });



//------------------------------------------------- WIP Features

    // $(".playerBtn").hover(function(){
    //     $("#mik").css("background-color", "url('img/mikey.png");
    //     console.log("Hover Player");
    // }, function(){
    //     $("#mik").css("background-color", "none");
    //     console.log("unhover");
    // });


    // $(“.playerBtn”).hover(function(){
    //     $(“#mikey”).css(“background-image”, “url('img/mikey.jpg’)“)
    //     console.log(“hover”);
    // }, function(){
    //     $(“#mikey”).css(“background-image”, “url(‘’)“);
    //     console.log(“unhover”);
    // });





});