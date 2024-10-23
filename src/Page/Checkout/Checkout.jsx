import React, { useContext } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../ContextAPIs/CartProvider";

const Checkout = () => {
    const { itemCount, cartItem, setItemCount, setOrderUser } = useContext(CartContext)

    const navigate = useNavigate()


    const handleMinus = () => {
        if (itemCount > 1) {
            setItemCount(itemCount - 1)
        }
    };

    const handlePlus = () => {
        setItemCount(itemCount + 1)
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()

        setOrderUser({
            fullName: e.target.fullName.value,
            formNo: e.target.formNo.value,
            parentName: e.target.parentName.value,
            parentNumber: e.target.parentNumber.value,
            school: e.target.school.value,
            jobInfo: e.target.jobInfo.value,
            email: e.target.email.value,
            gender: e.target.gender.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            nid: e.target.nid.value,
            mobile: e.target.mobile.value,
            guardianName: e.target.guardianName.value,
            dob: e.target.dob.value,
            bloodGroup: e.target.bloodGroup.value,
        })

        navigate('/order-details')
    }


    return (
        <div className="  mt-5 border mx-2">
            <div className="bg-[#6f42c1] text-white p-6 text-center mb-5">
                <h2 className='text-5xl font-bold'>Trainee Admission Form</h2>
            </div>
            <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleFormSubmit}>
                {/* Trainee Information Section */}
                <div className="form-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="fullName" className="block font-semibold text-base mb-2">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="fullName"
                            />
                        </div>
                        <div>
                            <label htmlFor="formNo" className="block font-semibold text-base mb-2">Form no:</label>
                            <input
                                type="text"
                                id="formNo"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="formNo"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="parentName" className="block font-semibold text-base mb-2">Father/Mother Name:</label>
                            <input
                                type="text"
                                id="parentName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="parentName"
                            />
                        </div>
                        <div>
                            <label htmlFor="parentNumber" className="block font-semibold text-base mb-2">Number:</label>
                            <input
                                type="text"
                                id="parentNumber"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="parentNumber"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="school" className="block font-semibold text-base mb-2">School/College:</label>
                            <input
                                type="text"
                                id="school"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="school"
                            />
                        </div>
                        <div>
                            <label htmlFor="jobInfo" className="block font-semibold text-base mb-2">Job Information:</label>
                            <input
                                type="text"
                                id="jobInfo"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="jobInfo"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="email" className="block font-semibold text-base mb-2">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="email"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender" className="block font-semibold text-base mb-2">Gender:</label>
                            <select
                                id="gender"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="gender"
                            >
                                <option value="" disabled selected>Select Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Others">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="presentAddress" className="block font-semibold text-base mb-2">Present Address:</label>
                            <textarea
                                id="presentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="presentAddress"
                            />
                        </div>
                        <div>
                            <label htmlFor="permanentAddress" className="block font-semibold text-base mb-2">Permanent Address:</label>
                            <textarea
                                id="permanentAddress"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="permanentAddress"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="nid" className="block font-semibold text-base mb-2">NID Number:</label>
                            <input
                                type="text"
                                id="nid"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="nid"
                            />
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block font-semibold text-base mb-2">Mobile No:</label>
                            <input
                                type="text"
                                id="mobile"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="mobile"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="guardianName" className="block font-semibold text-base mb-2">Local Guardian’s Name:</label>
                            <input
                                type="text"
                                id="guardianName"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="guardianName"
                            />
                        </div>
                        <div>
                            <label htmlFor="dob" className="block font-semibold text-base mb-2">Date of Birth:</label>
                            <input
                                type="date"
                                id="dob"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="dob"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="bloodGroup" className="block font-semibold text-base mb-2">Blood Group:</label>
                            <select
                                id="bloodGroup"
                                className="w-full border border-gray-300 rounded-md p-2"
                                name="bloodGroup"
                            >
                                <option value="" disabled selected>Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="m-mt_16px">


                    <div className="pt-p_16px">
                        <div className="lg:flex items-start gap-3">
                            <div className="w-full lg:w-[58%] bg-white border-2">
                                <table className=" overflow-x-auto  w-full">
                                    <thead>
                                        <tr className="border-b-4 border-gray-300">
                                            <th className="text-[14.4px] w-6/12 font-bold p-[7px] text-black">
                                                Course
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Price
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Quantity
                                            </th>
                                            <th className="text-[14.4px] font-bold p-[7px] text-black">
                                                Sub Total
                                            </th>
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
                                                            <img className="h-[40px] w-[70px]" src={cartItem?.photo} alt='Course' />
                                                        </div>
                                                        <p className="text-[14.4px] px-[7px] text-center flex ">
                                                            {cartItem?.course_name} <span className="hidden lg:flex ">- unit name</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {cartItem?.discount_price} Tk
                                                </p>
                                            </td>
                                            <td>
                                                <div className="flex justify-center">
                                                    <div className="border">
                                                        <button type="button" onClick={handleMinus} className="px-4 w-[30px] font-bold my-1.5">
                                                            -
                                                        </button>
                                                    </div>
                                                    <div className="border-y">
                                                        <input
                                                            type="number"
                                                            value={itemCount}
                                                            readOnly
                                                            className="font-bold w-[30px] lg:w-[60px] text-center mx-auto h-full"
                                                        />
                                                    </div>
                                                    <div className="border">
                                                        <button type="button" onClick={handlePlus} className="px-4 w-[30px] font-bold my-1.5">
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <p className="text-[14.4px] font-bold p-[7px] text-black text-center">
                                                    {cartItem?.discount_price * itemCount} Tk
                                                </p>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            <div className="lg:w-[41%] bg-white border-2 ">
                                <div className="px-[30px]">
                                    <h2 className="font-bold text-start text-text_medium pt-2 pb-1 border-b-2 border-black">
                                        Cart Summary
                                    </h2>
                                    <div className="py-3 flex justify-between border-b border-gray-300">
                                        <p className="text-black font-bold">Total Price</p>
                                        <p className="text-black font-bold">
                                            {cartItem?.discount_price * itemCount} Tk
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        // state={"bdt"}
                                        className="font-medium text-black mb-2 border-2 hover:bg-[#D2C5A2] duration-300 py-2 px-4  block text-center mx-auto w-full"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>


        </div >
    );
};

export default Checkout;
