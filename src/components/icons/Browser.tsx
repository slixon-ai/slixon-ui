import * as React from "react";

function SvgBrowser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#browser_svg__filter0_bdi_319_152)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={5}
          fill="url(#browser_svg__paint0_linear_319_152)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={4.875}
          stroke="url(#browser_svg__paint1_linear_319_152)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 9v.75h19.5V9c0-.255-.02-.506-.059-.75H4.31A4.785 4.785 0 004.25 9z"
        fill="#2AEAE7"
      />
      <defs>
        <linearGradient
          id="browser_svg__paint0_linear_319_152"
          x1={-2.5}
          y1={-4}
          x2={34.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="browser_svg__paint1_linear_319_152"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="browser_svg__filter0_bdi_319_152"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_152"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={2} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            in2="effect1_backgroundBlur_319_152"
            result="effect2_dropShadow_319_152"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_152"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1.5} />
          <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.38 0" />
          <feBlend in2="shape" result="effect3_innerShadow_319_152" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBrowser;
