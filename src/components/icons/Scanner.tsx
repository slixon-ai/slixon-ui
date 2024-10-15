import * as React from "react";

function SvgScanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 24" fill="none" {...props}>
      <g
        filter="url(#scanner_svg__filter0_bdi_319_164)"
        shapeRendering="crispEdges"
      >
        <rect
          x={7}
          y={6}
          width={12}
          height={12}
          rx={3}
          fill="url(#scanner_svg__paint0_linear_319_164)"
        />
        <rect
          x={7.125}
          y={6.125}
          width={11.75}
          height={11.75}
          rx={2.875}
          stroke="url(#scanner_svg__paint1_linear_319_164)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#scanner_svg__filter1_d_319_164)">
        <path
          d="M22 8.85V7a4 4 0 00-4-4h-1.85M22 15.15V17a4 4 0 01-4 4h-1.85m-6.3 0H8a4 4 0 01-4-4v-1.85m0-6.3V7a4 4 0 014-4h1.85"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#scanner_svg__filter2_d_319_164)">
        <path
          d="M23 12H3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="scanner_svg__filter0_bdi_319_164"
          x={3}
          y={2}
          width={20}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_164"
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
            in2="effect1_backgroundBlur_319_164"
            result="effect2_dropShadow_319_164"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_164"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_164" />
        </filter>
        <filter
          id="scanner_svg__filter1_d_319_164"
          x={1.25}
          y={0.25}
          width={23.5}
          height={23.5}
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
            result="effect1_dropShadow_319_164"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_164"
            result="shape"
          />
        </filter>
        <filter
          id="scanner_svg__filter2_d_319_164"
          x={0.25}
          y={9.25}
          width={25.5}
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
            result="effect1_dropShadow_319_164"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_164"
            result="shape"
          />
        </filter>
        <linearGradient
          id="scanner_svg__paint0_linear_319_164"
          x1={3.1}
          y1={1.2}
          x2={25.3}
          y2={21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="scanner_svg__paint1_linear_319_164"
          x1={7.3}
          y1={7.8}
          x2={17.8}
          y2={16.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgScanner;
