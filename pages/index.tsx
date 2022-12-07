import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components/NavBar/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <Image src='/images/html5_logo.png' alt='placeholder' width={200} height={200}></Image>
      <div className='mx-[128px]'>
        <div className='h-auto w-auto text-center'>
          <h1 className='italic'>&quot;life without lemons&quot;</h1>
          <h1>Software Developer</h1>
          <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h1>
        </div>
      </div>

      <div className='h-[150px] w-auto' />

      <h1 className='m-10 text-center'>Technologies</h1>
      <div className='w-auto mx-[128px] grid grid-flow-col auto-cols-max justify-center space-x-20'>
        <Image className='grayscale' src='/images/unity_logo.png' alt='unity' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/react_logo.png' alt='react' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/nodejs_logo.png' alt='unity' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/net_logo.png' alt='net' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/nextjs_logo.png' alt='net' width={200} height={200}></Image>
      </div>

      <div className='h-[150px] w-auto' />

      <h1 className='m-10 text-center'>Programming Languages</h1>
      <div className='w-auto mx-[128px] grid grid-flow-col auto-cols-max justify-center space-x-20'>
        <Image className='grayscale' src='/images/html5_logo.png' alt='unity' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/css_logo.png' alt='net' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/js_logo.png' alt='net' width={200} height={200}></Image>
        <Image className='grayscale' src='/images/java_logo.png' alt='net' width={200} height={200}></Image>
      </div>

      <div className='h-[150px] w-auto' />

      <div className='mx-[128px]'>
        <div className='text-center'>
          <h1>Works</h1>
        </div>
      </div>
    </div>
  )
}
