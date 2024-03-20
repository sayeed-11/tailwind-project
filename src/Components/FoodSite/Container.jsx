import React from 'react'
const img = 'https://i.pinimg.com/564x/5c/d5/c0/5cd5c067c98acc946410b1588eb2f836.jpg'

const Container = () => {

  return (
    <div className='flex px-5 md:px-10 flex-col dark:bg-neutral-950' id='home'>
      <div className="content flex w-full relative lg:flex-row flex-col justify-between z-10">
        {<MainPageImage />}
        <div className="about px-3 py-10 md:py-16 lg:w-3/4 lg:px-40 md:px-10 flex flex-col gap-y-10">
          {<MainPageContent />}
          {<SocialIconsAndButtons />}
          {<HealthyTitle />}
        </div>
      </div>
    </div>
  )
}

export default Container

const SocialIconsAndButtons = () => {
  return (
    <div className='buttons flex justify-between'>
      <div className="social flex gap-x-3">
        <i className="fa-brands fa-facebook-f bg-green-500 px-3 py-2 active:bg-white active:text-green-500  text-white" />
        <i className="fa-brands fa-instagram bg-green-500 px-3 py-2  text-white active:bg-white active:text-green-500" />
        <i className="fa-brands fa-youtube bg-green-500 px-3 py-2 text-white active:bg-white active:text-green-500" />
      </div>
      <div className="slide-buttons flex gap-x-5">
        <i className="fa-solid fa-chevron-left bg-slate-400 px-3 py-2 text-white active:bg-green-500" />
        <i className="fa-solid fa-chevron-right bg-slate-400 px-3 py-2 text-white active:bg-green-500" />
      </div>
    </div>
  )
}

const MainPageContent = () => {
  return (
    <div>
      <div className='main-title flex flex-col gap-y-2'>
        <h1 className='text-4xl md:text-6xl font-extrabold text-green-500'>EAT HEALTHY</h1>
        <h1 className=' text-4xl md:text-6xl font-extrabold text-green-500'>STAY HEALTHY</h1>
      </div>
      <p className=' text-sm dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae quibusdam error debitis accusantium amet deserunt tenetur tempore obcaecati qui. Cumque porro quaerat impedit aliquid nemo sed unde numquam placeat dignissimos, consectetur delectus quidem doloremque sunt excepturi distinctio magnam dolorum dolore architecto. Quae atque odit laborum veritatis similique rem est.</p>
    </div>
  )
}

const MainPageImage = () => {
  return (
    <div className="imageBox  lg:w-1/3 pt-20 h-auto bg-black dark:bg-white p-2 flex flex-col max-h-[600px]">
      <h1 className='text-white text-center text-3xl uppercase pb-10 font-[900] dark:text-black'>Yummy <span className='text-green-500'>&</span> Healthy</h1>
      <img className='md:w-full w-full h-96 object-cover aspect-square' src={img} alt="" />
    </div>
  )
}

const HealthyTitle = () => {
  return (
    <div className=" opacity-[.5] flex justify-center rotate-0">
      <h1 className='text-[10vh] md:text-[10vw] font-[1000] text-white text-center dark:text-neutral-500'>Healthy</h1>
    </div>
  )
}