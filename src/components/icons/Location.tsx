import * as React from "react";

function SvgLocation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 28" fill="none" {...props}>
      <g
        filter="url(#location_svg__filter0_bdi_319_165)"
        shapeRendering="crispEdges"
      >
        <path
          d="M21 12.417c0 5.428-6.4 11.083-8 11.083-1.6 0-8-5.655-8-11.083C5 8.044 8.582 4.5 13 4.5s8 3.544 8 7.917z"
          fill="url(#location_svg__paint0_linear_319_165)"
        />
        <path
          d="M21 12.417c0 5.428-6.4 11.083-8 11.083-1.6 0-8-5.655-8-11.083C5 8.044 8.582 4.5 13 4.5s8 3.544 8 7.917z"
          stroke="url(#location_svg__paint1_linear_319_165)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#location_svg__filter1_d_319_165)">
        <circle
          cx={3}
          cy={3}
          r={3}
          transform="matrix(-1 0 0 1 16 9)"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="location_svg__paint0_linear_319_165"
          x1={-0.2}
          y1={-3.1}
          x2={33.779}
          y2={22.42}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="location_svg__paint1_linear_319_165"
          x1={5.4}
          y1={7.35}
          x2={21.367}
          y2={18.875}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="location_svg__filter0_bdi_319_165"
          x={0.875}
          y={0.375}
          width={24.25}
          height={27.25}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_165"
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
            in2="effect1_backgroundBlur_319_165"
            result="effect2_dropShadow_319_165"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_165"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_165" />
        </filter>
        <filter
          id="location_svg__filter1_d_319_165"
          x={8}
          y={7}
          width={10}
          height={10}
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
            result="effect1_dropShadow_319_165"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_165"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLocation;
