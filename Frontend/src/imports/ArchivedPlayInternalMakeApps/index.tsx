import svgPaths from "./svg-a6gt45niyr";
import imgContainer from "./0d0fd76df333aa8dbfb47495a64ba0f87895ba00.png";

function PlaceholderForLeftPanel() {
  return <div className="absolute h-[60.295px] left-0 top-0 w-[461.997px]" data-name="Placeholder for LeftPanel" />;
}

function Text() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[74.905px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[27px] left-[37.5px] text-[18px] text-black text-center top-[-0.89px] tracking-[0.02px] whitespace-nowrap">Bismarck</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[5.998px] relative shrink-0 w-[8.993px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99306 5.99826">
        <g clipPath="url(#clip0_2_791)" id="Icon">
          <path d={svgPaths.p3add5780} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="0.999229" />
        </g>
        <defs>
          <clipPath id="clip0_2_791">
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
    <div className="relative shrink-0 w-[89.896px]" data-name="LocationPicker">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[141.424px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[1.6px] uppercase whitespace-nowrap">North Dakota, USA</p>
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

function Container3() {
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
    <div className="h-[200px] relative shrink-0 w-[245.868px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:Thin',sans-serif] font-thin leading-[200px] left-0 text-[200px] text-black top-0 tracking-[-10px] whitespace-nowrap">8.4</p>
      </div>
    </div>
  );
}

function Container6() {
  return <div className="bg-black relative rounded-[4.249px] shrink-0 size-[8.498px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[27.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function StatusBadge() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container6 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <StatusBadge />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[18px] items-start relative size-full">
        <Paragraph1 />
        <Container5 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start justify-end left-0 pb-[40px] pt-[126.4px] right-0 top-[60.3px]" data-name="Container">
      <Container3 />
      <Container4 />
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

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph3 />
        <InfoButton />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container9 />
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
  return <div className="bg-black relative rounded-[4.249px] shrink-0 size-[8.498px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[27.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">High</p>
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
    <div className="relative shrink-0 w-[133.993px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
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
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.455 132.455">
          <path d={svgPaths.pb223300} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.993 132.079">
          <path d={svgPaths.p100d4480} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.938601" />
        </svg>
      </div>
      <div className="absolute bottom-[41.97%] left-[4.47%] right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-21.03%_-3.71%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.5323 15.2796">
            <path d={svgPaths.p285d200} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3.90458" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[133.993px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

function DialCircle() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[133.993px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[44.792px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[22.5px] text-[32px] text-black text-center top-0 whitespace-nowrap">8.4</p>
      </div>
    </div>
  );
}

function TrackerColumn() {
  return (
    <div className="flex-[153.993_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center min-h-[inherit] min-w-[inherit] p-[10px] relative size-full">
          <Container11 />
          <DialCircle />
          <Paragraph6 />
        </div>
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

function Container14() {
  return <div className="bg-black relative rounded-[4.249px] shrink-0 size-[8.498px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[27.604px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function StatusBadge2() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container14 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-[134.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
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
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.464 132.464">
          <path d={svgPaths.p29b6f180} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.002 132.088">
          <path d={svgPaths.p3e6f7a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.938664" />
        </svg>
      </div>
      <div className="absolute bottom-[24.36%] left-[11.53%] right-1/2 top-1/2" data-name="Vector">
        <div className="absolute inset-[-7.15%_-4.77%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4665 39.2701">
            <path d={svgPaths.p3cecb580} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="3.5444" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[134.002px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group1 />
      </div>
    </div>
  );
}

function DialCircle1() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[134.002px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[38.811px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[19.5px] text-[32px] text-black text-center top-0 whitespace-nowrap">7.4</p>
      </div>
    </div>
  );
}

function TrackerColumn1() {
  return (
    <div className="flex-[154.002_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center min-h-[inherit] min-w-[inherit] p-[10px] relative size-full">
          <Container13 />
          <DialCircle1 />
          <Paragraph9 />
        </div>
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

function Container16() {
  return <div className="bg-black relative rounded-[0.998px] shrink-0 size-[1.997px]" data-name="Container" />;
}

function Paragraph11() {
  return (
    <div className="h-[11.997px] relative shrink-0 w-[31.832px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[12px] left-0 text-[12px] text-black top-[-0.67px] tracking-[0.4px] whitespace-nowrap">None</p>
      </div>
    </div>
  );
}

function StatusBadge3() {
  return (
    <div className="bg-[rgba(0,0,0,0.03)] relative rounded-[3px] shrink-0" data-name="StatusBadge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center justify-center p-[6px] relative size-full">
        <Container16 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-[134.002px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
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
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 132.464 132.464">
          <path d={svgPaths.p29b6f180} fill="var(--fill-0, #FFFCF7)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0.71%_0_0.72%_0]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134.002 132.088">
          <path d={svgPaths.p3e6f7a00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeMiterlimit="10" strokeOpacity="0.5" strokeWidth="0.938664" />
        </svg>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-[13.17%] top-[22.05%]" data-name="Vector">
        <div className="absolute inset-[-1.4%_-1.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.4071 38.5048">
            <path d={svgPaths.p214fd000} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="square" strokeWidth="0.750931" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[134.002px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group2 />
      </div>
    </div>
  );
}

function DialCircle2() {
  return (
    <div className="max-w-[160px] relative shrink-0 size-[134.002px]" data-name="DialCircle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[31.997px] relative shrink-0 w-[28.785px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Geist:Light',sans-serif] font-light leading-[32px] left-[14.5px] text-[32px] text-black text-center top-0 whitespace-nowrap">—</p>
      </div>
    </div>
  );
}

function TrackerColumn2() {
  return (
    <div className="flex-[154.002_0_0] min-h-[191px] min-w-px relative" data-name="TrackerColumn">
      <div className="flex flex-col items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[18px] items-center min-h-[inherit] min-w-[inherit] p-[10px] relative size-full">
          <Container15 />
          <DialCircle2 />
          <Paragraph12 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <TrackerColumn />
        <TrackerColumn1 />
        <TrackerColumn2 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 pb-[50px] top-[493.7px] w-[461.997px]" data-name="Container">
      <Container8 />
      <Container10 />
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

function Container19() {
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

function Container20() {
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

function Container18() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container19 />
        <Container20 />
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

function Container22() {
  return (
    <div className="flex-[53.872_0_0] h-full min-w-px relative" data-name="Container">
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

function Container23() {
  return (
    <div className="flex-[53.88_0_0] h-full min-w-px relative" data-name="Container">
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

function Container24() {
  return (
    <div className="flex-[53.872_0_0] h-full min-w-px relative" data-name="Container">
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

function Container25() {
  return (
    <div className="flex-[53.88_0_0] h-full min-w-px relative" data-name="Container">
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

function Container26() {
  return (
    <div className="flex-[53.88_0_0] h-full min-w-px relative" data-name="Container">
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

function Container27() {
  return (
    <div className="flex-[53.88_0_0] h-full min-w-px relative" data-name="Container">
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

function Container28() {
  return (
    <div className="flex-[53.88_0_0] h-full min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <Text9 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[37.995px] relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start py-[10px] relative size-full">
        <Container22 />
        <Container23 />
        <Container24 />
        <Container25 />
        <Container26 />
        <Container27 />
        <Container28 />
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

function PollenDot() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container31() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot />
      </div>
    </div>
  );
}

function PollenDot1() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container32() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot1 />
      </div>
    </div>
  );
}

function PollenDot2() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container33() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot2 />
      </div>
    </div>
  );
}

function PollenDot3() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container34() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot3 />
      </div>
    </div>
  );
}

function PollenDot4() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container35() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot4 />
      </div>
    </div>
  );
}

function PollenDot5() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container36() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot5 />
      </div>
    </div>
  );
}

function PollenDot6() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container37() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot6 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[377.144_0_0] h-[9.236px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container31 />
        <Container32 />
        <Container33 />
        <Container34 />
        <Container35 />
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph14 />
        <Container30 />
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

function PollenDot7() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container40() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot7 />
      </div>
    </div>
  );
}

function PollenDot8() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container41() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot8 />
      </div>
    </div>
  );
}

function PollenDot9() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container42() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot9 />
      </div>
    </div>
  );
}

function PollenDot10() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container43() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot10 />
      </div>
    </div>
  );
}

function PollenDot11() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container44() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot11 />
      </div>
    </div>
  );
}

function PollenDot12() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container45() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot12 />
      </div>
    </div>
  );
}

function PollenDot13() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container46() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot13 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[377.144_0_0] h-[9.236px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container40 />
        <Container41 />
        <Container42 />
        <Container43 />
        <Container44 />
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph15 />
        <Container39 />
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

function PollenDot14() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container49() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot14 />
      </div>
    </div>
  );
}

function PollenDot15() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container50() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot15 />
      </div>
    </div>
  );
}

function PollenDot16() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container51() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot16 />
      </div>
    </div>
  );
}

