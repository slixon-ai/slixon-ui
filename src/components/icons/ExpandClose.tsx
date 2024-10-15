import * as React from "react";

function SvgExpandClose(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" fill="none" {...props}>
      <g
        filter="url(#expand_close_svg__filter0_bdi_319_44)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.777 21.222a.75.75 0 010-1.06l5.385-5.385a.75.75 0 111.06 1.06l-5.384 5.385a.75.75 0 01-1.061 0z"
          fill="url(#expand_close_svg__paint0_linear_319_44)"
        />
        <path
          d="M4.865 21.134a.625.625 0 010-.884l5.385-5.385a.625.625 0 11.884.884l-5.385 5.385a.625.625 0 01-.884 0z"
          stroke="url(#expand_close_svg__paint1_linear_319_44)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#expand_close_svg__filter1_d_319_44)">
        <path
          d="M6.846 14.538h3.616a1 1 0 011 1v3.616"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#expand_close_svg__filter2_bdi_319_44)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.223 4.778a.75.75 0 00-1.06 0l-5.385 5.384a.75.75 0 001.06 1.061l5.385-5.385a.75.75 0 000-1.06z"
          fill="url(#expand_close_svg__paint2_linear_319_44)"
        />
        <path
          d="M21.134 4.866a.625.625 0 00-.883 0l-5.385 5.385a.625.625 0 00.884.884l5.384-5.385a.625.625 0 000-.884z"
          stroke="url(#expand_close_svg__paint3_linear_319_44)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#expand_close_svg__filter3_d_319_44)">
        <path
          d="M14.538 6.847v3.615a1 1 0 001 1h3.616"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="expand_close_svg__paint0_linear_319_44"
          x1={3.074}
          y1={24.675}
          x2={0.131}
          y2={20.72}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="expand_close_svg__paint1_linear_319_44"
          x1={6.248}
          y1={20.759}
          x2={4.892}
          y2={18.958}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="expand_close_svg__paint2_linear_319_44"
          x1={24.676}
          y1={3.075}
          x2={20.721}
          y2={0.132}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="expand_close_svg__paint3_linear_319_44"
          x1={20.76}
          y1={6.248}
          x2={18.959}
          y2={4.893}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="expand_close_svg__filter0_bdi_319_44"
          x={0.557}
          y={10.557}
          width={14.885}
          height={14.885}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_44"
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
            in2="effect1_backgroundBlur_319_44"
            result="effect2_dropShadow_319_44"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_44"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_44" />
        </filter>
        <filter
          id="expand_close_svg__filter1_d_319_44"
          x={4.096}
          y={11.788}
          width={10.115}
          height={10.115}
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
            result="effect1_dropShadow_319_44"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_44"
            result="shape"
          />
        </filter>
        <filter
          id="expand_close_svg__filter2_bdi_319_44"
          x={10.558}
          y={0.558}
          width={14.885}
          height={14.885}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_44"
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
            in2="effect1_backgroundBlur_319_44"
            result="effect2_dropShadow_319_44"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_44"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_44" />
        </filter>
        <filter
          id="expand_close_svg__filter3_d_319_44"
          x={11.788}
          y={4.097}
          width={10.115}
          height={10.115}
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
            result="effect1_dropShadow_319_44"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_44"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgExpandClose;
