import axios from "axios";
export default function Gallery() {
    return (
        <>
            <section className="min-w-full pt-5 pb-16 bg-lime-600 sm:px-14 md:px-52">
                <h2 className="my-3 text-2xl font-bold text-center text-amber-200">Gallery</h2>
                <div className="flex justify-center">

                    <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-4">
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/IMG_20210721125616_6f82fbc40f.jpg?updated_at=2022-10-02T08:51:51.612Z"
                            alt="Gallery 1" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/IMG_9689_f0086e95ba.JPG?updated_at=2022-10-02T08:51:57.336Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/20180524_104523_693598b794.jpg?updated_at=2022-10-02T08:51:46.309Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/IMG_20210721125452_d0777b53da.jpg?updated_at=2022-10-02T08:51:36.472Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/IMG_9663_4790adb760.JPG?updated_at=2022-10-02T08:51:47.087Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/20180719_075812_64e53c38ba.jpg?updated_at=2022-10-02T08:51:40.427Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/IMG_8240_2d224dffb1.JPG?updated_at=2022-10-02T08:51:58.205Z"
                            alt="Gallery" />
                        <ItemsGallery
                            url="http://cms.saygon-park.com/uploads/20180719_075812_64e53c38ba.jpg?updated_at=2022-10-02T08:51:40.427Z"
                            alt="Gallery" />
                    </div>
                </div>
            </section>
        </>
    );
}

function ItemsGallery(props) {
    return (
        <>
            <img src={props.url} alt={props.alt} className="object-cover w-48 duration-200 rounded-lg aspect-square hover:scale-150" />
        </>
    );
}