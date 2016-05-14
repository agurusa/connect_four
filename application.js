$(document).ready(function(){

  $(".new_game").on("click", function(event){
    $(".board").html("")
    new_game = new Game({won: false, winner: 'none', players: [], board: [], turn: 1});
    new_game.start();
    new_game.create_board();
    new_game.board.print_board();
    change_name(new_game);

  });
  $(".board").on("click", "a", function(event){
    event.preventDefault();
    var column = $(this).attr("class");
    var row = new_game.board.determine_placement(column);
    var placement = $(".board").find(".row" + row);
    var piece = new_game.board.layout[column][row];
    (placement).find(".cell" + column).html("<div class = 'piece" + new_game.turn + " piece'></div>");
    piece.add_piece(new_game.turn);
    change_color(new_game);
    new_game.check_row();
    new_game.determine_turn();
    change_name(new_game);
  })
})

var change_name = function(game){
  $(".instructions").children("p").html(game.players[game.turn - 1].name + "'s turn!");
}

var change_color = function(game){
  $(".board").find(".piece" + game.turn).css("background-color", game.players[game.turn -1].color);
}
