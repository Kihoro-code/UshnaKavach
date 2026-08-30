import svgPaths from "./svg-f0dag88jov";

function PlaceholderForLeftPanel() {
  return <div className="h-[60.295px] relative shrink-0 w-[323.733px]" data-name="Placeholder for LeftPanel" />;
}

function Text() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[112.569px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[27px] left-[56.5px] text-[18px] text-black text-center top-[-0.89px] tracking-[0.02px] whitespace-nowrap">San Francisco</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[5.998px] relative shrink-0 w-[8.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99306 5.99826">
        <g clipPath="url(#clip0_13_1079)" id="Icon">
          <path d="M1 1L4.4973 4.4973L7.9946 1" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.999229" />
        </g>
        <defs>
          <clipPath id="clip0_13_1079">
            <rect fill="white" height="5.99826" width="8.99306" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text />
        <Icon />
      </div>
    </div>
  );
}

function LocationPicker() {
  return (
    <div className="relative shrink-0 w-[127.561px]" data-name="LocationPicker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[117.431px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[1.6px] uppercase whitespace-nowrap">California, USA</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0" data-name="Paragraph (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-start relative size-full">
        <LocationPicker />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[148.915px] relative shrink-0 w-[188.62px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Thin',sans-serif] font-thin leading-[148.911px] left-0 text-[148.911px] text-black top-[0.78px] tracking-[-7.4455px] whitespace-nowrap">10.1</p>
      </div>
    </div>
  );
}

function Container5() {
  return <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[58.108px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">Very High</p>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container5 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <StatusBadge />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[18px] items-start relative size-full">
        <Paragraph1 />
        <Container4 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[40px] items-start justify-end pb-[40px] pt-[88.889px] relative size-full">
        <Container2 />
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[142.899px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[27px] left-0 text-[18px] text-black top-[-0.89px] whitespace-nowrap">Pollen breakdown</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text1 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph3 />
        <InfoButton />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.061px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Tree</p>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="bg-black relative rounded-[3.247px] shrink-0 size-[6.493px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[56.727px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">Moderate</p>
      </div>
    </div>
  );
}

function StatusBadge1() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container12 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[87.908px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph4 />
        <StatusBadge1 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[0.57%_0]" data-name="Group">
      <div className="absolute inset-[0.57%_0.57%_0.57%_0.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.8992 86.8992">
          <path d={svgPaths.p3743aa00} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.908 86.6521">
          <path d={svgPaths.p4176180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.615782" />
        </svg>
      </div>
      <div className="absolute bottom-[20.43%] left-1/2 right-[14.46%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-3.42%_-2.84%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.0209 27.7744">
            <path d={svgPaths.p36c35000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="1.26112" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[87.908px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function DialCircle() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[87.908px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[35.148px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[18px] text-[32px] text-black text-center top-0 whitespace-nowrap">3.1</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[107.908px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center p-[10px] relative size-full">
        <Container11 />
        <DialCircle />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[223.88px] left-0 top-0 w-[107.908px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-l-[0.556px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TrackerColumn() {
  return (
    <div className="flex-[107.908_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] min-w-[inherit] relative size-full">
        <Container10 />
        <Container13 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[33.516px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Grass</p>
      </div>
    </div>
  );
}

function Container16() {
  return <div className="bg-black relative rounded-[5px] shrink-0 size-[10px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[58.108px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">Very High</p>
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container16 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[87.917px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph7 />
        <StatusBadge2 />
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0.57%_0]" data-name="Group">
      <div className="absolute inset-[0.57%_0.57%_0.57%_0.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.9078 86.9078">
          <path d={svgPaths.p20635500} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.9167 86.6607">
          <path d={svgPaths.p80e79f0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.615843" />
        </svg>
      </div>
      <div className="absolute bottom-1/2 left-[10.55%] right-1/2 top-[25.89%]" data-name="Vector">
        <div className="absolute inset-[-9.65%_-5.9%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38.7752 25.2882">
            <path d={svgPaths.p2d7a6680} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="2.97576" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[87.917px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function DialCircle1() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[87.917px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[48.142px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[24px] text-[32px] text-black text-center top-0 whitespace-nowrap">10.1</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[107.917px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center p-[10px] relative size-full">
        <Container15 />
        <DialCircle1 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[223.889px] left-0 top-0 w-[107.917px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-l-[0.556px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TrackerColumn1() {
  return (
    <div className="flex-[107.917_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] min-w-[inherit] relative size-full">
        <Container14 />
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[33.073px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Weed</p>
      </div>
    </div>
  );
}

function Container20() {
  return <div className="bg-black relative rounded-[2.248px] shrink-0 size-[4.497px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[22.587px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container20 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-[87.908px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Paragraph10 />
        <StatusBadge3 />
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[0.57%_0]" data-name="Group">
      <div className="absolute inset-[0.57%_0.57%_0.57%_0.58%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86.8992 86.8992">
          <path d={svgPaths.p3743aa00} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 87.908 86.6521">
          <path d={svgPaths.p4176180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.615782" />
        </svg>
      </div>
      <div className="absolute bottom-[41.85%] left-1/2 right-[4.5%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-7.82%_-1.4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.1219 8.28842">
            <path d={svgPaths.p651c200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="0.965547" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[87.908px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function DialCircle2() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[87.908px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[36.849px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[18px] text-[32px] text-black text-center top-0 whitespace-nowrap">1.9</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-[107.908px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center p-[10px] relative size-full">
        <Container19 />
        <DialCircle2 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[223.88px] left-0 top-0 w-[107.908px]" data-name="Container">
      <div aria-hidden className="absolute border-[rgba(0,0,0,0.08)] border-l-[0.556px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TrackerColumn2() {
  return (
    <div className="flex-[107.908_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] min-w-[inherit] relative size-full">
        <Container18 />
        <Container21 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <TrackerColumn />
        <TrackerColumn1 />
        <TrackerColumn2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[50px] relative size-full">
        <Container7 />
        <Container9 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[106.536px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[16px] text-black top-[-0.33px] tracking-[0.32px] whitespace-nowrap">7-day forecast</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton1() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph13 />
        <InfoButton1 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.4px] whitespace-nowrap">Tree</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Grass</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Weeds</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[36.458px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Today</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[36.458_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.413px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Thu</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[33.733_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[13.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Fri</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[33.741_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[20.616px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Sat</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[33.733_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[23.542px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Sun</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[33.741_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.156px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Mon</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="flex-[33.733_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.241px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Tue</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[33.741_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[238.88_0_0] h-[17.995px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container28 />
        <Container29 />
        <Container30 />
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Container27 />
        <Container35 />
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Oak</p>
      </div>
    </div>
  );
}

function PlaceholderForLeftPanel1() {
  return <div className="flex-[286.988_0_0] h-[9.236px] min-w-px relative" data-name="Placeholder for LeftPanel" />;
}

function Container37() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1126)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ac77e10} id="Vector_3" stroke="var(--stroke-0, #FFFCF7)" strokeWidth="0.499931" />
        </g>
        <defs>
          <clipPath id="clip0_13_1126">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1126)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ac77e10} id="Vector_3" stroke="var(--stroke-0, #FFFCF7)" strokeWidth="0.499931" />
        </g>
        <defs>
          <clipPath id="clip0_13_1126">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot1() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1126)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ac77e10} id="Vector_3" stroke="var(--stroke-0, #FFFCF7)" strokeWidth="0.499931" />
        </g>
        <defs>
          <clipPath id="clip0_13_1126">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot2() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1126)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ac77e10} id="Vector_3" stroke="var(--stroke-0, #FFFCF7)" strokeWidth="0.499931" />
        </g>
        <defs>
          <clipPath id="clip0_13_1126">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot3() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1126)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1ac77e10} id="Vector_3" stroke="var(--stroke-0, #FFFCF7)" strokeWidth="0.499931" />
        </g>
        <defs>
          <clipPath id="clip0_13_1126">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot4() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot5() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot6() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[9.236px] left-[84.85px] top-[14.38px] w-[286.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <PollenDot />
        <PollenDot1 />
        <PollenDot2 />
        <PollenDot3 />
        <PollenDot4 />
        <PollenDot5 />
        <PollenDot6 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph14 />
        <PlaceholderForLeftPanel1 />
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Cedar</p>
      </div>
    </div>
  );
}

function PlaceholderForLeftPanel2() {
  return <div className="flex-[286.988_0_0] h-[9.236px] min-w-px relative" data-name="Placeholder for LeftPanel" />;
}

function Container40() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot7() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot8() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot9() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot10() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot11() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot12() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot13() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[9.236px] left-[84.85px] top-[14.38px] w-[286.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <PollenDot7 />
        <PollenDot8 />
        <PollenDot9 />
        <PollenDot10 />
        <PollenDot11 />
        <PollenDot12 />
        <PollenDot13 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph15 />
        <PlaceholderForLeftPanel2 />
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Maple</p>
      </div>
    </div>
  );
}

function PlaceholderForLeftPanel3() {
  return <div className="flex-[286.988_0_0] h-[9.236px] min-w-px relative" data-name="Placeholder for LeftPanel" />;
}

function Container43() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot14() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot15() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot16() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot17() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot18() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot19() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot20() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[9.236px] left-[84.85px] top-[14.38px] w-[286.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <PollenDot14 />
        <PollenDot15 />
        <PollenDot16 />
        <PollenDot17 />
        <PollenDot18 />
        <PollenDot19 />
        <PollenDot20 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph16 />
        <PlaceholderForLeftPanel3 />
        <Container43 />
        <Container44 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Birch</p>
      </div>
    </div>
  );
}

function PlaceholderForLeftPanel4() {
  return <div className="flex-[286.988_0_0] h-[9.236px] min-w-px relative" data-name="Placeholder for LeftPanel" />;
}

function Container46() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Icon25() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot21() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot22() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot23() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot24() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot25() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot26() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot27() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[9.236px] left-[84.85px] top-[14.38px] w-[286.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <PollenDot21 />
        <PollenDot22 />
        <PollenDot23 />
        <PollenDot24 />
        <PollenDot25 />
        <PollenDot26 />
        <PollenDot27 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph17 />
        <PlaceholderForLeftPanel4 />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Pine</p>
      </div>
    </div>
  );
}

function PlaceholderForLeftPanel5() {
  return <div className="flex-[286.988_0_0] h-[9.236px] min-w-px relative" data-name="Placeholder for LeftPanel" />;
}

function Container49() {
  return (
    <div className="absolute h-[37.995px] left-0 pointer-events-none top-0 w-[323.733px]" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0" />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_0px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot28() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot29() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot30() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot31() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot32() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot33() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon37 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40.9983 9.23611">
        <g clipPath="url(#clip0_13_1109)" id="Icon">
          <path d={svgPaths.p27a81800} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p38db8f00} id="Vector_2" stroke="var(--stroke-0, black)" strokeOpacity="0.55" strokeWidth="0.499931" />
          <path d={svgPaths.p1639d900} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
        <defs>
          <clipPath id="clip0_13_1109">
            <rect fill="white" height="9.23611" width="40.9983" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PollenDot34() {
  return (
    <div className="flex-[40.998_0_0] h-full min-w-px relative" data-name="PollenDot">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute h-[9.236px] left-[84.85px] top-[14.38px] w-[286.988px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <PollenDot28 />
        <PollenDot29 />
        <PollenDot30 />
        <PollenDot31 />
        <PollenDot32 />
        <PollenDot33 />
        <PollenDot34 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph18 />
        <PlaceholderForLeftPanel5 />
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[50px] relative size-full">
        <Container23 />
        <Container26 />
        <Container36 />
        <Container39 />
        <Container42 />
        <Container45 />
        <Container48 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[117.153px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[16px] text-black top-[-0.33px] tracking-[0.32px] whitespace-nowrap">Pollen Calendar</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton2() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph19 />
        <InfoButton2 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">D</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">W</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.4px] whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">3M</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">9M</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">12M</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start py-[20px] relative size-full">
        <Container52 />
        <Container54 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.814px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Jan</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[35.964_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text11 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.059px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text12 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.309px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Mar</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="flex-[35.964_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text13 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[20.356px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Apr</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text14 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.069px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">May</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text15 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.196px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text16 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[18.368px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Jul</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text17 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.925px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Aug</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text18 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text19() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[23.759px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Sep</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[35.972_0_0] h-full min-w-px relative" data-name="Container">
      <div aria-hidden className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center py-[6px] relative size-full">
          <Text19 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_-0.5px_0px_0px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex h-[342.5px] items-start left-0 top-0 w-[323.733px]" data-name="Container">
      <Container58 />
      <Container59 />
      <Container60 />
      <Container61 />
      <Container62 />
      <Container63 />
      <Container64 />
      <Container65 />
      <Container66 />
    </div>
  );
}

function Container71() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[285.33px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.73) 6.3%, rgba(0, 0, 0, 0.74) 12.5%, rgba(0, 0, 0, 0.71) 18.8%, rgba(0, 0, 0, 0.65) 25%, rgba(0, 0, 0, 0.57) 31.3%, rgba(0, 0, 0, 0.49) 37.5%, rgba(0, 0, 0, 0.4) 43.8%, rgba(0, 0, 0, 0.32) 50%, rgba(0, 0, 0, 0.25) 56.3%, rgba(0, 0, 0, 0.19) 62.5%, rgba(0, 0, 0, 0.15) 68.8%, rgba(0, 0, 0, 0.12) 75%, rgba(0, 0, 0, 0.11) 81.3%, rgba(0, 0, 0, 0.09) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.08) 100%)" }} data-name="Container" />;
}

function Container70() {
  return (
    <div className="flex-[285.33_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container71 />
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[31.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Alder</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-0 top-[3.25px] w-[323.733px]" data-name="Container">
      <Container70 />
      <Text20 />
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container69 />
      </div>
    </div>
  );
}

function Container75() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[246.389px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.56) 0%, rgba(0, 0, 0, 0.6) 6.3%, rgba(0, 0, 0, 0.61) 12.5%, rgba(0, 0, 0, 0.6) 18.8%, rgba(0, 0, 0, 0.56) 25%, rgba(0, 0, 0, 0.5) 31.3%, rgba(0, 0, 0, 0.43) 37.5%, rgba(0, 0, 0, 0.36) 43.8%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.24) 56.3%, rgba(0, 0, 0, 0.19) 62.5%, rgba(0, 0, 0, 0.15) 68.8%, rgba(0, 0, 0, 0.12) 75%, rgba(0, 0, 0, 0.11) 81.3%, rgba(0, 0, 0, 0.09) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.08) 100%)" }} data-name="Container" />;
}

function Container74() {
  return (
    <div className="flex-[246.389_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container75 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[34.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Hazel</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-0 top-[3.25px] w-[287.76px]" data-name="Container">
      <Container74 />
      <Text21 />
    </div>
  );
}

function Container72() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container73 />
      </div>
    </div>
  );
}

function Container79() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[222.925px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.39) 0%, rgba(0, 0, 0, 0.42) 6.3%, rgba(0, 0, 0, 0.43) 12.5%, rgba(0, 0, 0, 0.43) 18.8%, rgba(0, 0, 0, 0.41) 25%, rgba(0, 0, 0, 0.37) 31.3%, rgba(0, 0, 0, 0.33) 37.5%, rgba(0, 0, 0, 0.28) 43.8%, rgba(0, 0, 0, 0.24) 50%, rgba(0, 0, 0, 0.19) 56.3%, rgba(0, 0, 0, 0.16) 62.5%, rgba(0, 0, 0, 0.13) 68.8%, rgba(0, 0, 0, 0.11) 75%, rgba(0, 0, 0, 0.1) 81.3%, rgba(0, 0, 0, 0.09) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.08) 100%)" }} data-name="Container" />;
}

function Container78() {
  return (
    <div className="flex-[222.925_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container79 />
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.866px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Yew</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-0 top-[3.25px] w-[251.788px]" data-name="Container">
      <Container78 />
      <Text22 />
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container77 />
      </div>
    </div>
  );
}

function Container83() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[223.446px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.5) 6.3%, rgba(0, 0, 0, 0.52) 12.5%, rgba(0, 0, 0, 0.51) 18.8%, rgba(0, 0, 0, 0.49) 25%, rgba(0, 0, 0, 0.45) 31.3%, rgba(0, 0, 0, 0.39) 37.5%, rgba(0, 0, 0, 0.33) 43.8%, rgba(0, 0, 0, 0.28) 50%, rgba(0, 0, 0, 0.22) 56.3%, rgba(0, 0, 0, 0.18) 62.5%, rgba(0, 0, 0, 0.15) 68.8%, rgba(0, 0, 0, 0.12) 75%, rgba(0, 0, 0, 0.11) 81.3%, rgba(0, 0, 0, 0.09) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.08) 100%)" }} data-name="Container" />;
}

function Container82() {
  return (
    <div className="flex-[223.446_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container83 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.345px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Elm</p>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[35.96px] top-[3.25px] w-[251.788px]" data-name="Container">
      <Container82 />
      <Text23 />
    </div>
  );
}

function Container80() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container81 />
      </div>
    </div>
  );
}

function Container87() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[207.135px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.5) 6.3%, rgba(0, 0, 0, 0.52) 12.5%, rgba(0, 0, 0, 0.51) 18.8%, rgba(0, 0, 0, 0.49) 25%, rgba(0, 0, 0, 0.45) 31.3%, rgba(0, 0, 0, 0.39) 37.5%, rgba(0, 0, 0, 0.33) 43.8%, rgba(0, 0, 0, 0.28) 50%, rgba(0, 0, 0, 0.22) 56.3%, rgba(0, 0, 0, 0.18) 62.5%, rgba(0, 0, 0, 0.15) 68.8%, rgba(0, 0, 0, 0.12) 75%, rgba(0, 0, 0, 0.11) 81.3%, rgba(0, 0, 0, 0.09) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.08) 100%)" }} data-name="Container" />;
}

