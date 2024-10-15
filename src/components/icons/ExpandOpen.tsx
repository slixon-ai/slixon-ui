import * as React from "react";

function SvgExpandOpen(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#expand_open_svg__filter0_bdi_319_43)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.992 13.008a.75.75 0 010 1.061l-5.384 5.385a.75.75 0 01-1.061-1.061l5.385-5.385a.75.75 0 011.06 0z"
          fill="url(#expand_open_svg__paint0_linear_319_43)"
        />
        <path
          d="M10.904 13.097a.625.625 0 010 .884l-5.385 5.384a.625.625 0 11-.884-.884l5.385-5.384a.625.625 0 01.884 0z"
          stroke="url(#expand_open_svg__paint1_linear_319_43)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#expand_open_svg__filter1_d_319_43)">
        <path
          d="M8.923 19.692H5.308a1 1 0 01-1-1v-3.615"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#expand_open_svg__filter2_bdi_319_43)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.008 10.992a.75.75 0 001.06 0l5.385-5.385a.75.75 0 10-1.06-1.06L13.006 9.93a.75.75 0 000 1.06z"
          fill="url(#expand_open_svg__paint2_linear_319_43)"
        />
        <path
          d="M13.096 10.903c.244.244.64.244.884 0l5.384-5.384a.625.625 0 10-.884-.884l-5.384 5.385a.625.625 0 000 .883z"
          stroke="url(#expand_open_svg__paint3_linear_319_43)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#expand_open_svg__filter3_d_319_43)">
        <path
          d="M19.692 8.923V5.308a1 1 0 00-1-1h-3.615"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="expand_open_svg__paint0_linear_319_43"
          x1={12.695}
          y1={9.555}
          x2={15.638}
          y2={13.51}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="expand_open_svg__paint1_linear_319_43"
          x1={9.522}
          y1={13.471}
          x2={10.877}
          y2={15.273}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="expand_open_svg__paint2_linear_319_43"
          x1={9.554}
          y1={12.695}
          x2={13.509}
          y2={15.637}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="expand_open_svg__paint3_linear_319_43"
          x1={13.47}
          y1={9.521}
          x2={15.272}
          y2={10.877}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="expand_open_svg__filter0_bdi_319_43"
          x={0.327}
          y={8.789}
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
            result="effect1_backgroundBlur_319_43"
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
            in2="effect1_backgroundBlur_319_43"
            result="effect2_dropShadow_319_43"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_43"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_43" />
        </filter>
        <filter
          id="expand_open_svg__filter1_d_319_43"
          x={1.558}
          y={12.327}
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
            result="effect1_dropShadow_319_43"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_43"
            result="shape"
          />
        </filter>
        <filter
          id="expand_open_svg__filter2_bdi_319_43"
          x={8.788}
          y={0.327}
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
            result="effect1_backgroundBlur_319_43"
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
            in2="effect1_backgroundBlur_319_43"
            result="effect2_dropShadow_319_43"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_43"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_43" />
        </filter>
        <filter
          id="expand_open_svg__filter3_d_319_43"
          x={12.327}
          y={1.558}
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
            result="effect1_dropShadow_319_43"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_43"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgExpandOpen;
