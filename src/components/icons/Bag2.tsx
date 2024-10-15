import * as React from "react";

function SvgBag2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" {...props}>
      <g filter="url(#bag2_svg__filter0_d_319_166)">
        <path
          d="M16 10V7a4 4 0 00-4-4v0a4 4 0 00-4 4v3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#bag2_svg__filter1_bdi_319_166)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={8}
          width={16}
          height={13}
          rx={4}
          fill="url(#bag2_svg__paint0_linear_319_166)"
        />
        <rect
          x={4.125}
          y={8.125}
          width={15.75}
          height={12.75}
          rx={3.875}
          stroke="url(#bag2_svg__paint1_linear_319_166)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="bag2_svg__paint0_linear_319_166"
          x1={-1.2}
          y1={2.8}
          x2={22.903}
          y2={29.258}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="bag2_svg__paint1_linear_319_166"
          x1={4.4}
          y1={9.95}
          x2={15.894}
          y2={22.076}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="bag2_svg__filter0_d_319_166"
          x={5.25}
          y={0.25}
          width={13.5}
          height={12.5}
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
            result="effect1_dropShadow_319_166"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_166"
            result="shape"
          />
        </filter>
        <filter
          id="bag2_svg__filter1_bdi_319_166"
          x={0}
          y={4}
          width={24}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_166"
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
            in2="effect1_backgroundBlur_319_166"
            result="effect2_dropShadow_319_166"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_166"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_166" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBag2;
