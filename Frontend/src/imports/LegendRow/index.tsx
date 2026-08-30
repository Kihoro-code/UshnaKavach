import svgPaths from "./svg-695dqv2axs";

function Text() {
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

function Text1() {
  return (
    <div className="h-[18px] relative shrink-0 w-[21px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Jura:Regular',sans-serif] font-normal leading-[18px] left-[-0.2px] text-[12px] text-[rgba(0,0,0,0.4)] top-[-0.61px] whitespace-nowrap">Low</p>
      </div>
    </div>
  );
}

export default function LegendRow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative size-full" data-name="LegendRow">
      <Text />
      <PollenIndexRadial />
      <Text1 />
    </div>
  );
}