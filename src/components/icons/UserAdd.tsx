import * as React from "react";

function SvgUserAdd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 25" fill="none" {...props}>
      <g filter="url(#user_add_svg__filter0_d_319_207)">
        <path
          d="M20 11h4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#user_add_svg__filter1_d_319_207)">
        <path
          d="M22 9v4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <circle
        cx={4.606}
        cy={4.606}
        r={4.606}
        transform="matrix(-1 0 0 1 17.606 2)"
        fill="#2AEAE7"
      />
      <g
        filter="url(#user_add_svg__filter2_bdi_319_207)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4.94 16.895c0-.991.622-1.875 1.555-2.208a19.34 19.34 0 0113.01 0 2.344 2.344 0 011.556 2.208v1.8a2 2 0 01-2.283 1.979l-1.96-.28a27.001 27.001 0 00-7.636 0l-1.96.28a2 2 0 01-2.283-1.98v-1.8z"
          fill="url(#user_add_svg__paint0_linear_319_207)"
        />
        <path
          d="M5.064 16.895c0-.938.59-1.775 1.473-2.09a19.215 19.215 0 0112.926 0 2.22 2.22 0 011.473 2.09v1.8a1.875 1.875 0 01-2.14 1.855l-1.96-.28a27.125 27.125 0 00-7.672 0l-1.96.28a1.875 1.875 0 01-2.14-1.856v-1.8z"
          stroke="url(#user_add_svg__paint1_linear_319_207)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <filter
          id="user_add_svg__filter0_d_319_207"
          x={17.25}
          y={8.25}
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
            result="effect1_dropShadow_319_207"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_207"
            result="shape"
          />
        </filter>
        <filter
          id="user_add_svg__filter1_d_319_207"
          x={19.25}
          y={6.25}
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
            result="effect1_dropShadow_319_207"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_207"
            result="shape"
          />
        </filter>
        <filter
          id="user_add_svg__filter2_bdi_319_207"
          x={0.939}
          y={9.56}
          width={24.121}
          height={15.134}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_207"
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
            in2="effect1_backgroundBlur_319_207"
            result="effect2_dropShadow_319_207"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_207"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_207" />
        </filter>
        <linearGradient
          id="user_add_svg__paint0_linear_319_207"
          x1={-0.3}
          y1={8.909}
          x2={13.897}
          y2={32.546}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="user_add_svg__paint1_linear_319_207"
          x1={5.342}
          y1={13.659}
          x2={12.216}
          y2={24.657}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgUserAdd;
