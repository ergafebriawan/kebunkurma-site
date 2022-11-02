import { HiArrowCircleRight } from "react-icons/hi";
export default function Wahana() {
    return (
        <>
            <section className="min-w-full pt-5 pb-10 bg-lime-600">
                <h2 className="my-3 text-2xl font-bold text-center text-amber-200">Wahana</h2>
                <div className="md:mx-52 sm:mx-10">

                    <ItemWahana
                        right={false}
                        image="http://cms.saygon-park.com/uploads/IMG_5520_42247670ae.JPG?updated_at=2022-10-02T08:44:39.262Z"
                        name="Sepeda Udara"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <ItemWahana
                        right={true}
                        image="http://cms.saygon-park.com/uploads/IMG_9691_686b9b2e2a.JPG?updated_at=2022-10-02T08:51:57.326Z"
                        name="Oemah Joengkir"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <ItemWahana
                        right={false}
                        image="http://cms.saygon-park.com/uploads/IMG_20210721125616_6f82fbc40f.jpg?updated_at=2022-10-02T08:51:51.612Z"
                        name="ATV"
                        desc="Ea anim do officia sit cupidatat cillum occaecat. Magna voluptate et dolor irure sunt adipisicing mollit aliqua magna est. "
                    />

                    <div className="flex justify-center mt-10 text-amber-200">
                        <a href="/map" className="flex items-center space-x-1 hover:text-lime-400">
                            <span className="text-xl font-semibold hover:decoration-slice">Lihat lebih banyak </span> <HiArrowCircleRight size={25} />
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
}

function ItemWahana(props) {
    return (
        <>
            <div className="flex items-center p-2 rounded-lg">
                {props.right == false ?
                    <>
                        <div>
                            <div className="rounded-lg aspect-square w-48 bg-amber-300"></div>
                            <div className="absolute w-10 translate-x-52 rounded-lg aspect-square -mt-56 bg-amber-700"></div>
                            <div className="absolute w-48 overflow-hidden translate-x-6 translate-y-6 rounded-lg ring-2 ring-amber-700 -mt-48">
                                <img className="object-cover aspect-square" src={props.image} alt="wahana" />
                            </div>
                        </div>
                        <div className="mx-10">
                            <span className="text-2xl font-semibold text-amber-200">{props.name}</span>
                            <article>
                                <p className="text-amber-100 text-md">{props.desc}</p>
                            </article>
                        </div>
                    </>
                    :
                    <>
                        <div className="mx-10">
                            <div className="text-2xl font-semibold text-right text-amber-200">{props.name}</div>
                            <article className="text-right">
                                <p className="text-amber-100 text-md">{props.desc}</p>
                            </article>
                        </div>
                        <div>
                            <div className="rounded-lg aspect-square w-48 bg-amber-300"></div>
                            <div className="absolute w-10 -translate-x-10 rounded-lg aspect-square -mt-56 bg-amber-700"></div>
                            <div className="absolute w-48 overflow-hidden -translate-x-6 translate-y-6 rounded-lg ring-2 ring-amber-700 -mt-48">
                                <img className="object-cover aspect-square" src={props.image} alt="wahana" />
                            </div>
                        </div>
                    </>
                }
            </div>
        </>
    );
}