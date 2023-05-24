"use client"

import Image from "next/image"

const Logo = () => {
  return(
    <Image
      src="/logo/logo.svg"
      width={75}
      height={75}
      alt="Picture of the author"
    />
  )
}

export default Logo
