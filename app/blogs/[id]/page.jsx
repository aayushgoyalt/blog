"use client";
import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import { useParams } from "next/navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import axios from "axios";

const Page = () => {
  const [data, setData] = useState(null);

  const actualparams = useParams();

  const fetchBlogData = async () => {
    const res = await axios.get("/api/blog", {
      params: {
        id: actualparams.id,
      },
    });
    setData(res.data.blog);
  };

  useEffect(() => {
    fetchBlogData();
  }, [actualparams.id]); // Add params.id as a dependency

  return data ? (
    <>
      <div className="bg-gray-200 px-5 py-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data.authorImg}
            height={60}
            width={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className=" mx-5  max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          className="border-4 border-white"
          src={data.image}
          width={1280}
          height={720}
          alt=""
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
        <p>{data.description}</p>
        <h3 className="my-8 text-[18px] font-semibold">
          Step 1 : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptat Pariatur voluptate enim{" "}
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          architecto necessitatibus veritatis ut beatae{" "}
        </p>
        <h3 className="my-8 text-[18px] font-semibold">
          Step 2 : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptat Pariatur voluptate enim{" "}
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          architecto necessitatibus veritatis ut beatae{" "}
        </p>
        <h3 className="my-8 text-[18px] font-semibold">
          Step 3 : Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Voluptat Pariatur voluptate enim{" "}
        </h3>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          architecto necessitatibus veritatis ut beatae{" "}
        </p>
        <div className="my-24">
          <p className="text-black font-semibold my-4">
            share this on social media
          </p>
          <div className="flex">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
