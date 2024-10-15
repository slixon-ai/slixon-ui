import * as React from "react";

function SvgShare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 28" fill="none" {...props}>
      <g filter="url(#share_svg__filter0_d_319_218)">
        <path
          d="M18 7L7 13.5"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#share_svg__filter1_d_319_218)">
        <path
          d="M7 14.5l11 7"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        filter="url(#share_svg__filter2_bdi_319_218)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={18.5}
          cy={6.5}
          r={2.5}
          fill="url(#share_svg__paint0_linear_319_218)"
        />
        <circle
          cx={18.5}
          cy={6.5}
          r={2.375}
          stroke="url(#share_svg__paint1_linear_319_218)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#share_svg__filter3_bdi_319_218)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={6.5}
          cy={13.5}
          r={2.5}
          fill="url(#share_svg__paint2_linear_319_218)"
        />
        <circle
          cx={6.5}
          cy={13.5}
          r={2.375}
          stroke="url(#share_svg__paint3_linear_319_218)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#share_svg__filter4_bdi_319_218)"
        shapeRendering="crispEdges"
      >
        <circle
          cx={18.5}
          cy={21.5}
          r={2.5}
          fill="url(#share_svg__paint4_linear_319_218)"
        />
        <circle
          cx={18.5}
          cy={21.5}
          r={2.375}
          stroke="url(#share_svg__paint5_linear_319_218)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="share_svg__paint0_linear_319_218"
          x1={14.375}
          y1={2}
          x2={23.625}
          y2={10.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="share_svg__paint1_linear_319_218"
          x1={16.125}
          y1={4.75}
          x2={20.5}
          y2={8.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="share_svg__paint2_linear_319_218"
          x1={2.375}
          y1={9}
          x2={11.625}
          y2={17.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="share_svg__paint3_linear_319_218"
          x1={4.125}
          y1={11.75}
          x2={8.5}
          y2={15.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="share_svg__paint4_linear_319_218"
          x1={14.375}
          y1={17}
          x2={23.625}
          y2={25.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="share_svg__paint5_linear_319_218"
          x1={16.125}
          y1={19.75}
          x2={20.5}
          y2={23.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="share_svg__filter0_d_319_218"
          x={4.25}
          y={4.25}
          width={16.5}
          height={12}
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
            result="effect1_dropShadow_319_218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_218"
            result="shape"
          />
        </filter>
        <filter
          id="share_svg__filter1_d_319_218"
          x={4.25}
          y={11.75}
          width={16.5}
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
            result="effect1_dropShadow_319_218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_218"
            result="shape"
          />
        </filter>
        <filter
          id="share_svg__filter2_bdi_319_218"
          x={12}
          y={0}
          width={13}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_218"
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
            in2="effect1_backgroundBlur_319_218"
            result="effect2_dropShadow_319_218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_218"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_218" />
        </filter>
        <filter
          id="share_svg__filter3_bdi_319_218"
          x={0}
          y={7}
          width={13}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_218"
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
            in2="effect1_backgroundBlur_319_218"
            result="effect2_dropShadow_319_218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_218"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_218" />
        </filter>
        <filter
          id="share_svg__filter4_bdi_319_218"
          x={12}
          y={15}
          width={13}
          height={13}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_218"
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
            in2="effect1_backgroundBlur_319_218"
            result="effect2_dropShadow_319_218"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_218"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_218" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgShare;
