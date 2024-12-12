import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <pre className='flex h-full flex-col items-center justify-center space-y-2.5 whitespace-pre-wrap md:space-y-5'>
      <Spline
        scene="https://prod.spline.design/xukUcWP4aSSyBDDF/scene.splinecode" 
      />
    </pre>
  )
}

// const ascii1 = ` _     _  ___   _______  _______  _______  ___   _  _______  _______  __    _  _______
// | | _ | ||   | |       ||       ||   _   ||   | | ||       ||       ||  |  | ||       |
// | || || ||   | |  _____||       ||  |_|  ||   |_| ||  _____||   _   ||   |_| ||   _   |
// |       ||   | | |_____ |       ||       ||      _|| |_____ |  | |  ||       ||  | |  |
// |       ||   | |_____  ||      _||       ||     |_ |_____  ||  |_|  ||  _    ||  |_|  |
// |   _   ||   |  _____| ||     |_ |   _   ||    _  | _____| ||       || | |   ||       |
// |__| |__||___| |_______||_______||__| |__||___| |_||_______||_______||_|  |__||_______|
// `
