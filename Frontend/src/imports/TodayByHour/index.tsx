import svgPaths from "./svg-mcimngcb3f";

function SectionTitle() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-[106.545px]" data-name="SectionTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[#0a0a0a] text-[16px] top-[-0.33px] tracking-[0.32px] whitespace-nowrap">Today By Hour</p>
      </div>
    </div>
  );
}

function InfoButton() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Light',sans-serif] font-light leading-[12px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <SectionTitle />
        <InfoButton />
      </div>
    </div>
  );
}

function ExpandButton() {
  return (
    <div className="relative shrink-0" data-name="ExpandButton">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Expand</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[20px] px-[24px] relative size-full">
          <Container1 />
          <ExpandButton />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[51px] relative w-[16px]" data-name="Container">
      <div className="-translate-x-1/2 absolute flex h-[29px] items-center justify-center left-[8.3px] top-px w-[17px]">
        <div className="flex-none rotate-90">
          <p className="[word-break:break-word] font-['Jura:Regular',sans-serif] font-normal leading-[16.5px] relative text-[11px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.3px] whitespace-nowrap">Index</p>
        </div>
      </div>
    </div>
  );
}

function ContainerTransform() {
  return (
    <div className="h-[51px] relative shrink-0 w-[16px]" data-name="Container (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="absolute flex h-[51px] items-center justify-center left-[0.49px] top-[0.25px] w-[16px]">
          <div className="flex-none rotate-180">
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[160px] relative shrink-0 w-[501.528px]" data-name="Icon">
      <div className="absolute inset-[-3.54%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 501.528 165.671">
          <g id="Icon">
            <g id="Vector" />
            <path d={svgPaths.p786b80} id="Vector_2" stroke="url(#paint0_linear_6005_8710)" strokeLinecap="round" strokeWidth="3" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6005_8710" x1="250.765" x2="250.765" y1="1.5" y2="163.845">
              <stop stopColor="#DF4D2A" />
              <stop offset="0.2" stopColor="#EC832C" />
              <stop offset="0.4" stopColor="#E8B335" />
              <stop offset="0.6" stopColor="#C7C43C" />
              <stop offset="0.8" stopColor="#94C13D" />
              <stop offset="1" stopColor="#6EB037" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function HourChart() {
  return (
    <div className="h-[160px] relative shrink-0 w-full" data-name="HourChart">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function HourAxis() {
  return (
    <div className="relative shrink-0 w-full" data-name="HourAxis">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Jura:Regular',sans-serif] font-normal items-center justify-between leading-[18px] pt-[6px] px-[24px] relative size-full text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.3px] whitespace-nowrap">
          <p className="relative shrink-0">00:00</p>
          <p className="relative shrink-0 text-center">06:00</p>
          <p className="relative shrink-0 text-center">12:00</p>
          <p className="relative shrink-0 text-center">18:00</p>
          <p className="relative shrink-0 text-right">23:00</p>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[21px] items-center pt-[4px] relative shrink-0 w-[502.016px]" data-name="Container">
      <p className="[word-break:break-word] font-['Jura:Regular',sans-serif] font-normal leading-[16.5px] relative shrink-0 text-[11px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.3px] whitespace-nowrap">Hour of day</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <HourAxis />
        <Container5 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[501.528_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <HourChart />
        <Frame />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[255.003px] relative shrink-0 w-[574.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start pb-[20px] pt-[30px] px-[24px] relative size-full">
        <ContainerTransform />
        <Container4 />
      </div>
    </div>
  );
}

export default function TodayByHour() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[48.556px] relative size-full" data-name="TodayByHour">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.15)] border-b-[0.556px] border-solid inset-0 pointer-events-none" />
      <Container />
      <Container2 />
    </div>
  );
}