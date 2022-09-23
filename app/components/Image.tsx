import { useCallback, useEffect, useState } from 'react'

export default function Image({ src, alt, skeleton }: ImageProps) {
  const [source, setSource] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  async function fetchImage(image: string) {
    return fetch(image)
      .then((res) => res.blob())
      .then((data) => URL.createObjectURL(data))
  }

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchImage(src)

      setSource(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }, [src])

  useEffect(() => {
    fetchData()
  }, [fetchData, src])

  if (isLoading && skeleton) {
    return skeleton
  }

  return <img className='rounded-md' src={source} alt={alt} />
}

interface ImageProps {
  src: string
  alt: string
  skeleton?: JSX.Element
}
