import * as React from "react";

function SvgBasketball(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#basketball_svg__filter0_bdi_319_224)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={10}
          fill="url(#basketball_svg__paint0_linear_319_224)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={9.875}
          stroke="url(#basketball_svg__paint1_linear_319_224)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#basketball_svg__filter1_d_319_224)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.658 6.594a10.435 10.435 0 013.065 6.656h2.527V4.278a9.885 9.885 0 011.5 0v8.972h2.526a10.715 10.715 0 012.992-6.719 9.81 9.81 0 011.071 1.05 9.215 9.215 0 00-2.56 5.669h4.943a9.9 9.9 0 010 1.5H18.78a9.215 9.215 0 002.56 5.669c-.33.376-.689.727-1.072 1.05a10.716 10.716 0 01-2.992-6.719H14.75v8.972a9.9 9.9 0 01-1.5 0V14.75h-2.527a10.435 10.435 0 01-3.065 6.656 9.806 9.806 0 01-1.061-1.06 8.936 8.936 0 002.622-5.596h-4.94a9.885 9.885 0 010-1.5h4.94a8.936 8.936 0 00-2.622-5.595c.326-.38.68-.735 1.06-1.06z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="basketball_svg__paint0_linear_319_224"
          x1={-2.5}
          y1={-4}
          x2={34.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="basketball_svg__paint1_linear_319_224"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="basketball_svg__filter0_bdi_319_224"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_224"
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
            in2="effect1_backgroundBlur_319_224"
            result="effect2_dropShadow_319_224"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_224"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_224" />
        </filter>
        <filter
          id="basketball_svg__filter1_d_319_224"
          x={2.25}
          y={2.25}
          width={23.5}
          height={23.5}
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
            result="effect1_dropShadow_319_224"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_224"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBasketball;
