import * as React from "react";

function SvgMouse(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 30" fill="none" {...props}>
      <g
        filter="url(#mouse_svg__filter0_bdi_319_211)"
        shapeRendering="crispEdges"
      >
        <rect
          x={5}
          y={5}
          width={14}
          height={20}
          rx={7}
          fill="url(#mouse_svg__paint0_linear_319_211)"
        />
        <rect
          x={5}
          y={5}
          width={14}
          height={20}
          rx={7}
          stroke="url(#mouse_svg__paint1_linear_319_211)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#mouse_svg__filter1_d_319_211)">
        <path
          d="M12 9.5v2"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="mouse_svg__paint0_linear_319_211"
          x1={0.45}
          y1={-3}
          x2={33.91}
          y2={17.89}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="mouse_svg__paint1_linear_319_211"
          x1={5.35}
          y1={8}
          x2={20.975}
          y2={17.375}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="mouse_svg__filter0_bdi_319_211"
          x={0.875}
          y={0.875}
          width={22.25}
          height={28.25}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_211"
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
            in2="effect1_backgroundBlur_319_211"
            result="effect2_dropShadow_319_211"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_211"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_211" />
        </filter>
        <filter
          id="mouse_svg__filter1_d_319_211"
          x={9.25}
          y={6.75}
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
            result="effect1_dropShadow_319_211"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_211"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgMouse;
