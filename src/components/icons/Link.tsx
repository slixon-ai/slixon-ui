import * as React from "react";

function SvgLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 27 27" fill="none" {...props}>
      <g
        filter="url(#link_svg__filter0_bdi_319_219)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.934 6.005a5.75 5.75 0 018.132 8.132l-2.121 2.121a.75.75 0 11-1.061-1.06l2.121-2.122a4.25 4.25 0 00-6.01-6.01l-2.121 2.121a.75.75 0 01-1.061-1.06l2.121-2.122zm-3.889 4.95a.75.75 0 010 1.06l-2.121 2.122a4.25 4.25 0 006.01 6.01l2.122-2.12a.75.75 0 111.06 1.06l-2.121 2.121a5.75 5.75 0 01-8.132-8.132l2.121-2.12a.75.75 0 011.061 0z"
          fill="url(#link_svg__paint0_linear_319_219)"
        />
        <path
          d="M13.023 6.094a5.625 5.625 0 017.954 7.955l-2.12 2.121a.625.625 0 11-.885-.884l2.122-2.121a4.375 4.375 0 00-6.188-6.187l-2.12 2.12a.625.625 0 01-.885-.883l2.122-2.121zm-4.066 4.95a.625.625 0 010 .883L6.835 14.05a4.375 4.375 0 106.188 6.187l2.12-2.122a.625.625 0 11.885.884l-2.122 2.122a5.625 5.625 0 01-7.955-7.955l2.122-2.121a.625.625 0 01.884 0z"
          stroke="url(#link_svg__paint1_linear_319_219)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#link_svg__filter1_d_319_219)">
        <path
          d="M15.586 11.485l-4.243 4.243"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="link_svg__paint0_linear_319_219"
          x1={20.438}
          y1={-6.784}
          x2={31.945}
          y2={25.715}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="link_svg__paint1_linear_319_219"
          x1={14.923}
          y1={4.423}
          x2={20.446}
          y2={19.298}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="link_svg__filter0_bdi_319_219"
          x={0.179}
          y={0.321}
          width={26.571}
          height={26.571}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_219"
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
            in2="effect1_backgroundBlur_319_219"
            result="effect2_dropShadow_319_219"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_219"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_219" />
        </filter>
        <filter
          id="link_svg__filter1_d_319_219"
          x={8.593}
          y={8.735}
          width={9.743}
          height={9.743}
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
            result="effect1_dropShadow_319_219"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_219"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLink;
