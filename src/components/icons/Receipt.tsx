import * as React from "react";

function SvgReceipt(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 26" fill="none" {...props}>
      <g
        filter="url(#receipt_svg__filter0_bdi_319_105)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5 4.5h14v15.966a1 1 0 01-1.61.791l-1.332-1.026a1 1 0 00-1.151-.05l-1.825 1.174a2 2 0 01-2.164 0L9.094 20.18a1 1 0 00-1.151.05L6.61 21.257A1 1 0 015 20.466V4.5z"
          fill="url(#receipt_svg__paint0_linear_319_105)"
        />
        <path
          d="M5.125 4.625h13.75v15.84a.875.875 0 01-1.41.693l-1.33-1.026a1.125 1.125 0 00-1.296-.056l-1.825 1.174a1.875 1.875 0 01-2.028 0l-1.825-1.174a1.125 1.125 0 00-1.296.056l-1.33 1.026a.875.875 0 01-1.41-.692V4.625z"
          stroke="url(#receipt_svg__paint1_linear_319_105)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#receipt_svg__filter1_d_319_105)">
        <path
          d="M9 10.5h3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#receipt_svg__filter2_d_319_105)">
        <path
          d="M3 4.5h18"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#receipt_svg__filter3_d_319_105)">
        <path
          d="M9 14.5h3"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#receipt_svg__filter4_d_319_105)">
        <path
          d="M15 10.5h.5"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#receipt_svg__filter5_d_319_105)">
        <path
          d="M15 14.5h.5"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="receipt_svg__filter0_bdi_319_105"
          x={1}
          y={0.5}
          width={22}
          height={25.172}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_105"
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
            in2="effect1_backgroundBlur_319_105"
            result="effect2_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_105"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_105" />
        </filter>
        <filter
          id="receipt_svg__filter1_d_319_105"
          x={6.25}
          y={7.75}
          width={8.5}
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
            result="effect1_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_105"
            result="shape"
          />
        </filter>
        <filter
          id="receipt_svg__filter2_d_319_105"
          x={0.25}
          y={1.75}
          width={23.5}
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
            result="effect1_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_105"
            result="shape"
          />
        </filter>
        <filter
          id="receipt_svg__filter3_d_319_105"
          x={6.25}
          y={11.75}
          width={8.5}
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
            result="effect1_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_105"
            result="shape"
          />
        </filter>
        <filter
          id="receipt_svg__filter4_d_319_105"
          x={12.25}
          y={7.75}
          width={6}
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
            result="effect1_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_105"
            result="shape"
          />
        </filter>
        <filter
          id="receipt_svg__filter5_d_319_105"
          x={12.25}
          y={11.75}
          width={6}
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
            result="effect1_dropShadow_319_105"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_105"
            result="shape"
          />
        </filter>
        <linearGradient
          id="receipt_svg__paint0_linear_319_105"
          x1={0.45}
          y1={-2.7}
          x2={31.845}
          y2={19.079}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="receipt_svg__paint1_linear_319_105"
          x1={5.35}
          y1={7.2}
          x2={20.061}
          y2={17.008}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgReceipt;
