import * as React from "react";

function SvgImage(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 28" fill="none" {...props}>
      <g
        filter="url(#image_svg__filter0_bdi_319_169)"
        shapeRendering="crispEdges"
      >
        <rect
          x={4}
          y={4}
          width={20}
          height={20}
          rx={5}
          fill="url(#image_svg__paint0_linear_319_169)"
        />
        <rect
          x={4.125}
          y={4.125}
          width={19.75}
          height={19.75}
          rx={4.875}
          stroke="url(#image_svg__paint1_linear_319_169)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#image_svg__filter1_d_319_169)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.75 17.807V19A4.75 4.75 0 0119 23.75H9a4.75 4.75 0 01-4.744-4.504l2.539-1.523a1.8 1.8 0 012.199.27l1.157 1.159a1.2 1.2 0 001.697 0l4.99-4.99a1.8 1.8 0 012.425-.11L23.64 17.7a1 1 0 01.11.107z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#image_svg__filter2_d_319_169)">
        <circle
          cx={2}
          cy={2}
          r={2}
          transform="matrix(-1 0 0 1 12 8)"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <filter
          id="image_svg__filter0_bdi_319_169"
          x={0}
          y={0}
          width={28}
          height={28}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_169"
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
            in2="effect1_backgroundBlur_319_169"
            result="effect2_dropShadow_319_169"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_169"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_169" />
        </filter>
        <filter
          id="image_svg__filter1_d_319_169"
          x={2.256}
          y={11.635}
          width={23.494}
          height={14.115}
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
            result="effect1_dropShadow_319_169"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_169"
            result="shape"
          />
        </filter>
        <filter
          id="image_svg__filter2_d_319_169"
          x={6}
          y={6}
          width={8}
          height={8}
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
            result="effect1_dropShadow_319_169"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_169"
            result="shape"
          />
        </filter>
        <linearGradient
          id="image_svg__paint0_linear_319_169"
          x1={-2.5}
          y1={-4}
          x2={34.5}
          y2={29}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="image_svg__paint1_linear_319_169"
          x1={4.5}
          y1={7}
          x2={22}
          y2={22}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgImage;
