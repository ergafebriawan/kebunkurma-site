import axios from "axios";
import { useEffect, useState } from "react";
import {HiArrowCircleRight} from "react-icons/hi";

export default function Fasilitas() {
    const [product, setProduct] = useState([]);
    const url_main = "http://cms.saygon-park.com"

    useEffect(() => {
        getProduct()
    }, []);

    const getProduct = async () => {
        const response = await axios.get("http://cms.saygon-park.com/api/product-kebun-kurmas?populate=*")
        setProduct(response.data.data);
    };

    return (
        <>
            <section className="mt-10 mb-20 sm:mx-14 md:mx-64">
                <h2 className="my-3 text-2xl font-bold text-center text-lime-800">Product Kebun Kurma</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-1">
                    {product.map((data) =>(
                        <ItemsProduct 
                        name={data.attributes.nama_product} 
                        image={url_main+data.attributes.gambar.data.attributes.formats.medium.url}
                        price={data.attributes.harga}
                        category={data.attributes.kategori}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

function ItemsProduct(props) {
    return (
        <>
            <div className="flex flex-col rounded-lg ring-2 ring-lime-800 overflow-hidden hover:scale-110 duration-150">
                <img src={props.image} alt={props.name} className="w-full aspect-square object-cover"/>
                <div className="px-5 pt-3 pb-5">
                    <h3 className="text-xl font-semibold text-lime-800">{props.name}</h3>
                    <h4 className="text-md text-lime-700">Rp{props.price},-</h4>
                    <h5 className="text-sm text-lime-800 font-semibold">Category: {props.category}</h5>
                    <button className="flex mt-3 bg-lime-800 text-amber-200 font-semibold rounded-full py-2 px-5 hover:bg-lime-700 focus:ring-lime-900">Lihat Product <HiArrowCircleRight size={25} /></button>
                </div>
            </div>
        </>
    );
}