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
        const response = await axios.get("http://cms.saygon-park.com/api/logos/2?populate=*");
        setLogo(response.data.data.attributes.picture.data.attributes.url);
    }
    
    return(
        <>
        <Head>
            <title>{props.title_page}</title>
        </Head>
        <div>
            <MainNavbar logo={`http://cms.saygon-park.com`+logo} active_page={props.active_page}/>
            <div className="mb-5 bg-amber-50">
                {props.children}
            </div>
            <MainFooter logo={`http://cms.saygon-park.com`+logo}/>
        </div>
        </>
    );
}