import { OrbitingCirclesDemo } from '@/components/ui/orbit';
import React from 'react';
import Hero from "../hero/page"
import Services from "@/components/ui/services"
import Opportunity from '@/components/ui/opportunity';
import ChooseUs from '@/components/ui/chooseus';
import Clients from "@/components/ui/clients"
import TeamSection from '@/components/ui/teamSection';
import AboutUs from "@/components/ui/aboutUs";
import RecentProjects from '@/components/ui/recentProjects';
import FloatingNav from "@/components/ui/floatingNav"
// import WebsitePromoCard from '@/components/ui/promoCard';
// import Spline from '@splinetool/react-spline';
import Footer from '@/components/ui/footer';
import Counter from '@/components/ui/counter';
// import BentoGrid from '@/components/ui/bentoGrid';

const HomePage: React.FC = () => {
  return (
    <div className=''>
      <FloatingNav />
      <Hero />

      <div className="  md:py-20 md:pt-16 pt-32 md:px-44" data-v-45cfd109="" style={{ marginTop: '0.36px' }}>
        <span className="absolute inset-x-0 w-1/2 mx-auto md:-mt-20 -mt-8  bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        <div className="first-section__blur-left " data-v-45cfd109="">


          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 577 501" className="nuxt-icon nuxt-icon--fill" data-v-45cfd109=""><g filter="url(#i-1284922241__a)"><path fill="#6464FA" fill-opacity=".42" d="M477 250.499 103 220 0 100.946v299.105L103 280z"></path></g><defs><filter id="i-1284922241__a" width="677" height="499.104" x="-100" y=".946" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_91_38890" stdDeviation="50"></feGaussianBlur></filter></defs></svg></div><div className="first-section__blur-right" data-v-45cfd109=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 577 501" className="nuxt-icon nuxt-icon--fill" data-v-45cfd109=""><g filter="url(#i-149859504__a)"><path fill="#6464FA" fill-opacity=".42" d="m100 250.498 374 30.498L577 400.05V100.945L474 220.996z"></path></g><defs><filter id="i-149859504__a" width="677" height="499.104" x="0" y=".945" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur result="effect1_foregroundBlur_91_38891" stdDeviation="50"></feGaussianBlur></filter></defs></svg></div><div className="first-section__title" data-v-45cfd109=""><p data-v-45cfd109=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>AAS TECH – all the power </span></span><br data-v-45cfd109="" /><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>of your success is in the hands of your </span></span><br data-v-45cfd109="" /><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>employees</span></span></p><p data-v-45cfd109=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>One of the Best Growing IT StarUp </span></span><br data-v-45cfd109="" /><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>in India</span></span></p></div>
          <div className="first-section__chat-wrapper " data-v-45cfd109=""><img className="first-section__left-img" src="https://alpinagpt.ai/image/first-section/left.svg" style={{ height: '422.4px', width: 'auto', opacity: 1 }} data-v-45cfd109="" /><div style={{
            width: '422.4px',
            height: '419.072px',
            flexShrink: 0,
          }} data-v-45cfd109="">

          </div><img className="first-section__right-img" src="https://alpinagpt.ai/image/first-section/right.svg" style={{ height: '419.072px', width: 'auto', opacity: 1 }} data-v-45cfd109="" /></div>

        <div className="first-section__content" style={{
          transform: 'scale(1.28)',
          transformOrigin: 'center top',
          top: '200.5px',
        }} data-v-45cfd109=""><div id="js-first-section-chat " className="first-section-chat " data-v-45cfd109="" data-v-2d8b1b17="">
            <video autoPlay loop muted playsInline className="first-section-chat__bg-video" data-v-2d8b1b17="" src="https://minio.webregul.ru/alpina-ai-lending/assets/videos/first-block-abstract-bg.mp4" ></video>

            {/* <Spline
              className=" absolute bg-transparent"
              scene="https://prod.spline.design/aGqtjlmbcDkJOic6/scene.splinecode"
            /> */}

            <div className="first-section-chat__header p-4 " data-v-2d8b1b17="">
              <div className="back-btn" data-v-2d8b1b17=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" className="nuxt-icon nuxt-icon--fill" data-v-2d8b1b17=""><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.083.833.917 5l4.166 4.166"></path></svg></div><div className="title" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>AAS TECH TEAM</span></span></div><div className="alpina bg-black p-1" data-v-2d8b1b17=""><img className='object-contain' src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744478313/aas/ctesbeldgb2whk3laln8.png" alt="" /></div></div>
              
              <div className="first-section-chat__content" data-v-2d8b1b17=""><div className="chat-item_person chat-item" data-v-2d8b1b17=""><p className="chat-item__text" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Hello 👋🏻 TEAM !How's the work going ?</span></span></p></div><div className="chat-item_bot chat-item" data-v-2d8b1b17=""><p className="chat-item__text" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>High , Sir</span></span></p></div><div className="chat-item_bot chat-item" data-v-2d8b1b17=""><p className="chat-item__text" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Select direction:</span></span></p><div className="chat-item__buttons" data-v-2d8b1b17=""><div className="chat-item-button" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>HR</span></span></div><div className="chat-item-button" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Marketing</span></span></div><div className="chat-item-button" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Development and IT</span></span></div><div className="chat-item-button" data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Tech</span></span></div></div></div></div>
              
              <div className="first-section-chat__input mx-2" data-v-2d8b1b17=""><p data-v-2d8b1b17=""><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Write...</span></span></p><div className="input-send-button" data-v-2d8b1b17=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" className="nuxt-icon nuxt-icon--fill" data-v-2d8b1b17=""><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M.917.833 5.083 5 .917 9.166"></path></svg></div></div>
              
              <div className="first-section-chat__liner-borders p-2" data-v-2d8b1b17=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 63" className="nuxt-icon nuxt-icon--fill liner-border liner-border-1" data-v-2d8b1b17=""><g filter="url(#i-203089803__a)"><path stroke="url(#i-203089803__b)" d="M62 0v38c0 13.255-10.745 24-24 24H0"></path></g><defs>
                
                <linearGradient id="i-203089803__b" x1="50.994" x2="3.023" y1="62.891" y2="29.867" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#6464FA"></stop><stop offset=".356" stop-color="#4141A2" stop-opacity=".648"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><filter id="i-203089803__a" width="70.5" height="70.5" x="-4" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_91_38977"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_91_38977" result="shape"></feBlend></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 63" className="nuxt-icon nuxt-icon--fill liner-border liner-border-2" data-v-2d8b1b17=""><g filter="url(#i-203089803__a)"><path stroke="url(#i-203089803__b)" d="M62 0v38c0 13.255-10.745 24-24 24H0"></path></g><defs><linearGradient id="i-203089803__b" x1="50.994" x2="3.023" y1="62.891" y2="29.867" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#6464FA"></stop><stop offset=".356" stop-color="#4141A2" stop-opacity=".648"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><filter id="i-203089803__a" width="70.5" height="70.5" x="-4" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_91_38977"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_91_38977" result="shape"></feBlend></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 63" className="nuxt-icon nuxt-icon--fill liner-border liner-border-3" data-v-2d8b1b17=""><g filter="url(#i-203089803__a)"><path stroke="url(#i-203089803__b)" d="M62 0v38c0 13.255-10.745 24-24 24H0"></path></g><defs><linearGradient id="i-203089803__b" x1="50.994" x2="3.023" y1="62.891" y2="29.867" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#6464FA"></stop><stop offset=".356" stop-color="#4141A2" stop-opacity=".648"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><filter id="i-203089803__a" width="70.5" height="70.5" x="-4" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_91_38977"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_91_38977" result="shape"></feBlend></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 63 63" className="nuxt-icon nuxt-icon--fill liner-border liner-border-4" data-v-2d8b1b17=""><g filter="url(#i-203089803__a)"><path stroke="url(#i-203089803__b)" d="M62 0v38c0 13.255-10.745 24-24 24H0"></path></g><defs><linearGradient id="i-203089803__b" x1="50.994" x2="3.023" y1="62.891" y2="29.867" gradientUnits="userSpaceOnUse"><stop offset=".006" stop-color="#6464FA"></stop><stop offset=".356" stop-color="#4141A2" stop-opacity=".648"></stop><stop offset="1" stop-opacity="0"></stop></linearGradient><filter id="i-203089803__a" width="70.5" height="70.5" x="-4" y="-4" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_91_38977"></feComposite><feBlend in="SourceGraphic" in2="effect1_backgroundBlur_91_38977" result="shape"></feBlend></filter></defs></svg></div></div></div><div className="first-section__scroll-text" data-v-45cfd109="" style={{height: '2091.52px'}}>
                  <div className="autoscaling-content" data-v-45cfd109="" style={{transformOrigin: 'center top',
              transform: 'scale(1.28)'}}><div className="text text-1" data-v-45cfd109=""><svg width="411" height="1373" viewBox="0 0 411 1373" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-45cfd109="" data-v-2ed7b5cd=""><g opacity="0.9" filter="url(#filter0_f_91_37838)" data-v-2ed7b5cd=""><ellipse cx="323.794" cy="368.344" rx="323.794" ry="368.344" transform="matrix(0.818935 -0.573886 0.395385 0.918516 -603 533.642)" fill="#7164FA" fill-opacity="0.42" data-v-2ed7b5cd=""></ellipse></g><defs data-v-2ed7b5cd=""><filter id="filter0_f_91_37838" x="-794.781" y="0.078125" width="1205.17" height="1372.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-2ed7b5cd=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-2ed7b5cd=""></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-2ed7b5cd=""></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_91_37838" data-v-2ed7b5cd=""></feGaussianBlur></filter></defs></svg>
              
              <span style={{ verticalAlign: 'inherit' }}>
                
                <span style={{ verticalAlign: 'inherit' }}> Here you are working with the best IT Team who gonna make you feel satisfied with the project </span></span></div>
                <div className="text text-2" data-v-45cfd109=""><svg width="411" height="1373" viewBox="0 0 411 1373" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-45cfd109="" data-v-2ed7b5cd=""><g opacity="0.9" filter="url(#filter0_f_91_37838)" data-v-2ed7b5cd=""><ellipse cx="323.794" cy="368.344" rx="323.794" ry="368.344" transform="matrix(0.818935 -0.573886 0.395385 0.918516 -603 533.642)" fill="#7164FA" fill-opacity="0.42" data-v-2ed7b5cd=""></ellipse></g><defs data-v-2ed7b5cd=""><filter id="filter0_f_91_37838" x="-794.781" y="0.078125" width="1205.17" height="1372.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-2ed7b5cd=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-2ed7b5cd=""></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-2ed7b5cd=""></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_91_37838" data-v-2ed7b5cd=""></feGaussianBlur></filter></defs></svg><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>We always make sure that the projec is Scalable with cutting-edge Technologies</span></span></div><div className="text text-3" data-v-45cfd109=""><svg width="411" height="1373" viewBox="0 0 411 1373" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-45cfd109="" data-v-2ed7b5cd=""><g opacity="0.9" filter="url(#filter0_f_91_37838)" data-v-2ed7b5cd=""><ellipse cx="323.794" cy="368.344" rx="323.794" ry="368.344" transform="matrix(0.818935 -0.573886 0.395385 0.918516 -603 533.642)" fill="#7164FA" fill-opacity="0.42" data-v-2ed7b5cd=""></ellipse></g><defs data-v-2ed7b5cd=""><filter id="filter0_f_91_37838" x="-794.781" y="0.078125" width="1205.17" height="1372.15" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-2ed7b5cd=""><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-2ed7b5cd=""></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" data-v-2ed7b5cd=""></feBlend><feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_91_37838" data-v-2ed7b5cd=""></feGaussianBlur></filter></defs></svg><span style={{ verticalAlign: 'inherit' }}><span style={{ verticalAlign: 'inherit' }}>Track your project's on going Updates</span></span></div></div></div></div>
            
      <RecentProjects />
      <AboutUs />
       <Services />
      <ChooseUs />
      <Opportunity />
      <Clients />
      <OrbitingCirclesDemo />
      <Counter/>

      <TeamSection /> 
      <Footer/>
          

    </div>



  );
};

export default HomePage;
