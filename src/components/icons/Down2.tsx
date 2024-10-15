import * as React from "react";

function SvgDown2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#down2_svg__filter0_bdi_319_37)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.5 15.25a.75.75 0 01.082-1.057l6.93-6.012a.75.75 0 01.976 1.139l-6.93 6.012a.75.75 0 01-1.058-.082z"
          fill="url(#down2_svg__paint0_linear_319_37)"
        />
        <path
          d="M11.663 14.288h0l6.93-6.012s0 0 0 0a.625.625 0 01.814.949h0l-6.93 6.012s0 0 0 0a.625.625 0 01-.814-.95z"
          stroke="url(#down2_svg__paint1_linear_319_37)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#down2_svg__filter1_d_319_37)">
        <path
          d="M12 14.75l-7-6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="down2_svg__paint0_linear_319_37"
          x1={22.513}
          y1={18.504}
          x2={8.548}
          y2={4.388}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="down2_svg__paint1_linear_319_37"
          x1={19.538}
          y1={14.379}
          x2={12.9}
          y2={7.931}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="down2_svg__filter0_bdi_319_37"
          x={7.32}
          y={4}
          width={16.43}
          height={15.512}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_37"
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
            in2="effect1_backgroundBlur_319_37"
            result="effect2_dropShadow_319_37"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_37"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_37" />
        </filter>
        <filter
          id="down2_svg__filter1_d_319_37"
          x={2.25}
          y={6}
          width={12.5}
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
            result="effect1_dropShadow_319_37"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_37"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgDown2;
