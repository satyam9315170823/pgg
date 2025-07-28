"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border  p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

const Icons = {
  notion: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#ffffff"
      />
      <path
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000000"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  ),

  googleDrive: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 87.3 78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),

  googleDocs: () => (
    <svg
      width="47px"
      height="65px"
      viewBox="0 0 47 65"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-1"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-3"
        />
        <linearGradient
          x1="50.0053945%"
          y1="8.58610612%"
          x2="50.0053945%"
          y2="100.013939%"
          id="linearGradient-5"
        >
          <stop stopColor="#1A237E" stopOpacity="0.2" offset="0%" />
          <stop stopColor="#1A237E" stopOpacity="0.02" offset="100%" />
        </linearGradient>
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-6"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-8"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-10"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-12"
        />
        <path
          d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
          id="path-14"
        />
        <radialGradient
          cx="3.16804688%"
          cy="2.71744318%"
          fx="3.16804688%"
          fy="2.71744318%"
          r="161.248516%"
          gradientTransform="translate(0.031680,0.027174),scale(1.000000,0.723077),translate(-0.031680,-0.027174)"
          id="radialGradient-16"
        >
          <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="0%" />
          <stop stopColor="#FFFFFF" stopOpacity="0" offset="100%" />
        </radialGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g transform="translate(-451.000000, -463.000000)">
          <g id="Hero" transform="translate(0.000000, 63.000000)">
            <g id="Personal" transform="translate(277.000000, 309.000000)">
              <g id="Docs-icon" transform="translate(174.000000, 91.000000)">
                <g id="Group">
                  <g id="Clipped">
                    <mask id="mask-2" fill="white">
                      <use xlinkHref="#path-1" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L36.71875,10.3409091 L29.375,0 Z"
                      id="Path"
                      fill="#4285F4"
                      fillRule="nonzero"
                      mask="url(#mask-2)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-4" fill="white">
                      <use xlinkHref="#path-3" />
                    </mask>
                    <g id="SVGID_1_" />
                    <polygon
                      id="Path"
                      fill="url(#linearGradient-5)"
                      fillRule="nonzero"
                      mask="url(#mask-4)"
                      points="30.6638281 16.4309659 47 32.8582386 47 17.7272727"
                    ></polygon>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-7" fill="white">
                      <use xlinkHref="#path-6" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M11.75,47.2727273 L35.25,47.2727273 L35.25,44.3181818 L11.75,44.3181818 L11.75,47.2727273 Z M11.75,53.1818182 L29.375,53.1818182 L29.375,50.2272727 L11.75,50.2272727 L11.75,53.1818182 Z M11.75,32.5 L11.75,35.4545455 L35.25,35.4545455 L35.25,32.5 L11.75,32.5 Z M11.75,41.3636364 L35.25,41.3636364 L35.25,38.4090909 L11.75,38.4090909 L11.75,41.3636364 Z"
                      id="Shape"
                      fill="#F1F1F1"
                      fillRule="nonzero"
                      mask="url(#mask-7)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-9" fill="white">
                      <use xlinkHref="#path-8" />
                    </mask>
                    <g id="SVGID_1_" />
                    <g id="Group" mask="url(#mask-9)">
                      <g transform="translate(26.437500, -2.954545)">
                        <path
                          d="M2.9375,2.95454545 L2.9375,16.25 C2.9375,18.6985795 4.90929688,20.6818182 7.34375,20.6818182 L20.5625,20.6818182 L2.9375,2.95454545 Z"
                          id="Path"
                          fill="#A1C2FA"
                          fillRule="nonzero"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Clipped">
                    <mask id="mask-11" fill="white">
                      <use xlinkHref="#path-10" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,4.80113636 C0,2.36363636 1.9828125,0.369318182 4.40625,0.369318182 L29.375,0.369318182 L29.375,0 L4.40625,0 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                      mask="url(#mask-11)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-13" fill="white">
                      <use xlinkHref="#path-12" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M42.59375,64.6306818 L4.40625,64.6306818 C1.9828125,64.6306818 0,62.6363636 0,60.1988636 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,60.1988636 C47,62.6363636 45.0171875,64.6306818 42.59375,64.6306818 Z"
                      id="Path"
                      fillOpacity="0.2"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-13)"
                    />
                  </g>
                  <g id="Clipped">
                    <mask id="mask-15" fill="white">
                      <use xlinkHref="#path-14" />
                    </mask>
                    <g id="SVGID_1_" />
                    <path
                      d="M33.78125,17.7272727 C31.3467969,17.7272727 29.375,15.7440341 29.375,13.2954545 L29.375,13.6647727 C29.375,16.1133523 31.3467969,18.0965909 33.78125,18.0965909 L47,18.0965909 L47,17.7272727 L33.78125,17.7272727 Z"
                      id="Path"
                      fillOpacity="0.1"
                      fill="#1A237E"
                      fillRule="nonzero"
                      mask="url(#mask-15)"
                    />
                  </g>
                </g>
                <path
                  d="M29.375,0 L4.40625,0 C1.9828125,0 0,1.99431818 0,4.43181818 L0,60.5681818 C0,63.0056818 1.9828125,65 4.40625,65 L42.59375,65 C45.0171875,65 47,63.0056818 47,60.5681818 L47,17.7272727 L29.375,0 Z"
                  id="Path"
                  fill="url(#radialGradient-16)"
                  fillRule="nonzero"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  ),
 figma: () => (
  <svg
    width="47px"
    height="65px"
    viewBox="0 0 256 384"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none">
      <circle cx="96" cy="48" r="48" fill="#F24E1E" />
      <circle cx="96" cy="144" r="48" fill="#A259FF" />
      <circle cx="96" cy="240" r="48" fill="#1ABCFE" />
      <circle cx="192" cy="48" r="48" fill="#FF7262" />
      <path
        d="M144,144c0-26.51,21.49-48,48-48s48,21.49,48,48s-21.49,48-48,48S144,170.51,144,144z"
        fill="#0ACF83"
      />
    </g>
  </svg>
),


  
  messenger: () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <radialGradient
        id="8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1"
        cx="11.087"
        cy="7.022"
        r="47.612"
        gradientTransform="matrix(1 0 0 -1 0 50)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#1292ff"></stop>
        <stop offset=".079" stopColor="#2982ff"></stop>
        <stop offset=".23" stopColor="#4e69ff"></stop>
        <stop offset=".351" stopColor="#6559ff"></stop>
        <stop offset=".428" stopColor="#6d53ff"></stop>
        <stop offset=".754" stopColor="#df47aa"></stop>
        <stop offset=".946" stopColor="#ff6257"></stop>
      </radialGradient>
      <path
        fill="url(#8O3wK6b5ASW2Wn6hRCB5xa_YFbzdUk7Q3F8_gr1)"
        d="M44,23.5C44,34.27,35.05,43,24,43c-1.651,0-3.25-0.194-4.784-0.564	c-0.465-0.112-0.951-0.069-1.379,0.145L13.46,44.77C12.33,45.335,11,44.513,11,43.249v-4.025c0-0.575-0.257-1.111-0.681-1.499	C6.425,34.165,4,29.11,4,23.5C4,12.73,12.95,4,24,4S44,12.73,44,23.5z"
      />
      <path
        d="M34.992,17.292c-0.428,0-0.843,0.142-1.2,0.411l-5.694,4.215	c-0.133,0.1-0.28,0.15-0.435,0.15c-0.15,0-0.291-0.047-0.41-0.136l-3.972-2.99c-0.808-0.601-1.76-0.918-2.757-0.918	c-1.576,0-3.025,0.791-3.876,2.116l-1.211,1.891l-4.12,6.695c-0.392,0.614-0.422,1.372-0.071,2.014	c0.358,0.654,1.034,1.06,1.764,1.06c0.428,0,0.843-0.142,1.2-0.411l5.694-4.215c0.133-0.1,0.28-0.15,0.435-0.15	c0.15,0,0.291,0.047,0.41,0.136l3.972,2.99c0.809,0.602,1.76,0.918,2.757,0.918c1.576,0,3.025-0.791,3.876-2.116l1.211-1.891	l4.12-6.695c0.392-0.614,0.422-1.372,0.071-2.014C36.398,17.698,35.722,17.292,34.992,17.292L34.992,17.292z"
        opacity=".05"
      />
      <path
        d="M34.992,17.792c-0.319,0-0.63,0.107-0.899,0.31l-5.697,4.218	c-0.216,0.163-0.468,0.248-0.732,0.248c-0.259,0-0.504-0.082-0.71-0.236l-3.973-2.991c-0.719-0.535-1.568-0.817-2.457-0.817	c-1.405,0-2.696,0.705-3.455,1.887l-1.21,1.891l-4.115,6.688c-0.297,0.465-0.32,1.033-0.058,1.511c0.266,0.486,0.787,0.8,1.325,0.8	c0.319,0,0.63-0.107,0.899-0.31l5.697-4.218c0.216-0.163,0.468-0.248,0.732-0.248c0.259,0,0.504,0.082,0.71,0.236l3.973,2.991	c0.719,0.535,1.568,0.817,2.457,0.817c1.405,0,2.696-0.705,3.455-1.887l1.21-1.891l4.115-6.688c0.297-0.465,0.32-1.033,0.058-1.511	C36.051,18.106,35.531,17.792,34.992,17.792L34.992,17.792z"
        opacity=".07"
      />
      <path
        fill="#ffffff"
        d="M34.394,18.501l-5.7,4.22c-0.61,0.46-1.44,0.46-2.04,0.01L22.68,19.74	c-1.68-1.25-4.06-0.82-5.19,0.94l-1.21,1.89l-4.11,6.68c-0.6,0.94,0.55,2.01,1.44,1.34l5.7-4.22c0.61-0.46,1.44-0.46,2.04-0.01	l3.974,2.991c1.68,1.25,4.06,0.82,5.19-0.94l1.21-1.89l4.11-6.68C36.434,18.901,35.284,17.831,34.394,18.501z"
      />
    </svg>
  ),
  
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};

export function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  // Use HTMLDivElement refs and cast them to HTMLElement for AnimatedBeam
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex xl:h-[500px] w-full items-center justify-center overflow-hidden  p-10 ",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.googleDocs />
          </Circle>
          <Circle ref={div3Ref}>
             <Icons.figma />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.messenger />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.notion />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16 bg-white">
            <Image
              src={'/logoMain.svg'}
              height={2000}
              width={2000}
              alt="logo"
            />
           
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref} className="bg-white">
            <Icons.user />
          </Circle>
        </div>
      </div>

      {/* Fixed AnimatedBeam components with correct refs */}
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div2Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div3Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div4Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div5Ref as React.RefObject<HTMLElement>}
        toRef={div6Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div6Ref as React.RefObject<HTMLElement>}
        toRef={div7Ref as React.RefObject<HTMLElement>}
      />
    </div>
  );
}