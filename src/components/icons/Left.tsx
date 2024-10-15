import * as React from "react";

function SvgLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#left_svg__filter0_bdi_319_33)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.75 12a.75.75 0 01-.75.75H5a.75.75 0 010-1.5h14a.75.75 0 01.75.75z"
          fill="url(#left_svg__paint0_linear_319_33)"
        />
        <path
          d="M19.625 12c0 .345-.28.625-.625.625H5a.625.625 0 110-1.25h14c.345 0 .625.28.625.625z"
          stroke="url(#left_svg__paint1_linear_319_33)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#left_svg__filter1_d_319_33)">
        <path
          d="M8 8l-3.293 3.293a1 1 0 000 1.414L8 16"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="left_svg__paint0_linear_319_33"
          x1={25.95}
          y1={10.762}
          x2={25.523}
          y2={15.708}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="left_svg__paint1_linear_319_33"
          x1={17.425}
          y1={11.287}
          x2={17.237}
          y2={13.549}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="left_svg__filter0_bdi_319_33"
          x={0.25}
          y={7.25}
          width={23.5}
          height={9.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_33"
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
            in2="effect1_backgroundBlur_319_33"
            result="effect2_dropShadow_319_33"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_33"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_33" />
        </filter>
        <filter
          id="left_svg__filter1_d_319_33"
          x={1.664}
          y={5.25}
          width={9.086}
          height={13.5}
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
            result="effect1_dropShadow_319_33"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_33"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLeft;
