import * as React from "react";

function SvgStar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 28 27" fill="none" {...props}>
      <g
        filter="url(#star_svg__filter0_bdi_319_179)"
        shapeRendering="crispEdges"
      >
        <path
          d="M12.972 4.708a1.2 1.2 0 012.056 0l2.33 3.873a1.2 1.2 0 00.758.55l4.403 1.02a1.2 1.2 0 01.636 1.956l-2.963 3.413a1.2 1.2 0 00-.29.89l.391 4.503a1.2 1.2 0 01-1.663 1.208l-4.162-1.763a1.2 1.2 0 00-.936 0L9.37 22.121a1.2 1.2 0 01-1.663-1.208l.39-4.503a1.2 1.2 0 00-.289-.89l-2.962-3.413a1.2 1.2 0 01.635-1.956l4.403-1.02a1.2 1.2 0 00.757-.55l2.33-3.873z"
          fill="url(#star_svg__paint0_linear_319_179)"
        />
        <path
          d="M12.972 4.708a1.2 1.2 0 012.056 0l2.33 3.873a1.2 1.2 0 00.758.55l4.403 1.02a1.2 1.2 0 01.636 1.956l-2.963 3.413a1.2 1.2 0 00-.29.89l.391 4.503a1.2 1.2 0 01-1.663 1.208l-4.162-1.763a1.2 1.2 0 00-.936 0L9.37 22.121a1.2 1.2 0 01-1.663-1.208l.39-4.503a1.2 1.2 0 00-.289-.89l-2.962-3.413a1.2 1.2 0 01.635-1.956l4.403-1.02a1.2 1.2 0 00.757-.55l2.33-3.873z"
          stroke="url(#star_svg__paint1_linear_319_179)"
          strokeOpacity={0.7}
          strokeWidth={0.25}
        />
      </g>
      <defs>
        <linearGradient
          id="star_svg__paint0_linear_319_179"
          x1={-4.15}
          y1={-5.8}
          x2={36.55}
          y2={30.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#29EAC4" stopOpacity={0.5} />
          <stop offset={0.505} stopColor="#12D8FA" stopOpacity={0.5} />
          <stop offset={1} stopColor="#0B2774" stopOpacity={0.5} />
        </linearGradient>
        <linearGradient
          id="star_svg__paint1_linear_319_179"
          x1={3.55}
          y1={6.3}
          x2={22.8}
          y2={22.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.15} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.44} />
        </linearGradient>
        <filter
          id="star_svg__filter0_bdi_319_179"
          x={0.426}
          y={0.002}
          width={27.149}
          height={26.341}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={1} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_319_179"
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
            in2="effect1_backgroundBlur_319_179"
            result="effect2_dropShadow_319_179"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_319_179"
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
          <feBlend in2="shape" result="effect3_innerShadow_319_179" />
        </filter>
      </defs>
    </svg>
  );
}

export default SvgStar;
