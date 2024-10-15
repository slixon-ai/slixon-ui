import * as React from "react";

function SvgAlarm(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 27" fill="none" {...props}>
      <g filter="url(#alarm_svg__filter0_d_319_130)">
        <path
          d="M13 3v2"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#alarm_svg__filter1_d_319_130)">
        <path
          d="M17.5 21.5L19 24"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#alarm_svg__filter2_d_319_130)">
        <path
          d="M8.5 21.5L7 24"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#alarm_svg__filter3_bdi_319_130)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={13}
          cy={14}
          r={9}
          fill="url(#alarm_svg__paint0_linear_319_130)"
        />
        <circle
          cx={13}
          cy={14}
          r={8.875}
          stroke="url(#alarm_svg__paint1_linear_319_130)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#alarm_svg__filter4_d_319_130)">
        <path
          d="M13 10v3.732a.5.5 0 00.223.416L16 16"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#alarm_svg__filter5_d_319_130)">
        <path
          d="M18 3l4 3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#alarm_svg__filter6_d_319_130)">
        <path
          d="M8 3L4 6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="alarm_svg__filter0_d_319_130"
          x={10.25}
          y={0.25}
          width={5.5}
          height={7.5}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <filter
          id="alarm_svg__filter1_d_319_130"
          x={14.75}
          y={18.75}
          width={7}
          height={8}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <filter
          id="alarm_svg__filter2_d_319_130"
          x={4.25}
          y={18.75}
          width={7}
          height={8}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <filter
          id="alarm_svg__filter3_bdi_319_130"
          x={0}
          y={1}
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
            result="effect1_backgroundBlur_319_130"
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
            in2="effect1_backgroundBlur_319_130"
            result="effect2_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_130"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_130" />
        </filter>
        <filter
          id="alarm_svg__filter4_d_319_130"
          x={10.25}
          y={7.25}
          width={8.5}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <filter
          id="alarm_svg__filter5_d_319_130"
          x={15.25}
          y={0.25}
          width={9.5}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <filter
          id="alarm_svg__filter6_d_319_130"
          x={1.25}
          y={0.25}
          width={9.5}
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
            result="effect1_dropShadow_319_130"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_130"
            result="shape"
          />
        </filter>
        <linearGradient
          id="alarm_svg__paint0_linear_319_130"
          x1={-1.85}
          y1={-2.2}
          x2={31.45}
          y2={27.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="alarm_svg__paint1_linear_319_130"
          x1={4.45}
          y1={7.7}
          x2={20.2}
          y2={21.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgAlarm;
