"use client";

import { useTheme } from 'next-themes'
import Image, {ImageProps} from 'next/image'
import { useEffect, useState } from 'react'

interface ThemedImageProps extends Omit<ImageProps, 'src'> {
    lightSrc: string
    darkSrc: string
}

export default function ThemedImage({ lightSrc, darkSrc, alt, ...rest }: ThemedImageProps) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch by rendering only after mounting
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        // Optionally return a placeholder or nothing on the server
        return <div style={{ width: rest.width, height: rest.height }} />
    }

    const src = resolvedTheme === 'dark' ? darkSrc : lightSrc
    return <Image src={src} alt={alt} {...rest} />
}