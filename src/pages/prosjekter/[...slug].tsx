import Head from "next/head";
import { NextPage } from "next/types";
import { formatPrice } from "../../utils";
import { IconArea, IconArrowRight, IconHouse, IconMapPin } from "../../components/icons";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Image from "next/image";
import useRegisterInterest from "../../hooks/useregisterinterest";
import ShareButton from "../../components/sharebutton";

const data = {
    title: 'Bakkbygrenda',
    image: 'https://d2ou9824qr5ucu.cloudfront.net/7ada5b9cc9536d1cc295bb2d537ff6b3.webp',
    shortDescription: 'NYE PRISER- 2 stk. 2-roms selveierleil. under oppføring på hhv. 36 og 50 kvm i Kolbotn sentrum. Selges hver for seg.',
    city: 'Flekkfjord',
    price_from: 4812510,
    price_to: 5562510,
    size_from: 50,
    size_to: 75,
    units_available: 7,
    units_total: 15,
};

const Project: NextPage = (): JSX.Element => {

    const { openRegisterInterestForm, RegisterInterestModal } = useRegisterInterest();

    return (
        <main className="h-full">
            <Head>
                <title>Prosjekter</title>
            </Head>
            <div className="flex flex-col min-h-full">
                <Header />
                <div className="flex-1 pb-12 flex flex-col gap-16">

                    <div className="flex flex-col lg:flex-col-reverse gap-8 lg:pt-16 lg:gap-16">
                        <div className="flex justify-center lg:px-8">
                            <div className="w-full max-w-[1440px]">
                                <div className="pb-[56%] lg:pb-[40%] bg-black w-full relative">
                                    <Image alt="" layout="fill" src={data.image} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center px-8">
                            <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-4">
                                <div className="flex flex-col gap-4 flex-1">
                                    <h1 className="text-4xl md:text-5xl">{data.title}</h1>
                                    <div className="flex items-center gap-2 uppercase text-sm"><IconMapPin /> {data.city}</div>
                                    <div>
                                        <ShareButton url={'https://google.com'} title={data.title} />
                                    </div>
                                </div>
                                <div className="lg:w-[60%] lg:pt-4">
                                    <div className="text-xl lg:text-2xl max-w-[45rem]">{data.shortDescription}</div>
                                    <div className="text-md lg:text-lg flex flex-col sm:flex-row sm:gap-8 mt-8">
                                        <span>kr {data.price_from && formatPrice(data.price_from)}{data.price_from && data.price_to ? ' - ' : ''}{data.price_to && formatPrice(data.price_to)}</span>
                                        <span className="mt-4 sm:mt-0 inline-flex gap-2"><span><IconArea /></span><span>{data.size_from} - {data.size_to} m<sup>2</sup></span></span>
                                        <span className="mt-3 sm:mt-0 inline-flex gap-2"><span><IconHouse /></span><span>{data.units_available}/{data.units_total} Leiligheter</span></span>
                                    </div>
                                    <div className="flex gap-4 mt-8">
                                        <button onClick={openRegisterInterestForm} className="bg-primary rounded-full text-white px-6 py-4">Meld interesse</button>
                                        <RegisterInterestModal />
                                        <button className="border rounded-full px-6 py-4 flex gap-2 hover:border-black"><IconArrowRight /> Se alle enheter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[200px] bg-black">
                        <script id="marketer-pp-embed-6f5rc" dangerouslySetInnerHTML={{ __html: '(function (p) {var s = window.document.createElement("script");s.src = p.a;s.setAttribute("data-project", p.b);s.setAttribute("data-company", p.c);s.setAttribute("data-runner-id", p.d);window.document.head.appendChild(s);})({"a":"https://d3g6ix8apt5w4m.cloudfront.net/embed-script.min.js","b":"ed686841-3b5a-42f7-8b35-94dacc3f2bc8","c":"22ea5ad8-1c58-4dfb-b699-5897408a90b6","d":"6f5rc"});' }} />
                    </div>


                </div>
                <Footer />
            </div>

        </main>
    )

};

export default Project