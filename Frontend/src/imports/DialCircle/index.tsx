import svgPaths from "./svg-ail4i9y55e";

function Group() {
  return (
    <div className="absolute contents inset-[0.71%_0_0.72%_0]" data-name="Group">
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

function Icon() {
  return (
    <div className="h-[87.908px] relative shrink-0 w-full" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
    </div>
  );
}

export default function DialCircle() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="DialCircle">
      <Icon />
    </div>
  );
}