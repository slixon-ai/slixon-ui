import * as React from "react";

function SvgHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#heart_svg__filter0_bdi_319_161)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5.663 14.213l6.16 6.493a3 3 0 004.353 0l6.161-6.492c2.217-2.337 2.217-6.125 0-8.462-2.217-2.336-5.811-2.336-8.028 0a.426.426 0 01-.618 0c-2.217-2.336-5.811-2.336-8.028 0-2.217 2.337-2.217 6.125 0 8.462z"
          fill="url(#heart_svg__paint0_linear_319_161)"
        />
        <path
          d="M11.914 20.62l-6.16-6.493c-2.172-2.288-2.172-6 0-8.289 2.167-2.284 5.679-2.284 7.847 0a.55.55 0 00.798 0c2.168-2.284 5.68-2.284 7.848 0 2.17 2.289 2.17 6.001 0 8.29l-6.161 6.492a2.875 2.875 0 01-4.172 0z"
          stroke="url(#heart_svg__paint1_linear_319_161)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.156 5.924c2.125 2.24 2.125 5.877 0 8.117l-6.161 6.493a2.74 2.74 0 01-1.995.858V6.135c.178 0 .357-.07.49-.21 2.119-2.233 5.548-2.233 7.666 0zm-6.08 14.883l.008-.004.09-.095a3.163 3.163 0 01-.097.099z"
        fill="#2AEAE7"
      />
      <defs>
        <linearGradient
          id="heart_svg__paint0_linear_319_161"
          x1={-2.5}
          y1={-3.6}
          x2={32.81}
          y2={29.55}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="heart_svg__paint1_linear_319_161"
          x1={4.5}
          y1={6.85}
          x2={21.234}
          y2={21.949}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="heart_svg__filter0_bdi_319_161"
          x={0}
          y={0}
          width={28}
          height={25.642}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_161"
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
            in2="effect1_backgroundBlur_319_161"
            result="effect2_dropShadow_319_161"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_161"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_161" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgHeart;
