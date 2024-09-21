import { useFormik } from 'formik'
import React, { useState } from 'react'
import { CreateUserSchema } from '../schemas/index'
import api from '../api/axisApi'
import { useNavigate} from 'react-router-dom'
const txtCreate = {
    title: "ساخت حساب کاربری",
    description: "لطفا جهت ساخت حساب اطلاعات زیر را به دقت وارد کنید.",
    create: "ایجاد حساب",
    submiting : "...لطفا کمی صبر کنید",
    fName: "نام",
    lName: "نام خانوادگی",
    email: "ایمیل",
    password: "رمز عبور",
    confirmPassword: "تکرار رمز عبور"
}

export default function CreateUser() {

    const [newUser, setNewUser] = useState({})
    const navigate = useNavigate()

    const onSubmit = async (values,action) => {
        
        setNewUser({
            fName: values.fName,
            lName: values.lName,
            email: values.email,
            password: values.password
        })
        
        try {
            await api.post('/users', newUser)
        } catch (error) {
            if (error.response) {
                console.log(error.response.status)
            }
            else {
                console.log(`Err : ${error.message}`)
            }
        }
        await new Promise((resolve)=>setTimeout(resolve,3000))
        navigate('/login/'+values.fName+'-'+values.lName)

    }

    const { values, errors, isSubmitting, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            fName: "",
            lName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: CreateUserSchema,
        onSubmit
    })

    return (
        <div>
            <div className='container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-7 xl:grid-cols-5 px-8 items-center '>
                <div className='mainBox border px-4 border-emerald-500 col-span-1 md:col-span-5 md:col-start-2 xl:col-span-3 xl:col-start-2 bg-white'>
                    <h1 className='text-emerald-500 text-3xl font-bold text-center mt-4'>{txtCreate.title}</h1>
                    <p className='text-center my-2 text-slate-500'>{txtCreate.description}</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group grid grid-cols-1 md:grid-cols-4">
                            {/* fName */}
                            <div className="form-field md:col-span-2 order-1 md:order-2">
                                <label className="text-right text-md mr-3 ">{txtCreate.fName}</label>
                                <input
                                    type="text"
                                    id='fName'
                                    className={errors.fName && touched.fName ? "input max-w-full caret-red-500 border border-red-500 " : "input max-w-full caret-emerald-500"}
                                    value={values.fName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.fName && touched.fName && <span className="form-label-alt text-right text-red-500 mr-3">{errors.fName}</span>}
                            </div>

                            {/* lName */}
                            <div className="form-field md:col-span-2 order-2 md:order-1">
                                <label className="text-right text-md mr-3">{txtCreate.lName}</label>
                                <input
                                    type="text"
                                    id='lName'
                                    className={errors.lName && touched.lName ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                    value={values.lName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lName && touched.lName && <span className="form-label-alt text-right text-red-500 mr-3">{errors.lName}</span>}
                            </div>

                            {/* email */}
                            <div className="form-field md:col-span-2 md:col-end-4 order-3 md:order-3">
                                <label className="text-right text-md mr-3">{txtCreate.email}</label>
                                <input
                                    type="text"
                                    id='email'
                                    className={errors.email && touched.email ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <span className="form-label-alt text-right text-red-500 mr-3">{errors.email}</span>}
                            </div>

                            {/* password */}
                            <div className="form-field md:col-span-2 order-4 md:order-5">
                                <label className="text-right text-md mr-3">{txtCreate.password}</label>
                                <input
                                    type="password"
                                    id='password'
                                    className={errors.password && touched.password ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && touched.password && <span className="form-label-alt text-right text-red-500 mr-3">{errors.password}</span>}
                            </div>

                            {/* confirmPassword */}
                            <div className="form-field md:col-span-2 order-5 md:order-4">
                                <label className="text-right text-md mr-3">{txtCreate.confirmPassword}</label>
                                <input
                                    type="password"
                                    id='confirmPassword'
                                    className={errors.confirmPassword && touched.confirmPassword ? "input max-w-full caret-red-500 border border-red-500" : "input max-w-full caret-emerald-500"}
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmPassword && touched.confirmPassword && <span className="form-label-alt text-right text-red-500 mr-3">{errors.confirmPassword}</span>}
                            </div>

                            <div className="form-field pt-5 order-6 md:col-start-2 md:col-end-4 ">
                                <div className="form-control justify-center  my-3">
                                    <button type="submit"
                                     className="btn bg-emerald-500 text-white text-md font-semibold"
                                     disabled={isSubmitting}>
                                        {isSubmitting ? txtCreate.submiting :txtCreate.create}
                                    </button>
                                </div>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
