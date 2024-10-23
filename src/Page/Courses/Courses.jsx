import { useEffect, useState } from "react";
import CourseData from "./CourseData";
import useAxiosPublic from "../../Hooks/useAxiosPublic";



const Courses = () => {
    const axiosPublic = useAxiosPublic()
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axiosPublic.get('/get-course-list').then((res) => {
            setCourses(res.data.courseData)
        }).catch(e => {
            console.log(e)
        })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    courses?.map(data => <CourseData key={data.id} data={data}></CourseData>)
                }
            </div>
        </div>
    );
};

export default Courses;