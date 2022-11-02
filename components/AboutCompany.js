import axios from "axios";
import { useEffect, useState } from "react";

export default function AboutCompany(){
    const [about, setAbout] = useState([]);

    useEffect(() => {
        getAbout()
    }, []);

    const getAbout = async () => {
        const response = await axios.get("http://cms.saygon-park.com/api/abouts/2");
        setAbout(response.data.data.attributes.content_about);
    };
    return(
        <>
        <section className="my-10">
            <h2 className="mt-3 mb-2 text-2xl font-bold text-center text-lime-800">Tentang Kami</h2>
            <hr className="mb-5 border border-gray-400 sm:mx-14 md:mx-32"/>
            <article className="sm:mx-14 md:mx-32">
                <p className="text-center text-lime-800">{about}</p>
            </article>
        </section>
        </>
    );
}