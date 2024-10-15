import * as React from "react";

function SvgSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#search_svg__filter0_bdi_319_99)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={12}
          cy={12}
          r={8}
          fill="url(#search_svg__paint0_linear_319_99)"
        />
        <circle
          cx={12}
          cy={12}
          r={7.875}
          stroke="url(#search_svg__paint1_linear_319_99)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#search_svg__filter1_d_319_99)">
        <path
          d="M18.542 19l3.958 3.958"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <linearGradient
          id="search_svg__paint0_linear_319_99"
          x1={-1.2}
          y1={-2.4}
          x2={28.4}
          y2={24}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="search_svg__paint1_linear_319_99"
          x1={4.4}
          y1={6.4}
          x2={18.4}
          y2={18.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="search_svg__filter0_bdi_319_99"
          x={0}
          y={0}
          width={24}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_99"
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
            in2="effect1_backgroundBlur_319_99"
            result="effect2_dropShadow_319_99"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_99"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_99" />
        </filter>
        <filter
          id="search_svg__filter1_d_319_99"
          x={15.792}
          y={16.25}
          width={9.458}
          height={9.458}
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
            result="effect1_dropShadow_319_99"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_99"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSearch;
