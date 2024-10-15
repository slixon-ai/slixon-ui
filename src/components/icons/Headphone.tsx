import * as React from "react";

function SvgHeadphone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#headphone_svg__filter0_bdi_319_138)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.25 14c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75v7a.75.75 0 01-1.5 0v-7a8.25 8.25 0 00-16.5 0v7a.75.75 0 01-1.5 0v-7z"
          fill="url(#headphone_svg__paint0_linear_319_138)"
        />
        <path
          d="M4.375 14a9.625 9.625 0 0119.25 0v7a.625.625 0 11-1.25 0v-7a8.375 8.375 0 10-16.75 0v7a.625.625 0 11-1.25 0v-7z"
          stroke="url(#headphone_svg__paint1_linear_319_138)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#headphone_svg__filter1_d_319_138)">
        <path
          d="M18 17a2 2 0 012-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z"
          fill="#2AEAE7"
        />
        <path
          d="M18 17a2 2 0 012-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z"
          stroke="#2AEAE7"
          strokeWidth={1.5}
        />
      </g>
      <g filter="url(#headphone_svg__filter2_d_319_138)">
        <path
          d="M10 17a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4z"
          fill="#2AEAE7"
        />
        <path
          d="M10 17a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4z"
          stroke="#2AEAE7"
          strokeWidth={1.5}
        />
      </g>
      <defs>
        <filter
          id="headphone_svg__filter0_bdi_319_138"
          x={0.25}
          y={0.25}
          width={27.5}
          height={25.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_138"
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
            in2="effect1_backgroundBlur_319_138"
            result="effect2_dropShadow_319_138"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_138"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_138" />
        </filter>
        <filter
          id="headphone_svg__filter1_d_319_138"
          x={15.25}
          y={12.25}
          width={10.5}
          height={13.5}
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
            result="effect1_dropShadow_319_138"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_138"
            result="shape"
          />
        </filter>
        <filter
          id="headphone_svg__filter2_d_319_138"
          x={2.25}
          y={12.25}
          width={10.5}
          height={13.5}
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
            result="effect1_dropShadow_319_138"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_138"
            result="shape"
          />
        </filter>
        <linearGradient
          id="headphone_svg__paint0_linear_319_138"
          x1={-2.087}
          y1={-2.75}
          x2={30.499}
          y2={29.635}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="headphone_svg__paint1_linear_319_138"
          x1={4.737}
          y1={6.875}
          x2={20.216}
          y2={21.659}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgHeadphone;
