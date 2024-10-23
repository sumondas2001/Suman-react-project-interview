/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";

const Cart = () => {
    const { id } = useParams();
    const [courses, setCourses] = useState([]);
    const [filterData, setFilterData] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [mines, setMines] = useState(0);
    const [plus, setPlus] = useState(0);

    useEffect(() => {
        axios.get('https://itder.com/api/get-course-list')
            .then(res => {
                setCourses(res.data?.courseData || []);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    useEffect(() => {

        const filteredCourse = courses.find(p => p.id === parseInt(id));
        setFilterData(filteredCourse);
        if (filteredCourse) {
            setMines(filteredCourse.discount_price);
            setPlus(filteredCourse.discount_price);
        }
    }, [courses, id]);

    const handleMines = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setMines(mines - filterData?.discount_price);
        }
    };

    const handlePlus = () => {
        setQuantity(quantity + 1);
        setPlus(plus + filterData?.discount_price);
    };



    return (
        <div className="m-mt_16px">
            <h1 className="text-sm text-start md:text-text_xl lg:py-0 font-bold">Cart</h1>
            <div className="pt-p_16px">
                <div className="lg:flex items-start gap-3">
                    <div className="w-full lg:w-[58%] bg-white border-2">
                        <table className="overflow-x-auto w-full">
                            <thead>
                                <tr className="border-b-4 border-gray-300">
                                    <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">Course</th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">Price</th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">Quantity</th>
                                    <th className="text-[14.4px] font-bold p-[7px] text-black">Sub Total</th>
                                </tr>
                            </thead>
                            <tbody className="overflow-x-auto ">
                                <tr className="border-b border-gray-300 overflow-x-auto">
                                    <td>
                                        <div className="flex items-center justify-center ">
                                            <div className="w-[20%] text-center flex items-center justify-center ">
                                                <RiDeleteBin5Line className="text-xl hover:text-footer_color cursor-pointer" />
                                            </div>
                                            <div className="flex flex-col text-center justify-center items-center py-2 w-[80%]">
                                                <div className="mask">
                                                    <img className="h-[40px] w-[70px]" src={filterData?.photo} alt='Course' />
                                                </div>
                                                <p className="text-[14.4px] px-[7px] text-center flex ">
                                                    {filterData?.course_name} <span className="hidden lg:flex ">- unit name</span>
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                            {filterData?.discount_price} Tk
                                        </p>
                                    </td>
                                    <td>
                                        <div className="flex justify-center">
                                            <div className="border">
                                                <button onClick={handleMines} className="px-4 w-[30px] font-bold my-1.5">
                                                    -
                                                </button>
                                            </div>
                                            <div className="border-y">
                                                <input
                                                    type="number"
                                                    value={quantity} // Bind quantity to the state
                                                    readOnly
                                                    className="font-bold w-[30px] lg:w-[60px] text-center mx-auto h-full"
                                                />
                                            </div>
                                            <div className="border">
                                                <button onClick={handlePlus} className="px-4 w-[30px] font-bold my-1.5">
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                            {filterData?.discount_price * quantity} Tk
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="lg:w-[41%] bg-white border-2 ">
                        <div className="px-[30px]">
                            <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">Cart Summary</h2>
                            <div className="py-3 flex justify-between border-b border-gray-300">
                                <p className="text-black font-bold">Total Price</p>
                                <p className="text-black font-bold">
                                    {filterData?.discount_price * quantity} Tk
                                </p>
                            </div>
                            <Link
                                to={`/cart/checkout`}
                                state={"bdt"}
                                className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4 block text-center mx-auto w-full"
                            >
                                PROCEED TO CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
