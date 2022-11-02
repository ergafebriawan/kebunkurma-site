import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube, FaTiktok } from "react-icons/fa"

export default function MainFooter(props) {
    return (
        <>
            <footer className="bg-gray-800 dark:bg-gray-900">
                <div className="grid w-full md:grid-cols-2 sm:grid-cols-1">
                    <div className="mt-10 ml-10">
                        <a href="/" className="flex items-center">
                            <img src={props.logo} className="h-20 mr-3 object-cover aspect-square" alt="Logo" />
                            <div>
                                <h2 className="self-center text-2xl font-semibold text-white whitespace-nowrap">Wisata Kebun Kurma</h2>
                                <p className="text-sm font-semibold text-gray-200">PT. Duta Putri Bersaudara</p>
                                <p className="text-sm font-light text-gray-200">Ds. Karanglo, Sukorejo, Pasuruan Jawa Timur <br/>67161</p>
                            </div>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 sm:mx-14 md:mx-0">
                        <SiteMaps title="Portal Sites">
                            <ItemsSitemaps name="Saygon Waterpark" />
                            <ItemsSitemaps name="Wisata Kebun Kurma" />
                            <ItemsSitemaps name="Saygon Hotel & Cottage" />
                            <ItemsSitemaps name="Convention Hall HMR" />
                            <ItemsSitemaps name="Heroes" />
                        </SiteMaps>
                        <SiteMaps title="Reservasi">
                            <ItemsSitemaps name="Hotline" />
                            <ItemsSitemaps name="Handphone" />
                            <ItemsSitemaps name="Whatsapp" />
                            <ItemsSitemaps name="Marketing" />
                        </SiteMaps>
                        <SiteMaps title="Legal">
                            <ItemsSitemaps name="Privacy Policy" />
                            <ItemsSitemaps name="Licensing" />
                            <ItemsSitemaps name="Terms &amp; Conditions" />
                        </SiteMaps>
                    </div>
                </div>
                <PanelCopyright />
            </footer>
        </>
    );
}

function SiteMaps(props) {
    return (
        <>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">{props.title}</h2>
                <ul className="text-gray-500 dark:text-gray-400">
                    {props.children}
                </ul>
            </div>
        </>
    );
}

function ItemsSitemaps(props) {
    return (
        <>
            <li className="mb-4">
                <a href="#" className=" hover:underline">{props.name}</a>
            </li>
        </>
    );
}

function PanelCopyright() {
    return (
        <>
            <div className="px-4 py-6 bg-gray-900 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com/">PT Duta Putri Bersaudara™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                        <FaFacebook />
                        <span className="sr-only">Facebook page</span>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                        <FaInstagram />
                        <span className="sr-only">Instagram page</span>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                        <FaTiktok />
                        <span className="sr-only">Tiktok page</span>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                        <FaYoutube />
                        <span className="sr-only">Youtube</span>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                        <FaWhatsapp />
                        <span className="sr-only">Whatsapp</span>
                    </a>
                </div>
            </div>
        </>
    );
}