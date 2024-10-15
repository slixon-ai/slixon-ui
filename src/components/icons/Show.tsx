import * as React from "react";

function SvgShow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 24" fill="none" {...props}>
      <g
        filter="url(#show_svg__filter0_bdi_319_194)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4.2 12.784a1.634 1.634 0 010-1.569A10.019 10.019 0 0113 6c3.797 0 7.1 2.108 8.8 5.216.267.489.267 1.08 0 1.569A10.019 10.019 0 0113 18c-3.797 0-7.1-2.108-8.8-5.216z"
          fill="url(#show_svg__paint0_linear_319_194)"
        />
        <path
          d="M4.31 12.724a1.51 1.51 0 010-1.449A9.894 9.894 0 0113 6.125a9.894 9.894 0 018.69 5.15 1.51 1.51 0 010 1.45 9.894 9.894 0 01-8.69 5.15 9.894 9.894 0 01-8.69-5.15z"
          stroke="url(#show_svg__paint1_linear_319_194)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#show_svg__filter1_d_319_194)">
        <circle cx={13} cy={12} r={3} fill="#2AEAE7" />
      </g>
      <defs>
        <linearGradient
          id="show_svg__paint0_linear_319_194"
          x1={-1.85}
          y1={1.2}
          x2={19.581}
          y2={29.872}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="show_svg__paint1_linear_319_194"
          x1={4.45}
          y1={7.8}
          x2={14.748}
          y2={21.04}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="show_svg__filter0_bdi_319_194"
          x={0}
          y={2}
          width={26}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_194"
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
            in2="effect1_backgroundBlur_319_194"
            result="effect2_dropShadow_319_194"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_194"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_194" />
        </filter>
        <filter
          id="show_svg__filter1_d_319_194"
          x={8}
          y={7}
          width={10}
          height={10}
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
            result="effect1_dropShadow_319_194"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_194"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgShow;