function Container86() {
  return (
    <div className="flex-[207.135_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container87 />
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[37.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Willow</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[71.94px] top-[3.25px] w-[251.788px]" data-name="Container">
      <Container86 />
      <Text24 />
    </div>
  );
}

function Container84() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function Container91() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[186.233px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.47) 6.3%, rgba(0, 0, 0, 0.55) 12.5%, rgba(0, 0, 0, 0.62) 18.8%, rgba(0, 0, 0, 0.67) 25%, rgba(0, 0, 0, 0.69) 31.3%, rgba(0, 0, 0, 0.69) 37.5%, rgba(0, 0, 0, 0.65) 43.8%, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0.52) 56.3%, rgba(0, 0, 0, 0.44) 62.5%, rgba(0, 0, 0, 0.36) 68.8%, rgba(0, 0, 0, 0.28) 75%, rgba(0, 0, 0, 0.22) 81.3%, rgba(0, 0, 0, 0.17) 87.5%, rgba(0, 0, 0, 0.14) 93.8%, rgba(0, 0, 0, 0.12) 100%)" }} data-name="Container" />;
}

function Container90() {
  return (
    <div className="flex-[186.233_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container91 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.587px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Ash</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[35.96px] top-[3.25px] w-[215.816px]" data-name="Container">
      <Container90 />
      <Text25 />
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container89 />
      </div>
    </div>
  );
}

