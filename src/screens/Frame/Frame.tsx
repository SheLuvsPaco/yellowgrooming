import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const pawprints = [
  { top: "top-[439px]", left: "left-[555px]" },
  { top: "top-[226px]", left: "left-[537px]" },
  { top: "top-[527px]", left: "left-[793px]" },
  { top: "top-[385px]", left: "left-[2780px]" },
  { top: "top-[266px]", left: "left-[242px]" },
  { top: "top-[552px]", left: "left-[1057px]" },
  { top: "top-0", left: "left-[186px]" },
  { top: "top-[360px]", left: "left-[807px]" },
];

const socialIcons = [
  {
    src: "/instagram-1.png",
    alt: "Instagram",
    width: "w-[41px]",
    height: "h-11",
  },
  {
    src: "/viber-1.png",
    alt: "Viber",
    width: "w-[54px]",
    height: "h-[54px]",
    margin: "ml-6",
  },
  {
    src: "/telegram-1.png",
    alt: "Telegram",
    width: "w-[51px]",
    height: "h-[51px]",
    margin: "ml-[19px]",
  },
  {
    src: "/whatsapp-1.png",
    alt: "Whatsapp",
    width: "w-[52px]",
    height: "h-[53px]",
    margin: "ml-[19px]",
  },
];

const navigationItems = [
  {
    text: "Правила",
    width: "w-[169.28px]",
    marginLeft: "ml-[75.8px]",
    marginTop: "mt-[3px]",
    fontFamily: "[font-family:'Fira_Sans_Condensed',Helvetica]",
  },
  {
    text: "Цена",
    width: "w-[70.9px]",
    marginLeft: "ml-[10.7px]",
    marginTop: "",
    fontFamily: "[font-family:'Gugi',Helvetica]",
  },
  {
    text: "Контакты",
    width: "w-[491.01px]",
    marginLeft: "ml-[73.1px]",
    marginTop: "mt-0.5",
    fontFamily: "[font-family:'Fira_Sans_Condensed',Helvetica]",
  },
];

const underlineGradients = [
  {
    width: "w-[103px]",
    height: "h-[13px]",
    marginTop: "mt-0.5",
    marginLeft: "",
  },
  {
    width: "w-[92px]",
    height: "h-3",
    marginTop: "mt-0.5",
    marginLeft: "ml-[76px]",
  },
  { width: "w-[95px]", height: "h-3", marginTop: "", marginLeft: "ml-[70px]" },
  {
    width: "w-[95px]",
    height: "h-3",
    marginTop: "mt-px",
    marginLeft: "ml-[72px]",
  },
];

