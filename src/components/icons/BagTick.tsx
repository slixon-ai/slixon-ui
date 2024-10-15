import * as React from "react";

function SvgBagTick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 27" fill="none" {...props}>
      <g filter="url(#bag_tick_svg__filter0_d_319_168)">
        <path
          d="M17 10V7a4 4 0 00-4-4v0a4 4 0 00-4 4v3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#bag_tick_svg__filter1_bdi_319_168)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5.537 11.471A4 4 0 019.502 8h6.996a4 4 0 013.965 3.471l.933 7A4 4 0 0117.431 23H8.57a4 4 0 01-3.965-4.529l.933-7z"
          fill="url(#bag_tick_svg__paint0_linear_319_168)"
        />
        <path
          d="M5.661 11.488a3.875 3.875 0 013.841-3.363h6.996a3.875 3.875 0 013.84 3.363l.934 7a3.875 3.875 0 01-3.84 4.387H8.568a3.875 3.875 0 01-3.841-4.387l.933-7z"
          stroke="url(#bag_tick_svg__paint1_linear_319_168)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#bag_tick_svg__filter2_d_319_168)">
        <path
          d="M10.5 16l2 2 4-4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="bag_tick_svg__filter0_d_319_168"
          x={6.25}
          y={0.25}
          width={13.5}
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
            result="effect1_dropShadow_319_168"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_168"
            result="shape"
          />
        </filter>
        <filter
          id="bag_tick_svg__filter1_bdi_319_168"
          x={0.568}
          y={4}
          width={24.864}
          height={23}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_168"
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
            in2="effect1_backgroundBlur_319_168"
            result="effect2_dropShadow_319_168"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_168"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_168" />
        </filter>
        <filter
          id="bag_tick_svg__filter2_d_319_168"
          x={7.75}
          y={11.25}
          width={11.5}
          height={9.5}
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
            result="effect1_dropShadow_319_168"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_168"
            result="shape"
          />
        </filter>
        <linearGradient
          id="bag_tick_svg__paint0_linear_319_168"
          x1={-1.85}
          y1={2}
          x2={26.017}
          y2={31.826}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="bag_tick_svg__paint1_linear_319_168"
          x1={4.45}
          y1={10.25}
          x2={17.726}
          y2={23.905}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBagTick;
