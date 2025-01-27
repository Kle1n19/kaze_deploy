import React from "react";
import Header from "../components/header/header";
import Image from "next/image";
import KazeLogo from "../../public/KazeLogo.svg";
import Footer from "../components/footer/footer";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Index = () => {
  return (
    <div className="overflow-x-hidden bg-black">
      <Header />
      <div className="bg-black h-screen relative">
        <div className="flex inset-0 items-center justify-center h-screen absolute">
          <Image
            src={KazeLogo}
            alt="Kaze Logo"
            width={370}
            height={370}
            className="z-10"
          />
        </div>
        <div>
          <p className="flex items-center justify-center h-screen inset-0 absolute z-20 text-[200px] font-bold text-white">
            Kaze
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-10">
          <p className="text-white font-bold bg-black px-6 text-[60px]">
            Your <span className="text-amber-500">key</span> to better renting
          </p>
        </div>
      </div>
      <div className="bg-black h-screen pt-36">
        <p className="font-bold text-[70px] text-white flex justify-center">
          Best choices right now
        </p>
        <div className=" flex justify-center">
          <div
            style={{
              width: "500px",
              height: "10px",
              backgroundColor: "gold",
              justifyContent: "center",
              display: "flex",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="flex justify-center">
          <div className="w-[50%] my-16">
            <Carousel autoplay arrows>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </div>
        </div>
        <div className=" flex justify-center ">
          <div
            style={{
              width: "500px",
              height: "10px",
              backgroundColor: "gold",
              justifyContent: "center",
              display: "flex",
              borderRadius: "5px",
            }}
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center bg-black text-white h-screen mt-10">
        <div className="flex flex-row justify-center items-center gap-11">
          <div className="m-0">
            <p className="font-bold text-amber-500 text-[50px] m-0">2K</p>
            <p className="font-bold m-0">
              rental agreements <br />
              signed in 2025
            </p>
          </div>
          <div
            style={{
              width: "10px",
              height: "250px",
              backgroundColor: "gold",
              justifyContent: "center",
              display: "flex",
              borderRadius: "5px",
            }}
          />
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col mb-5">
              <p className="text-[30px] m-0">10000</p>
              <p className="font-thin">
                active users on the
                <br />
                website
              </p>
            </div>
            <div className="flex flex-col mt-5">
              <p className="text-[30px] m-0">3</p>
              <p className="font-thin">
                business partners in
                <br />
                cleaning & repair
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div
              style={{
                width: "10px",
                height: "100px",
                backgroundColor: "white",
                justifyContent: "center",
                display: "flex",
                borderRadius: "5px",
                marginBottom: "25px",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "100px",
                backgroundColor: "white",
                justifyContent: "center",
                display: "flex",
                borderRadius: "5px",
                marginTop: "25px",
              }}
            />
          </div>
          <div className="flex justify-between flex-col">
            <div>
              <p className="text-[30px] m-0">430</p>
              <p className="font-thin mb-10">
                apartments are waiting
                <br />
                for your review
              </p>
            </div>
            <div>
              <p className="text-[30px] m-0 mt-6">$13k</p>
              <p className="font-thin">
                average savings
                <br />
                per rental agreement
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mb-10 bg-black">
        <div
          style={{
            width: "500px",
            height: "10px",
            backgroundColor: "gold",
            justifyContent: "center",
            display: "flex",
            borderRadius: "5px",
          }}
        />
      </div>
      <div className="font-thin text-white flex flex-row px-[104px] my-8 justify-between">
        <p>Copyright © 2025 Kaze Inc. All rights reserved.</p>
        <div className="flex flex-row gap-14">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Sales and Refunds</p>
          <p>Legal Site</p>
          <p>Map</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
