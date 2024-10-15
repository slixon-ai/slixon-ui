import * as React from "react";

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 25" fill="none" {...props}>
      <g
        filter="url(#download_svg__filter0_bdi_319_189)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 12v5a4 4 0 004 4h12a4 4 0 004-4v-5a4 4 0 00-4-4H8a4 4 0 00-4 4z"
          fill="url(#download_svg__paint0_linear_319_189)"
        />
        <path
          d="M4.125 17v-5A3.875 3.875 0 018 8.125h12A3.875 3.875 0 0123.875 12v5A3.875 3.875 0 0120 20.875H8A3.875 3.875 0 014.125 17z"
          stroke="url(#download_svg__paint1_linear_319_189)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#download_svg__filter1_d_319_189)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M11 13l2.293 2.293a1 1 0 001.414 0L17 13M14 15V3" />
      </g>
      <defs>
        <linearGradient
          id="download_svg__paint0_linear_319_189"
          x1={-4}
          y1={25.225}
          x2={14.736}
          y2={-7.094}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="download_svg__paint1_linear_319_189"
          x1={7}
          y1={20.675}
          x2={15.389}
          y2={5.617}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="download_svg__filter0_bdi_319_189"
          x={0}
          y={4}
          width={28}
          height={21}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_189"
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
            in2="effect1_backgroundBlur_319_189"
            result="effect2_dropShadow_319_189"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_189"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_189" />
        </filter>
        <filter
          id="download_svg__filter1_d_319_189"
          x={8.25}
          y={0.25}
          width={11.5}
          height={18.086}
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
            result="effect1_dropShadow_319_189"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_189"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgDownload;
