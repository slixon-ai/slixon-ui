import * as React from "react";

function SvgCamera(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 30 27" fill="none" {...props}>
      <g
        filter="url(#camera_svg__filter0_bdi_319_140)"
        shapeRendering="crispEdges"
      >
        <path
          d="M5 12.457A3.956 3.956 0 018.956 8.5c.634 0 1.206-.377 1.455-.96l.31-.722A3 3 0 0113.478 5h3.044a3 3 0 012.757 1.818l.31.723c.25.582.822.959 1.455.959A3.957 3.957 0 0125 12.457V17.5a5 5 0 01-5 5H10a5 5 0 01-5-5v-5.043z"
          fill="url(#camera_svg__paint0_linear_319_140)"
        />
        <path
          d="M5 12.457A3.956 3.956 0 018.956 8.5c.634 0 1.206-.377 1.455-.96l.31-.722A3 3 0 0113.478 5h3.044a3 3 0 012.757 1.818l.31.723c.25.582.822.959 1.455.959A3.957 3.957 0 0125 12.457V17.5a5 5 0 01-5 5H10a5 5 0 01-5-5v-5.043z"
          stroke="url(#camera_svg__paint1_linear_319_140)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <g
        filter="url(#camera_svg__filter1_d_319_140)"
        transform="matrix(-1 0 0 1 18 11.5)"
      >
        <circle cx={3} cy={3} r={3} fill="#2AEAE7" />
        <circle cx={3} cy={3} r={3} stroke="#2AEAE7" strokeWidth={1.5} />
      </g>
      <defs>
        <linearGradient
          id="camera_svg__paint0_linear_319_140"
          x1={-1.5}
          y1={-2}
          x2={31.081}
          y2={31.21}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="camera_svg__paint1_linear_319_140"
          x1={5.5}
          y1={7.625}
          x2={20.991}
          y2={22.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="camera_svg__filter0_bdi_319_140"
          x={0.875}
          y={0.875}
          width={28.25}
          height={25.75}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_140"
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
            in2="effect1_backgroundBlur_319_140"
            result="effect2_dropShadow_319_140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_140"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_140" />
        </filter>
        <filter
          id="camera_svg__filter1_d_319_140"
          x={9.25}
          y={8.75}
          width={11.5}
          height={11.5}
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
            result="effect1_dropShadow_319_140"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_140"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgCamera;
