import * as React from "react";

function SvgHome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#home_svg__filter0_bdi_319_160)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4.5 12.938a4 4 0 011.521-3.14l5.5-4.341a4 4 0 014.958 0l5.5 4.342a4 4 0 011.521 3.14V19.5a4 4 0 01-4 4H18a1 1 0 01-1-1v-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a1 1 0 01-1 1H8.5a4 4 0 01-4-4v-6.562z"
          fill="url(#home_svg__paint0_linear_319_160)"
        />
        <path
          d="M4.5 12.938a4 4 0 011.521-3.14l5.5-4.341a4 4 0 014.958 0l5.5 4.342a4 4 0 011.521 3.14V19.5a4 4 0 01-4 4H18a1 1 0 01-1-1v-3a2 2 0 00-2-2h-2a2 2 0 00-2 2v3a1 1 0 01-1 1H8.5a4 4 0 01-4-4v-6.562z"
          stroke="url(#home_svg__paint1_linear_319_160)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#home_svg__filter1_d_319_160)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 17.375V4.72c.849 0 1.697.278 2.401.834l5.5 4.342a3.875 3.875 0 011.474 3.041V19.5a3.875 3.875 0 01-3.875 3.875H18a.875.875 0 01-.875-.875v-3A2.125 2.125 0 0015 17.375h-1z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="home_svg__paint0_linear_319_160"
          x1={-1.675}
          y1={-4.5}
          x2={35.062}
          y2={26.627}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="home_svg__paint1_linear_319_160"
          x1={4.975}
          y1={6.5}
          x2={22.316}
          y2={20.621}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="home_svg__filter0_bdi_319_160"
          x={0.375}
          y={0.471}
          width={27.25}
          height={27.154}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_160"
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
            in2="effect1_backgroundBlur_319_160"
            result="effect2_dropShadow_319_160"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_160"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_160" />
        </filter>
        <filter
          id="home_svg__filter1_d_319_160"
          x={12}
          y={2.721}
          width={13.375}
          height={22.654}
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
            result="effect1_dropShadow_319_160"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_160"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgHome;
