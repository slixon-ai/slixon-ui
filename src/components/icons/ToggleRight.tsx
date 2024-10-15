import * as React from "react";

function SvgToggleRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 24" fill="none" {...props}>
      <g
        filter="url(#toggle_right_svg__filter0_bdi_319_201)"
        shapeRendering="crispEdges"
      >
        <rect
          width={18}
          height={10}
          rx={5}
          transform="matrix(-1 0 0 1 22 7)"
          fill="url(#toggle_right_svg__paint0_linear_319_201)"
        />
        <rect
          x={-0.125}
          y={0.125}
          width={17.75}
          height={9.75}
          rx={4.875}
          transform="matrix(-1 0 0 1 21.75 7)"
          stroke="url(#toggle_right_svg__paint1_linear_319_201)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#toggle_right_svg__filter1_d_319_201)">
        <circle
          cx={3.5}
          cy={3.5}
          r={3.5}
          transform="matrix(-1 0 0 1 20.5 8.5)"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="toggle_right_svg__paint0_linear_319_201"
          x1={-5.85}
          y1={-4}
          x2={10.863}
          y2={22.832}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="toggle_right_svg__paint1_linear_319_201"
          x1={0.45}
          y1={1.5}
          x2={8.532}
          y2={13.97}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="toggle_right_svg__filter0_bdi_319_201"
          x={0}
          y={3}
          width={26}
          height={18}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_201"
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
            in2="effect1_backgroundBlur_319_201"
            result="effect2_dropShadow_319_201"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_201"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_201" />
        </filter>
        <filter
          id="toggle_right_svg__filter1_d_319_201"
          x={11.5}
          y={6.5}
          width={11}
          height={11}
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
            result="effect1_dropShadow_319_201"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_201"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgToggleRight;
