import * as React from "react";

function SvgLockOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M7.25 10.5a.75.75 0 001.5 0h-1.5zm7.417-5.358a.75.75 0 001.23-.857l-1.23.857zM8.278 4.05a.75.75 0 101.175.932l-1.175-.932zM8.75 10.5V7h-1.5v3.5h1.5zm0-3.5A3.25 3.25 0 0112 3.75v-1.5A4.75 4.75 0 007.25 7h1.5zm7.148-2.715a4.75 4.75 0 00-2.307-1.76l-.503 1.413a3.25 3.25 0 011.579 1.204l1.23-.857zm-2.307-1.76a4.75 4.75 0 00-2.901-.09l.414 1.441a3.25 3.25 0 011.984.062l.503-1.414zm-2.901-.09a4.75 4.75 0 00-2.412 1.614l1.175.932a3.25 3.25 0 011.65-1.105l-.413-1.442z"
        fill="#2AEAE7"
      />
      <g
        filter="url(#lock_open_svg__filter0_bdi_319_122)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={9}
          width={16}
          height={12}
          rx={4}
          fill="url(#lock_open_svg__paint0_linear_319_122)"
        />
        <rect
          x={4.125}
          y={9.125}
          width={15.75}
          height={11.75}
          rx={3.875}
          stroke="url(#lock_open_svg__paint1_linear_319_122)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#lock_open_svg__filter1_d_319_122)">
        <path
          d="M12 16v-2"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="lock_open_svg__paint0_linear_319_122"
          x1={-1.2}
          y1={4.2}
          x2={20.814}
          y2={30.379}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="lock_open_svg__paint1_linear_319_122"
          x1={4.4}
          y1={10.8}
          x2={14.931}
          y2={22.835}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="lock_open_svg__filter0_bdi_319_122"
          x={0}
          y={5}
          width={24}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_122"
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
            in2="effect1_backgroundBlur_319_122"
            result="effect2_dropShadow_319_122"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_122"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_122" />
        </filter>
        <filter
          id="lock_open_svg__filter1_d_319_122"
          x={9.25}
          y={11.25}
          width={5.5}
          height={7.5}
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
            result="effect1_dropShadow_319_122"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_122"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLockOpen;
