import * as React from "react";

function SvgShieldTick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#shield_tick_svg__filter0_bdi_319_192)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 9.033a1 1 0 01.514-.874l7-3.89a1 1 0 01.972 0l7 3.89a1 1 0 01.514.874v4.639a10 10 0 01-5.144 8.741l-2.37 1.317a1 1 0 01-.972 0l-2.37-1.317A10 10 0 014 13.671V9.034z"
          fill="url(#shield_tick_svg__paint0_linear_319_192)"
        />
        <path
          d="M4.125 9.033c0-.318.172-.61.45-.765l7-3.889a.875.875 0 01.85 0l7 3.889c.278.154.45.447.45.765v4.639a9.875 9.875 0 01-5.08 8.632l-2.37 1.317a.875.875 0 01-.85 0l-2.37-1.317a9.875 9.875 0 01-5.08-8.632v-4.64z"
          stroke="url(#shield_tick_svg__paint1_linear_319_192)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#shield_tick_svg__filter1_d_319_192)">
        <path
          d="M9.5 14l2 2 4-4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="shield_tick_svg__paint0_linear_319_192"
          x1={-1.2}
          y1={-4}
          x2={34.017}
          y2={21.128}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="shield_tick_svg__paint1_linear_319_192"
          x1={4.4}
          y1={7}
          x2={20.919}
          y2={18.327}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="shield_tick_svg__filter0_bdi_319_192"
          x={0}
          y={0.144}
          width={24}
          height={27.712}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_192"
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
            in2="effect1_backgroundBlur_319_192"
            result="effect2_dropShadow_319_192"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_192"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_192" />
        </filter>
        <filter
          id="shield_tick_svg__filter1_d_319_192"
          x={6.75}
          y={9.25}
          width={11.5}
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
            result="effect1_dropShadow_319_192"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_192"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgShieldTick;
