import MainFooter from "./MainFooter";
import MainNavbar from "./MainNavbar";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Template(props){
    const [logo, setLogo] = useState([]);

    useEffect(() => {
        getLogo()
    },[]);

    const getLogo = async () => {
        const response = await axios.get("https://cms.saygon-park.com/api/logos/3?populate=*");
        setLogo(response.data.data.attributes.picture.data.attributes.formats.thumbnail.url);
    }
    
    return(
        <>
        <Head>
            <title>{props.title_page}</title>
        </Head>
        <div>
            <MainNavbar logo={`https://cms.saygon-park.com`+logo} active_page={props.active_page}/>
            <div className="mb-5 bg-amber-50">
                {props.children}
            </div>
            <MainFooter logo={`https://cms.saygon-park.com`+logo}/>
        </div>
        </>
    );
}