import * as React from "react";

function SvgWallet(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#wallet_svg__filter0_bdi_319_103)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={5.48}
          width={20}
          height={16}
          rx={5}
          fill="url(#wallet_svg__paint0_linear_319_103)"
        />
        <rect
          x={4.125}
          y={5.605}
          width={19.75}
          height={15.75}
          rx={4.875}
          stroke="url(#wallet_svg__paint1_linear_319_103)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.12 6.392A4.977 4.977 0 019 5.48h10c1.293 0 2.47.49 3.358 1.295l-.684-1.669a5 5 0 00-6.522-2.732L7.577 5.477a4.99 4.99 0 00-1.456.915z"
        fill="#2AEAE7"
      />
      <g filter="url(#wallet_svg__filter1_d_319_103)">
        <path
          d="M8 16.98h6"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          shapeRendering="crispEdges"
        />
      </g>
      <g filter="url(#wallet_svg__filter2_d_319_103)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 10.98h4.254v5H19.5a2.5 2.5 0 010-5zm0 1.75a.75.75 0 000 1.5h.2a.75.75 0 000-1.5h-.2z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <filter
          id="wallet_svg__filter0_bdi_319_103"
          x={0}
          y={1.48}
          width={28}
          height={24}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_103"
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
            in2="effect1_backgroundBlur_319_103"
            result="effect2_dropShadow_319_103"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_103"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_103" />
        </filter>
        <filter
          id="wallet_svg__filter1_d_319_103"
          x={5.25}
          y={14.23}
          width={11.5}
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
            result="effect1_dropShadow_319_103"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_103"
            result="shape"
          />
        </filter>
        <filter
          id="wallet_svg__filter2_d_319_103"
          x={15}
          y={8.98}
          width={10.754}
          height={9}
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
            result="effect1_dropShadow_319_103"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_103"
            result="shape"
          />
        </filter>
        <linearGradient
          id="wallet_svg__paint0_linear_319_103"
          x1={-2.5}
          y1={-0.92}
          x2={27.119}
          y2={32.101}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="wallet_svg__paint1_linear_319_103"
          x1={4.5}
          y1={7.88}
          x2={18.633}
          y2={23.023}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgWallet;
