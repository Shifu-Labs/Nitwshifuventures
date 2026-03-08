import svgPaths from "./svg-x5yt7pzunw";

function Frame() {
  return (
    <div className="absolute h-[96.637px] left-[56.56px] top-0 w-[133.546px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133.546 96.6366">
        <g id="Frame 2085665317">
          <path d={svgPaths.p22ac180} fill="var(--fill-0, #F15824)" id="Vector 23" />
          <path d={svgPaths.p13eca700} id="Vector 24" stroke="var(--stroke-0, #F15824)" strokeWidth="11.7194" />
          <path d={svgPaths.p16764f00} id="Vector 25" stroke="var(--stroke-0, #F15824)" strokeWidth="11.7194" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[51.117px] left-[2.88px] top-[22.15px] w-[42.95px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.9496 51.1167">
        <g id="Frame 2085665318">
          <path d={svgPaths.p17a0f680} fill="var(--fill-0, #111111)" id="Line 36 (Stroke)" />
          <path d={svgPaths.p36098c00} fill="var(--fill-0, #111111)" id="Line 36 (Stroke)_2" />
          <path d={svgPaths.p7097f00} fill="var(--fill-0, #111111)" id="Line 36 (Stroke)_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[96.888px] relative w-[190.11px]">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[147.795px] left-0 top-[-0.29px] w-[151.05px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[201.83px] items-center justify-center left-[calc(50%+3.68px)] top-[calc(50%-2.68px)] w-[203.993px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "38" } as React.CSSProperties}>
        <div className="flex-none rotate-[-44.06deg]">
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[normal] left-[178.4px] not-italic pb-[3.581px] text-[#111] top-[-6.14px] w-[369.162px] whitespace-nowrap">
      <p className="font-['Hamburg_Hand:Regular',sans-serif] relative shrink-0 text-[115.114px] tracking-[3.4534px]">SHIFU</p>
      <p className="font-['Hamburg_Hand:Bold',sans-serif] relative shrink-0 text-[60.825px] tracking-[2.433px]">VENTURES</p>
    </div>
  );
}

export default function Sv() {
  return (
    <div className="relative size-full" data-name="SV">
      <Frame3 />
      <Frame2 />
    </div>
  );
}