import { ArrowRight } from 'lucide-react';
import { SparklesCore } from "@/components/ui/sparkles";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalTrigger,
  } from "@/components/ui/animated-modal";
  import React, { useEffect, useRef } from 'react';
import { Check, Users, Sparkles, MessageCircle, Shield, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingNav from '@/components/ui/floatingNav';
import WebsitePromoCard from '@/components/ui/promoCard';
import Footer from '@/components/ui/footer';


const AboutPage: React.FC = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
          });
        },
        { threshold: 0.1 }
      );
  
      sectionsRef.current.forEach((section) => {
        if (section) observer.observe(section);
      });
  
      return () => {
        sectionsRef.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    }, []);
  
    const addToRefs = (el: HTMLDivElement | null, index: number) => {
      if (el && !sectionsRef.current.includes(el)) {
        sectionsRef.current[index] = el;
      }
    };
  


    return (
        <section className="relative overflow-x-hidden">
            <FloatingNav/>
       <div  className="framer-1bzqgr6 -z-10" data-framer-name="Background"><div className="framer-19xj8v4" data-framer-appear-id="19xj8v4" data-framer-name="Main Background" style={{ opacity: 1, willChange: 'transform', transform: 'none' }}>

       <div className="">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.7}
          particleDensity={200}
          className="w-full h-[22vh] "
          particleColor="#FFFFFF"
        />
       
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.7}
          particleDensity={200}
          className="w-[20vw] h-[50vh] absolute top-0 left-0 rounded-br-4xl"
          particleColor="#FFFFFF"
        />
    
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={0.7}
          particleDensity={200}
          className="w-[20vw] h-[50vh] absolute top-0 right-0  rounded-bl-4xl"
          particleColor="#FFFFFF"
        />
         {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
        </div>
        <div data-framer-background-image-wrapper="true" className='' style={{ position: 'absolute', borderRadius: 'inherit', inset: 0, }}>
            
            <img decoding="async" sizes="1440px"  srcSet="https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg?scale-down-to=512 512w,https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg?scale-down-to=1024 1024w,https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg 1440w" src="https://framerusercontent.com/images/xdaPXOEtPIASFiIeYk976HyJA.svg" alt=""  style={{
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    objectPosition: 'center center',
    objectFit: 'contain',
  }}/></div></div><div className="framer-1kerl7k" data-framer-name="Light" style={{
    willChange: 'transform',
    opacity: 1,
    transform: 'none',
  }}><div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}><img decoding="async" sizes="664px"  srcSet="https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg?scale-down-to=512 512w,https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg 804w" src="https://framerusercontent.com/images/NTKgB6h2Q6llqcAO5km5305uDk0.svg" alt="" style={{
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    objectPosition: 'center center',
    objectFit: 'cover',
  }}/></div><div className="framer-m4zssk-container"><div style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: 'translateZ(0px)',
    borderRadius: '0px',
    position: 'relative',
  }}><div id="RightTop"><canvas data-generated="false" style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
  }}width="344" height="326"></canvas></div></div></div></div><div className="framer-1myh9u8" data-framer-name="Light" style={{
    willChange: 'transform',
    opacity: 1,
    transform: 'none',
  }}><div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}><img decoding="async" sizes="664px"  srcSet="https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg?scale-down-to=512 512w,https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg 853w" src="https://framerusercontent.com/images/UKLIsmbXPgsNWAAoMY12jQuP2ZI.svg" alt="" style={{
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    objectPosition: 'center center',
    objectFit: 'cover',
  }}/></div><div className="framer-lv8r9e-container"><div style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: 'translateZ(0px)',
    borderRadius: '0px',
    position: 'relative',
  }}><div id="lefttop"><canvas data-generated="false" style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
  }}width="344" height="326"></canvas></div></div></div></div>
  <div className="framer-73dn7q-container" style={{
    willChange: 'transform',
    opacity: 1,
    transform: 'none',
  }}><div style={{
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transform: 'translateZ(0px)',
    borderRadius: '0px',
    position: 'relative',
  }}><div id="top"><canvas data-generated="false" style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
  }}width="810" height="223"></canvas></div></div></div>
  </div>
  <main className=" overflow-hidden z-[999]">
        {/* Earth Graphic & Subtitle */}
        <div className="text-center flex z-50 flex-col justify-center items-center mt-60 mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent rounded-full blur-3xl opacity-20 transform -translate-y-1/4 scale-150"></div>
          
          <div className="bg-[#0b0f1cda] mx-6 shadow-2xl border text-white gap-2 py-3 px-6 rounded-full inline-flex items-center space-x-2 mb-4 relative">
            <span className='font-semibold text-md'>We Design websites that matter, user's can't resist</span>
            <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </div>
          
          <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mt-8 mb-6 leading-tight tracking-tight">
            Design That Powers Real<br />Business Growth
          </span>
          
          <span className="text-gray-300 text-lg max-w-md md:text-xl md:max-w-3xl mx-auto mb-8">
            Elevating brands through innovative and engaging web solutions.
          </span>
          
          <div className="flex flex-col items-center space-y-4">
            <Link to="/contact" className="bg-blue-600 border hover:bg-blue-700 text-white rounded-full px-6 py-2 h-auto ">
                
             <span className='text-lg'>Give it a try </span> 
            
            </Link>
            
            <span className="absolute inset-x-0 w-1/2 mx-auto bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </div>
          <div className="md:mt-16 mt-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 px-4">
            {/* Project 1 */}

            <Modal>
        <ModalTrigger className="p-0">
        <div className="bg-gradient-to-b from-[#0a0e1f] to-[#0a0e1f] rounded-3xl overflow-hidden p-2">

