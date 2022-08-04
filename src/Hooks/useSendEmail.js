import { send } from 'emailjs-com';



function useSendEmail(e, fullname, email, mobile, message, address) {

    //e.preventDefault();

    send(
        'service_2rovyok',
        'template_i9ln0kz',
        { fullname, email, mobile, message, address },
        'ks1W4IJypA6KzHBVM'
    )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });

}


export default useSendEmail