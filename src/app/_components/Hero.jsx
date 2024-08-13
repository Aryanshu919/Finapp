import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Hero(){
    return (
        <section>
            <div className="flex flex-col overflow-hidden">
                <ContainerScroll
                    titleComponent={
                        <>
                        <h1 className="text-4xl font-semibold text-black dark:text-white">
                        Manage you Money with AI-Driven Personal <br />
                        <span className="text-4xl text-blue-800 md:text-[6rem] font-bold mt-1 leading-none">
                            Financial Advisor
                        </span>
                        </h1>
                    </>
                    }
                    >
                    <Image
                    src={`/linear.webp`}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                    />
                </ContainerScroll>
            </div>
        </section>
      );
}