import * as React from "react";

function SvgSave(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M2 6a4 4 0 014-4h8.757a3 3 0 012.122.879L21.12 7.12A3 3 0 0122 9.243V18a4 4 0 01-4 4H6a4 4 0 01-4-4V6z"
        fill="url(#save_svg__paint0_linear_319_196)"
      />
      <path
        d="M2.125 6A3.875 3.875 0 016 2.125h8.757c.763 0 1.494.303 2.033.842l4.243 4.243c.54.539.842 1.27.842 2.033V18A3.875 3.875 0 0118 21.875H6A3.875 3.875 0 012.125 18V6z"
        stroke="url(#save_svg__paint1_linear_319_196)"
        strokeOpacity={0.7}
        strokeWidth={0.25}
      />
      <g filter="url(#save_svg__filter0_d_319_196)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 21.75V15a2 2 0 00-2-2H8a2 2 0 00-2 2v6.75h12z"
          fill="#2AEAE7"
        />
      </g>
      <g filter="url(#save_svg__filter1_d_319_196)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 7h6a1 1 0 001-1V2.547a2.75 2.75 0 00-1.243-.297H8V6a1 1 0 001 1z"
          fill="#2AEAE7"
        />
      </g>
      <defs>
        <linearGradient
          id="save_svg__paint0_linear_319_196"
          x1={-4.5}
          y1={-6}
          x2={32.5}
          y2={27}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="save_svg__paint1_linear_319_196"
          x1={2.5}
          y1={5}
          x2={20}
          y2={20}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="save_svg__filter0_d_319_196"
          x={4}
          y={11}
          width={16}
          height={12.75}
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
            result="effect1_dropShadow_319_196"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_196"
            result="shape"
          />
        </filter>
        <filter
          id="save_svg__filter1_d_319_196"
          x={6}
          y={0.25}
          width={12}
          height={8.75}
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
            result="effect1_dropShadow_319_196"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_196"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgSave;
