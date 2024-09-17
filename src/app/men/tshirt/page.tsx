"use client"
import Image from "next/image"
import React from "react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import s1 from "../tshirt/photos/tshirt1.webp"
import s2 from "../tshirt/photos/tshirt2.webp"
import s3 from "../tshirt/photos/tshirt3.webp"
import s4 from "../tshirt/photos/tshirt4.webp"
import s5 from "../tshirt/photos/tshirt5.webp"
import s6 from "../tshirt/photos/tshirt6.webp"

function page() {
  return (
    <div className="min-h-screen bg-neutral-950 dark:bg-dot-white/[0.2] py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        T-Shirts
      </h1>
      <div className="flex flex-wrap justify-center">
        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Loose fit pleated
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men regular use tshirt for loungewear
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s1}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"/"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Loose fit printed
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men round neck printed tshirt for casual wear
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s2}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"/"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Loose fit printed
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men tshirt for loungewear or casual wear
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s3}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"/"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Loose fit printed
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men dark blue tshirt for travel
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s4}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"/"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Regular fit ribbed polo
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men alicewhite tshirt for chic office look
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s5}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"/"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold "
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var m-4">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white font-montserrat"
            >
              Slim fit textured polo
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Men black buttoned shirt for casualwear
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src={s6}
                height={200}
                width={500}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="night dress"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl text-2x-l font-normal dark:text-white font-adlam"
              >
                Rs.1999
              </CardItem>
              <Link href={"https://www.youtube.com/watch?v=EcHQ_qnzp28"}>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Buy
                </CardItem>
              </Link>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  )
}

export default page
