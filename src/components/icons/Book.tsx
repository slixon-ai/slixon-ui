import * as React from "react";

function SvgBook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#book_svg__filter0_bdi_319_225)"
        shapeRendering="crispEdges"
      >
        <path
          d="M14 5.117l1.1-.412c2.504-.94 5.296-.94 7.8 0 .664.249 1.1.853 1.1 1.524v13.85c0 .923-.992 1.553-1.905 1.21a8.845 8.845 0 00-6.19 0l-1.891.71c-.007.003-.014-.002-.014-.008V5.117z"
          fill="url(#book_svg__paint0_linear_319_225)"
        />
        <path
          d="M14 5.117l-1.1-.412a11.145 11.145 0 00-7.8 0c-.664.249-1.1.853-1.1 1.524v13.85c0 .923.992 1.553 1.905 1.21a8.845 8.845 0 016.19 0l1.891.71c.007.003.014-.002.014-.008V5.117z"
          fill="url(#book_svg__paint1_linear_319_225)"
        />
        <path
          d="M15.86 21.173l-1.735.651V5.204l1.02-.382a11.02 11.02 0 017.71 0c.62.232 1.02.792 1.02 1.407v13.85c0 .824-.894 1.41-1.736 1.094a8.97 8.97 0 00-6.278 0zm-1.985.651l-1.736-.651a8.97 8.97 0 00-6.278 0c-.842.316-1.736-.27-1.736-1.093V6.23c0-.616.4-1.176 1.02-1.408a11.02 11.02 0 017.71 0l1.02.382v16.62z"
          stroke="url(#book_svg__paint2_linear_319_225)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="book_svg__paint0_linear_319_225"
          x1={-2.5}
          y1={-3.2}
          x2={31.017}
          y2={30.015}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="book_svg__paint1_linear_319_225"
          x1={-2.5}
          y1={-3.2}
          x2={31.017}
          y2={30.015}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="book_svg__paint2_linear_319_225"
          x1={4.5}
          y1={6.7}
          x2={20.419}
          y2={21.86}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="book_svg__filter0_bdi_319_225"
          x={0}
          y={0}
          width={28}
          height={26}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_225"
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
            in2="effect1_backgroundBlur_319_225"
            result="effect2_dropShadow_319_225"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_225"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_225" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBook;
