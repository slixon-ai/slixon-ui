import * as React from "react";

function SvgPaperclip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <g
        filter="url(#paperclip_svg__filter0_bdi_319_117)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.778 8.718l-4.066 4.066a3.75 3.75 0 105.303 5.303l6.718-6.718a.75.75 0 111.06 1.061l-6.717 6.718a5.25 5.25 0 01-7.425-7.425l4.066-4.066 1.06 1.06z"
          fill="url(#paperclip_svg__paint0_linear_319_117)"
        />
        <path
          d="M10.601 8.718l-3.978 3.977a3.875 3.875 0 105.48 5.48l6.718-6.717a.625.625 0 11.884.884l-6.718 6.717a5.125 5.125 0 01-7.247-7.248l3.977-3.977.884.884z"
          stroke="url(#paperclip_svg__paint1_linear_319_117)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#paperclip_svg__filter1_d_319_117)">
        <path
          d="M15.02 7.657l-6.818 6.818a1.5 1.5 0 000 2.122v0a1.5 1.5 0 002.121 0l8.233-8.233a3 3 0 000-4.243v0a3 3 0 00-4.242 0L9.717 8.718"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paperclip_svg__paint0_linear_319_117"
          x1={14.87}
          y1={-2.322}
          x2={22.021}
          y2={26.66}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="paperclip_svg__paint1_linear_319_117"
          x1={11.441}
          y1={6.305}
          x2={14.975}
          y2={19.626}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="paperclip_svg__filter0_bdi_319_117"
          x={0.114}
          y={3.657}
          width={23.899}
          height={21.028}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_117"
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
            in2="effect1_backgroundBlur_319_117"
            result="effect2_dropShadow_319_117"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_117"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_117" />
        </filter>
        <filter
          id="paperclip_svg__filter1_d_319_117"
          x={5.013}
          y={0.493}
          width={17.172}
          height={19.294}
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
            result="effect1_dropShadow_319_117"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_117"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgPaperclip;
