import * as React from "react";

function SvgWarning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 27" fill="none" {...props}>
      <g
        filter="url(#warning_svg__filter0_bdi_319_151)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 18.926c0-.607.155-1.205.45-1.736l6.186-11.134a3.849 3.849 0 016.728 0L23.55 17.19a3.574 3.574 0 01-3.124 5.31H7.574A3.574 3.574 0 014 18.926z"
          fill="url(#warning_svg__paint0_linear_319_151)"
        />
        <path
          d="M4.125 18.926c0-.586.15-1.162.434-1.675l6.186-11.134a3.724 3.724 0 016.51 0l6.186 11.134a3.45 3.45 0 01-3.015 5.124H7.574a3.449 3.449 0 01-3.449-3.449z"
          stroke="url(#warning_svg__paint1_linear_319_151)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#warning_svg__filter1_d_319_151)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 10v4M14 17v.5" />
      </g>
      <defs>
        <linearGradient
          id="warning_svg__paint0_linear_319_151"
          x1={-2.5}
          y1={-3.4}
          x2={31.926}
          y2={29.794}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="warning_svg__paint1_linear_319_151"
          x1={4.5}
          y1={6.775}
          x2={20.833}
          y2={21.91}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="warning_svg__filter0_bdi_319_151"
          x={0}
          y={0.076}
          width={28}
          height={26.424}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_151"
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
            in2="effect1_backgroundBlur_319_151"
            result="effect2_dropShadow_319_151"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_151"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_151" />
        </filter>
        <filter
          id="warning_svg__filter1_d_319_151"
          x={11.25}
          y={7.25}
          width={5.5}
          height={13}
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
            result="effect1_dropShadow_319_151"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_151"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgWarning;
