import React from 'react'
import Navbar from './components/Navbar'
import PageOne_Section from './components/PageOne_Section'
import Slider from './components/Slider'
import Cards from './components/Cards'
import Header_ImageCard1 from './components/Header_ImageCard1'
import Img_card1 from './components/Img_card1'

const App = () => {
 const  CardData = [
    {
      heading: "Brand Strategy",
      matter: "We help businesses define their unique brand message and branding positioning.",
      footer: "About Strategy"
    },
    {
      heading: "Visual Identity",
      matter: "We create visual elements such as logos, packaging, and marketing materials for your brand.",
      footer: "About Identity"
    },
    {
      heading: "Digital Marketing",
      matter: "We help businesses to promote their brand online and create engaging digital experiences.",
      footer: "About Marketing"
    },
    {
      heading: "Brand Management",
      matter: "We help businesses to implement their brand across all touchpoints and ensure consistency.",
      footer: "About Management"
    }
  ]

  const Img_CardData =[
    {
      Image:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b981e34f347cacdc73b6_project-01-thumb.webp",
      footer:"Invision Studio",
      button_content:"Marketing"
    },
    {
      Image:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b96d86c0c985079d8d60_project-02-thumb.webp",
      footer:"Square Media",
      button_content:"Branding"
    },
    {
      Image:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b953a2c1a5706f63bbe1_project-03-thumb.webp",
      footer:"Vision Design",
      button_content:"Social Media"
    },
    {
      Image:"https://cdn.prod.website-files.com/63c3f1995d4c354236c944de/63c6b943f334e17d7007a0ea_project-04-thumb.webp",
      footer:"Design Bros",
      button_content:"Branding"
    }
  ]
  return (
    <div className='pl-15 pr-15'>
      <Navbar />
      <PageOne_Section />
      <Slider />

      <div className='flex items-center justify-between pb-[9vw]'>
        {
          CardData.map(function (card) {
            return <Cards heading={card.heading} matter={card.matter} footer={card.footer}/>
          })
        }
      </div>
      <Header_ImageCard1/>
   
      <div className='flex items-center justify-between gap-6 flex-wrap'>
        {
          Img_CardData.map((card)=>(
            <Img_card1 image= {card.Image} footer={card.footer} button_content={card.button_content}/>
        ))
        }
      </div>
    </div>
  )
}

export default App
