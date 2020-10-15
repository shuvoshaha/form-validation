export default function ValidateInfo(values){
    let error = {}

    if(!values.username.trim()){
        error.username = 'Username is required'
    }
    if(!values.email.trim()){
        error.email = 'Email is required'
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/.test(values.email)) {
        error.email = "Email is Invalid"
    }
   if(!values.password){
       error.password = "Password is required";
   }
   else if(values.password.length < 6) {
       error.password = "Password need to minimum 6 character"
   }
   if(!values.password2){
       error.password2 = "Confirm password is required";
   } 
   else if(values.password !== values.password2){
       error.password2 = "Password is don't match";
   }
  return error; 
}