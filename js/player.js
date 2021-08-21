class Player
{
    constructor (){}

    //to get the player count from the DB
    getCount (){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    //to update the player count in the DB
    updateCount(count){
        database.ref('/').update ({
            playerCount: count
    
        })
    }

    //to update the player name in the DB
    update(name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: name
        })
    }
}