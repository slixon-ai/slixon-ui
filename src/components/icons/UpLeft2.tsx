import * as React from "react";

function SvgUpLeft2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#up_left2_svg__filter0_bdi_319_34)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.965 18.309a.75.75 0 01-1.06 0l-9.9-9.9a.75.75 0 111.06-1.06l9.9 9.899a.75.75 0 010 1.06z"
          fill="url(#up_left2_svg__paint0_linear_319_34)"
        />
        <path
          d="M17.877 18.22a.625.625 0 01-.884 0l-9.9-9.9a.625.625 0 01.884-.883l9.9 9.9a.625.625 0 010 .883z"
          stroke="url(#up_left2_svg__paint1_linear_319_34)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#up_left2_svg__filter1_d_319_34)">
        <path
          d="M12.485 7.172H7.828a1 1 0 00-1 1v4.656"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="up_left2_svg__paint0_linear_319_34"
          x1={23.224}
          y1={21.818}
          x2={19.425}
          y2={25.013}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="up_left2_svg__paint1_linear_319_34"
          x1={16.825}
          y1={16.161}
          x2={15.093}
          y2={17.627}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="up_left2_svg__filter0_bdi_319_34"
          x={2.785}
          y={3.129}
          width={19.399}
          height={19.399}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_34"
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
            in2="effect1_backgroundBlur_319_34"
            result="effect2_dropShadow_319_34"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_34"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_34" />
        </filter>
        <filter
          id="up_left2_svg__filter1_d_319_34"
          x={4.078}
          y={4.422}
          width={11.157}
          height={11.157}
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
            result="effect1_dropShadow_319_34"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_34"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgUpLeft2;
