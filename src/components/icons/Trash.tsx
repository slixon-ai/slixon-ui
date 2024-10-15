import * as React from "react";

function SvgTrash(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 26" fill="none" {...props}>
      <g filter="url(#trash_svg__filter0_d_319_177)">
        <path
          d="M16 6l-.544-1.632A2 2 0 0013.559 3h-3.117a2 2 0 00-1.898 1.368L8 6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#trash_svg__filter1_bdi_319_177)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5.05 8.734C4.207 7.608 5.01 6 6.419 6h11.164c1.409 0 2.212 1.608 1.367 2.734A4.747 4.747 0 0018 11.582V18a4 4 0 01-4 4h-4a4 4 0 01-4-4v-6.418a4.747 4.747 0 00-.95-2.848z"
          fill="url(#trash_svg__paint0_linear_319_177)"
        />
        <path
          d="M5.15 8.66c-.782-1.045-.037-2.535 1.268-2.535h11.164c1.305 0 2.05 1.49 1.267 2.534a4.872 4.872 0 00-.974 2.923V18A3.875 3.875 0 0114 21.875h-4A3.875 3.875 0 016.125 18v-6.418c0-1.054-.342-2.08-.974-2.923z"
          stroke="url(#trash_svg__paint1_linear_319_177)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#trash_svg__filter2_d_319_177)">
        <path
          d="M14 17v-6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g filter="url(#trash_svg__filter3_d_319_177)">
        <path
          d="M10 17v-6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="trash_svg__filter0_d_319_177"
          x={5.25}
          y={0.25}
          width={13.5}
          height={8.5}
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
            result="effect1_dropShadow_319_177"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_177"
            result="shape"
          />
        </filter>
        <filter
          id="trash_svg__filter1_bdi_319_177"
          x={0.706}
          y={2}
          width={22.588}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_177"
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
            in2="effect1_backgroundBlur_319_177"
            result="effect2_dropShadow_319_177"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_177"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_177" />
        </filter>
        <filter
          id="trash_svg__filter2_d_319_177"
          x={11.25}
          y={8.25}
          width={5.5}
          height={11.5}
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
            result="effect1_dropShadow_319_177"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_177"
            result="shape"
          />
        </filter>
        <filter
          id="trash_svg__filter3_d_319_177"
          x={7.25}
          y={8.25}
          width={5.5}
          height={11.5}
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
            result="effect1_dropShadow_319_177"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_177"
            result="shape"
          />
        </filter>
        <linearGradient
          id="trash_svg__paint0_linear_319_177"
          x1={-2.85}
          y1={-0.4}
          x2={26.944}
          y2={29.494}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="trash_svg__paint1_linear_319_177"
          x1={3.45}
          y1={8.4}
          x2={17.607}
          y2={22.052}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgTrash;
