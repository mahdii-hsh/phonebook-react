import React from 'react'
import Navbar from './Navbar'

const persons = [{
    name: "Ramin Hashemi",
    age: 20,
    about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet nobis deleniti fugiat iste maiores itaque quas quos dolore ex nulla.",
    imageSrc: "https://www.eligasht.com/Blog/wp-content/uploads/2022/03/nature-of-iran.jpg"
},
{
    name: "Shahin Rezaei",
    age: 19,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam unde minus? Illo aliquam ipsa facere.",
    imageSrc: "https://cdn.nody.ir/files/2021/07/03/nody-%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B9%DA%A9%D8%B3-%D9%87%D8%A7%DB%8C-%D8%B2%DB%8C%D8%A8%D8%A7-%D8%A7%D8%B2-%D8%B7%D8%A8%DB%8C%D8%B9%D8%AA-%D8%A8%D8%A7-%DA%A9%DB%8C%D9%81%DB%8C%D8%AA-hd-1625288775.jpg"
}, {
    name: "Arash Naghavi",
    age: 26,
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed. Veniam fugit tempora, itaque magnam inventore nihil optio accusantium, nostrum, voluptatem porro sint quos praesentium rerum? Repellendus et repellat sapiente. Sit.",
    imageSrc: "https://api2.zoomit.ir/media/green-wilklife-living-daylight-658f02b7494c1ffd7082b5bf?w=1920&q=80"
}]

export default function Main() {
    return (
        <div className='conteiner mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 text-center '>
            <Navbar />
            {persons.map(person => (
                <div key={person.name} className='mx-6 my-24 col-span-1 md:col-span-2 md:flex md:items-center'>
                    <img src={person.imageSrc}
                        alt={`${person.name} ...`}
                        className='rounded-xl w-full md:w-1/2' />
                    <div className='w-full md:w-1/2'>
                        <h2 className='font-black text-2xl md:text-4xl my-4'>Name : {person.name}</h2>
                        <h5 className='text-xl mb-2 md:text-2xl'>Age : {person.age}</h5>
                        <p className='text-slate-500 md:text-xl mx-4'>{person.about}</p>
                    </div>
                    

                </div>
            ))}
        </div>
    )
}
