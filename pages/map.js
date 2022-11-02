import Template from "../components/Template";
import Wahana from "../components/Wahana";

export default function Map(){
    return(
        <>
        <Template title_page="Map & Facility" active_page="fasilitas">
            <section>
                <div>
                    <h2 className="my-4 text-2xl font-bold text-center text-gray-800">Peta Saygon Waterpark</h2>
                    <div className="flex justify-center mb-10">
                        <img 
                        className="mx-10 rounded-lg shadow-lg sm:w-full md:w-2/3"
                        src="" 
                        alt="Peta Saygon Waterpark"
                        />
                    </div>
                </div>
                <Wahana/>
            </section>
        </Template>
        </>
    );
}