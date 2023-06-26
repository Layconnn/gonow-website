
export default function Validation(values) {
    const errors = {};

    const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

    // const number = values.phone === 11;

    if(!values.name){
        errors.name = "Full Name is Required";
    }

    // if(values.is_whatsapp === ""){
    //     errors.is_whatsapp = "Last Name is required";
    // }

    {
        !values.email
        ?
        errors.email = 'Email is required'
        :
        values.email
        ?
        errors.email = 'Enter a valid email address'
        :
        ''
    }
   
    {
        !values.phone
        ?
        errors.phone = 'Your phone number is required'
        :
        values.phone.length !== 11
        ?
        errors.phone = 'Please enter a valid number'
        :
        ''
    }
    
    // if (!values.phone){
    //     errors.phone = "Your phone number is required"
    // }else if(values.phone.length !== 14){
    //     errors.phone = "Invalid phone number"
    // }

    return errors;
}
