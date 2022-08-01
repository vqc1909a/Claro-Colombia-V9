import { useState, useEffect } from 'react'

interface useScriptInterface {
    url: string,
    name: string
}

export default function useScript({url, name}: useScriptInterface) {
    const [lib, setLib] = useState<{[index: string]: any}>({})

    useEffect(() => {
        const script = document.createElement('script')

        script.src = url
        script.async = true
        script.onload = () => setLib({ [name]: window[name as any] })

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
        //eslint-disable-next-line
    }, [url])

    return lib
}
