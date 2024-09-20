import { useFormik } from 'formik'
import './login.css'
import React from 'react'
import { LoginSchema } from '../schemas'
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

    const navigate =useNavigate()

    const handleNavigate = () =>{
        navigate('/')
    } 

    const onSubmit =  (values,actions)=>{
        console.log(values)
        actions.resetForm()
        setTimeout(handleNavigate,3000)  
    }

    const { values,errors,touched,isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema : LoginSchema,
        onSubmit,
    })

    console.log(errors)
    return (
        <div className='container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-5 xl:grid-cols-10 items-center '>
            <div className='mainBox bg-white col-span-1 md:col-span-3 md:col-start-2 xl:col-span-4 xl:col-start-4 m-9 border border-emerald-500'>
                <h1 className='text-emerald-500 text-3xl font-bold text-center mt-4'>ورود</h1>
                <p className='text-center mt-2 text-slate-500'>لطفا نام کاربری (ایمیل) و رمز عبور را وارد کنید</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group gap-0 px-3">
                        <div className="form-field mt-1">
                            <label className="text-right text-md">آدرس ایمیل</label>

                            <input type="email"
                                id='email'
                                className={errors.email && touched.email ? "input max-w-full caret-pink-500 border border-pink-500" : "input max-w-full caret-emerald-500"}
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email && <span className="form-label-alt text-right text-pink-500">{errors.email}</span>}
                        </div>
                        <div className="form-field mt-0">
                            <label className="text-right text-md">رمز عبور</label>
                            <div className="form-control">
                                <input type="password"
                                    id='password'
                                    className={errors.password && touched.password ? "input max-w-full caret-pink-500 border border-pink-500" : "input max-w-full caret-emerald-500"}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            {errors.password && touched.password && <span className="form-label-alt text-right text-pink-500 mb-3">{errors.password}</span>}
                        </div>
                        <div className="form-field">
                            <div className="form-control justify-between">
                                <label className="form-label">
                                    <a className="link link-underline-hover text-emerald-500  text-sm mt-2">فراموشی رمز عبور؟</a>
                                </label>
                                <div className="flex gap-2 mt-2">
                                    <a href="#">من را به خاطر بسپار!</a>
                                    <input type="checkbox" className="checkbox  checked:bg-emerald-500 checked:border-emerald-600" />
                                </div>
                            </div>
                        </div>
                        <div className="form-field pt-5">
                            <div className="form-control justify-center">
                                <button type="submit" className={isSubmitting ? "disabled" : "btn bg-emerald-500  text-xl text-white"}>Sign In</button>
                            </div>
                        </div>

                        <div className="form-field">
                            <div className="form-control justify-center">
                                <Link to='/createuser' className="link link-underline-hover text-emerald-500 my-3 text-md">ساخت حساب کاربری جدید</Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
