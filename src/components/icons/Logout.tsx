import * as React from "react";

function SvgLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 28" fill="none" {...props}>
      <g
        filter="url(#logout_svg__filter0_bdi_319_188)"
        shapeRendering="crispEdges"
      >
        <path
          d="M13 4H8a4 4 0 00-4 4v12a4 4 0 004 4h5a4 4 0 004-4V8a4 4 0 00-4-4z"
          fill="url(#logout_svg__paint0_linear_319_188)"
        />
        <path
          d="M8 4.125h5A3.875 3.875 0 0116.875 8v12A3.875 3.875 0 0113 23.875H8A3.875 3.875 0 014.125 20V8A3.875 3.875 0 018 4.125z"
          stroke="url(#logout_svg__paint1_linear_319_188)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#logout_svg__filter1_d_319_188)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M20 17l2.293-2.293a1 1 0 000-1.414L20 11M22 14H10" />
      </g>
      <defs>
        <linearGradient
          id="logout_svg__paint0_linear_319_188"
          x1={-0.225}
          y1={-4}
          x2={32.094}
          y2={14.736}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="logout_svg__paint1_linear_319_188"
          x1={4.325}
          y1={7}
          x2={19.383}
          y2={15.389}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="logout_svg__filter0_bdi_319_188"
          x={0}
          y={0}
          width={21}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_188"
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
            in2="effect1_backgroundBlur_319_188"
            result="effect2_dropShadow_319_188"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_188"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_188" />
        </filter>
        <filter
          id="logout_svg__filter1_d_319_188"
          x={7.25}
          y={8.25}
          width={18.086}
          height={11.5}
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
            result="effect1_dropShadow_319_188"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_188"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLogout;
