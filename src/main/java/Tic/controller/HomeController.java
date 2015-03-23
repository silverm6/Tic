package Tic.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
 








import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import Tic.game.Game;

import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
@Controller
public class HomeController {
	
	@RequestMapping(value="/")
	public ModelAndView test(HttpServletResponse response) throws IOException{
		return new ModelAndView("home");
	}

    @RequestMapping(value = "/getmove", method = RequestMethod.GET)
    public @ResponseBody String getMove(@RequestParam("board") String board) {
    	String[] board2 = board.substring(1, board.length()-1).replace("\"\"","").replace("\"X\"", "X").replace("\"O\"", "O").split(",",-1);
    	Game game = new Game();
	    int move = game.getmove(new ArrayList<String>(Arrays.asList(board2)));
	    return Integer.toString(move);
    }

}