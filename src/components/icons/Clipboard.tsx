import * as React from "react";

function SvgClipboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 28" fill="none" {...props}>
      <g
        filter="url(#clipboard_svg__filter0_bdi_319_107)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4.606}
          width={16}
          height={19.394}
          rx={3}
          fill="url(#clipboard_svg__paint0_linear_319_107)"
        />
        <rect
          x={4.125}
          y={4.731}
          width={15.75}
          height={19.144}
          rx={2.875}
          stroke="url(#clipboard_svg__paint1_linear_319_107)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#clipboard_svg__filter1_d_319_107)">
        <path
          d="M8 9.455h8"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#clipboard_svg__filter2_d_319_107)">
        <path
          d="M8 14.303h8"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#clipboard_svg__filter3_d_319_107)">
        <path
          d="M8 19.152h4"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#clipboard_svg__filter4_bdi_319_107)"
        shapeRendering="crispEdges"
      >
        <path
          d="M9 5a1 1 0 011-1h4a1 1 0 110 2h-4a1 1 0 01-1-1z"
          fill="url(#clipboard_svg__paint2_linear_319_107)"
        />
        <path
          d="M9.125 5c0-.483.392-.875.875-.875h4a.875.875 0 010 1.75h-4A.875.875 0 019.125 5z"
          stroke="url(#clipboard_svg__paint3_linear_319_107)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <filter
          id="clipboard_svg__filter0_bdi_319_107"
          x={0}
          y={0.606}
          width={24}
          height={27.394}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_107"
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
            in2="effect1_backgroundBlur_319_107"
            result="effect2_dropShadow_319_107"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_107"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_107" />
        </filter>
        <filter
          id="clipboard_svg__filter1_d_319_107"
          x={5.25}
          y={6.705}
          width={13.5}
          height={5.5}
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
            result="effect1_dropShadow_319_107"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_107"
            result="shape"
          />
        </filter>
        <filter
          id="clipboard_svg__filter2_d_319_107"
          x={5.25}
          y={11.553}
          width={13.5}
          height={5.5}
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
            result="effect1_dropShadow_319_107"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_107"
            result="shape"
          />
        </filter>
        <filter
          id="clipboard_svg__filter3_d_319_107"
          x={5.25}
          y={16.402}
          width={9.5}
          height={5.5}
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
            result="effect1_dropShadow_319_107"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_107"
            result="shape"
          />
        </filter>
        <filter
          id="clipboard_svg__filter4_bdi_319_107"
          x={5}
          y={0}
          width={14}
          height={10}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_107"
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
            in2="effect1_backgroundBlur_319_107"
            result="effect2_dropShadow_319_107"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_107"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_107" />
        </filter>
        <linearGradient
          id="clipboard_svg__paint0_linear_319_107"
          x1={-1.2}
          y1={-3.151}
          x2={33.279}
          y2={22.219}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="clipboard_svg__paint1_linear_319_107"
          x1={4.4}
          y1={7.516}
          x2={20.59}
          y2={18.964}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="clipboard_svg__paint2_linear_319_107"
          x1={7.05}
          y1={3.2}
          x2={9.493}
          y2={9.736}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="clipboard_svg__paint3_linear_319_107"
          x1={9.15}
          y1={4.3}
          x2={10.346}
          y2={7.376}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgClipboard;
