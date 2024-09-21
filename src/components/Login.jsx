import { useFormik } from 'formik'
import React, { useState } from 'react'
import { LoginSchema } from '../schemas'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axisApi'

const txtLogin = {
    title: "ورود به حساب کاربری",
    description: "لطفا نام کاربری (ایمیل) و رمز عبور را وارد کنید",
    email: "آدرس ایمیل",
    password: "رمز عبور",
    forget: "فراموشی رمز عبور؟",
    remember: "من را به خاطر بسپار!",
    loginFalse: "ورود",
    loginTrue: "لطفا کمی صبر کنید ...",
    create: "ساخت حساب کاربری جدید",
    alertTitle: "کاربر پیدا نشد!"
}

export default function Login() {

    const navigate = useNavigate()
    const [checkAlert, setCheckAlert] = useState(false)
    const [alertTxt, setAlertTxt] = useState('')
    const [login, setLogin] = useState(false)


    const handleAlert = () => {
        setCheckAlert(true)
        document.querySelector('.alert').style.display = 'flex'
        document.querySelector('.alert').style.opacity = 1
        document.querySelector('.alert').style.transition = ""
    }

    const onSubmit = async (values, actions) => {

        try {

            const response = await api.get('/users?email=' + values.email)
            if (response.data.length === 0) {
                setAlertTxt('ایمیل وجود ندارد . درصورت تمایل میتوانید ثبت نام کنید')
                handleAlert()
                actions.resetForm()
            }
            else {

                const { fName, lName, password: passApi } = { ...response.data[0] }
                if (passApi !== values.password) {
                    setAlertTxt('رمز عبور نادرست است.لطفا دوباره تلاش کنید !')
                    handleAlert()
                }
                else {
                    setTimeout(function () { navigate(`/login/${fName}-${lName}`) }, 3000)
                    setLogin(true)
                }
            }
        } catch (error) {
            console.log(error.message)
        }


    }

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: LoginSchema,
        onSubmit,
    })

    return (
        <div className='container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-5 xl:grid-cols-10 items-center '>
            <div className='mainBox bg-white col-span-1 md:col-span-3 md:col-start-2 xl:col-span-4 xl:col-start-4 m-9 border border-emerald-500'>
                <h1 className='text-emerald-500 text-3xl font-bold text-center mt-4'>{txtLogin.title}</h1>
                <p className='text-center mt-2 text-slate-500'>{txtLogin.description}</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group gap-0 px-3">

                        {/* email */}
                        <div className="form-field mt-1">
                            <label className="text-right text-md">{txtLogin.email}</label>

                            <input type="email"
                                id='email'
                                className={errors.email && touched.email ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <span className="form-label-alt text-right text-red-500">{errors.email}</span>}
                        </div>

                        {/* password */}
                        <div className="form-field mt-0">
                            <label className="text-right text-md">{txtLogin.password}</label>
                            <div className="form-control">
                                <input type="password"
                                    id='password'
                                    className={errors.password && touched.password ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.password && touched.password && <span className="form-label-alt text-right text-red-500 mb-3">{errors.password}</span>}
                        </div>

                        {/* checkbox */}
                        <div className="form-field">
                            <div className="form-control justify-between">
                                <label className="form-label">
                                    <a className="link link-underline-hover text-emerald-500  text-sm mt-2">{txtLogin.forget}</a>
                                </label>
                                <div className="flex gap-2 mt-2">
                                    <a href="#">{txtLogin.remember}</a>
                                    <input type="checkbox" className="checkbox  checked:bg-emerald-500 checked:border-emerald-600" />
                                </div>
                            </div>
                        </div>

                        {/* button */}
                        <div className="form-field pt-5">
                            <div className="form-control justify-center">
                                <button type="submit"
                                    className="btn bg-emerald-500 text-xl text-white"
                                    disabled={login}>
                                    {login ? txtLogin.loginTrue : txtLogin.loginFalse}</button>
                            </div>
                        </div>

                        {/* create link */}
                        <div className="form-field">
                            <div className="form-control justify-center">
                                <Link to='/createuser' className="link link-underline-hover text-emerald-500 my-3 text-md">{txtLogin.create}</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* alert */}
            {checkAlert && <div className="alert alert-error max-w-lg absolute right-14 bottom-7 sm:right-7">
                {/* !! */}
                <svg width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    onClick={() => {
                        document.querySelector('.alert').style.transition = "all 0.5s"
                        setTimeout(function () {
                            document.querySelector('.alert').style.opacity = 0;
                        }, 500);
                        // document.querySelector('.alert').style.display='none'
                        checkAlert(false)
                    }}>
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.3007 5.71C17.9107 5.32 17.2807 5.32 16.8907 5.71L12.0007 10.59L7.1107 5.7C6.7207 5.31 6.0907 5.31 5.7007 5.7C5.3107 6.09 5.3107 6.72 5.7007 7.11L10.5907 12L5.7007 16.89C5.3107 17.28 5.3107 17.91 5.7007 18.3C6.0907 18.69 6.7207 18.69 7.1107 18.3L12.0007 13.41L16.8907 18.3C17.2807 18.69 17.9107 18.69 18.3007 18.3C18.6907 17.91 18.6907 17.28 18.3007 16.89L13.4107 12L18.3007 7.11C18.6807 6.73 18.6807 6.09 18.3007 5.71Z" fill="#969696" />
                </svg>
                <div className="flex w-full justify-end">
                    <div className="flex flex-col text-end">
                        <span>{txtLogin.alertTitle}</span>
                        <span className="text-content2">{alertTxt}</span>
                    </div>
                </div>
                {/* * */}
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM24 26C22.9 26 22 25.1 22 24V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V24C26 25.1 25.1 26 24 26ZM26 34H22V30H26V34Z" fill="#E92C2C" />
                </svg>
            </div>}


        </div>
    )
}