export const Frame = (): JSX.Element => {
  return (
    <main className="overflow-hidden bg-[linear-gradient(156deg,rgba(252,157,15,1)_2%,rgba(255,255,255,0)_100%)] w-full min-w-[1600px] min-h-[900px] relative">
      <section className="absolute top-[194px] left-[205px] w-[508px] h-[337px] flex flex-col">
        <h1 className="-ml-px w-[504px] h-[115px] -mt-px [-webkit-text-stroke:1px_#000000] [font-family:'Flavors',Helvetica] text-black text-5xl text-center tracking-[0] font-normal leading-[normal]">
          Четвероногий друг на прокат
        </h1>

        <p className="ml-7 w-[473px] h-[110px] mt-[33px] [-webkit-text-stroke:1px_#000000] [font-family:'Gugi',Helvetica] text-black text-2xl font-normal leading-[normal]">
          <span className="tracking-[0]">
            Собака на прокат - это возможность провести время весело и узнать
            готовы ли вы к собаке.
            <br /> <br />
          </span>
          <span className="tracking-[0.06px]">{""}</span>
        </p>

        <div className="ml-[79px] w-[353px] h-[62px] relative mt-[18px]">
          <Button className="absolute top-0 left-0 w-[351px] h-[62px] rounded-[50px] shadow-[0px_9px_35px_#3f721c] bg-[linear-gradient(307deg,rgba(127,160,4,1)_0%,rgba(3,73,48,1)_100%)] hover:bg-[linear-gradient(307deg,rgba(127,160,4,0.9)_0%,rgba(3,73,48,0.9)_100%)]">
            <span className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#ffffff] [font-family:'Gugi',Helvetica] text-white text-3xl tracking-[0] font-normal leading-[normal]">
              выбрать лохматика
            </span>
          </Button>
        </div>
      </section>

      <div className="absolute top-[26px] left-[649px] w-[1137px] h-[631px] rotate-180">
        {pawprints.map((pawprint, index) => (
          <img
            key={`pawprint-${index}`}
            className={`${pawprint.top} ${pawprint.left} w-20 absolute h-[79px] -rotate-180 object-cover`}
            alt="Pawprint"
            src="/pawprint-2.png"
          />
        ))}
      </div>

      <nav className="absolute top-[198px] left-[782px] w-[993px] h-[39px] flex shadow-[0px_6px_4px_#00000040]">
        <img
          className="mt-[8.0px] w-[94.04px] h-[26.71px] ml-[0.2px] border border-solid border-black object-cover"
          alt="Image"
          src="/------.png"
        />

        {navigationItems.map((item, index) => (
          <button
            key={`nav-${index}`}
            className={`${item.marginTop} ${item.width} h-9 ${item.marginLeft} [-webkit-text-stroke:1px_#000000] ${item.fontFamily} text-black text-[28px] tracking-[0] font-normal leading-[normal] hover:opacity-80 transition-opacity`}
          >
            {item.text}
          </button>
        ))}
      </nav>

      <div className="absolute top-[70px] left-[1132px] w-[255px] h-11 flex">
        {socialIcons.map((icon, index) => (
          <button
            key={`social-${index}`}
            className={`${icon.width} ${icon.height} ${icon.margin || ""} hover:opacity-80 transition-opacity`}
          >
            <img
              className="w-full h-full object-cover"
              alt={icon.alt}
              src={icon.src}
            />
          </button>
        ))}
      </div>

      <Card className="absolute top-[648px] left-[247px] w-[404px] h-[252px] shadow-[0px_9px_35px_#5a3614] border-0">
        <CardContent className="relative w-full h-full p-0">
          <img
            className="top-14 left-[172px] w-[230px] h-[185px] absolute object-cover"
            alt="Image"
            src="/image-1.png"
          />

          <img
            className="top-[104px] left-[86px] w-[222px] h-[148px] absolute object-cover"
            alt="Image"
            src="/image-2.png"
          />

          <img
            className="absolute top-14 left-0 w-[172px] h-[141px] object-cover"
            alt="Images"
            src="/images-1.png"
          />

          <img
            className="absolute top-[29px] left-[174px] w-[53px] h-[21px]"
            alt="Polygon"
            src="/polygon-1.svg"
          />

          <h2 className="absolute -top-px left-[124px] w-[151px] [-webkit-text-stroke:1px_#000000] [font-family:'Gugi',Helvetica] text-[#040404] text-2xl tracking-[0] font-normal leading-[normal]">
            ФОТООХОТА
          </h2>
        </CardContent>
      </Card>

      <div className="absolute top-[13px] left-[1138px] w-72 h-[45px] flex gap-0.5">
        <img
          className="w-[33px] h-10 object-cover"
          alt="Black telephone"
          src="/black-telephone-auricular--1.png"
        />

        <a
          href="tel:+380959001286"
          className="mt-1 w-[251px] h-[41px] [text-shadow:0px_4px_15px_#7b4f26] [font-family:'Gujarati_MT-Regular',Helvetica] font-normal text-black text-3xl tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
        >
          +380959001286
        </a>
      </div>

      <div className="absolute top-[180px] left-[431px] w-[1177px] h-[825px] shadow-[0px_9px_15px_#00000040]">
        <img
          className="absolute top-[155px] left-[808px] w-[361px] h-[565px] object-cover"
          alt="Element happy"
          src="/484-4841614-happy-dog-transparent-background-hd-png-download-600.png"
        />

        <img
          className="absolute top-0 left-0 w-[1022px] h-[720px] object-cover"
          alt="Element happy"
          src="/484-4841614-happy-dog-transparent-background-hd-png-download-600-1.png"
        />
      </div>

      <div className="absolute top-[235px] left-[782px] w-[603px] h-[15px] flex">
        {underlineGradients.map((gradient, index) => (
          <div
            key={`gradient-${index}`}
            className={`${gradient.marginTop} ${gradient.width} ${gradient.height} ${gradient.marginLeft} [background:radial-gradient(50%_50%_at_50%_50%,rgba(30,30,30,1)_0%,rgba(30,30,30,0)_100%)]`}
          />
        ))}
      </div>

      <img
        className="absolute top-[58px] left-[217px] w-[430px] h-[88px]"
        alt="Union"
        src="/union.svg"
      />
    </main>
  );
};
