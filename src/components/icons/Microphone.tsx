import * as React from "react";

function SvgMicrophone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 27" fill="none" {...props}>
      <g
        filter="url(#microphone_svg__filter0_bdi_319_132)"
        shapeRendering="crispEdges"
      >
        <rect
          x={8}
          y={4}
          width={8}
          height={13}
          rx={4}
          fill="url(#microphone_svg__paint0_linear_319_132)"
        />
        <rect
          x={8.125}
          y={4.125}
          width={7.75}
          height={12.75}
          rx={3.875}
          stroke="url(#microphone_svg__paint1_linear_319_132)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#microphone_svg__filter1_d_319_132)">
        <path
          d="M20 13.5a8 8 0 11-16 0"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#microphone_svg__filter2_d_319_132)">
        <path
          d="M12 24v-2"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <filter
          id="microphone_svg__filter0_bdi_319_132"
          x={4}
          y={0}
          width={16}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_132"
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
            in2="effect1_backgroundBlur_319_132"
            result="effect2_dropShadow_319_132"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_132"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_132" />
        </filter>
        <filter
          id="microphone_svg__filter1_d_319_132"
          x={1.25}
          y={10.75}
          width={21.5}
          height={13.5}
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
            result="effect1_dropShadow_319_132"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_132"
            result="shape"
          />
        </filter>
        <filter
          id="microphone_svg__filter2_d_319_132"
          x={9.25}
          y={19.25}
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
            result="effect1_dropShadow_319_132"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_132"
            result="shape"
          />
        </filter>
        <linearGradient
          id="microphone_svg__paint0_linear_319_132"
          x1={5.4}
          y1={-1.2}
          x2={25.821}
          y2={10.008}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="microphone_svg__paint1_linear_319_132"
          x1={8.2}
          y1={5.95}
          x2={17.7}
          y2={10.961}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgMicrophone;