function Container95() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[214.028px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.88) 0%, rgba(0, 0, 0, 0.94) 6.3%, rgba(0, 0, 0, 0.96) 12.5%, rgba(0, 0, 0, 0.94) 18.8%, rgba(0, 0, 0, 0.88) 25%, rgba(0, 0, 0, 0.78) 31.3%, rgba(0, 0, 0, 0.67) 37.5%, rgba(0, 0, 0, 0.55) 43.8%, rgba(0, 0, 0, 0.44) 50%, rgba(0, 0, 0, 0.34) 56.3%, rgba(0, 0, 0, 0.26) 62.5%, rgba(0, 0, 0, 0.2) 68.8%, rgba(0, 0, 0, 0.15) 75%, rgba(0, 0, 0, 0.12) 81.3%, rgba(0, 0, 0, 0.1) 87.5%, rgba(0, 0, 0, 0.09) 93.8%, rgba(0, 0, 0, 0.09) 100%)" }} data-name="Container" />;
}

function Container94() {
  return (
    <div className="flex-[214.028_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container95 />
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[30.764px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Birch</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[71.94px] top-[3.25px] w-[251.788px]" data-name="Container">
      <Container94 />
      <Text26 />
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container93 />
      </div>
    </div>
  );
}

function Container99() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[67.205px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.41) 6.3%, rgba(0, 0, 0, 0.48) 12.5%, rgba(0, 0, 0, 0.54) 18.8%, rgba(0, 0, 0, 0.59) 25%, rgba(0, 0, 0, 0.61) 31.3%, rgba(0, 0, 0, 0.6) 37.5%, rgba(0, 0, 0, 0.57) 43.8%, rgba(0, 0, 0, 0.52) 50%, rgba(0, 0, 0, 0.46) 56.3%, rgba(0, 0, 0, 0.39) 62.5%, rgba(0, 0, 0, 0.32) 68.8%, rgba(0, 0, 0, 0.25) 75%, rgba(0, 0, 0, 0.2) 81.3%, rgba(0, 0, 0, 0.16) 87.5%, rgba(0, 0, 0, 0.13) 93.8%, rgba(0, 0, 0, 0.11) 100%)" }} data-name="Container" />;
}

