import * as React from "react";

function SvgGamepad(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g
        filter="url(#gamepad_svg__filter0_bdi_319_203)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 10a5 5 0 015.498-4.975l3.905.39a6 6 0 001.194 0l3.906-.39A5 5 0 0124 10.001V16c0 3.593-4.696 4.955-6.619 1.92-1.37-2.164-4.5-2.236-5.97-.138l-.284.406C8.931 21.326 4 19.772 4 15.94v-5.94z"
          fill="url(#gamepad_svg__paint0_linear_319_203)"
        />
        <path
          d="M4.125 10a4.875 4.875 0 015.36-4.85l3.905.39c.406.04.814.04 1.22 0l3.905-.39a4.875 4.875 0 015.36 4.85v6c0 3.468-4.532 4.782-6.388 1.853-1.418-2.24-4.658-2.314-6.178-.143l-.284.406c-2.127 3.038-6.9 1.533-6.9-2.175v-5.94z"
          stroke="url(#gamepad_svg__paint1_linear_319_203)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#gamepad_svg__filter1_d_319_203)" fill="#2AEAE7">
        <circle cx={20} cy={9.976} r={1} />
        <circle cx={18} cy={12.976} r={1} />
      </g>
      <g filter="url(#gamepad_svg__filter2_d_319_203)">
        <path
          d="M10 13.476v-4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#gamepad_svg__filter3_d_319_203)">
        <path
          d="M8 11.476h4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="gamepad_svg__filter0_bdi_319_203"
          x={0}
          y={1}
          width={28}
          height={22.866}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_203"
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
            in2="effect1_backgroundBlur_319_203"
            result="effect2_dropShadow_319_203"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_203"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_203" />
        </filter>
        <filter
          id="gamepad_svg__filter1_d_319_203"
          x={15}
          y={6.976}
          width={8}
          height={9}
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
            result="effect1_dropShadow_319_203"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_203"
            result="shape"
          />
        </filter>
        <filter
          id="gamepad_svg__filter2_d_319_203"
          x={7.25}
          y={6.726}
          width={5.5}
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
            result="effect1_dropShadow_319_203"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_203"
            result="shape"
          />
        </filter>
        <filter
          id="gamepad_svg__filter3_d_319_203"
          x={5.25}
          y={8.726}
          width={9.5}
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
            result="effect1_dropShadow_319_203"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_203"
            result="shape"
          />
        </filter>
        <linearGradient
          id="gamepad_svg__paint0_linear_319_203"
          x1={-2.5}
          y1={-0.947}
          x2={24.73}
          y2={31.726}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="gamepad_svg__paint1_linear_319_203"
          x1={4.5}
          y1={7.23}
          x2={17.53}
          y2={22.256}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgGamepad;
