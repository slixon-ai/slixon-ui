import * as React from "react";

function SvgBarChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#bar_chart_svg__filter0_bdi_319_114)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={5}
          fill="url(#bar_chart_svg__paint0_linear_319_114)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={4.875}
          stroke="url(#bar_chart_svg__paint1_linear_319_114)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#bar_chart_svg__filter1_d_319_114)">
        <path
          d="M10 19v-3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#bar_chart_svg__filter2_d_319_114)">
        <path
          d="M14 19V9"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#bar_chart_svg__filter3_d_319_114)">
        <path
          d="M18 19v-7"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="bar_chart_svg__filter0_bdi_319_114"
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
            result="effect1_backgroundBlur_319_114"
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
            in2="effect1_backgroundBlur_319_114"
            result="effect2_dropShadow_319_114"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_114"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_114" />
        </filter>
        <filter
          id="bar_chart_svg__filter1_d_319_114"
          x={7.25}
          y={13.25}
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
            result="effect1_dropShadow_319_114"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_114"
            result="shape"
          />
        </filter>
        <filter
          id="bar_chart_svg__filter2_d_319_114"
          x={11.25}
          y={6.25}
          width={5.5}
          height={15.5}
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
            result="effect1_dropShadow_319_114"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_114"
            result="shape"
          />
        </filter>
        <filter
          id="bar_chart_svg__filter3_d_319_114"
          x={15.25}
          y={9.25}
          width={5.5}
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
            result="effect1_dropShadow_319_114"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_114"
            result="shape"
          />
        </filter>
        <linearGradient
          id="bar_chart_svg__paint0_linear_319_114"
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
          id="bar_chart_svg__paint1_linear_319_114"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgBarChart;