function PollenDot17() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container52() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot17 />
      </div>
    </div>
  );
}

function PollenDot18() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container53() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot18 />
      </div>
    </div>
  );
}

function PollenDot19() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container54() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot19 />
      </div>
    </div>
  );
}

function PollenDot20() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container55() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot20 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="flex-[377.144_0_0] h-[9.236px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container49 />
        <Container50 />
        <Container51 />
        <Container52 />
        <Container53 />
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph16 />
        <Container48 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Pine</p>
      </div>
    </div>
  );
}

function PollenDot21() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container58() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot21 />
      </div>
    </div>
  );
}

function PollenDot22() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container59() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot22 />
      </div>
    </div>
  );
}

function PollenDot23() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container60() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot23 />
      </div>
    </div>
  );
}

function PollenDot24() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container61() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot24 />
      </div>
    </div>
  );
}

function PollenDot25() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container62() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot25 />
      </div>
    </div>
  );
}

function PollenDot26() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container63() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot26 />
      </div>
    </div>
  );
}

function PollenDot27() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container64() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot27 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="flex-[377.144_0_0] h-[9.236px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container58 />
        <Container59 />
        <Container60 />
        <Container61 />
        <Container62 />
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph17 />
        <Container57 />
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[72.856px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[18px] left-0 text-[12px] text-black top-[0.11px] tracking-[0.6px] whitespace-nowrap">Birch</p>
      </div>
    </div>
  );
}

