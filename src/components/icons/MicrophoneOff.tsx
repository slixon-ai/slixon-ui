import * as React from "react";

function SvgMicrophoneOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 27" fill="none" {...props}>
      <g
        filter="url(#microphone_off_svg__filter0_bdi_319_131)"
        shapeRendering="crispEdges"
      >
        <path
          d="M8 8a4 4 0 118 0v5a4 4 0 01-8 0V8z"
          fill="url(#microphone_off_svg__paint0_linear_319_131)"
        />
        <path
          d="M8.125 8a3.875 3.875 0 017.75 0v5a3.875 3.875 0 01-7.75 0V8z"
          stroke="url(#microphone_off_svg__paint1_linear_319_131)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#microphone_off_svg__filter1_d_319_131)">
        <path
          d="M20 13.5A8 8 0 019.21 21M4 13.5a7.986 7.986 0 003.085 6.313"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#microphone_off_svg__filter2_d_319_131)">
        <path
          d="M12 24v-2"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#microphone_off_svg__filter3_d_319_131)">
        <path
          d="M20 7L5 22"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="microphone_off_svg__filter0_bdi_319_131"
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
            result="effect1_backgroundBlur_319_131"
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
            in2="effect1_backgroundBlur_319_131"
            result="effect2_dropShadow_319_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_131"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_131" />
        </filter>
        <filter
          id="microphone_off_svg__filter1_d_319_131"
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
            result="effect1_dropShadow_319_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_131"
            result="shape"
          />
        </filter>
        <filter
          id="microphone_off_svg__filter2_d_319_131"
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
            result="effect1_dropShadow_319_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_131"
            result="shape"
          />
        </filter>
        <filter
          id="microphone_off_svg__filter3_d_319_131"
          x={2.25}
          y={4.25}
          width={20.5}
          height={20.5}
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
            result="effect1_dropShadow_319_131"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_131"
            result="shape"
          />
        </filter>
        <linearGradient
          id="microphone_off_svg__paint0_linear_319_131"
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
          id="microphone_off_svg__paint1_linear_319_131"
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

export default SvgMicrophoneOff;
