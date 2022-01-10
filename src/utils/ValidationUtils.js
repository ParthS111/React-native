import validate from 'validate.js';
import Message from './MessageUtils';

let constraints = {
    firstName: {
        presence: {
            message: Message.Errors.firstBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.nameLength
        },
       
    },
    lastName: {
        presence: {
            message: Message.Errors.LastBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.nameLength
        },      
    },
    userName: {
        presence: {
            message: Message.Errors.UserNameBlank
        },
        length: {
            maximum: 30,
            tooLong: Message.Errors.nameLength
        },       
    },
    email: {
        presence: {
            message: Message.Errors.emailBlank
        },
        format: {
            //pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            pattern: /^[a-zA-Z0-9]+[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            message: Message.Errors.emailValidity,
        }
    },
    password: {
        presence: {
            message: Message.Errors.pwdBlank
        },
        
    },
   
    passwordBlank: {
        presence: {
            message: Message.Errors.pwdBlank
        }
    },
   
};

export function validation(fieldName, value) {
    let formValues = {};
    formValues[fieldName] = value === '' ? null : value;

    if (fieldName === 'name') {
        // formValues[fieldName] = value.replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '') === '' ? null : value ;
        formValues[fieldName] = value.replace(/[^\w\s]/gi, "") === '' ? null : value;
    }

    let formFields = {};
    formFields[fieldName] = constraints[fieldName];

    let result = validate(formValues, formFields, { fullMessages: false });

    if (result) {
        return result[fieldName][0]
    }
    return null
}


let PasswordConstraints = {
    confirmPassword: {
        equality: {
            attribute: 'password',
            message: Message.Errors.pwdMisMatch
        }
    }
};

/**
 * @return {null}
 */
export function PasswordValidate(password, confirmPassword) {
    let result1 = validate({
        password: password,
        confirmPassword: confirmPassword
    }, PasswordConstraints, { fullMessages: false });

    if (result1 !== null && result1 !== undefined) {
        if (result1['confirmPassword'] !== undefined)
            return result1['confirmPassword'][0];
    }
    return null;

}