function PollenDot28() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container67() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot28 />
      </div>
    </div>
  );
}

function PollenDot29() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container68() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot29 />
      </div>
    </div>
  );
}

function PollenDot30() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container69() {
  return (
    <div className="flex-[53.872_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot30 />
      </div>
    </div>
  );
}

function PollenDot31() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container70() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot31 />
      </div>
    </div>
  );
}

function PollenDot32() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container71() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot32 />
      </div>
    </div>
  );
}

function PollenDot33() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container72() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot33 />
      </div>
    </div>
  );
}

function PollenDot34() {
  return <div className="h-[9.236px] relative shrink-0 w-[40.998px]" data-name="PollenDot" />;
}

function Container73() {
  return (
    <div className="flex-[53.88_0_0] min-w-px relative self-stretch" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center relative size-full">
        <PollenDot34 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[377.144_0_0] h-[9.236px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container67 />
        <Container68 />
        <Container69 />
        <Container70 />
        <Container71 />
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center py-[10px] relative size-full">
        <Paragraph18 />
        <Container66 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 pb-[50px] top-[866.7px] w-[461.997px]" data-name="Container">
      <Container18 />
      <Container21 />
      <Container29 />
      <Container38 />
      <Container47 />
      <Container56 />
      <Container65 />
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

function Container76() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center relative size-full">
        <Paragraph19 />
        <InfoButton2 />
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container76 />
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

function Container78() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
        <Button4 />
        <Button5 />
        <Button6 />
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
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[12px] text-center text-white tracking-[0.4px] whitespace-nowrap">9M</p>
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

function Container79() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] relative rounded-[4px] shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
        <Button7 />
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container78 />
        <Container79 />
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start py-[20px] relative size-full">
        <Container75 />
        <Container77 />
      </div>
    </div>
  );
}

function Container80() {
  return <div className="h-[342.5px] relative shrink-0 w-[461.997px]" data-name="Container" />;
}

function PollenCalendar() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[50px] top-[1275.67px] w-[461.997px]" data-name="PollenCalendar">
      <Container74 />
      <Container80 />
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

function Text11() {
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
        <Text11 />
      </div>
    </div>
  );
}

