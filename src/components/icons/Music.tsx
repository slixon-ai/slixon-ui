import * as React from "react";

function SvgMusic(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 25 26" fill="none" {...props}>
      <g
        filter="url(#music_svg__filter0_bdi_319_137)"
        shapeRendering="crispEdges"
      >
        <path
          d="M18.5 18.101c0 .414 1.086.649 1.5.649a.75.75 0 00.75-.75V5a.75.75 0 00-.904-.734L8.136 6.258A.75.75 0 007.5 7v13c0 .414.336.75 1.5.75a.75.75 0 00.75-.75v-8.374L18.5 10v8.101z"
          fill="url(#music_svg__paint0_linear_319_137)"
        />
        <path
          d="M19.867 4.39h0l.004-.002a.627.627 0 01.754.612v13c0 .345-.28.625-.625.625-.191 0-.553-.056-.865-.162a1.458 1.458 0 01-.385-.186c-.096-.071-.125-.131-.125-.176V10a.125.125 0 00-.148-.123l-8.75 1.626a.125.125 0 00-.102.123V20c0 .345-.28.625-.625.625-.575 0-.923-.084-1.123-.202-.19-.112-.252-.258-.252-.423v-8.988h0V7c0-.038.003-.076.01-.112h0a.626.626 0 01.52-.506h.003l11.709-1.993z"
          stroke="url(#music_svg__paint1_linear_319_137)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g
        filter="url(#music_svg__filter1_d_319_137)"
        transform="matrix(-1 0 0 1 9 17.5)"
      >
        <circle cx={2.5} cy={2.5} r={2.5} fill="#2AEAE7" />
        <circle cx={2.5} cy={2.5} r={2.5} stroke="#2AEAE7" strokeWidth={1.5} />
      </g>
      <g
        filter="url(#music_svg__filter2_d_319_137)"
        transform="matrix(-1 0 0 1 20 16)"
      >
        <circle cx={2.5} cy={2.5} r={2.5} fill="#2AEAE7" />
        <circle cx={2.5} cy={2.5} r={2.5} stroke="#2AEAE7" strokeWidth={1.5} />
      </g>
      <defs>
        <filter
          id="music_svg__filter0_bdi_319_137"
          x={3.5}
          y={0.25}
          width={21.25}
          height={24.5}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_137"
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
            in2="effect1_backgroundBlur_319_137"
            result="effect2_dropShadow_319_137"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_137"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_137" />
        </filter>
        <filter
          id="music_svg__filter1_d_319_137"
          x={1.25}
          y={14.75}
          width={10.5}
          height={10.5}
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
            result="effect1_dropShadow_319_137"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_137"
            result="shape"
          />
        </filter>
        <filter
          id="music_svg__filter2_d_319_137"
          x={12.25}
          y={13.25}
          width={10.5}
          height={10.5}
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
            result="effect1_dropShadow_319_137"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_137"
            result="shape"
          />
        </filter>
        <linearGradient
          id="music_svg__paint0_linear_319_137"
          x1={3.193}
          y1={-2.35}
          x2={32.283}
          y2={18.485}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="music_svg__paint1_linear_319_137"
          x1={7.831}
          y1={6.725}
          x2={21.477}
          y2={16.118}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgMusic;
