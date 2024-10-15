import * as React from "react";

function SvgPower(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <mask
        id="power_svg__a"
        style={{
          maskType: "alpha",
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <path fill="#D9D9D9" d="M0 0h24v24H0z" />
      </mask>
      <g mask="url(#power_svg__a)">
        <g filter="url(#power_svg__filter0_d_455_884)">
          <path
            d="M7.101 8a7 7 0 109.798 0"
            stroke="#2AEAE7"
            strokeWidth={2}
            strokeLinecap="round"
          />
        </g>
        <g
          filter="url(#power_svg__filter1_bdi_455_884)"
          shapeRendering="crispEdges"
        >
          <circle
            cx={12}
            cy={13}
            r={7}
            fill="url(#power_svg__paint0_linear_455_884)"
          />
          <circle
            cx={12}
            cy={13}
            r={6.875}
            stroke="url(#power_svg__paint1_linear_455_884)"
            strokeWidth={0.25}
          />
        </g>
        <g filter="url(#power_svg__filter2_d_455_884)">
          <rect x={11} y={3} width={2} height={12} rx={1} fill="#2AEAE7" />
        </g>
      </g>
      <defs>
        <filter
          id="power_svg__filter0_d_455_884"
          x={2}
          y={5}
          width={20}
          height={18}
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
            result="effect1_dropShadow_455_884"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_455_884"
            result="shape"
          />
        </filter>
        <filter
          id="power_svg__filter1_bdi_455_884"
          x={1}
          y={2}
          width={22}
          height={22}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_455_884"
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
            in2="effect1_backgroundBlur_455_884"
            result="effect2_dropShadow_455_884"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_455_884"
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
          <feBlend in2="shape" result="effect3_innerShadow_455_884" />
        </filter>
        <filter
          id="power_svg__filter2_d_455_884"
          x={9}
          y={1}
          width={6}
          height={16}
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
            result="effect1_dropShadow_455_884"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_455_884"
            result="shape"
          />
        </filter>
        <linearGradient
          id="power_svg__paint0_linear_455_884"
          x1={0.45}
          y1={0.4}
          x2={26.35}
          y2={23.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="power_svg__paint1_linear_455_884"
          x1={0.45}
          y1={0.4}
          x2={26.35}
          y2={23.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgPower;
