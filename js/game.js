class Game
{
    constructor() { }

    //read the game state from the DB
    getState()
    {
        var gameStateRef= database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState= data.val();
        })
    }

    //update the gamestate in the DB to a value passed to it inside ()
    update(state)
    {
        database.ref('/').update({
            gameState: state
        });
    }

    //start the game and display oon the screen depending on the gamestate
    start()
    {
        if(gameState===0)
        {
            player= new Player();
            player.getCount();

            form= new Form();
            form.display();
        }
    }
}