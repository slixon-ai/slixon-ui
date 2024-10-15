import * as React from "react";

function SvgLightning(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#lightning_svg__filter0_bdi_319_178)"
        shapeRendering="crispEdges"
      >
        <path
          d="M13.815 12.421a.2.2 0 01-.2-.2V4.604a.2.2 0 00-.36-.12L5.595 14.78a.5.5 0 00.4.799h4.19c.11 0 .2.09.2.2v7.617a.2.2 0 00.36.12l7.66-10.296a.5.5 0 00-.4-.799h-4.19z"
          fill="url(#lightning_svg__paint0_linear_319_178)"
        />
        <path
          d="M13.815 12.421a.2.2 0 01-.2-.2V4.604a.2.2 0 00-.36-.12L5.595 14.78a.5.5 0 00.4.799h4.19c.11 0 .2.09.2.2v7.617a.2.2 0 00.36.12l7.66-10.296a.5.5 0 00-.4-.799h-4.19z"
          stroke="url(#lightning_svg__paint1_linear_319_178)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#lightning_svg__filter1_d_319_178)">
        <path
          d="M13.697 12.42a.2.2 0 00-.14.058l-3.112 3.042a.2.2 0 00-.06.143v7.733a.2.2 0 00.36.12l7.66-10.297a.5.5 0 00-.4-.798h-4.308z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="lightning_svg__paint0_linear_319_178"
          x1={0.45}
          y1={-4}
          x2={33.91}
          y2={16.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="lightning_svg__paint1_linear_319_178"
          x1={5.35}
          y1={7}
          x2={20.975}
          y2={16.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="lightning_svg__filter0_bdi_319_178"
          x={1.369}
          y={0.278}
          width={21.262}
          height={27.443}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_178"
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
            in2="effect1_backgroundBlur_319_178"
            result="effect2_dropShadow_319_178"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_178"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_178" />
        </filter>
        <filter
          id="lightning_svg__filter1_d_319_178"
          x={8.385}
          y={10.421}
          width={12.121}
          height={15.175}
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
            result="effect1_dropShadow_319_178"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_178"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLightning;