function Container98() {
  return (
    <div className="flex-[67.205_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container99 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[33.707px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Plane</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[107.91px] top-[3.25px] w-[107.908px]" data-name="Container">
      <Container98 />
      <Text27 />
    </div>
  );
}

function Container96() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container97 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[78.438px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.55) 6.3%, rgba(0, 0, 0, 0.65) 12.5%, rgba(0, 0, 0, 0.73) 18.8%, rgba(0, 0, 0, 0.8) 25%, rgba(0, 0, 0, 0.83) 31.3%, rgba(0, 0, 0, 0.82) 37.5%, rgba(0, 0, 0, 0.78) 43.8%, rgba(0, 0, 0, 0.71) 50%, rgba(0, 0, 0, 0.62) 56.3%, rgba(0, 0, 0, 0.51) 62.5%, rgba(0, 0, 0, 0.42) 68.8%, rgba(0, 0, 0, 0.33) 75%, rgba(0, 0, 0, 0.25) 81.3%, rgba(0, 0, 0, 0.2) 87.5%, rgba(0, 0, 0, 0.15) 93.8%, rgba(0, 0, 0, 0.12) 100%)" }} data-name="Container" />;
}

function Container102() {
  return (
    <div className="flex-[78.438_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container103 />
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.474px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Oak</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[107.91px] top-[3.25px] w-[107.908px]" data-name="Container">
      <Container102 />
      <Text28 />
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container101 />
      </div>
    </div>
  );
}

function Container107() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[111.137px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.38) 0%, rgba(0, 0, 0, 0.43) 6.3%, rgba(0, 0, 0, 0.48) 12.5%, rgba(0, 0, 0, 0.51) 18.8%, rgba(0, 0, 0, 0.52) 25%, rgba(0, 0, 0, 0.51) 31.3%, rgba(0, 0, 0, 0.48) 37.5%, rgba(0, 0, 0, 0.43) 43.8%, rgba(0, 0, 0, 0.38) 50%, rgba(0, 0, 0, 0.32) 56.3%, rgba(0, 0, 0, 0.26) 62.5%, rgba(0, 0, 0, 0.21) 68.8%, rgba(0, 0, 0, 0.17) 75%, rgba(0, 0, 0, 0.14) 81.3%, rgba(0, 0, 0, 0.12) 87.5%, rgba(0, 0, 0, 0.1) 93.8%, rgba(0, 0, 0, 0.09) 100%)" }} data-name="Container" />;
}

function Container106() {
  return (
    <div className="flex-[111.137_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container107 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.747px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Pine</p>
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[107.91px] top-[3.25px] w-[143.88px]" data-name="Container">
      <Container106 />
      <Text29 />
    </div>
  );
}

function Container104() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container105 />
      </div>
    </div>
  );
}

