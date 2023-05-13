export class CreateUserDto {
    email:string
    password:string
    nickname?:string
    fname?:string
    lname?:string
    birth?: Date
    gender?:string
    address?:string
    phone?:string
}
