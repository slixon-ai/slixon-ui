import * as React from "react";

function SvgLaptop(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g filter="url(#laptop_svg__filter0_d_319_209)">
        <path
          d="M11.203 5.662C10.831 5.376 10.44 5 9.97 5H6c-.552 0-1 .416-1 .929V17.07c0 .513.448.929 1 .929h16c.552 0 1-.416 1-.929V5.93C23 5.416 22.552 5 22 5h-3.97c-.47 0-.86.376-1.233.662A1.304 1.304 0 0116 5.93h-4c-.303 0-.58-.1-.797-.267z"
          fill="#2AEAE7"
        />
      </g>
      <g
        filter="url(#laptop_svg__filter1_bdi_319_209)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={17}
          width={20}
          height={3}
          rx={1}
          fill="url(#laptop_svg__paint0_linear_319_209)"
        />
        <rect
          x={4.125}
          y={17.125}
          width={19.75}
          height={2.75}
          rx={0.875}
          stroke="url(#laptop_svg__paint1_linear_319_209)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="laptop_svg__paint0_linear_319_209"
          x1={-2.5}
          y1={15.8}
          x2={-0.673}
          y2={26.665}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="laptop_svg__paint1_linear_319_209"
          x1={4.5}
          y1={17.45}
          x2={5.402}
          y2={22.605}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="laptop_svg__filter0_d_319_209"
          x={3}
          y={3}
          width={22}
          height={17}
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
            result="effect1_dropShadow_319_209"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_209"
            result="shape"
          />
        </filter>
        <filter
          id="laptop_svg__filter1_bdi_319_209"
          x={0}
          y={13}
          width={28}
          height={11}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_209"
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
            in2="effect1_backgroundBlur_319_209"
            result="effect2_dropShadow_319_209"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_209"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_209" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLaptop;