function Container82() {
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

function Container81() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container82 />
        <Button10 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[8.07%_0_11.36%_0] mix-blend-multiply" data-name="Group">
      <div className="absolute inset-[8.07%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461.995 204.721">
          <path d={svgPaths.p3570b300} fill="var(--fill-0, black)" fillOpacity="0.1" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[17.67%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461.995 180.322">
          <path d={svgPaths.p268bd700} fill="var(--fill-0, black)" fillOpacity="0.07" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[13.69%_0_11.36%_0] mix-blend-multiply" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461.995 190.428">
          <path d={svgPaths.p260f1d70} fill="var(--fill-0, black)" fillOpacity="0.05" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[254.097px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[11.36%] left-0 right-full top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_91.67%_11.36%_8.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_83.33%_11.36%_16.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/4 right-3/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_66.67%_11.36%_33.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_58.33%_11.36%_41.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/2 right-1/2 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_41.67%_11.36%_58.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_33.33%_11.36%_66.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-3/4 right-1/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_16.67%_11.36%_83.33%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_8.33%_11.36%_91.67%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <Group3 />
        <div className="absolute inset-[8.07%_0_11.36%_0]" data-name="Vector">
          <div className="absolute inset-[-0.36%_0_-0.35%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 462.288 206.17">
              <path d={svgPaths.p2832300} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.85" strokeWidth="1.44373" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.67%_0_11.42%_0]" data-name="Vector">
          <div className="absolute inset-[-0.4%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 462.035 181.624">
              <path d={svgPaths.p25f2300} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="1.44373" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[13.69%_0_11.36%_0]" data-name="Vector">
          <div className="absolute inset-[-0.38%_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 462.232 191.875">
              <path d={svgPaths.p1c167500} id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" strokeWidth="1.44373" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_54.12%_11.36%_45.88%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[4.2%_53.62%_93.98%_45.38%]" data-name="Vector">
          <div className="absolute inset-[-7.81%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.34183 5.34181">
              <path d={svgPaths.p3cb12af0} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[18px] left-[15.74px] top-[230.99px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[18px] left-[54.74px] top-[230.99px] w-[6px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">F</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[18px] left-[91.24px] top-[230.99px] w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[18px] left-[130.75px] top-[230.99px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.16px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[18px] left-[168.25px] top-[230.99px] w-[10px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">M</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[18px] left-[208.24px] top-[230.99px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="absolute h-[18px] left-[246.74px] top-[230.99px] w-[7px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">J</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[18px] left-[284.74px] top-[230.99px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.16px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">A</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[18px] left-[323.24px] top-[230.99px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.12px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">S</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[18px] left-[361.25px] top-[230.99px] w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.17px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">O</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[18px] left-[399.74px] top-[230.99px] w-[9px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.12px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">N</p>
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[18px] left-[438.74px] top-[230.99px] w-[8px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">D</p>
      </div>
    </div>
  );
}

function SeasonRibbons() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="SeasonRibbons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
        <Text12 />
        <Text13 />
        <Text14 />
        <Text15 />
        <Text16 />
        <Text17 />
        <Text18 />
        <Text19 />
        <Text20 />
        <Text21 />
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return <div className="bg-black opacity-90 relative rounded-[3.5px] shrink-0 size-[6.997px]" data-name="Text" />;
}

function Text25() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[25.66px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Tree</p>
      </div>
    </div>
  );
}

function LegendItem() {
  return (
    <div className="h-full relative shrink-0" data-name="LegendItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Text26() {
  return <div className="bg-black opacity-90 relative rounded-[3.5px] shrink-0 size-[6.997px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[34.236px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Grass</p>
      </div>
    </div>
  );
}

function LegendItem1() {
  return (
    <div className="h-full relative shrink-0" data-name="LegendItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Text28() {
  return <div className="bg-black opacity-90 relative rounded-[3.5px] shrink-0 size-[6.997px]" data-name="Text" />;
}

function Text29() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[32.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Weed</p>
      </div>
    </div>
  );
}

function LegendItem2() {
  return (
    <div className="h-full relative shrink-0" data-name="LegendItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-center relative size-full">
        <Text28 />
        <Text29 />
      </div>
    </div>
  );
}

function SeasonRibbons1() {
  return (
    <div className="h-[21.995px] relative shrink-0 w-[461.997px]" data-name="SeasonRibbons">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start pt-[4px] relative size-full">
        <LegendItem />
        <LegendItem1 />
        <LegendItem2 />
      </div>
    </div>
  );
}

function VizSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] h-[413.177px] items-start left-0 pb-[50px] top-[1775.16px] w-[461.997px]" data-name="VizSection">
      <Container81 />
      <SeasonRibbons />
      <SeasonRibbons1 />
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

function Text30() {
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
        <Text30 />
      </div>
    </div>
  );
}

function Container84() {
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

function Container83() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container84 />
        <Button11 />
      </div>
    </div>
  );
}

function Icon5() {
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
        <div className="absolute inset-[73.68%_39.45%_11.42%_56.47%]" data-name="Vector">
          <div className="absolute inset-[-0.27%_-3.56%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4759 35.9687">
              <path d={svgPaths.p72bdd20} id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[88.64%_38.4%_9.72%_59.97%]" data-name="Vector">
          <div className="absolute inset-[-9.19%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.64913 4.64915">
              <path d={svgPaths.p2039b580} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute h-[18px] left-[137.73px] top-[5.62px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jan</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[18px] left-[187.13px] top-[33.86px] w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.07px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[18px] left-[214.87px] top-[82.76px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.05px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Mar</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[18px] left-[215.87px] top-[139.23px] w-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.08px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Apr</p>
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[18px] left-[185.13px] top-[188.13px] w-[24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.06px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">May</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="absolute h-[18px] left-[137.73px] top-[216.37px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute h-[18px] left-[83.26px] top-[216.37px] w-[17px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.09px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Jul</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute h-[18px] left-[31.86px] top-[188.13px] w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Aug</p>
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute h-[18px] left-[3.12px] top-[139.23px] w-[23px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Sep</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[18px] left-[4.62px] top-[82.76px] w-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.25px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Oct</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[18px] left-[32.36px] top-[33.86px] w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.22px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Nov</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="absolute h-[18px] left-[80.76px] top-[5.62px] w-[22px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.11px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Dec</p>
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute h-[27px] left-[104.5px] top-[96.9px] w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Geist:ExtraLight',sans-serif] font-extralight leading-[27px] left-[0.15px] text-[18px] text-black top-[-0.45px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute h-[18px] left-[106px] top-[127.8px] w-[28px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.04px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">2026</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="max-w-[240px] relative shrink-0 w-[240px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] relative size-full">
        <Icon5 />
        <Text31 />
        <Text32 />
        <Text33 />
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
      </div>
    </div>
  );
}

function YearClock() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="YearClock">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container85 />
      </div>
    </div>
  );
}

function VizSection1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 pb-[50px] top-[2188.34px] w-[461.997px]" data-name="VizSection">
      <Container83 />
      <YearClock />
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

function Text45() {
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
        <Text45 />
      </div>
    </div>
  );
}

function Container87() {
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

function Container86() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between py-[20px] relative size-full">
        <Container87 />
        <Button12 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[254.097px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bottom-[11.36%] left-0 right-full top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_87.5%_11.36%_12.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/4 right-3/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_62.5%_11.36%_37.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-1/2 right-1/2 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_37.5%_11.36%_62.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-3/4 right-1/4 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_12.5%_11.36%_87.5%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[11.36%] left-full right-0 top-[5.11%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.05" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[17.78%_0_20.23%_0]" data-name="Vector">
          <div className="absolute inset-[-0.23%_-0.11%_-0.32%_-0.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 462.995 158.367">
              <path d={svgPaths.p7ca3800} id="Vector" stroke="url(#paint0_linear_2_882)" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_882" x1="231.497" x2="231.497" y1="0.356103" y2="157.867">
                  <stop />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute inset-[5.11%_50.07%_11.36%_49.93%]" data-name="Vector">
          <div className="absolute inset-[0_-0.36px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.721866 212.229">
              <path d="M0.360933 0V212.229" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[43.37%_49.29%_53.79%_49.15%]" data-name="Vector">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.94053 7.94053">
              <path d={svgPaths.p2df14100} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, #8B8B8B)" strokeWidth="0.721866" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[18px] left-[-0.11px] top-[230.99px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.11px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">0am</p>
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[18px] left-[160.75px] top-[230.99px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.19px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">9am</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="absolute h-[18px] left-[216.5px] top-[230.99px] w-[29px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">12pm</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="absolute h-[18px] left-[391.74px] top-[230.99px] w-[25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.09px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">9pm</p>
      </div>
    </div>
  );
}

function IntradayCurve() {
  return (
    <div className="relative shrink-0 w-[461.997px]" data-name="IntradayCurve">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon6 />
        <Text46 />
        <Text47 />
        <Text48 />
        <Text49 />
      </div>
    </div>
  );
}

function VizSection2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 pb-[50px] top-[2555.45px] w-[461.997px]" data-name="VizSection">
      <Container86 />
      <IntradayCurve />
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
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[48px] pt-[140px] top-[2936.66px] w-[461.997px]" data-name="PanelFooter">
      <Paragraph23 />
      <Paragraph24 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[0_0_-0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.33304 5.59486">
        <g id="Group">
          <path d={svgPaths.pc527700} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p67abb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p220e7700} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute h-[5.595px] left-[0.13px] overflow-clip top-[0.27px] w-[8.333px]" data-name="Icon">
      <Group5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute h-[6.138px] left-[12.76px] top-[28.49px] w-[8.593px]" data-name="Group1">
      <Icon7 />
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute inset-[0_0.01%_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.69158 6.75578">
        <g id="Group">
          <path d={svgPaths.p2cc55200} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p3a72fb00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p2c83c280} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute h-[6.756px] left-[-0.28px] overflow-clip top-[0.3px] w-[6.692px]" data-name="Icon">
      <Group7 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute h-[7.366px] left-[2.9px] top-[24.65px] w-[6.138px]" data-name="Group2">
      <Icon8 />
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.5621 8.38608">
        <g id="Group">
          <path d={svgPaths.pa001800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1f0f5d00} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p1b0080c0} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute h-[8.387px] left-[0.29px] overflow-clip top-[0.1px] w-[5.563px]" data-name="Icon">
      <Group9 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[8.593px] left-[-0.29px] top-[12.87px] w-[6.138px]" data-name="Group3">
      <Icon9 />
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

function Icon10() {
  return (
    <div className="absolute h-[6.745px] left-[-0.28px] overflow-clip top-[-0.3px] w-[6.692px]" data-name="Icon">
      <Group11 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute left-[2.9px] size-[6.138px] top-[2.94px]" data-name="Group4">
      <Icon10 />
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
          <path d={svgPaths.p16ee5d00} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute h-[5.595px] left-[0.13px] overflow-clip top-[0.27px] w-[8.333px]" data-name="Icon">
      <Group13 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute h-[6.138px] left-[12.76px] top-[-0.27px] w-[8.593px]" data-name="Group5">
      <Icon11 />
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

function Icon12() {
  return (
    <div className="absolute h-[6.745px] left-[-0.28px] overflow-clip top-[-0.3px] w-[6.703px]" data-name="Icon">
      <Group15 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute left-[25.06px] size-[6.138px] top-[2.94px]" data-name="Group6">
      <Icon12 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54054 8.38608">
        <g id="Group">
          <path d={svgPaths.p23480100} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p7ebfff0} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.pf075700} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute h-[8.387px] left-[0.3px] overflow-clip top-[0.1px] w-[5.541px]" data-name="Icon">
      <Group17 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute h-[8.593px] left-[28.26px] top-[12.87px] w-[6.138px]" data-name="Group7">
      <Icon13 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute inset-[0_0.01%_0_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.7022 6.75578">
        <g id="Group">
          <path d={svgPaths.p1500800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1ee1b680} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p38ad6980} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute h-[6.756px] left-[-0.28px] overflow-clip top-[0.3px] w-[6.703px]" data-name="Icon">
      <Group19 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute h-[7.366px] left-[25.06px] top-[24.65px] w-[6.138px]" data-name="Group8">
      <Icon14 />
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

function Icon15() {
  return (
    <div className="absolute h-[5.595px] left-[0.14px] overflow-clip top-[0.27px] w-[8.312px]" data-name="Icon">
      <Group21 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute h-[6.138px] left-[12.75px] top-[20.7px] w-[8.593px]" data-name="Group10">
      <Icon15 />
    </div>
  );
}

function Icon16() {
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
      <Icon16 />
    </div>
  );
}

function Icon17() {
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
      <Icon17 />
    </div>
  );
}

function Group25() {
  return (
    <div className="absolute inset-[0_0.01%_0.01%_0]" data-name="Group">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.54054 8.38608">
        <g id="Group">
          <path d={svgPaths.p3b459380} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pd8b7300} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p63d84c0} fill="var(--fill-0, black)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute h-[8.387px] left-[0.3px] overflow-clip top-[0.1px] w-[5.541px]" data-name="Icon">
      <Group25 />
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute h-[8.593px] left-[20.54px] top-[12.87px] w-[6.138px]" data-name="Group13">
      <Icon18 />
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
        <g clipPath="url(#clip0_2_705)" id="ModeIcon">
          <path d={svgPaths.p2fbb4500} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_2_705">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text50() {
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
          <path d={svgPaths.p7c2ab00} fill="var(--fill-0, #1F1F1F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text51() {
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
        <Text50 />
        <Text51 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute bg-[#fffcf7] content-stretch drop-shadow-[0px_1px_4px_rgba(0,0,0,0.05)] flex items-center justify-between left-0 pb-[20px] top-[2118.89px] w-[461.997px]" data-name="Container">
      <StrataLogo />
      <ThemeToggle />
    </div>
  );
}

function LeftPanel() {
  return (
    <div className="absolute h-[3170.659px] left-0 right-0 top-0" data-name="LeftPanel">
      <PlaceholderForLeftPanel />
      <Container2 />
      <Container7 />
      <Container17 />
      <PollenCalendar />
      <VizSection />
      <VizSection1 />
      <VizSection2 />
      <PanelFooter />
      <Container88 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-full relative shrink-0 w-[461.997px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <LeftPanel />
      </div>
    </div>
  );
}

function Container90() {
  return <div className="bg-[rgba(0,0,0,0.15)] h-[40px] relative rounded-[2px] shrink-0 w-[1.997px]" data-name="Container" />;
}

function Container89() {
  return (
    <div className="h-full relative shrink-0 w-[7.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.4)] text-center whitespace-nowrap">Day</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Month</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.4)] text-center whitespace-nowrap">Year</p>
      </div>
    </div>
  );
}

function GranularityToggle() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] h-full relative rounded-[4px] shrink-0" data-name="GranularityToggle">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center p-[4px] relative size-full">
          <Button13 />
          <Button14 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text52() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.51px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Jan</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container95 />
        <Text52 />
      </div>
    </div>
  );
}

function Container97() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text53() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[20.755px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Feb</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container97 />
        <Text53 />
      </div>
    </div>
  );
}

