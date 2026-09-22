/* eslint-disable no-undef */
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { isMobile, loadExternalResource } from '@/lib/utils'
import { useEffect } from 'react'

/**
 * 网页动画
 * @returns
 */
export default function Live2D() {
  const { theme, switchTheme } = useGlobal()
  const showPet = JSON.parse(siteConfig('WIDGET_PET'))
  const petLink = siteConfig('WIDGET_PET_LINK')
  const petSwitchTheme = siteConfig('WIDGET_PET_SWITCH_THEME')

  // FSM inline SVG, transparent background
  if (!showPet) {
    return <></>
  }

  return (
    <svg
      viewBox="0 0 200 120"
      width="160"
      className="mx-auto my-4 opacity-70 dark:opacity-90"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Eyes */}
      <circle cx="70" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="130" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="3"/>
      <circle cx="70" cy="20" r="3" fill="currentColor"/>
      <circle cx="130" cy="20" r="3" fill="currentColor"/>
      {/* Eye stalks */}
      <path d="M70 30 Q65 45 75 55" fill="none" stroke="currentColor" strokeWidth="3"/>
      <path d="M130 30 Q135 45 125 55" fill="none" stroke="currentColor" strokeWidth="3"/>
      {/* Body oval */}
      <ellipse cx="100" cy="75" rx="60" ry="25" fill="none" stroke="currentColor" strokeWidth="3"/>
      {/* FSM text */}
      <text x="100" y="85" textAnchor="middle" fontSize="28" fontWeight="bold" fill="currentColor" fontFamily="sans-serif">FSM</text>
      {/* Tentacles */}
      <path d="M45 85 Q30 95 25 110" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M70 98 Q65 108 60 115" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M130 98 Q135 108 140 115" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M155 85 Q170 95 175 110" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}
