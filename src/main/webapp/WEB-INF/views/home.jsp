<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Tic</title>
        <link rel="stylesheet" href="resources/style.css">
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script type="text/javascript" src="resources/js/main.js"></script>
        <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    </head>
    <body> 
        <div id="board">
           <table>
                <tr>
                    <td id="a" class="square"><i id="aa" class="fa fa-times fa-5x" ></i></td>
                    <td id="b" class="square v"><i id="bb" class="fa fa-times fa-5x" ></td>
                    <td id="c" class="square"><i id="cc" class="fa fa-times fa-5x" ></td>
                </tr> 
                <tr>
                    <td id="d" class="square h"><i id="dd" class="fa fa-times fa-5x" ></td>
                    <td id="e" class="square v h"><i id="ee" class="fa fa-times fa-5x" ></td>
                    <td id="f" class="square h"><i id="ff" class="fa fa-times fa-5x" ></td>
                </tr>
                <tr>
                    <td id="g" class="square"><i id="gg" class="fa fa-times fa-5x" ></td>
                    <td id="h" class="square v"><i id="hh" class="fa fa-times fa-5x" ></td>
                    <td id="i" class="square"><i id="ii" class="fa fa-times fa-5x" ></td>
                </tr>
            </table>
        </div>  
        <img id="usr" src="resources/usr.png" >  <h2 id="aw">Who's first?</h2> <img id="pc" src="resources/pc.png" /> 

    </body>
</html>
