import * as React from "react";

function SvgRight2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#right2_svg__filter0_bdi_319_38)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.25 12.25a.75.75 0 01-1.058-.081L8.18 5.239a.75.75 0 111.139-.977l6.012 6.93a.75.75 0 01-.081 1.058z"
          fill="url(#right2_svg__paint0_linear_319_38)"
        />
        <path
          d="M14.287 12.087h0l-6.012-6.93s0 0 0 0a.625.625 0 01.95-.814h0l6.011 6.93v.001a.625.625 0 01-.949.813z"
          stroke="url(#right2_svg__paint1_linear_319_38)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#right2_svg__filter1_d_319_38)">
        <path
          d="M14.749 11.75l-6 7"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="right2_svg__paint0_linear_319_38"
          x1={18.504}
          y1={1.237}
          x2={4.388}
          y2={15.203}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="right2_svg__paint1_linear_319_38"
          x1={14.379}
          y1={4.213}
          x2={7.931}
          y2={10.85}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="right2_svg__filter0_bdi_319_38"
          x={4}
          y={0}
          width={15.512}
          height={16.431}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_38"
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
            in2="effect1_backgroundBlur_319_38"
            result="effect2_dropShadow_319_38"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_38"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_38" />
        </filter>
        <filter
          id="right2_svg__filter1_d_319_38"
          x={5.999}
          y={9}
          width={11.5}
          height={12.5}
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
            result="effect1_dropShadow_319_38"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_38"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgRight2;
