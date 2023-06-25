
export default function Validation(values) {
    const errors = {};

    const email_pattern = /^(?![.-])((?![_.-][_.-])[a-zA-Z\d.-]){0,63}[a-zA-Z\d]@((?!-)((?!--)[a-zA-Z\d-]){0,63}[a-zA-Z\d]\.){1,2}([a-zA-Z]{2,14}\.)?[a-zA-Z]{2,14}$/;

    // const phone_pattern = /^\d{10,11}$/;

    if(values.name === ""){
        errors.name = "Full Name is Required";
    }

    // if(values.is_whatsapp === ""){
    //     errors.is_whatsapp = "Last Name is required";
    // }

    if(values.email === ""){
        errors.email = "Email is required";
    }else if(!email_pattern.test(values.email)){
        errors.email = "Invalid email format";
    }

    if (values.phone === ""){
        errors.phone = "Your number is required";
    }else if(values.phone.length !== 11){
        errors.phone = "Invalid phone number";
    }

    return errors;
}
