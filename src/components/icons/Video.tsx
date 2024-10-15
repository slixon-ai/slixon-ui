import * as React from "react";

function SvgVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 24" fill="none" {...props}>
      <g filter="url(#video_svg__filter0_d_319_139)">
        <path
          d="M18 11.16l4.116-2.854A1.2 1.2 0 0124 9.292v6.434a1.2 1.2 0 01-1.877.99L18 13.896v-2.735z"
          fill="#2AEAE7"
        />
        <path
          d="M18 11.16l4.116-2.854A1.2 1.2 0 0124 9.292v6.434a1.2 1.2 0 01-1.877.99L18 13.896v-2.735z"
          stroke="#2AEAE7"
          strokeWidth={1.5}
        />
      </g>
      <g
        filter="url(#video_svg__filter1_bdi_319_139)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={6}
          width={14}
          height={13}
          rx={3.5}
          fill="url(#video_svg__paint0_linear_319_139)"
        />
        <rect
          x={4.125}
          y={6.125}
          width={13.75}
          height={12.75}
          rx={3.375}
          stroke="url(#video_svg__paint1_linear_319_139)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="video_svg__paint0_linear_319_139"
          x1={-0.55}
          y1={0.8}
          x2={23.638}
          y2={24.032}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="video_svg__paint1_linear_319_139"
          x1={4.35}
          y1={7.95}
          x2={15.824}
          y2={18.541}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="video_svg__filter0_d_319_139"
          x={15.25}
          y={5.339}
          width={11.5}
          height={14.34}
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
            result="effect1_dropShadow_319_139"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_139"
            result="shape"
          />
        </filter>
        <filter
          id="video_svg__filter1_bdi_319_139"
          x={0}
          y={2}
          width={22}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_139"
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
            in2="effect1_backgroundBlur_319_139"
            result="effect2_dropShadow_319_139"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_139"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_139" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgVideo;
