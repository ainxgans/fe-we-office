import {Swiper, SwiperSlide} from "swiper/react";
import {City} from "../types/type.ts";
import CityCard from "../components/CityCard.tsx";
import {useEffect, useState} from "react";
import * as axios from "axios";


export default function BrowseCityWrapper() {
    const [cities, setCities] = useState(<City[]>([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(<string | null>(null))
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/cities",{
            headers:{
                "X-API-KEY":"dtfyguhijosedrtfgyhuj",
            },
        })
            .then((response) => {
                console.log(response.data.data)
                setCities(response.data.data)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
    }, []);
        if (loading) {
            return <p>Loading...</p>
        }
        if (error) {
            return <p>{error}</p>
        }
    });
    return (
        <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
            <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    You Can Choose <br/>
                    Our Favorite Cities
                </h2>
                <a
                    href="#"
                    className="rounded-full rounded-full py-3 px-5 bg-white font-bold"
                >
                    Explore All City
                </a>
            </div>
            <div className="swiper w-full">
                <div className="swiper-wrapper">
                    <Swiper direction={"horizontal"} spaceBetween={30} slidesPerView={"auto"}
                            slidesOffsetBefore={30}
                            slidesOffsetAfter={30}>
                        {cities.map((city)=> (

                        <SwiperSlide key={city.id}
                            className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                            <CityCard city={city}></CityCard>
                        </SwiperSlide>

                        ))}
                    </Swiper>
                </div>
            </div>
        </section>

    )
}