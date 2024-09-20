import * as yup from 'yup';

var passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const LoginSchema = yup.object().shape({
    email : yup.string().email("لطفا ایمیل را به درستی وارد کنید").required("Required"),
    password : yup.string().min(5).matches(passwordRegEx,{"message":"حداقل۵کاراکتر و یک حرف خاص را وارد کنید"}).required("Required")
})