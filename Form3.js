class Form3{
    constructor(){
        this.greeting12 = createElement('h2');
        this.greeting13 = createElement('h2');
        this.button1 = createButton("DONATE BOOKS");
        this.button2 = createButton("RECIEVE BOOKS");
        this.back_button2 = createButton("Back2");

        this.hide = function(){
            this.greeting12.hide();
            this.greeting13.hide();
            this.button1.hide();
            this.button2.hide();
            this.back_button2.hide();

             
             
             
            
        }
    }
    
   
    display(){

        this.back_button2.position(200,200);
      

        this.greeting12.html("WHAT DO YOU WANT TO ?")
        this.greeting12.position(590,80); 
        this.greeting12.style('color:white');

        this.button1.position(630,230);
        this.button1.size(200,50);


        this.greeting13.html("OR");
        this.greeting13.position(710,330); 
        this.greeting13.style('color:white');

        this.button2.position(630,430);
        this.button2.size(200,50);

        this.back_button2.mousePressed(()=>{

            this.hide();
            form2 = new Form2();
            form2.display();

        })
        this.button1.mousePressed(()=>{

            this.hide();
            donatebook = new Donatebook();
            donatebook.display();

        });

        this.button2.mousePressed(()=>{

            this.hide();
            recievebook = new Recievebook();
            recievebook.display();
        });
       
    }
}