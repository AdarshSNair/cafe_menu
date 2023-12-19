"use client"

import Image from 'next/image'
import { useSelector } from 'react-redux';
import CartButtons from './buttons';

const MenuItems = ({ dish_name, dish_image,dish_calories ,dish_description,dish_price,dish_currency,dish_id}) => {
    
    return (
        <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right">
                <tbody>
                    <tr>
                        <td className="p-4 md:w-1/2">
                            <h1 className='font-bold text-gray-900 dark:text-white text-lg'>{dish_name ?? ""}</h1>
                            <p>{dish_price ?? ""} {dish_currency ?? ""}</p>
                            <p>{dish_description ?? ""}</p>
                            <br />
                            <div className="flex items-center">
                            </div>
                            <CartButtons dish_id={dish_id}/>
                        </td>
                        <td className="hidden md:table-cell p-4">
                        </td>
                        <td className="p-4 md:w-1/4 font-semibold text-gray-900 dark:text-white text-base">
                            {dish_calories ?? ""} Calories
                        </td>
                        <td className="p-4 md:w-1/4">
                            <div className="overflow-hidden">
                                <Image src={dish_image ?? ""} className='h-48 w-96 object-cover' width={300} height={300} alt='Picture of the author' />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default MenuItems;