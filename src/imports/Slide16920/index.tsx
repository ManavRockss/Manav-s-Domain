import svgPaths from "./svg-vpnx5oj6wd";
import imgFig1 from "./8ebdd5fda39d6f7dc5186a772dab05cb1f3d0576.png";
import imgFreeRockIPhone15ProMockupMockuuupsStudio from "./3e21e878ba053a9cf4f3e418a36cae28c08cb577.png";

function Frame2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[21px] items-center relative shrink-0 w-full">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[1.32] not-italic relative shrink-0 text-[#505050] text-[18px] tracking-[-0.36px] whitespace-nowrap">Manav Singh (UI/UX / Product designer)</p>
      <div className="relative shrink-0 size-[21px]" data-name="fig 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFig1} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[13.5px] h-[40.5px] items-start left-[6.25%] right-[77.4%] top-[871px]">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#555] text-[13.5px] tracking-[-0.27px] w-full">{`Presenter: `}</p>
      <Frame2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[70.5px] mr-[-21px] relative shrink-0 w-[69.031px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69.0312 70.5">
        <g id="Frame 1171275735">
          <path d={svgPaths.p2528ba80} fill="var(--fill-0, #0F172A)" id="Vector 9" />
          <path d={svgPaths.p135d9980} fill="var(--fill-0, #0F172A)" id="Vector 10" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[118.572px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[21.806px] text-center w-full">
        <p className="leading-[normal]">Finio</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex items-center left-[calc(50%-546.7px)] top-[493px]">
      <Frame4 />
      <Frame />
    </div>
  );
}

export default function Slide() {
  return (
    <div className="bg-white relative size-full" data-name="Slide 16:9 - 20">
      <div className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-[6.25%] not-italic right-[58.75%] text-[#0f172a] text-[42px] top-[131.25px] whitespace-pre-wrap">
        <p className="leading-[63px] mb-0">{`Finio Pro `}</p>
        <p className="leading-[63px]">Conversion Experience</p>
      </div>
      <Frame3 />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[normal] left-[90px] not-italic text-[#555] text-[13.5px] top-[936px] tracking-[-0.27px] w-[235px]">Timeline - 2 days</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27px] left-[6.25%] not-italic right-[63.8%] text-[#5a5a5a] text-[15px] top-[261px]">Designing an upgrade journey that feels earned, not forced.</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.182px] left-[6.25%] not-italic right-[80.21%] text-[#5a5a5a] text-[18px] top-[461px] whitespace-nowrap">Presenting to you Finio</p>
      <Frame1 />
      <div className="absolute h-[1245px] left-[623px] top-[-51px] w-[1314px]" data-name="Free Rock iPhone 15 Pro Mockup (Mockuuups Studio)">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-full left-[-26.21%] max-w-none top-0 w-[126.28%]" src={imgFreeRockIPhone15ProMockupMockuuupsStudio} />
        </div>
      </div>
    </div>
  );
}