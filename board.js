var Cell = function(args){
  this.id = args.id
  this.has_piece = args.has_piece
  this.player = args.player
  this.contents = args.contents
}

var Board = function(args){
  this.layout = args.layout
}

var Game = function(args){
  this.players = args.players
  this.won = args.won
  this.winner = args.winner
  this.board = args.board
  this.turn = args.turn
}

var Player = function(args){
  // Make sure names are uppercase
  this.name = args.name.charAt(0).toUpperCase() + args.name.slice(1);
  this.color = args.color
}

Game.prototype.start = function(){
  var name = prompt("What is your name?");
  var color = prompt("What color would you like to be?");
  var player1 = new Player({name: name, color: color});
  var name2 = prompt("What is player 2's name?");
  var color2 = prompt("What color would you like to be?");
  var player2 = new Player({name: name2, color: color2});
  if (player1.color === player2.color){
    player2.color = 'black';
  }
  this.players = [player1, player2]
}

Game.prototype.create_board = function(){
  this.board = new Board({layout:[]})
  for(var x = 0; x <= 5; x++){
    var row = []
    for(var i = 0; i <= 6; i++){
      var cell = new Cell({id: i, has_piece: false, player: 'none', contents: ""})

      row.push(cell)
    }
    this.board.layout.push(row)
  }
}

Game.prototype.determine_turn = function(){
  if(this.turn === 1){
      this.turn = 2
  }
  else{
    this.turn = 1
  }
}

Board.prototype.print_board = function(){
  for(var x = 0; x <= 5; x++){
    $(".board").append("<div class = row" + x + "><ul></ul></div>")
    for(var i = 0; i <= 6; i++){
      $('.row' + x).find("ul").append("<a class =\"" + i + "\" href = \"link\"><div class = \"cell cell" + i + "\"></div></a>")
    }
  }
}

Board.prototype.determine_placement = function(column){
  for(var i = 5; i >= 0; i--){
    if (!this.layout[column][i].has_piece){
      return i;
    }
  }
}

Cell.prototype.add_piece = function(player){
  this.has_piece = true;
  this.player = player;
}

Game.prototype.check_win = function(){
  check_row();
  for(var x = 0; x <= 5; x++){
    if(this.board.layout[x].has_piece){
      this.board.layout[x].player
      for(var i = 0; i <= 6; i++){

      }
    }
  }
}

Game.prototype.check_row = function(){
  var counter = 1;
   for(var x = 0; x <= 5; x++){
    for(var i = 0; i <= 6; i++){
      if(this.board.layout[x][i].has_piece){
        if(this.board.layout[x][i].player === this.board.layout[x][counter].player){
          counter++
          if(counter === 4){
            console.log("winner!")
          }
        else{
          counter = 0
          }
        }
      }
    }
  }
}


