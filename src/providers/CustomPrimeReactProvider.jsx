"use client"; // Required for Next.js App Router

import React from "react";
import { PrimeReactProvider } from "primereact/api";
import classNames from "classnames";


const Tailwind = {
  tabmenu: {
    root: "overflow-auto font-sans p-3",
    menu: {
      className: classNames(
        "flex m-0 p-0 list-none flex-nowrap",
        "bg-white border-solid border-gray-300 border-b-2",
        "outline-none no-underline text-base list-none "
      ),
    },
    menuitem: "mr-0",
    action: ({ context, parent }) => ({
      className: classNames(
        "cursor-pointer select-none flex items-center relative no-underline overflow-hidden",
        "border-b-2 p-5 font-bold rounded-t-lg ",
        "focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]",
        {
          "border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80":
            parent.state.activeIndex !== context.index,
          "bg-white border-primary-dark text-primary dark:bg-gray-900 dark:border-primary-dark dark:text-primary":
            parent.state.activeIndex === context.index,
        }
      ),
      style: { top: "2px" ,overflow: "hidden" },
    }),
    icon: "mr-2",
  },inputtext: {
    root: ({ props, context }) => ({
        className: classNames(
            'm-0',
            'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border transition-colors duration-200 appearance-none rounded-lg',
            {
                "focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgb(45 55 72)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]":
                    !context.disabled,
                'hover:border-primary': !props.invalid && !context.disabled,
                'opacity-60 select-none pointer-events-none cursor-default': context.disabled,
                'border-gray-300 dark:border-primary': !props.invalid,
                'border-red-500 hover:border-red-500/80 focus:border-red-500':
                    props.invalid && !context.disabled,
                'border-red-500/50': props.invalid && context.disabled,
            },
            {
                'text-lg px-4 py-4': props.size === 'large',
                'text-xs px-2 py-2': props.size === 'small',
                'p-3 text-base': !props.size || typeof props.size === 'number'
            },
            {
                'pl-8': context.iconPosition === 'left',
                'pr-8': props.iconPosition === 'right'
            }
        ),
    }),

},
dialog: {
  root: ({ state }) => ({
      className: classNames('rounded-lg font-sans shadow-lg border-0', 'max-h-[90%] transform scale-100', 'm-0 w-[50vw]', 'dark:border dark:border-blue-900/40', {
          'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
      })
  }),
  header: {
      className: classNames('flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80')
  },
  headerTitle: 'font-bold text-lg',
  headerIcons: 'flex items-center',
  closeButton: {
      className: classNames(
          'flex items-center justify-center overflow-hidden relative',
          'w-6 h-8 text-black  border-2 border-black bg-white text-sm rounded-sm transition duration-200 ease-in-out mr-2 last:mr-0',
          'hover:bg-gray-200 shadow ',
          'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
          'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
      )
  },
  closeButtonIcon: 'w-3 h-3 inline-block',
  content: ({ state }) => ({
      className: classNames('overflow-y-auto', 'bg-white text-gray-700 px-6 pb-8 pt-0', 'rounded-bl-lg rounded-br-lg', 'dark:bg-gray-900  dark:text-white/80 ', {
          grow: state.maximized
      })
  }),
  footer: {
      className: classNames('shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80')
  },
  mask: ({ state }) => ({
      className: classNames('transition duration-200 ', { 'bg-black-40': state.containerVisible })
  }),
  transition: ({ props }) => {
      return props.position === 'top'
          ? {
                enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
            }
          : props.position === 'bottom'
          ? {
                enterFromClass: 'opacity-0 scale-75 translate-y-full',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
            }
          : props.position === 'left' || props.position === 'top-left' || props.position === 'bottom-left'
          ? {
                enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
            }
          : props.position === 'right' || props.position === 'top-right' || props.position === 'bottom-right'
          ? {
                enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
            }
          : {
                enterFromClass: 'opacity-0 scale-75',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75'
            };
  }
},
};

export default function CustomPrimeReactProvider({ children }) {
  return (
    <PrimeReactProvider value={{ pt: Tailwind ,ptOptions: { mergeSections: true, mergeProps: true }}}>
      {children}
    </PrimeReactProvider>
  );
}
