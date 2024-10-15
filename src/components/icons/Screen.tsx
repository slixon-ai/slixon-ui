import * as React from "react";

function SvgScreen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#screen_svg__filter0_bdi_319_153)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={5}
          fill="url(#screen_svg__paint0_linear_319_153)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={4.875}
          stroke="url(#screen_svg__paint1_linear_319_153)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.75 4.25v19.5h-1.5V4.25h1.5z"
        fill="#2AEAE7"
      />
      <g filter="url(#screen_svg__filter1_d_319_153)">
        <path
          d="M16 16h7"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="screen_svg__paint0_linear_319_153"
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
          id="screen_svg__paint1_linear_319_153"
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
          id="screen_svg__filter0_bdi_319_153"
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
            result="effect1_backgroundBlur_319_153"
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
            in2="effect1_backgroundBlur_319_153"
            result="effect2_dropShadow_319_153"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_153"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_153" />
        </filter>
        <filter
          id="screen_svg__filter1_d_319_153"
          x={13.25}
          y={13.25}
          width={12.5}
          height={5.5}
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
            result="effect1_dropShadow_319_153"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_153"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgScreen;
