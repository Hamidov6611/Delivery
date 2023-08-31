"use client";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Step1, Step2, Step3, Step4 } from "..";

interface countProps {
  count: number;
}
const StepperForm = () => {
  const [step, setStep] = useState({step1: true, step2: false, step3: false, step4: false, active1: false, active2: false, active3: false, active4: false});
  return (
    <div className="w-[96%] sm:w-[94%] mx-auto">
      <div className="flex w-[100%] items-center justify-center mb-2 pb-6">
        {/* Step 1 */}
        <div className="relative">
          {step.active1 ? (
            <CheckCircleIcon sx={{ color: "#1348F9", marginBottom: "3px" }} />
          ) : (
            <button
              onClick={() =>
                setStep({
                  ...step,
                  step1: !step.step1,
                  step2: false,
                  step3: false,
                  step4: false,
                })
              }
              className={`h-[20px] w-[20px] ${
                step.step1
                  ? "bg-white border-2 border-[#1348F9]"
                  : "bg-[#7A7E86] "
              } rounded-full`}
            ></button>
          )}

          <p
            className={`${
              step.step1 ? "text-[#1348F9]" : "text-lightGreey"
            } absolute top-[20px] hidden w-[200px] lg:flex ml-[-80px] justify-center font-medium lg:text-[18px]`}
          >
            Категория товара
          </p>
        </div>
        <div className="h-[2px] bg-[#7A7E86] w-[25%] mb-2"></div>
        {/* Step2 */}
        <div className="relative">
          {step.active2 ? (
            <CheckCircleIcon sx={{ color: "#1348F9", marginBottom: "3px" }} />
          ) : (
            <button
              onClick={() =>
                setStep({
                  ...step,
                  step2: !step.step2,
                  step1: false,
                  step3: false,
                  step4: false,
                  active1: true,
                })
              }
              className={`h-[20px] w-[20px] ${
                step.step2
                  ? "bg-white border-2 border-[#1348F9]"
                  : "bg-[#7A7E86] "
              } rounded-full`}
            ></button>
          )}

          <p
            className={`${
              step.step2 ? "text-[#1348F9]" : "text-lightGreey"
            } absolute top-[20px] hidden w-[200px] lg:flex ml-[-80px] justify-center font-medium lg:text-[18px]`}
          >
            Маршрут и даты
          </p>
        </div>
        <div className="h-[2px] bg-[#7A7E86] w-[25%] mb-2"></div>
        {/* Step3 */}
        <div className="relative">
          {step.active3 ? (
            <CheckCircleIcon sx={{ color: "#1348F9", marginBottom: "3px" }} />
          ) : (
            <button
              onClick={() =>
                setStep({
                  ...step,
                  step3: !step.step3,
                  step1: false,
                  step2: false,
                  step4: false,
                  active2: true,
                })
              }
              className={`h-[20px] w-[20px] ${
                step.step3
                  ? "bg-white border-2 border-[#1348F9]"
                  : "bg-[#7A7E86] "
              } rounded-full`}
            ></button>
          )}

          <p
            className={`${
              step.step3 ? "text-[#1348F9]" : "text-lightGreey"
            } absolute top-[20px] hidden w-[300px] lg:flex ml-[-80px] justify-center font-medium lg:text-[18px]`}
          >
            Подробная информация о товара
          </p>
        </div>
        <div className="h-[2px] bg-[#7A7E86] w-[25%] mb-2"></div>
        {/* Step4 */}
        <div className="relative">
          {step.active4 ? (
            <CheckCircleIcon sx={{ color: "#1348F9", marginBottom: "3px" }} />
          ) : (
            <button
              onClick={() =>
                setStep({
                  ...step,
                  step4: !step.step4,
                  step1: false,
                  step2: false,
                  step3: false,
                  active3: true,
                })
              }
              className={`h-[20px] w-[20px] ${
                step.step4
                  ? "bg-white border-2 border-[#1348F9]"
                  : "bg-[#7A7E86] "
              } rounded-full`}
            ></button>
          )}

          <p
            className={`${
              step.step4 ? "text-[#1348F9]" : "text-lightGreey"
            } absolute top-[20px] hidden w-[300px] lg:flex ml-[-80px] justify-center font-medium lg:text-[18px]`}
          >
            Краткие сведения
          </p>
        </div>
      </div>
      <form>
        {/* Step1 section */}
        <div>{step.step1 && <Step1 />}</div>
        {/* Step2 section */}
        <div>{step.step2 && <Step2 />}</div>
        {/* Step13section */}
        <div>{step.step3 && <Step3 />}</div>
        {/* Step4 section */}
        <div>{step.step4 && <Step4 />}</div>
      </form>
    </div>
  );
};

export default StepperForm;
