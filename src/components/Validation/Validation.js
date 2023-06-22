
const validation = (userData) => {
    const errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,35}$/.test(userData.email)){
        errors.email= 'Invalid email';
    }
    if(!userData.email){
        errors.email = 'Missing email';
    }
    if(userData.email.length > 35){
        errors.email= 'Cannot exceed 35 characters';
    }

    if(!/^(?=.*\d).{6,10}$/.test(userData.password)){
        errors.password= 'Password should contains atleast a number';
    }
    if(userData.password.length < 6 && userData.password.length >10 ){
        errors.password= 'Password must be around 6 and 10 characters';
    }

    return errors;
 }


 export default validation;