function Container99() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text54() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.005px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Mar</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container99 />
        <Text54 />
      </div>
    </div>
  );
}

function Container101() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text55() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[20.061px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Apr</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container101 />
        <Text55 />
      </div>
    </div>
  );
}

function Container103() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text56() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[24.774px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">May</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container103 />
        <Text56 />
      </div>
    </div>
  );
}

function Container105() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text57() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[21.901px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Jun</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container105 />
        <Text57 />
      </div>
    </div>
  );
}

function Container107() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text58() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[18.073px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Jul</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container107 />
        <Text58 />
      </div>
    </div>
  );
}

function Container109() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text59() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.63px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Aug</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container109 />
        <Text59 />
      </div>
    </div>
  );
}

function Container111() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text60() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[23.464px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Sep</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container111 />
        <Text60 />
      </div>
    </div>
  );
}

function Container113() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text61() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[20.408px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Oct</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container113 />
        <Text61 />
      </div>
    </div>
  );
}

function Container115() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text62() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[22.344px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Nov</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container115 />
        <Text62 />
      </div>
    </div>
  );
}

function Container117() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-[7.995px] relative rounded-[1px] shrink-0 w-[0.998px]" data-name="Container" />;
}

function Text63() {
  return (
    <div className="h-[17.995px] relative shrink-0 w-[23.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.33px] tracking-[0.3px] whitespace-nowrap">Dec</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-center relative size-full">
        <Container117 />
        <Text63 />
      </div>
    </div>
  );
}

