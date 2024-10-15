import * as React from "react";

function SvgCoffee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 29" fill="none" {...props}>
      <g
        filter="url(#coffee_svg__filter0_bdi_319_226)"
        shapeRendering="crispEdges"
      >
        <path
          d="M6 6a2 2 0 012-2h8a2 2 0 012 2v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6z"
          fill="url(#coffee_svg__paint0_linear_319_226)"
        />
        <path
          d="M6.125 6c0-1.036.84-1.875 1.875-1.875h8c1.035 0 1.875.84 1.875 1.875v2a.875.875 0 01-.875.875H7A.875.875 0 016.125 8V6z"
          stroke="url(#coffee_svg__paint1_linear_319_226)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#coffee_svg__filter1_bdi_319_226)"
        shapeRendering="crispEdges"
      >
        <path
          d="M6 12h12l-.77 9.25A3 3 0 0114.24 24H9.76a3 3 0 01-2.99-2.75L6 12z"
          fill="url(#coffee_svg__paint2_linear_319_226)"
        />
        <path
          d="M6 12h12l-.77 9.25A3 3 0 0114.24 24H9.76a3 3 0 01-2.99-2.75L6 12z"
          stroke="url(#coffee_svg__paint3_linear_319_226)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#coffee_svg__filter2_d_319_226)">
        <path
          d="M4 10a2 2 0 012-2h12a2 2 0 012 2v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#coffee_svg__filter3_d_319_226)">
        <circle
          cx={2}
          cy={2}
          r={2}
          transform="matrix(-1 0 0 1 14 16)"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="coffee_svg__paint0_linear_319_226"
          x1={2.1}
          y1={2}
          x2={9.241}
          y2={17.285}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="coffee_svg__paint1_linear_319_226"
          x1={6.3}
          y1={4.75}
          x2={9.781}
          y2={11.912}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="coffee_svg__paint2_linear_319_226"
          x1={2.1}
          y1={7.2}
          x2={24.3}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="coffee_svg__paint3_linear_319_226"
          x1={6.3}
          y1={13.8}
          x2={16.8}
          y2={22.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="coffee_svg__filter0_bdi_319_226"
          x={2}
          y={0}
          width={20}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_226"
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
            in2="effect1_backgroundBlur_319_226"
            result="effect2_dropShadow_319_226"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_226"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_226" />
        </filter>
        <filter
          id="coffee_svg__filter1_bdi_319_226"
          x={1.864}
          y={7.875}
          width={20.272}
          height={20.25}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_226"
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
            in2="effect1_backgroundBlur_319_226"
            result="effect2_dropShadow_319_226"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_226"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_226" />
        </filter>
        <filter
          id="coffee_svg__filter2_d_319_226"
          x={2}
          y={6}
          width={20}
          height={9}
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
            result="effect1_dropShadow_319_226"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_226"
            result="shape"
          />
        </filter>
        <filter
          id="coffee_svg__filter3_d_319_226"
          x={8}
          y={14}
          width={8}
          height={8}
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
            result="effect1_dropShadow_319_226"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_226"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCoffee;
