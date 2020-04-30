class Form1{
    constructor(){
        this.greeting1 = createElement('h2');
        this.greeting2 = createElement('h4');
        this.greeting3 = createElement('h4');
        this.greeting4 = createElement('h4');

        this.input1 = createInput("Name");
        this.input2 = createInput("E mail");
        this.input3 = createInput("Mobile No.");

        this.submit_button = createButton("Sign up");
    }
display(){

        this.submit_button.position(850,430);
        this.submit_button.style('color:blue');
     

        this.greeting1.html("WELCOME TO BOOK BANK, PLEASE SIGN UP THE FOLLOWING DETAILS TO RECIEVE OR DONATE BOOKS.")
        this.greeting1.position(140,60); 
        this.greeting1.style('color:white');
        
        this.greeting2.html("Name")
        this.greeting2.position(450,190);
        this.greeting2.style('color:white');

        this.greeting3.html("E-mail")
        this.greeting3.position(450,290);
        this.greeting3.style('color:white');

        this.greeting4.html("Phone_No.")
        this.greeting4.position(450,390);
        this.greeting4.style('color:white');

        this.input1.position(450,230);

        this.input2.position(450,330);

        this.input3.position(450,430);

        this.submit_button.mousePressed(()=>{

        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        
        this.greeting1.hide();
        this.greeting2.hide();
        this.greeting3.hide();
        this.greeting4.hide();


        this.submit_button.hide();
         form2 = new Form2();
         form2.display();

        });
}
}