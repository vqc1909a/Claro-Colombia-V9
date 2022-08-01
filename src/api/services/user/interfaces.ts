export interface LoginUserArgs {
    user: any
}

export interface GetLoggedUserArgs {
    token: string
}

export interface SendSMSArgs {
    cellphone: string
}

export interface VerifySMSArgs extends SendSMSArgs {
    pin: string
}

export interface SendEmailArgs {
    email: string
}

export interface VerifyEmailArgs extends SendEmailArgs{
    pin: string
}

