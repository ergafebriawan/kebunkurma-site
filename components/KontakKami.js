import { BsFillTelephoneFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
export default function KontakKami() {
    return (
        <>
            <section className="mt-10 pb-20 md:mx-64 sm:mx-14">
                <h2 className="my-3 text-2xl font-bold text-center text-lime-800">Kontak Kami</h2>
                <hr className="border-gray-300" />
                <div className="flex justify-center my-10 text-lime-700">
                    <div className="grid gap-3 sm:grid-cols-1 md:grid-cols-3">
                        <div className="flex items-center mx-3 sm:mb-10 md:mb-0">
                            <BsFillTelephoneFill size={40}/>
                            <div className="mx-5">
                                <div className="font-semibold">Hotline</div>
                                <div>(0343) 6755666</div>
                            </div>
                        </div>
                        <div className="flex items-center mx-3 sm:mb-10 md:mb-0">
                            <RiWhatsappFill size={40}/>
                            <div className="mx-5">
                                <div className="font-semibold">Whatsapp</div>
                                <div>+62 815-5541-2888</div>
                            </div>
                        </div>
                        <div className="flex items-center mx-3 sm:mb-10 md:mb-0">
                            <FaUser size={40}/>
                            <div className="mx-5">
                                <div className="font-semibold">Marketing</div>
                                <div>+62 815-5541-2888</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}