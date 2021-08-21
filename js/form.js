class Form
{
    constructor() { }

    display()
    {
        var title= createElement('h2'); //create h2 element
        title.html("Car Racing Game"); //create title for game
        title.position(130, 0); //position the title

        //create and position input and button element
        var input= createInput("Name");
        input.position(130,160);
        var button= createButton('Play');
        button.position(250,200);

        //create a greeting element
        var greeting= createElement('h3');
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name= input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount); 
            greeting.html("Hello"+name);
            greeting.position(130, 160);
        })
    }
}