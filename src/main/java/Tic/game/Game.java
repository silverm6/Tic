package Tic.game;

import java.util.ArrayList;
import java.util.Scanner;

public class Game {
    String p1 = "X";
    String p2 = "O";

    private void printboard(ArrayList<String> board) {
        for (int j = 0; j<board.size();j++) {
            if ((j+1)%3==0) {
                System.out.println(board.get(j));
            }
            else {
                System.out.print(board.get(j)+" | ");
            }
        }
    }

    public int getmove(ArrayList<String> board) {
        int[] g = minimax(board,2,2);
        return g[1];
    }

    public void playgame(ArrayList<String> board, int player) {

        while (true) {

            printboard(board);

            if (checkvictory(board)) {
                System.out.println("Mäng on läbi!");
                break;
            }

            if (player%2==0){
                System.out.println("Arvuti käis:");
                int[] g = minimax(board,2,2);
                board.set(g[1],p2);
            }

            else {
                System.out.println("Sisesta number kuhu soovid käia: ");
                inimesek2ik(board);
            }

            player+=1;
        }

    }

    private int[] minimax(ArrayList<String> board, int level, int player) {
        int bestscore;
        int bestmove = -1;
        int score;

        if (checkvictory(board) || level == 0) {
            bestscore = evaluate(board);
            return new int[] {bestscore, bestmove};
        }

        //all possible moves
        ArrayList<Integer> moves = new ArrayList<Integer>();
        for (int j = 0; j<board.size();j++) {
            if (board.get(j).equals("")) {
                moves.add(j);
            }
        }

        if (player == 2) {
            bestscore = Integer.MIN_VALUE;
            for (int j = 0; j<moves.size();j++) {
                String temp = board.get(moves.get(j));
                board.set(moves.get(j),p2);
                score = minimax(board,level -1, 1)[0];
                board.set(moves.get(j),temp);
                if (score > bestscore) {
                    bestmove = moves.get(j);
                    bestscore = score;
                }
            }

        }
        else {
            bestscore = Integer.MAX_VALUE;
            for (int j = 0; j<moves.size();j++) {
                String temp = board.get(moves.get(j));
                board.set(moves.get(j),p1);
                score = minimax(board,level -1, 2)[0];
                board.set(moves.get(j),temp);
                if (score < bestscore) {
                    bestmove = moves.get(j);
                    bestscore = score;
                }
            }

        }
        return new int[] {bestscore, bestmove};

    }

    private int evaluate(ArrayList<String> board) {
        int score = 0;
        score += evaluateline(0,1,2, board);
        score += evaluateline(3,4,5, board);
        score += evaluateline(6,7,8, board);
        score += evaluateline(0,3,6, board);
        score += evaluateline(1,4,7, board);
        score += evaluateline(2,5,8, board);
        score += evaluateline(0,4,8, board);
        score += evaluateline(2,4,6, board);
        return score;
    }
    private int evaluateline(int a, int b, int c, ArrayList<String> board) {
        int score = 0;



        if (board.get(a).equals(p2)) {
            score = 1;
        } else if (board.get(a).equals(p1)) {
            score = -1;
        }

        if (board.get(b).equals(p2)) {
            if (score == 1) {
                score = 10;
            } else if (score == -1) {
                return 0;
            } else {
                score = 1;
            }
        } else if (board.get(b).equals(p1)) {
            if (score == -1) {
                score = -10;
            } else if (score == 1) {
                return 0;
            } else {
                score = -1;
            }
        }

        if (board.get(c).equals(p2)) {
            if (score > 0) {
                score *= 10;
            } else if (score < 0) {
                return 0;
            } else {
                score = 1;
            }
        } else if (board.get(c).equals(p1)) {
            if (score < 0) {  // cell1 and/or cell2 is oppSeed
                score *= 10;
            } else if (score > 1) {  // cell1 and/or cell2 is mySeed
                return 0;
            } else {  // cell1 and cell2 are empty
                score = -1;
            }
        }

        return score;
    }

    private void inimesek2ik(ArrayList<String> board) {
        Scanner reader2 = new Scanner(System.in);
        int k2ik = reader2.nextInt();

        //kontroll kas soovitud koht on vaba:
        if (board.get(k2ik-1) != p1 && board.get(k2ik-1) != p2) {
            board.set(k2ik-1,p1);
        }
        else {
            System.out.println("Vali vaba koht: ");
            inimesek2ik(board);
        }
    }


    //kas on 3 järjest märki või kas on terve laud täis
    private boolean checkvictory(ArrayList<String> board) {
        if (!board.contains("") ||
            (board.get(0).equals(p1) && board.get(1).equals(p1) && board.get(2).equals(p1)) ||
            (board.get(3).equals(p1) && board.get(4).equals(p1) && board.get(5).equals(p1)) ||
            (board.get(6).equals(p1) && board.get(7).equals(p1) && board.get(8).equals(p1)) ||
            (board.get(0).equals(p2) && board.get(1).equals(p2) && board.get(2).equals(p2)) ||
            (board.get(3).equals(p2) && board.get(4).equals(p2) && board.get(5).equals(p2)) ||
            (board.get(6).equals(p2) && board.get(7).equals(p2) && board.get(8).equals(p2)) ||
            (board.get(0).equals(p1) && board.get(3).equals(p1) && board.get(6).equals(p1)) ||
            (board.get(1).equals(p1) && board.get(4).equals(p1) && board.get(7).equals(p1)) ||
            (board.get(2).equals(p1) && board.get(5).equals(p1) && board.get(8).equals(p1)) ||
            (board.get(0).equals(p2) && board.get(3).equals(p2) && board.get(6).equals(p2)) ||
            (board.get(1).equals(p2) && board.get(4).equals(p2) && board.get(7).equals(p2)) ||
            (board.get(2).equals(p2) && board.get(5).equals(p2) && board.get(8).equals(p2)) ||
            (board.get(0).equals(p1) && board.get(4).equals(p1) && board.get(8).equals(p1)) ||
            (board.get(2).equals(p1) && board.get(4).equals(p1) && board.get(6).equals(p1)) ||
            (board.get(0).equals(p2) && board.get(4).equals(p2) && board.get(8).equals(p2)) ||
            (board.get(2).equals(p2) && board.get(4).equals(p2) && board.get(6).equals(p2)))
            return true;
        else
            return false;
    }
}