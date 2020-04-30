class Recievebook{
    constructor(){
        this.greeting19 = createElement('h3');
        this.greeting20 = createElement('h3');
        this.greeting21 = createElement('h3');
        this.greeting22 = createElement('h2');
        this.greeting23 = createElement('h3');

        this.input10 = createInput("Name of the book");

        this.recieve_button = createButton("Recieve Book");

        this.back_button4 = createButton("Back4");

        this.hide = function (){

        this.back_button4.hide();
        this.input10.hide();
        this.greeting19.hide();
        this.greeting20.hide();
        this.greeting21.hide();
        this.greeting22.hide();
        this.greeting23.hide();
        dropdown4.remove();
        dropdown5.remove();
        dropdown6.remove();
        this.recieve_button.hide();
        }
    }
    display(){


        this.back_button4.position(200,200);
        

       
        this.greeting19.html("Name of the book");
        this.greeting19.position(400,430); 
        this.greeting19.style('color:white');

        
        this.input10.position(700,450);

     
        this.greeting20.html("Number of copies of the book");
        this.greeting20.position(400,530); 
        this.greeting20.style('color:white');

        
        this.greeting21.html("Language of the book");
        this.greeting21.position(400,230); 
        this.greeting21.style('color:white');

       
        this.greeting22.html("Recieving Book Details");
        this.greeting22.position(600,100); 
        this.greeting22.style('color:white');

      
        this.greeting23.html("Genre of the book");
        this.greeting23.position(400,330); 
        this.greeting23.style('color:white');

        dropdown4 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown4.position(700,550);
        dropdown4.option('1');
        dropdown4.option('2');
        dropdown4.option('3');
        dropdown4.option('4');
        dropdown4.option('5+');

        dropdown5 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown5.position(700,250);
        dropdown5.option('English');
        dropdown5.option('Mandarin Chinese');
        dropdown5.option('Spanish');
        dropdown5.option('Hindi');
        dropdown5.option('Bengali');
        dropdown5.option('other');
        
        dropdown6 = createSelect(); //CREATES DROPDOWN(FOURTH PAGE)
        dropdown6.position(700,350);
        dropdown6.option('Text Books');
        dropdown6.option('Reference Books');
        dropdown6.option('Fantasy');
        dropdown6.option('Action & Adventure');
        dropdown6.option('Science - Fiction');
        dropdown6.option('Horror');
        dropdown6.option('Thriller & mystery');
        dropdown6.option('Humour');
        dropdown6.option('Crime & Detective');
        dropdown6.option('Comic');
        dropdown6.option('other');

       
        this.recieve_button.position(1000,550);
        this.recieve_button.style('color:blue');
        
        this.back_button4.mousePressed(()=>{
            this.hide();
            form3 = new Form3();
            form3.display();
        });

        this.recieve_button.mousePressed(()=>{
            this.hide();
            recievelast = new RecieveLast();
            recievelast.display();

        });
    }
}