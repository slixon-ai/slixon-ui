import * as React from "react";

function SvgDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#down_svg__filter0_bdi_319_30)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4.25a.75.75 0 01.75.75v14a.75.75 0 01-1.5 0V5a.75.75 0 01.75-.75z"
          fill="url(#down_svg__paint0_linear_319_30)"
        />
        <path
          d="M12 4.375c.345 0 .625.28.625.625v14a.625.625 0 11-1.25 0V5c0-.345.28-.625.625-.625z"
          stroke="url(#down_svg__paint1_linear_319_30)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#down_svg__filter1_d_319_30)">
        <path
          d="M8 16l3.293 3.293a1 1 0 001.414 0L16 16"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="down_svg__paint0_linear_319_30"
          x1={10.762}
          y1={-1.95}
          x2={15.708}
          y2={-1.523}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="down_svg__paint1_linear_319_30"
          x1={11.287}
          y1={6.575}
          x2={13.549}
          y2={6.763}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="down_svg__filter0_bdi_319_30"
          x={7.25}
          y={0.25}
          width={9.5}
          height={23.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_30"
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
            in2="effect1_backgroundBlur_319_30"
            result="effect2_dropShadow_319_30"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_30"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_30" />
        </filter>
        <filter
          id="down_svg__filter1_d_319_30"
          x={5.25}
          y={13.25}
          width={13.5}
          height={9.086}
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
            result="effect1_dropShadow_319_30"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_30"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgDown;
