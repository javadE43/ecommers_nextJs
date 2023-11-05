import { v4 as uuid4 } from 'uuid';

export const FormSignInData = [
    {
        id: uuid4(),
        label: 'ایمیل یا موبایل',
        type: 'text',
        htmlFor: 'mobile',
        placholder: '09367304353',
    },
    {
        id: uuid4(),
        label: 'رمز',
        type: 'text',
        htmlFor: 'password',
        placholder: 'رمز ورود',
    },
    {
        id: uuid4(),
        type: 'submit',
        text: 'ورود',
    },
];
