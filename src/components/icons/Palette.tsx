import * as React from "react";

function SvgPalette(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#palette_svg__filter0_bdi_319_116)"
        shapeRendering="crispEdges"
      >
        <rect
          x={24}
          y={14}
          width={10}
          height={20}
          rx={3}
          transform="rotate(90 24 14)"
          fill="url(#palette_svg__paint0_linear_319_116)"
        />
        <rect
          x={23.875}
          y={14.125}
          width={9.75}
          height={19.75}
          rx={2.875}
          transform="rotate(90 23.875 14.125)"
          stroke="url(#palette_svg__paint1_linear_319_116)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <rect
        x={17.142}
        y={4}
        width={10}
        height={20}
        rx={3}
        transform="rotate(45 17.142 4)"
        fill="#2AEAE7"
      />
      <g filter="url(#palette_svg__filter1_bdi_319_116)">
        <mask id="palette_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 4a3 3 0 00-3 3v14a3 3 0 003 3h4a3 3 0 003-3V7a3 3 0 00-3-3H7zm2 17a1 1 0 100-2 1 1 0 000 2z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 4a3 3 0 00-3 3v14a3 3 0 003 3h4a3 3 0 003-3V7a3 3 0 00-3-3H7zm2 17a1 1 0 100-2 1 1 0 000 2z"
          fill="url(#palette_svg__paint2_linear_319_116)"
          shapeRendering="crispEdges"
        />
        <path
          d="M4.25 7A2.75 2.75 0 017 4.25v-.5A3.25 3.25 0 003.75 7h.5zm0 14V7h-.5v14h.5zM7 23.75A2.75 2.75 0 014.25 21h-.5A3.25 3.25 0 007 24.25v-.5zm4 0H7v.5h4v-.5zM13.75 21A2.75 2.75 0 0111 23.75v.5A3.25 3.25 0 0014.25 21h-.5zm0-14v14h.5V7h-.5zM11 4.25A2.75 2.75 0 0113.75 7h.5A3.25 3.25 0 0011 3.75v.5zm-4 0h4v-.5H7v.5zM9.75 20a.75.75 0 01-.75.75v.5c.69 0 1.25-.56 1.25-1.25h-.5zM9 19.25a.75.75 0 01.75.75h.5c0-.69-.56-1.25-1.25-1.25v.5zm-.75.75a.75.75 0 01.75-.75v-.5c-.69 0-1.25.56-1.25 1.25h.5zm.75.75a.75.75 0 01-.75-.75h-.5c0 .69.56 1.25 1.25 1.25v-.5z"
          fill="url(#palette_svg__paint3_linear_319_116)"
          fillOpacity={0.7}
          mask="url(#palette_svg__a)"
        />
      </g>
      <defs>
        <linearGradient
          id="palette_svg__paint0_linear_319_116"
          x1={20.75}
          y1={6}
          x2={48.456}
          y2={18.355}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="palette_svg__paint1_linear_319_116"
          x1={24.25}
          y1={17}
          x2={37.073}
          y2={22.496}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="palette_svg__paint2_linear_319_116"
          x1={0.75}
          y1={-4}
          x2={28.456}
          y2={8.356}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="palette_svg__paint3_linear_319_116"
          x1={4.25}
          y1={7}
          x2={17.073}
          y2={12.496}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="palette_svg__filter0_bdi_319_116"
          x={0}
          y={10}
          width={28}
          height={18}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_116"
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
            in2="effect1_backgroundBlur_319_116"
            result="effect2_dropShadow_319_116"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_116"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_116" />
        </filter>
        <filter
          id="palette_svg__filter1_bdi_319_116"
          x={0}
          y={0}
          width={18}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_116"
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
            in2="effect1_backgroundBlur_319_116"
            result="effect2_dropShadow_319_116"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_116"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_116" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPalette;