function Container118() {
  return <div className="absolute bg-black h-[36px] left-[256.61px] rounded-[1px] top-[3.99px] w-px" data-name="Container" />;
}

function TimeScrubber() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] flex-[740.911_0_0] h-full min-w-px relative rounded-[4px]" data-name="TimeScrubber">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between px-[8px] py-[6px] relative size-full">
          <Container94 />
          <Container96 />
          <Container98 />
          <Container100 />
          <Container102 />
          <Container104 />
          <Container106 />
          <Container108 />
          <Container110 />
          <Container112 />
          <Container114 />
          <Container116 />
          <Container118 />
        </div>
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[12.995px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9948 12.9948">
        <g id="Icon">
          <path d={svgPaths.p9311f00} fill="var(--fill-0, black)" fillOpacity="0.6" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPlayThroughTime() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] h-full relative rounded-[4px] shrink-0" data-name="Button - Play through time">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] h-full relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[12px] text-[rgba(0,0,0,0.6)] text-center tracking-[0.4px] whitespace-nowrap">Today</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[43.984px] items-start left-[16px] top-[13.99px]" data-name="Container">
      <GranularityToggle />
      <TimeScrubber />
      <ButtonPlayThroughTime />
      <Button16 />
    </div>
  );
}

function Text64() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.16px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">12×</p>
      </div>
    </div>
  );
}

