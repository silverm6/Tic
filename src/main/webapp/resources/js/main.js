$(document).ready(function() {
    var board = ["","","","","","","","",""];
    var usrmove = false; 
    $("#pc").click(function(){  
        $("#aw").hide();
        if (!usrmove) {
            pcmove();
        }
        else {
            newgame();
            pcmove();
        }
    })
    $("#usr").click(function(){ 
        $("#aw").hide();
        if (!usrmove) {
            usrmove = true;
        }
        else {
            newgame();
        }
    })

    $("#a").mouseover(function(){
        if (usrmove && !gameover()) {
            $("#aa").show();
        }
    })
    .click(function() {
        if (board[0] == "" && usrmove && !gameover()) {
            board[0] = "X";
            $("#aa").css("opacity",1);
            $("#aa").show();
            if (!gameover()) {
                pcmove();
            }
        }
        
    })
    .mouseout(function() {
        if ($("#aa").css("opacity") != 1) {
            $("#aa").hide();
        }
    })
    $("#b").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#bb").show();
        }
    })
    .click(function() {
        if (board[1] == "" && usrmove && !gameover()) {
            board[1] = "X";
            $("#bb").css("opacity",1);
            $("#bb").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#bb").css("opacity") != 1) {
            $("#bb").hide();
        }
    })
    $("#c").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#cc").show();
        }
    })
    .click(function() {
        if (board[2] == "" && usrmove && !gameover()) {
            board[2] = "X";
            $("#cc").css("opacity",1);
            $("#cc").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#cc").css("opacity") != 1) {
            $("#cc").hide();
        }
    })
    $("#d").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#dd").show();
        }
    })
    .click(function() {
        if (board[3] == "" && usrmove && !gameover()) {
            board[3] = "X";
            $("#dd").css("opacity",1);
            $("#dd").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#dd").css("opacity") != 1) {
            $("#dd").hide();
        }
    })
    $("#e").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#ee").show();
        }
    })
    .click(function() {
        if (board[4] == "" && usrmove && !gameover()) {
            board[4] = "X";
            $("#ee").css("opacity",1);
            $("#ee").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#ee").css("opacity") != 1) {
            $("#ee").hide();
        }
    })
    $("#f").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#ff").show();
        }
    })
    .click(function() {
        if (board[5] == "" && usrmove && !gameover()) {
            board[5] = "X";
            $("#ff").css("opacity",1);
            $("#ff").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#ff").css("opacity") != 1) {
            $("#ff").hide();
        }
    })
    $("#g").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#gg").show();
        }
    })
    .click(function() {
        if (board[6] == "" && usrmove && !gameover()) {
            board[6] = "X";
            $("#gg").css("opacity",1);
            $("#gg").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#gg").css("opacity") != 1) {
            $("#gg").hide();
        }
    })
    $("#h").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#hh").show();
        }
    })
    .click(function() {
        if (board[7] == "" && usrmove && !gameover()) {
            board[7] = "X";
            $("#hh").css("opacity",1);
            $("#hh").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#hh").css("opacity") != 1) {
            $("#hh").hide();
        }
    })
    $("#i").mouseover(function(){ 
        if (usrmove && !gameover()) {
            $("#ii").show();
        }
    })
    .click(function() {
        if (board[8] == "" && usrmove && !gameover()) {
            board[8] = "X";
            $("#ii").css("opacity",1);
            $("#ii").show();
            if (!gameover()) {
                pcmove();
            }
        }
    })
    .mouseout(function() {
        if ($("#ii").css("opacity") != 1) {
            $("#ii").hide();
        }
    });
    function newgame() {
        board = ["","","","","","","","",""];
        resetcell("#aa");
        resetcell("#bb");
        resetcell("#cc");
        resetcell("#dd");
        resetcell("#ee");
        resetcell("#ff");
        resetcell("#gg");
        resetcell("#hh");
        resetcell("#ii");
        $("#board").css("opacity",1);
    }
    function pcmove() {
        $.ajax("/getmove", {
            type: 'GET', 
            data: { board:JSON.stringify(board) },
            success : function(data) {
                usrmove = true;
                board[data] = "O";
                if (data == 0) {
                    showpcmove("#aa");
                } else if (data == 1) {
                    showpcmove("#bb");
                } else if (data == 2) {
                    showpcmove("#cc");
                } else if (data == 3) {
                    showpcmove("#dd");
                } else if (data == 4) {
                    showpcmove("#ee");
                } else if (data == 5) {
                    showpcmove("#ff");
                } else if (data == 6) {
                    showpcmove("#gg");
                } else if (data == 7) {
                    showpcmove("#hh");
                } else if (data == 8) {
                    showpcmove("#ii");
                }
                gameover();
            }
        });
    }
    function showpcmove(a) {
        $(a).attr('class', 'fa fa-circle-o fa-5x');
        $(a).show();
        $(a).css("opacity",1);
        $(a).css("color","#2D2E27");
    }
    function resetcell(a) {
        $(a).hide();
        $(a).css("opacity",0.3);
        $(a).css("color","#4601FE");
        $(a).attr('class', 'fa fa-times fa-5x');
    }
    function colorcell(a) {
        $(a).css("opacity",1);
        $(a).css("color","#FF1111");
    }
    function gameover() {
        if(board[0] == "O" && board[1] == "O" && board[2] == "O") {
            colorcell("#aa");
            colorcell("#bb");
            colorcell("#cc");
            return true;
        } else if(board[3] == "O" && board[4] == "O" && board[5] == "O") {
            colorcell("#dd");
            colorcell("#ee");
            colorcell("#ff");
            return true;
        } else if(board[6] == "O" && board[7] == "O" && board[8] == "O") {
            colorcell("#gg");
            colorcell("#hh");
            colorcell("#ii");
            return true;
        } else if(board[0] == "O" && board[4] == "O" && board[8] == "O") {
            colorcell("#aa");
            colorcell("#ee");
            colorcell("#ii");
            return true;
        } else if(board[0] == "O" && board[3] == "O" && board[6] == "O") {
            colorcell("#aa");
            colorcell("#dd");
            colorcell("#gg");
            return true;
        } else if(board[2] == "O" && board[4] == "O" && board[6] == "O") {
            colorcell("#cc");
            colorcell("#ee");
            colorcell("#gg");
            return true;
        } else if(board[1] == "O" && board[4] == "O" && board[7] == "O") {
            colorcell("#bb");
            colorcell("#ee");
            colorcell("#hh");
            return true;
        } else if(board[2] == "O" && board[5] == "O" && board[8] == "O") {
            colorcell("#cc");
            colorcell("#ff");
            colorcell("#ii");
            return true;
        } else if(board[0] == "O" && board[4] == "O" && board[8] == "O") {
            colorcell("#aa");
            colorcell("#ee");
            colorcell("#ii");
            return true;
        } else if($.inArray("",board) == -1) {
            $("#board").css("opacity",0.6);
            return true;
        }
        else {
            return false;
        }
    }

});
