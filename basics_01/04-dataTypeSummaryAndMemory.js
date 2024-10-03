// Primitive data Type 
// store by value == actual value is store in the variable
//Number , String ,Boolean , Null ,undefined , 
//store by reference == the pointer to the memory is store in the variable ---> consider below example


/*ObjOne --> objTwo -- both points to simillar object stored in the memory --> Obj ==> 
  
    let objOne  = {
        firstName: "ishu"
            
    }
    let objTwo = objOne;
    objTwo.firstName = 'nambeel'
    console.log(objOne);
    */
   let userName = 'Nabeel'
   let age  = 28

   //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
   //Stack { Primitive dataType } Heap {Non Primitive dataType}

   // Stack mai jo b cheez save hoge tu us value ki copy mily ge 
   // Heap mai jo save krty ha uska reference milta hai

   let myYoutubeChannel = 'parhlodotcom';
   let anotherChannel = 'pleaseparhlo';

   anotherChannel = myYoutubeChannel;
   anotherChannel = 'naiParhnaKya'
   
   
   let userOne ={
    email:'user@gmail.com',
    upid:22
   }
   let userTwo = {
    email:'usertwo@gmail.com',
    upid:66

   }
   userTwo= userOne ;
   userTwo.upid=99
  console.log(userOne);
  console.log(userTwo);
  
  
   

   

