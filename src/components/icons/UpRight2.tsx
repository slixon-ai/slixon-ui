import * as React from "react";

function SvgUpRight2(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <g
        filter="url(#up_right2_svg__filter0_bdi_319_35)"
        shapeRendering="crispEdges"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.829 17.828a.75.75 0 001.06 0l9.9-9.9a.75.75 0 10-1.061-1.06l-9.9 9.9a.75.75 0 000 1.06z"
          fill="url(#up_right2_svg__paint0_linear_319_35)"
        />
        <path
          d="M6.917 17.74c.244.244.64.244.884 0l9.9-9.9a.625.625 0 10-.885-.884l-9.9 9.9a.625.625 0 000 .884z"
          stroke="url(#up_right2_svg__paint1_linear_319_35)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
          strokeLinecap="round"
        />
      </g>
      <g filter="url(#up_right2_svg__filter1_d_319_35)">
        <path
          d="M12.309 6.692h4.656a1 1 0 011 1v4.657"
          stroke="#2AEAE7"
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <linearGradient
          id="up_right2_svg__paint0_linear_319_35"
          x1={1.569}
          y1={21.337}
          x2={5.368}
          y2={24.532}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#344EA6" stopOpacity={0.26} />
          <stop offset={0.505} stopColor="#587EFF" stopOpacity={0.12} />
          <stop offset={1} stopColor="#829EFF" stopOpacity={0.04} />
        </linearGradient>
        <linearGradient
          id="up_right2_svg__paint1_linear_319_35"
          x1={7.969}
          y1={15.68}
          x2={9.7}
          y2={17.147}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="up_right2_svg__filter0_bdi_319_35"
          x={2.609}
          y={2.648}
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
            result="effect1_backgroundBlur_319_35"
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
            in2="effect1_backgroundBlur_319_35"
            result="effect2_dropShadow_319_35"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_35"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_35" />
        </filter>
        <filter
          id="up_right2_svg__filter1_d_319_35"
          x={9.559}
          y={3.942}
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
            result="effect1_dropShadow_319_35"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_319_35"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgUpRight2;
