import * as React from "react";

function SvgCopy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 25" fill="none" {...props}>
      <g filter="url(#copy_svg__filter0_d_319_112)">
        <rect x={9} y={8} width={10} height={14} rx={3} fill="#2AEAE7" />
      </g>
      <g
        filter="url(#copy_svg__filter1_bdi_319_112)"
        shapeRendering="crispEdges"
      >
        <rect
          x={5}
          y={4}
          width={10}
          height={14}
          rx={3}
          fill="url(#copy_svg__paint0_linear_319_112)"
        />
        <rect
          x={5.125}
          y={4.125}
          width={9.75}
          height={13.75}
          rx={2.875}
          stroke="url(#copy_svg__paint1_linear_319_112)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="copy_svg__paint0_linear_319_112"
          x1={1.75}
          y1={-1.6}
          x2={25.377}
          y2={13.452}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="copy_svg__paint1_linear_319_112"
          x1={5.25}
          y1={6.1}
          x2={16.29}
          y2={12.859}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="copy_svg__filter0_d_319_112"
          x={7}
          y={6}
          width={14}
          height={18}
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
            result="effect1_dropShadow_319_112"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_112"
            result="shape"
          />
        </filter>
        <filter
          id="copy_svg__filter1_bdi_319_112"
          x={1}
          y={0}
          width={18}
          height={22}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_112"
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
            in2="effect1_backgroundBlur_319_112"
            result="effect2_dropShadow_319_112"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_112"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_112" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCopy;
