var input1,input2,input3; //THE THREE INPUTS(FIRST PAGE)

var greeting1,greeting2,greeting3,greeting4;  //THE FOUR GREETINGS(FIRST PAGE)

var greeting5,greeting6,greeting7,greeting8,greeting9,greeting10,greeting11;  //THE SIX GREETIINGS(SECOND PAGE)

var greeting12,greeting13;  //THE GREETINGS OF THIRD PAGE

var submit_button; // SUBMIT BUTTON
var submit_button2; // SECOND PAGE 
var button1,button2;  //THIRD PAGE

var greeting14,greeting15,greeting16,greeting17,greeting18; //  THE GREETINGS OF DONATE BOOKS

var input9; // THE INPUT OF DONATE BOOKS

var dropdown1,dropdown2,dropdown3;  // DROPDOWNS OF DONATE BOOKS

var donate_button;

var greeting19,greeting20,greeting21,greeting22,greeting23; // THE GREETINGS OF RECIEVE BOOKS

var dropdown4,dropdown5,dropdown6;  // DROPDOWNS OF RECIEVE BOOKS

var input10;  // THE INPUT OF RECIEVE BOOKS

var recieve_button;

var add_book;

var book1_image,book2_image,book3_image;

var back_button,back_button2,back_button3,back_button4;

var form2;
var form3;
var donatebook;
var recievebook;
var donatelast;
var recievelast;
function preload(){
  book1_image = loadImage("book_donation.png");
  book2_image = loadImage("book1.png");
  book3_image = loadImage("book1.jpg");

}
// first page starts
function setup() {

 var canvas = createCanvas(displayWidth,displayHeight);
  form1 = new Form1;
  form1.display();
 
  //form3 = new Form3;
 // donatebook = new Donatebook();
  //donatelast = new DonateLast();
  //recievelast = new RecieveLast();
  //back1 = new Back1;
 // back2 = new Back2;
 // back3 = new Back3;
 // back4 = new Back4;
  

 }

function draw() {

  background("black");  
}
