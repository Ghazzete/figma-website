import Image from "next/image"
import Features1 from "../../public/assets/Features1.svg"
import Features2 from "../../public/assets/Features2.svg"
import Features3 from "../../public/assets/Features3.svg"
import Check from "../../public/assets/Check.svg"
import BlueButton from "../../public/assets/BlueButton.svg"
import GreenButton from "../../public/assets/GreenButton.svg"
import PinkButton from "../../public/assets/PinkButton.svg"


function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px]">
        <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image 
          src={Features1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Simplify your sales monitoring
              </h1>
              <Image 
              src={Features1}
              alt="Feature 1 image"
              className="pt-[24px] sm:hidden"
              />
              <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Sed do eiusmod tempor incididunt ut labore 
              </li>
            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={BlueButton}
              alt="Learn more"/>
              </span>
            </p>
          </div>
    </div>
    <div className="flex flex-col gap-x-6 sm:flex-row">
          <Image 
          src={Features2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[] lg:text-[18px]">
            Sales Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Simplify your sales monitoring
              </h1>
              <Image 
              src={Features2}
              alt="Feature 1 image"
              className="pt-[24px] sm:hidden"
              />
              <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
            </p>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
            <ul className="flex flex-col gap-y-3 lg:text-[18px]">
              <li className="flex items-center gap-x-2 text-[#36485C]">
                <span>
                  <Image src={Check} alt="check" />
                </span>
                Sed do eiusmod tempor incididunt ut labore 
              </li>
            </ul>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={PinkButton}
              alt="Learn more"/>
              </span>
            </p>
          </div>
    </div>
    <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
          <Image 
          src={Features3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"/>
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
            <h3 className="font-medium text-[#0085FF] lg:text-[18px]">
            Sales Monitoring
            </h3>
            <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
              Simplify your sales monitoring
              </h1>
              <Image 
              src={Features3}
              alt="Feature 1 image"
              className="pt-[24px] sm:hidden"
              />
              <p className="py-[24px] text-[#36485C] lg:text-[18px]">
              Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
            </p>
            <div className="flex  w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C] ">Lorem ipsum dolor sit</p>
            </div>
              <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">
                800+</h3>
                <p className="text-[#36485C]">Conse adipiscing elit</p>
                </div>
            </div>

            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
            Learn More{" "}
            <span>
              <Image src={GreenButton}
              alt="Learn more"/>
              </span>
            </p>
          </div>
    </div>



  </div>
    
  )
}

export default Features