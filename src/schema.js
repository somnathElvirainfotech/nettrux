import * as yup from "yup";
import { parse, isDate } from "date-fns";

function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
};

const phoneRegExps = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const LoginSchama = yup.object({
    email: yup.string().trim().email().required("email required"),
    password: yup.string().min(8,"password lengt must be 8 characters").required("password required")
});


export const SignupSchama = yup.object({
    firstname: yup.string().trim().required("first name required"),
    lastname: yup.string().trim().required("last name required"),
    email: yup.string().trim().email().required("email required"),
    password: yup.string().trim().min(8,"password lengt must be 8 characters").required("password required"),
    confirm_password: yup.string().trim().min(8,"confirm password lengt must be 8 characters").required().oneOf([yup.ref("password")], "confirm password not match"),
    country:yup.string().trim().required("country required"),
    phone: yup.string().max(10,"phone lengt must be 10 characters").min(10,"phone lengt must be 10 characters").matches(phoneRegExps, 'phone number is not valid'),
    no_shipment:yup.number().typeError("no shipment must be a number").required("no shipment required"),
    address:yup.string().required("address required")
});


export const VerifyEmailSchama = yup.object({
    num1: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
    num2: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
    num3: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
    num4: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
    num5: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
    num6: yup.number().typeError("").required("").test('len', '', val => val && val.toString().length === 1 ),
});

export const SendEmail= yup.object({
    email: yup.string().email().required("email required"),
});


export const ChangePassword= yup.object({
    password: yup.string().trim().min(8,"password lengt must be 8 characters").required("password required"),
    confirm_password: yup.string().trim().min(8,"confirm password lengt must be 8 characters").required().oneOf([yup.ref("password")], "confirm password not match"),
});

export const RateSchema=yup.object({
    freightInfo:yup.array(yup.object({
        qty:yup.number().required(""),
        weight:yup.number().required(""),
        weightType:yup.string().required(""),
        length:yup.number().required(""),
        width:yup.number().required(""),
        height:yup.number().required(""),
    })),
    originCountry:yup.string().trim().required("country required"),
    originState:yup.string().trim().required("state required"),
    originCity:yup.string().trim().required("city required"),
    originZipcode:yup.string().trim().required("zipcode required"),

    destinationCountry:yup.string().trim().required("country required"),
    destinationState:yup.string().trim().required("state required"),
    destinationCity:yup.string().trim().required("city required"),
    destinationZipcode:yup.string().trim().required("zipcode required"),

    uom:yup.string().trim().required("unit of measure required"),
    pickupDate:yup.date().typeError(('pickup date required')).transform(parseDateString).required("pickup date required")
})

