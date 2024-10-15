import * as React from "react";

function SvgLayers(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 30" fill="none" {...props}>
      <g
        filter="url(#layers_svg__filter0_bdi_319_115)"
        shapeRendering="crispEdges"
      >
        <path
          d="M16.62 14.686a5.345 5.345 0 00-5.24 0l-6.036 3.392c-1.459.819-1.459 2.926 0 3.745l6.036 3.392a5.345 5.345 0 005.24 0l6.036-3.392c1.459-.819 1.459-2.926 0-3.745l-6.036-3.392z"
          fill="url(#layers_svg__paint0_linear_319_115)"
        />
        <path
          d="M11.441 14.795a5.22 5.22 0 015.118 0l6.036 3.392c1.373.771 1.373 2.756 0 3.527l-6.036 3.392a5.22 5.22 0 01-5.118 0l-6.036-3.392c-1.373-.77-1.373-2.756 0-3.527l6.036-3.392z"
          stroke="url(#layers_svg__paint1_linear_319_115)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#layers_svg__filter1_d_319_115)">
        <path
          d="M16.62 9.686a5.345 5.345 0 00-5.24 0l-6.036 3.392c-1.459.819-1.459 2.926 0 3.745l6.036 3.392a5.345 5.345 0 005.24 0l6.036-3.392c1.459-.819 1.459-2.926 0-3.745L16.62 9.686z"
          fill="#2AEAE7"
        />
      </g>
      <g
        filter="url(#layers_svg__filter2_bdi_319_115)"
        shapeRendering="crispEdges"
      >
        <path
          d="M16.62 4.936a5.345 5.345 0 00-5.24 0L5.344 8.328c-1.459.819-1.459 2.926 0 3.745l6.036 3.392a5.345 5.345 0 005.24 0l6.036-3.392c1.459-.819 1.459-2.926 0-3.745L16.62 4.936z"
          fill="url(#layers_svg__paint2_linear_319_115)"
        />
        <path
          d="M11.441 5.045a5.22 5.22 0 015.118 0l6.036 3.392c1.373.771 1.373 2.756 0 3.527l-6.036 3.392a5.22 5.22 0 01-5.118 0l-6.036-3.392c-1.373-.77-1.373-2.756 0-3.527l6.036-3.392z"
          stroke="url(#layers_svg__paint3_linear_319_115)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="layers_svg__paint0_linear_319_115"
          x1={-2.087}
          y1={9.24}
          x2={18.569}
          y2={39.427}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="layers_svg__paint1_linear_319_115"
          x1={4.737}
          y1={15.785}
          x2={14.695}
          y2={29.77}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <linearGradient
          id="layers_svg__paint2_linear_319_115"
          x1={-2.087}
          y1={-0.51}
          x2={18.569}
          y2={29.677}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="layers_svg__paint3_linear_319_115"
          x1={4.737}
          y1={6.035}
          x2={14.695}
          y2={20.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="layers_svg__filter0_bdi_319_115"
          x={0.25}
          y={10}
          width={27.5}
          height={19.901}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_115"
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
            in2="effect1_backgroundBlur_319_115"
            result="effect2_dropShadow_319_115"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_115"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_115" />
        </filter>
        <filter
          id="layers_svg__filter1_d_319_115"
          x={2.25}
          y={7}
          width={23.5}
          height={15.901}
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
            result="effect1_dropShadow_319_115"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_115"
            result="shape"
          />
        </filter>
        <filter
          id="layers_svg__filter2_bdi_319_115"
          x={0.25}
          y={0.25}
          width={27.5}
          height={19.901}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_115"
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
            in2="effect1_backgroundBlur_319_115"
            result="effect2_dropShadow_319_115"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_115"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_115" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgLayers;
