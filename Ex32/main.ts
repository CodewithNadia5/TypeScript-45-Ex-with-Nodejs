// Array of current users
let current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"]

// Array of New users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

// loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {

   // making a condition for username already exist and save in our_condition variable  
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // print different messages using if_else statment
   if(our_condition){
       console.log(`Sorry ${new_one_user} is already taken!`)
   }else{
        console.log(`This user name ${new_one_user} is available`)
    }
    })