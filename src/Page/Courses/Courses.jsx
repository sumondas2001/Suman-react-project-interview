
import axios from "axios";
import { useEffect, useState } from "react";
import CourseData from "./CourseData";



const Courses = () => {
    const [courses, setCourses] = useState([]);
    const data = courses.courseData;
    console.log(data)
    useEffect(() => {
        fetch('https://itder.com/api/get-course-list')
            .then(res => res.json())
            .then(data => {
                setCourses(data)
                console.log(data)
            })

        // axios.get('https://itder.com/api/get-course-list')
        //     .then(res => {
        //         setCourses(res.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {
                    data?.map(data => <CourseData key={data.id} data={data}></CourseData>)
                }
            </div>
        </div>
    );
};

export default Courses;