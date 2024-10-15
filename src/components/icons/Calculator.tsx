import * as React from "react";

function SvgCalculator(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#calculator_svg__filter0_bdi_319_208)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={16}
          height={20}
          rx={4}
          fill="url(#calculator_svg__paint0_linear_319_208)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={15.75}
          height={19.75}
          rx={3.875}
          stroke="url(#calculator_svg__paint1_linear_319_208)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#calculator_svg__filter1_d_319_208)">
        <rect x={7} y={8} width={10} height={4} rx={1} fill="#2AEAE7" />
        <path
          d="M9 20H8M9 16H8M15 20h1M15 16h1"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="calculator_svg__paint0_linear_319_208"
          x1={-1.2}
          y1={-4}
          x2={34.017}
          y2={21.128}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="calculator_svg__paint1_linear_319_208"
          x1={4.4}
          y1={7}
          x2={20.919}
          y2={18.327}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="calculator_svg__filter0_bdi_319_208"
          x={0}
          y={0}
          width={24}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_208"
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
            in2="effect1_backgroundBlur_319_208"
            result="effect2_dropShadow_319_208"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_208"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_208" />
        </filter>
        <filter
          id="calculator_svg__filter1_d_319_208"
          x={5}
          y={6}
          width={14}
          height={16.75}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation={1} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.231373 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.35 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_319_208"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_208"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCalculator;