<div className="bg-white rounded-2xl overflow-hidden">
  <img 
    src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744296280/aas/v600atlwatkxtpvhrbuw.png" 
    alt="Wanderly Project" 
    className="w-full h-60 object-cover"
  />
</div>
{/* <span className="text-gray-400 text-sm mt-2 ml-2">Site Design - Wanderly</span> */}
</div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className='h-full w-full p-0'>
          <iframe 
                src="https://www.influwebhub.com/" 
                className="w-full h-full p-0 rounded-lg border"
                style={{
                  minHeight: 'calc(100vh - 140px)', // Adjust height accounting for header/footer
                  height: '100%'
                }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
          </ModalContent>
          
        </ModalBody>
      </Modal>

      <Modal>
        <ModalTrigger className="p-0">
        <div className="bg-gradient-to-b from-[#0a0e1f] to-[#0a0e1f] rounded-3xl overflow-hidden p-2">
              <div className="bg-[#111] rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744296280/aas/pnzguesojzxdszdme24x.png" 
                  alt="Waitlista App" 
                  className="w-full h-60 object-cover"
                />
              </div>
              {/* <span className="text-gray-400 text-sm mt-2 ml-2">App Design- Waitlista</span> */}
            </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className='h-full w-full p-0'>
          <iframe 
                src="https://exporteese.com/" 
                className="w-full h-full p-0 rounded-lg border"
                style={{
                  minHeight: 'calc(100vh - 140px)', // Adjust height accounting for header/footer
                  height: '100%'
                }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
          </ModalContent>
          
        </ModalBody>
      </Modal>
        

      <Modal>
        <ModalTrigger className="p-0">
        <div className="bg-gradient-to-b from-[#0a0e1f] to-[#0a0e1f] rounded-3xl overflow-hidden p-2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744305850/aas/yv1ooxjgxc3zmxskpmnn.jpg" 
                  alt="Regulate Website" 
                  className="w-full h-60 object-cover"
                />
              </div>
              {/* <span className="text-gray-400 text-sm mt-2 ml-2">Website Design - Regulate</span> */}
            </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className='h-full w-full p-0'>
          <iframe 
                src="https://exporteese.com/" 
                className="w-full h-full p-0 rounded-lg border"
                style={{
                  minHeight: 'calc(100vh - 140px)', // Adjust height accounting for header/footer
                  height: '100%'
                }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
          </ModalContent>
          
        </ModalBody>
      </Modal>
            

      <Modal>
        <ModalTrigger className="p-0">
        <div className="bg-gradient-to-b from-[#0a0e1f] to-[#0a0e1f] rounded-3xl overflow-hidden p-2">
              <div className="bg-white rounded-2xl overflow-hidden">
                <img 
                  src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1739098246/Kanishkk/m8kw2ovcqnm3u5a90ecq.png" 
                  alt="Regulate Website" 
                  className="w-full h-60 object-cover"
                />
              </div>
              {/* <span className="text-gray-400 text-sm mt-2 ml-2">Website Design - Regulate</span> */}
            </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent className='h-full w-full p-0'>
          <iframe 
                src="http://realty.sprintxsol.com/" 
                className="w-full h-full p-0 rounded-lg border"
                style={{
                  minHeight: 'calc(100vh - 140px)', // Adjust height accounting for header/footer
                  height: '100%'
                }}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
          </ModalContent>
          
        </ModalBody>
      </Modal>
        
          </div>
        </div>
        </div>
       
        <div className="text-center mb-8">
          
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
            {['Velocity', 'Enigma', 'Lumina', 'Vortex', 'Synergy', 'Spectrum', 'Velocity', 'Enigma'].map((client, index) => (
              <div key={index} className="text-gray-400 text-lg font-medium">
                {client}
              </div>
            ))}
          </div>
        </div>
        
        <main className="flex-grow px-6 lg:px-16 py-16">
        {/* Hero Title */}
        <div 
          ref={(el) => addToRefs(el, 0)} 
          className="text-center mt-4 mb-16 flex flex-col justify-center items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <div className="bg-[#0a0e1f] text-white py-3 px-6 rounded-full inline-flex items-center space-x-2 mb-4">
            <span>Learn more about who we are</span>
            <span className="bg-blue-600 rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} />
            </span>
          </div>
          
          <span className="text-4xl md:text-4xl lg:text-6xl font-bold text-white mt-8 mb-6 leading-tight tracking-tight">
            Our Story, Our Vision<br />Your Success
          </span>
          
          <span className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Guided by principles of excellence, we build digital experiences that elevate your brand.
          </span>
        </div>
        
        {/* Team Values Section */}
        <div 
          ref={(el) => addToRefs(el, 1)} 
          className="bg-[#080c1a] rounded-3xl p-10 mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 flex flex-col">
                <Users className="text-blue-500 mb-4 h-12 w-12" />
                <span className="text-white text-3xl font-bold mb-4">Our Team Values</span>
                <span className="text-gray-300 text-[16px]">
                  Adaptable, Absolute, and Sincere, our team embodies the principles of the five Noble Pandavas, providing essential support to navigate the complexities of your business.
                </span>
              </div>
              
              <ul className="flex flex-col gap-4">
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-4 w-4 text-blue-500" />
                  </span>
                  <div className="flex space-y-2 flex-col">
                    <span className="text-white font-medium text-[16px]">Righteousness</span>
                    <span className="text-gray-400 text-sm text-[16px]">We operate with integrity and transparency</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-4 w-4 text-blue-500" />
                  </span>
                  <div className="flex space-y-2 flex-col">
                    <span className="text-white font-medium text-[16px] ">Purpose</span>
                    <span className="text-gray-400 text-sm text-[16px]">We create with intention and clear goals</span>
                  </div>
                </li>
                <li className="flex  items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-4 w-4 text-blue-500" />
                  </span>
                  <div className="flex space-y-2 flex-col">
                    <span className="text-white space-y-2 font-medium text-[16px]">Wisdom</span>
                    <span className="text-gray-400 text-sm">We apply knowledge and experience to solve problems</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="rounded-3xl overflow-hidden h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div 
          ref={(el) => addToRefs(el, 2)} 
          className="mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200"
        >
          <div className="text-center flex flex-col mb-12">
            <Sparkles className="text-blue-500 mb-4 h-12 w-12 mx-auto" />
            <span className="text-white text-3xl font-bold mb-4">Your Vision, Our Mission</span>
            <span className="text-gray-300 text-[16px] max-w-3xl mx-auto">
              Every business has a story. We're here to help you tell yours in a way that's unforgettable. 
              We dig deep to understand what makes you tick, so your website feels 100% you.
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#0a0e1f] flex flex-col rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <MessageCircle className="text-blue-500 mb-4 h-10 w-10" />
              <span className="text-white text-xl font-bold mb-2">No Cookie-Cutter Sites</span>
              <span className="text-gray-400 text-[14px]">
                We don't believe in templates or shortcuts. Every project is a fresh creation, designed specifically for your goals.
              </span>
            </div>
            
            <div className="bg-[#0a0e1f] flex flex-col rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <Shield className="text-blue-500 mb-4 h-10 w-10" />
              <span className="text-white text-xl font-bold mb-2">User-Friendly, Every Time</span>
              <span className="text-gray-400 text-[14px]">
                We make sure your website is easy to navigate, fast to load, and smooth to use. We focus on simplicity and clarity.
              </span>
            </div>
            
            <div className="bg-[#0a0e1f] flex flex-col rounded-3xl p-8 transform hover:scale-105 transition-transform duration-300">
              <Activity className="text-blue-500 mb-4 h-10 w-10" />
              <span className="text-white text-xl font-bold mb-2">Built for the Future</span>
              <span className="text-gray-400 text-[14px]">
                By using cutting-edge tools and best practices, we make sure your website stays fast, secure, and relevant for years.
              </span>
            </div>
          </div>
        </div>
        
        {/* What We Do Section */}
        <div 
          ref={(el) => addToRefs(el, 3)} 
          className="mb-24 opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-300"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Our Services" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <span className="text-white pb-3 text-4xl font-bold ">What We Do</span>
              
              <ul className=" flex  gap-4 flex-col text-start">
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </span>
                  <div className="flex gap-2 items-start flex-col">
                    <span className="text-white font-medium text-lg">Custom Websites</span>
                    <span className="text-gray-400 text-[16px]">Not just another website—this is your digital home. We build from scratch, so your site is as unique as your brand.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </span>
                  <div className="flex gap-2 items-start flex-col">
                    <span className="text-white font-medium text-lg">E-Commerce Magic</span>
                    <span className="text-gray-400 text-[16px]">Want to sell online? We'll create an online store that's easy to manage, secure, and designed to convert visitors.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </span>
                  <div className="flex gap-2 items-start flex-col">
                    <span className="text-white font-medium text-lg">Mobile-Ready Designs</span>
                    <span className="text-gray-400 text-[16px]">Your website will look and work beautifully on any device, from desktops to smartphones.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600/20 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-blue-500" />
                  </span>
                  <div className="flex gap-2 items-start flex-col">
                    <span className="text-white font-medium text-lg">Ongoing Support</span>
                    <span className="text-gray-400 text-[16px]">Once your site is live, we don't just walk away. We offer continuous support to keep everything running smoothly.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
       
      </main>
      
       
      </main>

      
        
        <div className="pb-20 px-6">
        <WebsitePromoCard/>
        </div>
<Footer/>
  </section>
    );
};

export default AboutPage;