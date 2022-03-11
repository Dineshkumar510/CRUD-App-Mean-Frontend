export class User {
    _id: string;
    pic: string;
    name: string;
    age: string;
    email: string;
    phone_Number: string;
    constructor(_id = '', pic='', name = '', age = '', email = '', phone_Number = ''){
        this._id = _id;
        this.pic = pic;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone_Number = phone_Number;
    }
}
