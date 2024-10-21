import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useUser from "../../Security/useUser";
import { IoIosImages } from "react-icons/io";
import { useState } from "react";
import './image.css'
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Registration = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [, , refetch] = useUser();
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");

  const OptionGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];


  const convertToBase64 = (e) => {

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const clearImage = (e) => {
    e.preventDefault();
    setImage(""); // Clear image state
  };


  const handleLogin = async (e) => {
    e.preventDefault();
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const info = { mobile: phone, password };
    try {
      const res = await axiosPublic.post("/register", info);
      if (res.data) {
        toast.success(res.data.message);
        localStorage.setItem("token", res.data.access_token);
        navigate("/");
        refetch();
      }
    } catch (err) {
      toast.error(err.response.data.message);
    }
  };
  return (
    <div className=" mt-mt_large mx-mt_medium ">
      <div className="w-full">
        <div className="w-full card shadow-xl bg-base-100 relative">
          <div className="font-bold text-center mt-mt_large uppercase text-text_xl">
            <h1>Trainee</h1>
            <h1>Admission Form</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2">

              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Full Name </span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Student Number</span>
                </label>
                <input
                  type="number"
                  name="student_number"
                  placeholder="Student Number"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />

              </div>

              <div className="border">
                {/* image */}
                <div className="flex justify-between items-end mb-2 lg:mb-4 ">
                  <div className="md:w-[300px] h-[150px] pt-2">
                    {image == "" || image == null ? (
                      <label
                        id="uploadImage"
                        htmlFor="uploadBtn"
                        className="h-[100%] w-[100%] text-start"
                      >
                        <IoIosImages className="h-[100%] w-[100%] text-gray-600 dark:text-white" />
                      </label>
                    ) : (
                      <img
                        src={image}
                        className="w-[100%] h-[100%] p-2"
                        alt=""
                      />
                    )}
                    <span className="text-lg md:text-xs xl:text-base pl-2"></span>
                    <input
                      type="file"
                      id="uploadBtn"
                      onChange={convertToBase64}
                    />
                  </div>
                  <div className="text-2xl md:pr-8 pb-2 w-[50%] text-end">
                    <button
                      className="text-gray-600 dark:text-white"
                      onClick={clearImage}
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Father/Mother Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Father/Mother Name"
                  name="father_mother_name"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Parents Number </span>
                </label>
                <input
                  type="number"
                  placeholder="Parents Number"
                  name="parent_number"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">School/College</span>
                </label>
                <input
                  type="text"
                  placeholder="School/College"
                  name="school_college"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Job Information </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Job Information"
                  name="job_info"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Email </span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col flex-1 ">
                <label className="text_color text_font font-bold mb-[4px]">
                  Gender
                </label>
                <div className="relative">
                  <Menu as="div" className="relative inline-block w-full text-left">
                    <Menu.Button className="inline-flex w-full justify-between input_field_h border font-medium text-text_medium border-footer_color px-4 py-2  ring-1 ring-gray-900/10">
                      {gender || "Select Gender"}
                      <ChevronDownIcon
                        className="-mr-1 ml-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Menu.Items className="absolute right-0 z-10 w-full border origin-top-right border-footer_color bg-white font-bold  ring-gray-900/10 ">
                      <div className="p-1 ">
                        {OptionGender.map((option) => (
                          <Menu.Item key={option.value}>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={() => setGender(option.value)}
                                className={`${active ? "bg-footer_color " : "text-black "
                                  } group flex  items-center w-full py-2  font-medium text-text_medium`}
                              >
                                {option.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Menu>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Present Address </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Present Address"
                  name="present_address"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Permanent Address </span>
                </label>
                <textarea
                  type="text"
                  placeholder="Permanent Address"
                  name="present_address"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">NID Number </span>
                </label>
                <input
                  type="number"
                  placeholder="NID Number"
                  name="NID_number"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Local Guardian&apos;s Name </span>
                </label>
                <input
                  type="number"
                  placeholder="NID Number"
                  name="NID_number"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold">Local Guardian&apos;s Number </span>
                </label>
                <input
                  type="number"
                  placeholder="NID Number"
                  name="NID_number"
                  className="border h-12 bg-gray-100 focus:ring-0 px-4 focus:border w-full focus:outline-none"
                  required
                />
              </div>
            </div>


            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-primary text-xl rounded-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
