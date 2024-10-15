import * as React from "react";

function SvgCloudUpload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 24" fill="none" {...props}>
      <g
        filter="url(#cloud_upload_svg__filter0_bdi_319_185)"
        shapeRendering="crispEdges"
      >
        <path
          d="M4 14.889a3.333 3.333 0 003.333 3.333H8l12-.022a4.445 4.445 0 004-4.422c0-2.673-2.455-4.776-5.08-4.4a.01.01 0 01-.01-.005 6.112 6.112 0 00-11.55 2.173.01.01 0 01-.011.01C5.527 11.554 4 13.06 4 14.889z"
          fill="url(#cloud_upload_svg__paint0_linear_319_185)"
        />
        <path
          d="M4.125 14.889a3.208 3.208 0 003.208 3.208H8l11.994-.022a4.32 4.32 0 003.881-4.297c0-2.596-2.387-4.641-4.938-4.276L4.126 14.89zm0 0c0-1.759 1.47-3.21 3.224-3.208.07 0 .128-.053.135-.123l-.125-.011.125.01A5.987 5.987 0 0118.798 9.43L4.125 14.89z"
          stroke="url(#cloud_upload_svg__paint1_linear_319_185)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g
        filter="url(#cloud_upload_svg__filter1_d_319_185)"
        stroke="#2AEAE7"
        strokeWidth={1.5}
        strokeLinecap="round"
      >
        <path d="M11.5 16.5l2.146-2.146a.5.5 0 01.707 0L16.5 16.5M14 15v6" />
      </g>
      <defs>
        <linearGradient
          id="cloud_upload_svg__paint0_linear_319_185"
          x1={-2.5}
          y1={1.111}
          x2={18.724}
          y2={32.087}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="cloud_upload_svg__paint1_linear_319_185"
          x1={4.5}
          y1={7.833}
          x2={14.731}
          y2={22.183}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="cloud_upload_svg__filter0_bdi_319_185"
          x={0}
          y={2}
          width={28}
          height={20.222}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_185"
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
            in2="effect1_backgroundBlur_319_185"
            result="effect2_dropShadow_319_185"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_185"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_185" />
        </filter>
        <filter
          id="cloud_upload_svg__filter1_d_319_185"
          x={8.75}
          y={11.457}
          width={10.5}
          height={12.293}
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
            result="effect1_dropShadow_319_185"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_185"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCloudUpload;
