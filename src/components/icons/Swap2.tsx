import * as React from "react";

function SvgSwap2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#swap2_svg__filter0_bdi_319_40)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 18.75a.75.75 0 00.75-.75V6a.75.75 0 00-1.5 0v12c0 .414.336.75.75.75z"
          fill="url(#swap2_svg__paint0_linear_319_40)"
        />
        <path
          d="M8 18.625c.345 0 .625-.28.625-.625V6a.625.625 0 10-1.25 0v12c0 .345.28.625.625.625z"
          stroke="url(#swap2_svg__paint1_linear_319_40)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#swap2_svg__filter1_d_319_40)">
        <path
          d="M5 8l2.293-2.293a1 1 0 011.414 0L11 8"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#swap2_svg__filter2_bdi_319_40)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 19.75a.75.75 0 00.75-.75V7a.75.75 0 00-1.5 0v12c0 .414.336.75.75.75z"
          fill="url(#swap2_svg__paint2_linear_319_40)"
        />
        <path
          d="M17 19.625c.345 0 .625-.28.625-.625V7a.625.625 0 10-1.25 0v12c0 .345.28.625.625.625z"
          stroke="url(#swap2_svg__paint3_linear_319_40)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#swap2_svg__filter3_d_319_40)">
        <path
          d="M14 17l2.293 2.293a1 1 0 001.414 0L20 17"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="swap2_svg__paint0_linear_319_40"
          x1={6.763}
          y1={24.15}
          x2={11.697}
          y2={23.661}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="swap2_svg__paint1_linear_319_40"
          x1={7.287}
          y1={16.725}
          x2={9.544}
          y2={16.51}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="swap2_svg__paint2_linear_319_40"
          x1={15.762}
          y1={25.15}
          x2={20.697}
          y2={24.661}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="swap2_svg__paint3_linear_319_40"
          x1={16.288}
          y1={17.725}
          x2={18.544}
          y2={17.51}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="swap2_svg__filter0_bdi_319_40"
          x={3.25}
          y={1.25}
          width={9.5}
          height={21.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_40"
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
            in2="effect1_backgroundBlur_319_40"
            result="effect2_dropShadow_319_40"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_40"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_40" />
        </filter>
        <filter
          id="swap2_svg__filter1_d_319_40"
          x={2.25}
          y={2.664}
          width={11.5}
          height={8.086}
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
            result="effect1_dropShadow_319_40"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_40"
            result="shape"
          />
        </filter>
        <filter
          id="swap2_svg__filter2_bdi_319_40"
          x={12.25}
          y={2.25}
          width={9.5}
          height={21.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_40"
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
            in2="effect1_backgroundBlur_319_40"
            result="effect2_dropShadow_319_40"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_40"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_40" />
        </filter>
        <filter
          id="swap2_svg__filter3_d_319_40"
          x={11.25}
          y={14.25}
          width={11.5}
          height={8.086}
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
            result="effect1_dropShadow_319_40"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_40"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSwap2;
