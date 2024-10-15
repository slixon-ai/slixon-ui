import * as React from "react";

function SvgCompass(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#compass_svg__filter0_bdi_319_170)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={14}
          cy={14}
          r={10}
          fill="url(#compass_svg__paint0_linear_319_170)"
        />
        <circle
          cx={14}
          cy={14}
          r={9.875}
          stroke="url(#compass_svg__paint1_linear_319_170)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#compass_svg__filter1_d_319_170)">
        <path
          d="M12.409 12.41l4.42-1.238-1.238 4.42-4.42 1.237 1.238-4.42z"
          fill="#2AEAE7"
        />
        <path
          d="M12.409 12.41l4.42-1.238-1.238 4.42-4.42 1.237 1.238-4.42z"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="compass_svg__paint0_linear_319_170"
          x1={-2.5}
          y1={-4}
          x2={34.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="compass_svg__paint1_linear_319_170"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="compass_svg__filter0_bdi_319_170"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_170"
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
            in2="effect1_backgroundBlur_319_170"
            result="effect2_dropShadow_319_170"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_170"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_170" />
        </filter>
        <filter
          id="compass_svg__filter1_d_319_170"
          x={8.422}
          y={8.422}
          width={11.157}
          height={11.157}
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
            result="effect1_dropShadow_319_170"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_170"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCompass;
