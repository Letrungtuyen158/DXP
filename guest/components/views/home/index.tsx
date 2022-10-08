import { CoursesList } from "../courses/_components";
import { DynamicAboutMe } from "./component/aboutMe.view";
import { ROUTERS } from "constants/router.constant";
import AbouDXP from "./component/aboutDXP";
import Banner from "./component/banner";
import Foundation from "./component/foundation";
import FromRegister from "../../form/form-registration";
import NewsPapers from "./component/newsPapers";
import Photos from "components/photos";
import React, { memo } from "react";
import Seemore from "components/button/seeMore";

import Values from "./component/values";

const Home = ({ course, values, aboutMe, founder, news }: any) => (
  <div className="mt-[90px] bg-grayf6">
    <Banner />
    <section className="container mx-auto md:px-[50px]">
      <Foundation founder={founder} />
      <AbouDXP />
    </section>
    <CoursesList data={course} />
    <FromRegister />
    <div className="container mx-auto px-4 md:px-[50px]">
      <div className="md:mt-[61px] mt-8">
        <NewsPapers hidden={false} isRounded data={news} />
        <div className="mt-[-10px] pb-6 flex justify-end md:hidden">
          <Seemore navigation={ROUTERS.VIEW} />
        </div>
      </div>
    </div>
    <div className="bg-white md:mt-[64px] px-4 ">
      <DynamicAboutMe data={aboutMe} />
      <div className="mt-[-10px] pb-6 flex justify-end md:hidden">
        <Seemore navigation={ROUTERS.VIEW} />
      </div>
    </div>
    <Values data={values} />
    <div className="md:block hidden container mx-auto px-4 md:px-[50px]">
      <Photos className={""} showDots={true} />
    </div>
    <div className="block md:hidden container mx-auto px-4 md:px-[50px]">
      <Photos className={""} showDots={false} />
    </div>
    <div className="flex w-full justify-end my-[15px] pr-[40px]"></div>
  </div>
);
export default memo(Home);
