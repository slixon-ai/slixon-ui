import * as React from "react";

function SvgPieChart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <g
        filter="url(#pie_chart_svg__filter0_bdi_319_113)"
        shapeRendering="crispEdges"
      >
        <path
          d="M12 6c0-.552-.45-1.006-.997-.938a8 8 0 108.935 8.935C20.006 13.45 19.552 13 19 13h-5.5a1.5 1.5 0 01-1.5-1.5V6z"
          fill="url(#pie_chart_svg__paint0_linear_319_113)"
        />
        <path
          d="M11.018 5.186c.463-.058.857.326.857.814v5.5c0 .898.727 1.625 1.625 1.625H19c.488 0 .872.394.814.857a7.875 7.875 0 11-8.796-8.796z"
          stroke="url(#pie_chart_svg__paint1_linear_319_113)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#pie_chart_svg__filter1_d_319_113)">
        <path
          d="M15 4c0-.552.45-1.007.997-.929a7 7 0 015.932 5.932c.078.547-.377.997-.929.997h-5a1 1 0 01-1-1V4z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="pie_chart_svg__paint0_linear_319_113"
          x1={-1.2}
          y1={-1.4}
          x2={28.4}
          y2={25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="pie_chart_svg__paint1_linear_319_113"
          x1={4.4}
          y1={7.4}
          x2={18.4}
          y2={19.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="pie_chart_svg__filter0_bdi_319_113"
          x={0}
          y={1.056}
          width={23.945}
          height={23.944}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_113"
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
            in2="effect1_backgroundBlur_319_113"
            result="effect2_dropShadow_319_113"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_113"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_113" />
        </filter>
        <filter
          id="pie_chart_svg__filter1_d_319_113"
          x={13}
          y={1.063}
          width={10.938}
          height={10.938}
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
            result="effect1_dropShadow_319_113"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_113"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPieChart;