function Container120() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container119() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text64 />
        <Container120 />
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="h-[18px] relative shrink-0 w-[19px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.11px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">10×</p>
      </div>
    </div>
  );
}

function Container122() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container121() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text65 />
        <Container122 />
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="h-[18px] relative shrink-0 w-[15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.2px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">8×</p>
      </div>
    </div>
  );
}

function Container124() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container123() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text66 />
        <Container124 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.24px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">6×</p>
      </div>
    </div>
  );
}

function Container126() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container125() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text67 />
        <Container126 />
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.07px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">4×</p>
      </div>
    </div>
  );
}

function Container128() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container127() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text68 />
        <Container128 />
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="h-[18px] relative shrink-0 w-[14px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.07px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">2×</p>
      </div>
    </div>
  );
}

function Container130() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container129() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text69 />
        <Container130 />
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="h-[18px] relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[0.21px] text-[12px] text-[rgba(0,0,0,0.72)] top-[-0.61px] tracking-[0.3px] whitespace-nowrap">1×</p>
      </div>
    </div>
  );
}

function Container132() {
  return <div className="bg-[rgba(0,0,0,0.35)] h-px relative rounded-[1px] shrink-0 w-[8px]" data-name="Container" />;
}

function Container131() {
  return (
    <div className="h-[73px] min-h-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center min-h-[inherit] relative size-full">
        <Text70 />
        <Container132 />
      </div>
    </div>
  );
}