function Container111() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[72.934px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.11) 0%, rgba(0, 0, 0, 0.13) 6.3%, rgba(0, 0, 0, 0.16) 12.5%, rgba(0, 0, 0, 0.2) 18.8%, rgba(0, 0, 0, 0.25) 25%, rgba(0, 0, 0, 0.32) 31.3%, rgba(0, 0, 0, 0.39) 37.5%, rgba(0, 0, 0, 0.46) 43.8%, rgba(0, 0, 0, 0.52) 50%, rgba(0, 0, 0, 0.57) 56.3%, rgba(0, 0, 0, 0.6) 62.5%, rgba(0, 0, 0, 0.61) 68.8%, rgba(0, 0, 0, 0.59) 75%, rgba(0, 0, 0, 0.54) 81.3%, rgba(0, 0, 0, 0.48) 87.5%, rgba(0, 0, 0, 0.41) 93.8%, rgba(0, 0, 0, 0.34) 100%)" }} data-name="Container" />;
}

function Container110() {
  return (
    <div className="flex-[72.934_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container111 />
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[27.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Lime</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[143.88px] top-[3.25px] w-[107.908px]" data-name="Container">
      <Container110 />
      <Text30 />
    </div>
  );
}

function Container108() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container109 />
      </div>
    </div>
  );
}

function Container115() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[102.153px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.26) 0%, rgba(0, 0, 0, 0.34) 6.3%, rgba(0, 0, 0, 0.44) 12.5%, rgba(0, 0, 0, 0.55) 18.8%, rgba(0, 0, 0, 0.67) 25%, rgba(0, 0, 0, 0.78) 31.3%, rgba(0, 0, 0, 0.88) 37.5%, rgba(0, 0, 0, 0.94) 43.8%, rgba(0, 0, 0, 0.96) 50%, rgba(0, 0, 0, 0.94) 56.3%, rgba(0, 0, 0, 0.88) 62.5%, rgba(0, 0, 0, 0.78) 68.8%, rgba(0, 0, 0, 0.67) 75%, rgba(0, 0, 0, 0.55) 81.3%, rgba(0, 0, 0, 0.44) 87.5%, rgba(0, 0, 0, 0.34) 93.8%, rgba(0, 0, 0, 0.26) 100%)" }} data-name="Container" />;
}

function Container114() {
  return (
    <div className="flex-[102.153_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container115 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[34.731px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Grass</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[143.88px] top-[3.25px] w-[143.88px]" data-name="Container">
      <Container114 />
      <Text31 />
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container113 />
      </div>
    </div>
  );
}

function Container119() {
  return <div className="absolute h-[2.995px] left-0 top-0 w-[159.835px]" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0.32) 0%, rgba(0, 0, 0, 0.38) 6.3%, rgba(0, 0, 0, 0.45) 12.5%, rgba(0, 0, 0, 0.5) 18.8%, rgba(0, 0, 0, 0.54) 25%, rgba(0, 0, 0, 0.56) 31.3%, rgba(0, 0, 0, 0.56) 37.5%, rgba(0, 0, 0, 0.53) 43.8%, rgba(0, 0, 0, 0.49) 50%, rgba(0, 0, 0, 0.43) 56.3%, rgba(0, 0, 0, 0.36) 62.5%, rgba(0, 0, 0, 0.3) 68.8%, rgba(0, 0, 0, 0.24) 75%, rgba(0, 0, 0, 0.19) 81.3%, rgba(0, 0, 0, 0.15) 87.5%, rgba(0, 0, 0, 0.13) 93.8%, rgba(0, 0, 0, 0.11) 100%)" }} data-name="Container" />;
}

