import { v4 as uuid4 } from 'uuid';

export const FormSignUpData = [
    {
        id: uuid4(),
        label: 'نام و نام خانوادگی',
        type: 'text',
        htmlFor: 'fullName',
        placholder: 'تام و نام خانوادگی',
    },
    {
        id: uuid4(),
        label: 'ایمیل یا موبایل',
        type: 'text',
        htmlFor: 'mobile',
        placholder: '09367304353',
    },
    // {
    //     id: uuid4(),
    //     label: 'ایمیل ',
    //     type: 'text',
    //     htmlFor: 'email',
    //     placholder: 'javadahmadi@gmail.com',
    // },
    {
        id: uuid4(),
        label: 'رمز',
        type: 'text',
        htmlFor: 'password',
        placholder: 'رمز ورود',
    },
    {
        id: uuid4(),
        label: 'تکرار رمز',
        type: 'text',
        htmlFor: 'confirmPass',
        placholder: 'تکرار رمز',
    },
    {
        id: uuid4(),
        type: 'submit',
        text: 'ثبت نام',
    },
];