function Container133() {
  return <div className="-translate-y-1/2 absolute bg-black h-px left-[4.99px] rounded-[1px] shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5)] top-[calc(50%+0.94px)] w-[34px]" data-name="Container" />;
}

function ZoomScrubber() {
  return (
    <div className="absolute backdrop-blur-[25px] bg-[rgba(0,0,0,0.05)] content-stretch flex flex-col h-[526px] items-start justify-between left-[950.01px] overflow-clip px-[6px] py-[8px] rounded-[4px] top-[262.56px]" data-name="ZoomScrubber">
      <Container119 />
      <Container121 />
      <Container123 />
      <Container125 />
      <Container127 />
      <Container129 />
      <Container131 />
      <Container133 />
    </div>
  );
}

function Text71() {
  return (
    <div className="h-[15px] relative shrink-0 w-[31px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[15px] left-[-0.07px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-1.28px] whitespace-nowrap">Mode</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-black drop-shadow-[0px_1px_0.75px_rgba(0,0,0,0.25)] relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">Radial</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.4)] text-center whitespace-nowrap">Color</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.4)] text-center whitespace-nowrap">Circles</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[2px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Jura:Medium',sans-serif] font-medium leading-[15px] relative shrink-0 text-[10px] text-[rgba(0,0,0,0.4)] text-center whitespace-nowrap">Dots</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button17 />
        <Button18 />
        <Button19 />
        <Button20 />
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] h-full relative rounded-[4px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center px-[8px] py-[4px] relative size-full">
          <Text71 />
          <Container136 />
        </div>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="h-[15px] relative shrink-0 w-[68px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[15px] left-[-0.14px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-1.28px] whitespace-nowrap">Pollen Index</p>
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="h-[18px] relative shrink-0 w-[26px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-0 text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">High</p>
      </div>
    </div>
  );
}

function PollenIndexRadial() {
  return (
    <div className="h-[20px] relative shrink-0 w-[147.995px]" data-name="PollenIndexRadial">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 147.995 20">
        <g id="PollenIndexRadial">
          <g id="Vector">
            <path d={svgPaths.p24e11600} fill="var(--fill-0, black)" />
            <path d={svgPaths.p201d4416} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p3f5c1280} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2697b7c0} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
          <g id="Vector_3">
            <path d={svgPaths.p24faef00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p4f90a80} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
          <g id="Vector_4">
            <path d={svgPaths.p25179cf0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p37842a00} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
          <g id="Vector_5">
            <path d={svgPaths.p373e3870} fill="var(--fill-0, black)" />
            <path d={svgPaths.p16d79200} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
          <g id="Vector_6">
            <path d={svgPaths.p1cf32ef0} fill="var(--fill-0, black)" />
            <path d={svgPaths.p33f3d198} stroke="var(--stroke-0, black)" strokeOpacity="0.6" strokeWidth="0.499983" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Text74() {
  return (
    <div className="h-[18px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.2px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

function LegendRow() {
  return (
    <div className="relative shrink-0" data-name="LegendRow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Text73 />
        <PollenIndexRadial />
        <Text74 />
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[rgba(0,0,0,0.05)] h-full relative rounded-[4px] shrink-0" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start justify-center p-[8px] relative size-full">
          <Text72 />
          <LegendRow />
        </div>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[59px] items-start left-[299.5px] top-[978.13px]" data-name="Container">
      <Container135 />
      <Container137 />
    </div>
  );
}

function Container92() {
  return (
    <div className="flex-[1051.111_0_0] min-h-px relative w-full" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgContainer} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container93 />
        <ZoomScrubber />
        <Container134 />
      </div>
    </div>
  );
}

function PollenMap() {
  return (
    <div className="bg-[#f5f3ef] h-[1051.111px] relative rounded-[8px] shrink-0 w-full" data-name="PollenMap">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container92 />
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[1030.009_0_0] h-full min-w-px relative rounded-[10px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <PollenMap />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1091.111_0_0] min-h-px relative w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start p-[20px] relative size-full">
          <Container1 />
          <Container89 />
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#fffcf7] h-[1091.111px] relative shrink-0 w-[1580px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
    </div>
  );
}

export default function ArchivedPlayInternalMakeApps() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ARCHIVED_Play Internal Make - Apps">
      <App />
    </div>
  );
}