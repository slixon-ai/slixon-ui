import * as React from "react";

function SvgLink2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 25" fill="none" {...props}>
      <g filter="url(#link2_svg__filter0_d_319_220)">
        <path
          d="M12.04 12.96a3.5 3.5 0 004.95 0l3.535-3.535a3.5 3.5 0 00-4.95-4.95l-1.767 1.768"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#link2_svg__filter1_bdi_319_220)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.863 19.147a4.25 4.25 0 11-6.01-6.01L9.388 9.6a4.25 4.25 0 016.01 0 .75.75 0 01-1.06 1.06 2.75 2.75 0 00-3.89 0l-3.535 3.536a2.75 2.75 0 103.89 3.89l1.767-1.768a.75.75 0 011.06 1.06l-1.767 1.768z"
          fill="url(#link2_svg__paint0_linear_319_220)"
        />
        <path
          d="M11.775 19.059a4.125 4.125 0 11-5.834-5.834L9.477 9.69a4.125 4.125 0 015.833 0 .625.625 0 01-.884.883 2.875 2.875 0 00-4.066 0L6.825 14.11a2.875 2.875 0 004.066 4.066l1.768-1.768a.625.625 0 11.883.884l-1.767 1.768z"
          stroke="url(#link2_svg__paint1_linear_319_220)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="link2_svg__paint0_linear_319_220"
          x1={6.993}
          y1={27.924}
          x2={0.338}
          y2={4.223}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="link2_svg__paint1_linear_319_220"
          x1={10.139}
          y1={20.57}
          x2={6.887}
          y2={9.692}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="link2_svg__filter0_d_319_220"
          x={9.29}
          y={0.7}
          width={15.01}
          height={16.036}
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
            result="effect1_dropShadow_319_220"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_220"
            result="shape"
          />
        </filter>
        <filter
          id="link2_svg__filter1_bdi_319_220"
          x={0.608}
          y={4.356}
          width={19.01}
          height={20.036}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_220"
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
            in2="effect1_backgroundBlur_319_220"
            result="effect2_dropShadow_319_220"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_220"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_220" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLink2;
