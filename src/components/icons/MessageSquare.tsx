import * as React from "react";

function SvgMessageSquare(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 27" fill="none" {...props}>
      <g filter="url(#message_square_svg__filter0_bdi_319_159)">
        <mask id="message_square_svg__a" fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 4a5 5 0 00-5 5v12.92a1 1 0 001.625.78l2.827-2.262A2 2 0 019.702 20H19a5 5 0 005-5V9a5 5 0 00-5-5H9z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 4a5 5 0 00-5 5v12.92a1 1 0 001.625.78l2.827-2.262A2 2 0 019.702 20H19a5 5 0 005-5V9a5 5 0 00-5-5H9z"
          fill="url(#message_square_svg__paint0_linear_319_159)"
          shapeRendering="crispEdges"
        />
        <path
          d="M5.625 22.7l-.156-.195.156.195zm2.827-2.262l-.156-.195.156.195zM4.25 9A4.75 4.75 0 019 4.25v-.5A5.25 5.25 0 003.75 9h.5zm0 5.5V9h-.5v5.5h.5zm0 .5v-.5h-.5v.5h.5zm0 6.92V15h-.5v6.92h.5zm1.219.585a.75.75 0 01-1.219-.586h-.5c0 1.049 1.212 1.631 2.03.976l-.311-.39zm2.827-2.262l-2.827 2.262.312.39 2.827-2.261-.312-.391zM19 19.75H9.702v.5H19v-.5zM23.75 15A4.75 4.75 0 0119 19.75v.5c2.9 0 5.25-2.35 5.25-5.25h-.5zm0-6v6h.5V9h-.5zM19 4.25A4.75 4.75 0 0123.75 9h.5c0-2.9-2.35-5.25-5.25-5.25v.5zm-10 0h10v-.5H9v.5zm-.392 16.384a1.75 1.75 0 011.094-.384v-.5a2.25 2.25 0 00-1.406.493l.312.39z"
          fill="url(#message_square_svg__paint1_linear_319_159)"
          fillOpacity={0.7}
          mask="url(#message_square_svg__a)"
        />
      </g>
      <g filter="url(#message_square_svg__filter1_d_319_159)" fill="#2AEAE7">
        <circle cx={9.05} cy={12.05} r={1.25} />
        <circle cx={14.05} cy={12.05} r={1.25} />
        <circle cx={19.05} cy={12.05} r={1.25} />
      </g>
      <defs>
        <linearGradient
          id="message_square_svg__paint0_linear_319_159"
          x1={-2.5}
          y1={-3.568}
          x2={32.672}
          y2={29.59}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="message_square_svg__paint1_linear_319_159"
          x1={4.5}
          y1={6.838}
          x2={21.172}
          y2={21.943}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="message_square_svg__filter0_bdi_319_159"
          x={0}
          y={0}
          width={28}
          height={26.921}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_159"
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
            in2="effect1_backgroundBlur_319_159"
            result="effect2_dropShadow_319_159"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_159"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_159" />
        </filter>
        <filter
          id="message_square_svg__filter1_d_319_159"
          x={5.8}
          y={8.8}
          width={16.5}
          height={6.5}
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
            result="effect1_dropShadow_319_159"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_159"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgMessageSquare;