function Container118() {
  return (
    <div className="flex-[159.835_0_0] h-[2.995px] min-w-px relative rounded-[18641400px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container119 />
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[48.984px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-black top-[-0.33px] tracking-[0.4px] whitespace-nowrap">Plantain</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[107.91px] top-[3.25px] w-[215.816px]" data-name="Container">
      <Container118 />
      <Text32 />
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[24.497px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container117 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[20px] w-[323.733px]" data-name="Container">
      <Container68 />
      <Container72 />
      <Container76 />
      <Container80 />
      <Container84 />
      <Container88 />
      <Container92 />
      <Container96 />
      <Container100 />
      <Container104 />
      <Container108 />
      <Container112 />
      <Container116 />
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[342.5px] relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container57 />
        <Container67 />
      </div>
    </div>
  );
}

function PollenCalendar() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="PollenCalendar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[50px] relative size-full">
        <Container51 />
        <Container56 />
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[116.632px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[16px] text-black top-[-0.33px] tracking-[0.32px] whitespace-nowrap">Allergy seasons</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton3() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text33 />
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph20 />
        <InfoButton3 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8.556px] py-[4.556px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Expand</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container121 />
        <Button10 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.07%_0_11.36%_0] mix-blend-multiply" data-name="Group">
      <div className="absolute inset-[8.07%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.67%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.722 126.353">
          <path d={svgPaths.p6617040} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.69%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[178.047px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[11.36%] left-0 right-full top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_91.67%_11.36%_8.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_83.33%_11.36%_16.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/4 right-3/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_66.67%_11.36%_33.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_58.33%_11.36%_41.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/2 right-1/2 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_41.67%_11.36%_58.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_33.33%_11.36%_66.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-3/4 right-1/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_16.67%_11.36%_83.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_8.33%_11.36%_91.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <Group3 />
        <div className="absolute inset-[8.07%_0_11.36%_0]" data-name="Vector">
          <div className="absolute inset-[-0.43%_0_-0.42%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.969 144.668">
              <path d={svgPaths.p267deb00} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.85" strokeWidth="1.21396" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.67%_0_11.42%_0]" data-name="Vector">
          <div className="absolute inset-[-0.48%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.755 127.468">
              <path d={svgPaths.p784fc80} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.21396" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.69%_0_11.36%_0]" data-name="Vector">
          <div className="absolute inset-[-0.46%_0_-0.45%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 323.921 134.651">
              <path d={svgPaths.p32164b80} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" strokeWidth="1.21396" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_54.12%_11.36%_45.88%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[2.87%_52.88%_92.64%_44.64%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7.99997">
            <path d={svgPaths.p18134b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[18px] left-[9.98px] top-[161.86px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[18px] left-[37.46px] top-[161.86px] w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">F</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[18px] left-[62.44px] top-[161.86px] w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[18px] left-[90.42px] top-[161.86px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.16px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[18px] left-[116.4px] top-[161.86px] w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[18px] left-[144.88px] top-[161.86px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[18px] left-[171.85px] top-[161.86px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[18px] left-[198.33px] top-[161.86px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.16px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[18px] left-[225.3px] top-[161.86px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.12px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[18px] left-[251.79px] top-[161.86px] w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">O</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[18px] left-[278.76px] top-[161.86px] w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.12px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">N</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute h-[18px] left-[306.24px] top-[161.86px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">D</p>
      </div>
    </div>
  );
}

function SeasonRibbons() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="SeasonRibbons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon39 />
        <Text34 />
        <Text35 />
        <Text36 />
        <Text37 />
        <Text38 />
        <Text39 />
        <Text40 />
        <Text41 />
        <Text42 />
        <Text43 />
        <Text44 />
        <Text45 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[6.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99653 6.99653">
        <g id="Icon">
          <g clipPath="url(#clip0_13_1116)">
            <mask fill="white" id="path-1-inside-1_13_1116">
              <path d={svgPaths.p2cd40600} />
            </mask>
            <path d="M3.49805 0.554688V6.44011" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.7" strokeWidth="0.672619" />
          </g>
          <path d={svgPaths.p13689a40} fill="var(--stroke-0, black)" fillOpacity="0.25" mask="url(#path-1-inside-1_13_1116)" />
        </g>
        <defs>
          <clipPath id="clip0_13_1116">
            <path d={svgPaths.p2cd40600} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.66px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Tree</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Icon40 />
        <Text46 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[6.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99653 6.99653">
        <g id="Icon">
          <g clipPath="url(#clip0_13_1121)">
            <mask fill="white" id="path-1-inside-1_13_1121">
              <path d={svgPaths.p2cd40600} />
            </mask>
            <path d={svgPaths.p3b226300} fill="var(--fill-0, black)" fillOpacity="0.2" id="Vector" />
          </g>
          <path d={svgPaths.p13689a40} fill="var(--stroke-0, black)" fillOpacity="0.25" mask="url(#path-1-inside-1_13_1121)" />
        </g>
        <defs>
          <clipPath id="clip0_13_1121">
            <path d={svgPaths.p2cd40600} fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text47() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[34.236px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Grass</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Icon41 />
        <Text47 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[6.997px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99653 6.99653">
        <g id="Icon">
          <mask fill="white" id="path-1-inside-1_13_1084">
            <path d={svgPaths.p2cd40600} />
          </mask>
          <path d={svgPaths.p13689a40} fill="var(--stroke-0, black)" fillOpacity="0.25" mask="url(#path-1-inside-1_13_1084)" />
          <path d={svgPaths.p20747800} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text48() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[32.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Weed</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Icon42 />
        <Text48 />
      </div>
    </div>
  );
}

function SeasonRibbons1() {
  return (
    <div className="h-[21.995px] relative shrink-0 w-[323.733px]" data-name="SeasonRibbons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[4px] relative size-full">
        <Container122 />
        <Container123 />
        <Container124 />
      </div>
    </div>
  );
}

function VizSection() {
  return (
    <div className="h-[337.127px] relative shrink-0 w-[323.733px]" data-name="VizSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[50px] relative size-full">
        <Container120 />
        <SeasonRibbons />
        <SeasonRibbons1 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[118.22px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[16px] text-black top-[-0.33px] tracking-[0.32px] whitespace-nowrap">Year at a glance</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton4() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text49 />
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph21 />
        <InfoButton4 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8.556px] py-[4.556px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Expand</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container126 />
        <Button11 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[240px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[11.82%_31.37%_73.01%_50.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8218 36.3927">
            <path d={svgPaths.p25c77900} fill="var(--fill-0, black)" fillOpacity="0.12" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.2%_17.2%_63.5%_63.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3091 46.3091">
            <path d={svgPaths.p540f80} fill="var(--fill-0, black)" fillOpacity="0.32" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.37%_11.82%_50.37%_73.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.3927 43.8218">
            <path d={svgPaths.p1c73ff00} fill="var(--fill-0, black)" fillOpacity="0.74" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[50.37%_11.82%_31.37%_73.01%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.3927 43.8218">
            <path d={svgPaths.p21027500} fill="var(--fill-0, black)" fillOpacity="0.91" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[63.5%_17.2%_17.2%_63.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3091 46.3091">
            <path d={svgPaths.p3700ca80} fill="var(--fill-0, black)" fillOpacity="0.7" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[73.01%_31.37%_11.82%_50.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8218 36.3927">
            <path d={svgPaths.p1bfc2f00} fill="var(--fill-0, black)" fillOpacity="0.83" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[73.01%_50.37%_11.82%_31.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8218 36.3927">
            <path d={svgPaths.p30838080} fill="var(--fill-0, black)" fillOpacity="0.66" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[63.5%_63.5%_17.2%_17.2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3091 46.3091">
            <path d={svgPaths.p12acdf0} fill="var(--fill-0, black)" fillOpacity="0.76" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[50.37%_73.01%_31.37%_11.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.3927 43.8218">
            <path d={svgPaths.p6e59f00} fill="var(--fill-0, black)" fillOpacity="0.85" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[31.37%_73.01%_50.37%_11.82%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.3927 43.8218">
            <path d={svgPaths.pce6a800} fill="var(--fill-0, black)" fillOpacity="0.57" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[17.2%_63.5%_63.5%_17.2%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.3091 46.3091">
            <path d={svgPaths.p1bbd8840} fill="var(--fill-0, black)" fillOpacity="0.26" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[11.82%_50.37%_73.01%_31.37%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43.8218 36.3927">
            <path d={svgPaths.p4ced280} fill="var(--fill-0, black)" fillOpacity="0.12" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[61.24%_39.23%_10.59%_53.07%]" data-name="Vector">
          <div className="absolute inset-[0_-1.32%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.9625 67.7223">
              <path d={svgPaths.p21149000} id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[87.79%_37.55%_8.87%_59.12%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7.99997">
            <path d={svgPaths.p18134b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="absolute h-[18px] left-[137.73px] top-[5.62px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jan</p>
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="absolute h-[18px] left-[187.13px] top-[33.86px] w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.07px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="absolute h-[18px] left-[214.87px] top-[82.77px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.05px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Mar</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="absolute h-[18px] left-[215.87px] top-[139.23px] w-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.08px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Apr</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="absolute h-[18px] left-[185.13px] top-[188.13px] w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.06px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">May</p>
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="absolute h-[18px] left-[137.73px] top-[216.38px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="absolute h-[18px] left-[83.26px] top-[216.38px] w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.09px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jul</p>
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="absolute h-[18px] left-[31.86px] top-[188.13px] w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Aug</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="absolute h-[18px] left-[3.12px] top-[139.23px] w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Sep</p>
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="absolute h-[18px] left-[4.62px] top-[82.77px] w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.25px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Oct</p>
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="absolute h-[18px] left-[32.36px] top-[33.86px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Nov</p>
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="absolute h-[18px] left-[80.76px] top-[5.62px] w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.11px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Dec</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="absolute h-[27px] left-[104.5px] top-[96.9px] w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[27px] left-[0.15px] text-[18px] text-black top-[-0.45px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="absolute h-[18px] left-[106px] top-[127.8px] w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.04px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="max-w-[240px] relative shrink-0 w-[240px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon43 />
        <Text50 />
        <Text51 />
        <Text52 />
        <Text53 />
        <Text54 />
        <Text55 />
        <Text56 />
        <Text57 />
        <Text58 />
        <Text59 />
        <Text60 />
        <Text61 />
        <Text62 />
        <Text63 />
      </div>
    </div>
  );
}

function YearClock() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="YearClock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container127 />
      </div>
    </div>
  );
}

function VizSection1() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="VizSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[50px] relative size-full">
        <Container125 />
        <YearClock />
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[23.993px] relative shrink-0 w-[103.438px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[24px] left-0 text-[16px] text-black top-[-0.33px] tracking-[0.32px] whitespace-nowrap">Today by hour</p>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[2.752px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[12px] left-[1.5px] text-[12px] text-[rgba(0,0,0,0.4)] text-center top-[-0.22px] whitespace-nowrap">i</p>
      </div>
    </div>
  );
}

function InfoButton5() {
  return (
    <div className="relative rounded-[7.999px] shrink-0 size-[15.998px]" data-name="InfoButton">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.4)] border-solid inset-0 pointer-events-none rounded-[7.999px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[0.556px] relative size-full">
        <Text64 />
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph22 />
        <InfoButton5 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[3px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-[0.556px] border-[rgba(0,0,0,0.15)] border-solid inset-0 pointer-events-none rounded-[3px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8.556px] py-[4.556px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center tracking-[0.4px] whitespace-nowrap">Expand</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container129 />
        <Button12 />
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="h-[178.047px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[11.36%] left-0 right-full top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_87.5%_11.36%_12.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/4 right-3/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_62.5%_11.36%_37.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/2 right-1/2 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_37.5%_11.36%_62.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-3/4 right-1/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_12.5%_11.36%_87.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-full right-0 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.78%_0_20.23%_0]" data-name="Vector">
          <div className="absolute inset-[-0.92%_-0.35%_-0.97%_-0.33%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 325.919 112.451">
              <path d={svgPaths.p3795f000} id="Vector" stroke="url(#paint0_linear_13_1075)" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2.02326" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_13_1075" x1="1.07098" x2="1.07098" y1="-16.4896" y2="127.162">
                  <stop />
                  <stop offset="1" stopOpacity="0.08" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_33.2%_11.36%_66.8%]" data-name="Vector">
          <div className="absolute inset-[0_-0.25px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.505815 148.71">
              <path d="M0.252908 0V148.71" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.505815" />
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute aspect-[7.221620559692383/7.221593379974365] left-[65.54%] right-[31.99%] top-[calc(50%+19.22px)]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7.99997">
            <path d={svgPaths.p18134b00} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="absolute h-[18px] left-[-0.11px] top-[161.86px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.11px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">0am</p>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="absolute h-[18px] left-[108.9px] top-[161.86px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">9am</p>
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="absolute h-[18px] left-[147.37px] top-[161.86px] w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">12pm</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="absolute h-[18px] left-[270.76px] top-[161.86px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.09px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">9pm</p>
      </div>
    </div>
  );
}

function IntradayCurve() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="IntradayCurve">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon44 />
        <Text65 />
        <Text66 />
        <Text67 />
        <Text68 />
      </div>
    </div>
  );
}

function VizSection2() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="VizSection">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[10px] items-start pb-[50px] relative size-full">
        <Container128 />
        <IntradayCurve />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jura:Regular',sans-serif] font-normal leading-[22.8px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.4px] whitespace-nowrap">Strata, 2026</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Jura:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] tracking-[0.4px] whitespace-nowrap">
          <span className="leading-[22.8px]">{`All data sourced from `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-from-font decoration-solid leading-[22.8px] text-[rgba(0,0,0,0.65)] underline">here</span>
        </p>
      </div>
    </div>
  );
}

function PanelFooter() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="PanelFooter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[48px] pt-[140px] relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_0_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33304 5.59388">
        <g id="Group">
          <path d={svgPaths.p234b4900} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p67abb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1d84e980} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute h-[5.595px] left-[0.13px] overflow-clip top-[0.27px] w-[8.333px]" data-name="Icon">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[6.138px] left-[12.76px] top-[28.49px] w-[8.593px]" data-name="Group1">
      <Icon45 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69158 6.75676">
        <g id="Group">
          <path d={svgPaths.p25b95c00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3a72fb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2c83c280} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute h-[6.756px] left-[-0.28px] overflow-clip top-[0.3px] w-[6.692px]" data-name="Icon">
      <Group7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[7.366px] left-[2.9px] top-[24.65px] w-[6.138px]" data-name="Group2">
      <Icon46 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5621 8.38608">
        <g id="Group">
          <path d={svgPaths.pa001800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3e1fe300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1b0080c0} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute h-[8.387px] left-[0.29px] overflow-clip top-[0.1px] w-[5.563px]" data-name="Icon">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[8.593px] left-[-0.29px] top-[12.87px] w-[6.138px]" data-name="Group3">
      <Icon47 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69158 6.7459">
        <g id="Group">
          <path d={svgPaths.p12bb1270} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3600bd00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p19729b00} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute h-[6.745px] left-[-0.28px] overflow-clip top-[-0.3px] w-[6.692px]" data-name="Icon">
      <Group11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute left-[2.9px] size-[6.138px] top-[2.94px]" data-name="Group4">
      <Icon48 />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute inset-[0_0_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33325 5.59429">
        <g id="Group">
          <path d={svgPaths.p3ac0ea00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p2901c780} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3ca95000} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute h-[5.595px] left-[0.13px] overflow-clip top-[0.27px] w-[8.333px]" data-name="Icon">
      <Group13 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute h-[6.138px] left-[12.76px] top-[-0.27px] w-[8.593px]" data-name="Group5">
      <Icon49 />
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.7022 6.7459">
        <g id="Group">
          <path d={svgPaths.p2a572400} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p37bd7400} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1029cd80} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute h-[6.745px] left-[-0.28px] overflow-clip top-[-0.3px] w-[6.703px]" data-name="Icon">
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute left-[25.06px] size-[6.138px] top-[2.94px]" data-name="Group6">
      <Icon50 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54054 8.38608">
        <g id="Group">
          <path d={svgPaths.p3a75ac00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p261d8780} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p3360cc00} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon51() {
  return (
    <div className="absolute h-[8.387px] left-[0.3px] overflow-clip top-[0.1px] w-[5.541px]" data-name="Icon">
      <Group17 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute h-[8.593px] left-[28.26px] top-[12.87px] w-[6.138px]" data-name="Group7">
      <Icon51 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[0_0.01%_-0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.7022 6.75676">
        <g id="Group">
          <path d={svgPaths.p1500800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1ee1b680} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p13d8a5c0} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute h-[6.756px] left-[-0.28px] overflow-clip top-[0.3px] w-[6.703px]" data-name="Icon">
      <Group19 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute h-[7.366px] left-[25.06px] top-[24.65px] w-[6.138px]" data-name="Group8">
      <Icon52 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute inset-[0_-0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.31278 5.59429">
        <g id="Group">
          <path d={svgPaths.p2667a80} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p699ea40} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p9781780} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute h-[5.595px] left-[0.14px] overflow-clip top-[0.27px] w-[8.312px]" data-name="Icon">
      <Group21 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute h-[6.138px] left-[12.75px] top-[20.7px] w-[8.593px]" data-name="Group10">
      <Icon53 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute h-[8.387px] left-[0.29px] overflow-clip top-[0.1px] w-[5.552px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.55173 8.38692">
        <g id="Group">
          <path d={svgPaths.p24f2fa00} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p28aef900} fill="var(--fill-0, black)" id="Vector_2" />
          <path d="M0 0V2.79513H2.77828V0H0Z" fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute h-[8.593px] left-[7.42px] top-[12.87px] w-[6.138px]" data-name="Group11">
      <Icon54 />
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute h-[5.595px] left-[0.13px] overflow-clip top-[0.27px] w-[8.333px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33325 5.5943">
        <g id="Group">
          <path d={svgPaths.p3c7388c0} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p38362600} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p6331000} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Group23() {
  return (
    <div className="absolute h-[6.138px] left-[12.76px] top-[7.5px] w-[8.593px]" data-name="Group12">
      <Icon55 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54054 8.38608">
        <g id="Group">
          <path d={svgPaths.p3b459380} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p227db780} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p63d84c0} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute h-[8.387px] left-[0.3px] overflow-clip top-[0.1px] w-[5.541px]" data-name="Icon">
      <Group25 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute h-[8.593px] left-[20.54px] top-[12.87px] w-[6.138px]" data-name="Group13">
      <Icon56 />
    </div>
  );
}

function StrataMark() {
  return (
    <div className="relative shrink-0 size-[34.366px]" data-name="StrataMark">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Group4 />
        <Group6 />
        <Group8 />
        <Group10 />
        <Group12 />
        <Group14 />
        <Group16 />
        <Group18 />
        <Group20 />
        <Group22 />
        <Group23 />
        <Group24 />
      </div>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[40.295px] relative shrink-0 w-[109.644px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[40.297px] left-0 text-[40.297px] text-black top-[-0.11px] whitespace-nowrap">Strata</p>
      </div>
    </div>
  );
}

function StrataLogo() {
  return (
    <div className="relative shrink-0" data-name="StrataLogo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[13px] items-center relative size-full">
        <StrataMark />
        <Paragraph25 />
      </div>
    </div>
  );
}

function ModeIcon() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ModeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_2_832)" id="ModeIcon">
          <path d={svgPaths.p36ee7500} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_832">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text69() {
  return (
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0 size-[17.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ModeIcon />
      </div>
    </div>
  );
}

function ModeIcon1() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="ModeIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="ModeIcon">
          <path d={svgPaths.p1aa14480} fill="var(--fill-0, #1F1F1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text70() {
  return (
    <div className="relative rounded-[2px] shrink-0 size-[17.995px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <ModeIcon1 />
      </div>
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="ThemeToggle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center p-[4px] relative size-full">
        <Text69 />
        <Text70 />
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute bg-[#fffcf7] left-0 top-0 w-[323.733px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[20px] relative size-full">
        <StrataLogo />
        <ThemeToggle />
      </div>
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="relative shrink-0 w-[323.733px]" data-name="LeftPanel">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[110px] items-start relative size-full">
        <PlaceholderForLeftPanel />
        <Container1 />
        <Container6 />
        <Container22 />
        <PollenCalendar />
        <VizSection />
        <VizSection1 />
        <VizSection2 />
        <PanelFooter />
        <Container130 />
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-[#fffcf7] content-stretch flex items-center p-[16px] relative size-full" data-name="Container">
      <LeftPanel />
    </div>
  );
}