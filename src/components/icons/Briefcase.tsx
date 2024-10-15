import * as React from "react";

function SvgBriefcase(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 26" fill="none" {...props}>
      <g
        filter="url(#briefcase_svg__filter0_bdi_319_176)"
        shapeRendering="crispEdges"
      >
        <path
          d="M23.167 17V10.57l-8.143 2.158a4 4 0 01-2.048 0L4.832 10.57V17a4 4 0 004 4h10.334a4 4 0 004-4z"
          fill="url(#briefcase_svg__paint0_linear_319_176)"
        />
        <path
          d="M23.167 17V10.57l-8.143 2.158a4 4 0 01-2.048 0L4.832 10.57V17a4 4 0 004 4h10.334a4 4 0 004-4z"
          stroke="url(#briefcase_svg__paint1_linear_319_176)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g filter="url(#briefcase_svg__filter1_d_319_176)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 6.429a2 2 0 00-2 2v1.655a2 2 0 001.425 1.915l7.426 2.228a4 4 0 002.298 0l7.426-2.228A2 2 0 0024 10.084V8.429a2 2 0 00-2-2H6zm8.75 3.428a.75.75 0 00-1.5 0v1.715a.75.75 0 001.5 0V9.857z"
          fill="#2AEAE7"
        />
      </g>
      <path
        d="M17.333 6.429V5a2 2 0 00-2-2h-2.666a2 2 0 00-2 2v1.429"
        stroke="#2AEAE7"
        strokeWidth={1.5}
      />
      <defs>
        <linearGradient
          id="briefcase_svg__paint0_linear_319_176"
          x1={-1.125}
          y1={6.4}
          x2={16.483}
          y2={34.008}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="briefcase_svg__paint1_linear_319_176"
          x1={5.292}
          y1={12.136}
          x2={13.8}
          y2={24.956}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="briefcase_svg__filter0_bdi_319_176"
          x={0.708}
          y={6.409}
          width={26.583}
          height={18.716}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_176"
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
            in2="effect1_backgroundBlur_319_176"
            result="effect2_dropShadow_319_176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_176"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_176" />
        </filter>
        <filter
          id="briefcase_svg__filter1_d_319_176"
          x={2}
          y={4.429}
          width={24}
          height={11.967}
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
            result="effect1_dropShadow_319_176"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_176"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgBriefcase;
