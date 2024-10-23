

const CourseData = ({ data }) => {
     const { course_name, discount_price, photo, regular_price, } = data;
     console.log(data)
     return (
          <div className="m-mt_16px">






               <div className=" bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="relative">
                         <img src={photo} alt="" />
                         <div className="absolute top-0 left-0 p-2">
                              <h3 className="text-white text-xl font-bold">Data Entry</h3>
                         </div>
                    </div>
                    <div className="">
                         <h2 className="text-gray-800 text-lg font-semibold mb-2">{course_name}</h2>
                         <div className="flex items-center justify-between mb-4">

                              <span className="flex text-blue-500 text-md">★★★★★</span>
                              <span className=" text-gray-600 text-base font-bold">{data.trainer_data.name}</span>
                         </div>
                         {/* <div className="flex gap-2 mb-4 flex-wrap">
                                {['Photography', 'Light set up', 'Camera angle', 'Self Development'].map((tag) => (
                                    <span key={tag} className="bg-yellow-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div> */}
                         <p className="text-gray-600 text-md mb-4">
                              Course Details <span className="text-blue-500"><button>Show Details</button></span>
                         </p>
                         <hr />
                         <div className="mt-4 flex justify-between items-center">
                              <div>
                                   <span className="line-through text-gray-400 text-sm">Tk {regular_price}</span>
                                   <span className="text-green-600 text-md font-bold ml-2">-70% (calculate from regular-discount price)</span>
                                   <span className="text-black text-lg font-bold ml-2">Tk {discount_price}</span>
                              </div>
                              {/* <span className="text-green-600 text-sm">Earn Tk 48</span> */}
                         </div>
                         <div className="mt-4 flex gap-2">
                              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-500 w-full font-bold text-md">Add To Cart</button>

                         </div>
                    </div>
               </div>

          </div>

     );
};

export default CourseData;