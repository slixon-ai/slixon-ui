import * as React from "react";

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 27" fill="none" {...props}>
      <g
        filter="url(#calendar_svg__filter0_bdi_319_118)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4.5}
          width={18}
          height={18}
          rx={5}
          fill="url(#calendar_svg__paint0_linear_319_118)"
        />
        <rect
          x={4.125}
          y={4.625}
          width={17.75}
          height={17.75}
          rx={4.875}
          stroke="url(#calendar_svg__paint1_linear_319_118)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#calendar_svg__filter1_d_319_118)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.25 10.25V9.5c0-.255.02-.506.059-.75H21.69c.039.244.059.495.059.75v.75H4.25z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#calendar_svg__filter2_d_319_118)">
        <path
          d="M17.5 3v3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#calendar_svg__filter3_d_319_118)">
        <path
          d="M8.5 3v3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g
        filter="url(#calendar_svg__filter4_d_319_118)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 13.5h1M12.5 13.5h1M17.5 13.5h1" />
      </g>
      <g
        filter="url(#calendar_svg__filter5_d_319_118)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.5 17.5h1M12.5 17.5h1M17.5 17.5h1" />
      </g>
      <defs>
        <filter
          id="calendar_svg__filter0_bdi_319_118"
          x={0}
          y={0.5}
          width={26}
          height={26}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_118"
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
            in2="effect1_backgroundBlur_319_118"
            result="effect2_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_118"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_118" />
        </filter>
        <filter
          id="calendar_svg__filter1_d_319_118"
          x={2.25}
          y={6.75}
          width={21.5}
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
            result="effect1_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_118"
            result="shape"
          />
        </filter>
        <filter
          id="calendar_svg__filter2_d_319_118"
          x={14.75}
          y={0.25}
          width={5.5}
          height={8.5}
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
            result="effect1_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_118"
            result="shape"
          />
        </filter>
        <filter
          id="calendar_svg__filter3_d_319_118"
          x={5.75}
          y={0.25}
          width={5.5}
          height={8.5}
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
            result="effect1_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_118"
            result="shape"
          />
        </filter>
        <filter
          id="calendar_svg__filter4_d_319_118"
          x={4.75}
          y={10.75}
          width={16.5}
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
            result="effect1_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_118"
            result="shape"
          />
        </filter>
        <filter
          id="calendar_svg__filter5_d_319_118"
          x={4.75}
          y={14.75}
          width={16.5}
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
            result="effect1_dropShadow_319_118"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_118"
            result="shape"
          />
        </filter>
        <linearGradient
          id="calendar_svg__paint0_linear_319_118"
          x1={-1.85}
          y1={-2.7}
          x2={31.45}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="calendar_svg__paint1_linear_319_118"
          x1={4.45}
          y1={7.2}
          x2={20.2}
          y2={20.7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgCalendar;
