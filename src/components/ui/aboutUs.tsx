import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './button';

const HeroSection = () => {
  return (
    <section className="px-6 md:py-16 py-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center mx-auto ">
        <div className="rounded-3xl overflow-hidden">
          <img 
            src="https://i.pinimg.com/736x/f7/b5/ab/f7b5ab6f95d8b5467c8088fcf186998c.jpg" 
            alt="Team working together" 
            className="w-full h-auto object-cover  border-t border-r"
          />
        </div>
        
        <div className="space-y-4 flex justify-start flex-col">
          <span className="text-lg text-blue-400 border w-fit p-1 px-4 rounded-full font-semibold">About Us</span>
          <span className="text-4xl md:text-4xl max-w-lg font-bold text-white">Discover Who We Are and Our Mission</span>
          <span className="text-gray-400 max-w-md text-[16px] leading-relaxed">
            Discover who we are and our mission at Arise. We are a passionate team
            of creative professionals dedicated to crafting exceptional web design
            solutions. Our mission is to empower businesses with innovative websites
            that not only captivate but also drive results.
          </span>
          
          <div className="flex mx-auto md:mx-0 flex-wrap gap-4 pt-4">
            <Link to="/contact">
            <Button variant="default" className="bg-gradient-to-r from-[#3793FF] to-[#0017E4] text-white rounded-full flex items-center ">
              Contact Us <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/projects">
            <Button variant="outline" className=" rounded-full flex items-center">
              View Projects <ArrowUpRight  className="ml-2 h-5 w-5 " />
              </Button>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 grid-cols-1 md:mx-0  mx-auto gap-4 pt-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Ryan Matthews" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className='flex flex-col'>
                <span className="font-semibold text-white">Sumit Nautiyal</span>
                <span className="text-gray-400 text-sm">Co-Founder</span>
              </div>
              <div className="ml-2">
                <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img 
                  src="https://randomuser.me/api/portraits/men/44.jpg" 
                  alt="David Parker" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className='flex flex-col'>
                <span className="font-semibold pb-0.5 text-white">Ashwani Kaushik</span>
                <span className="text-gray-400 text-sm">Co-Founder</span>
              </div>
              <div className="ml-2">
                <div className="h-6 w-6 bg-black rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
//     <section className="framer-cq4k9t" data-framer-name="About Us" id="about"><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-nqbvl4" data-border="true" data-framer-name="Image"><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}><img decoding="async" loading="lazy" sizes="max((min(100vw * 0.9, 1260px) - 50px) / 2, 1px)" srcSet="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png?scale-down-to=512 512w,https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png?scale-down-to=2048 2048w,https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png 2260w" src="https://framerusercontent.com/images/fv5yPBmjikTk2Jc47v6BFoFyxg.png" alt="" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div></div><div className="framer-1tkdjbn" data-framer-name="Sub Container"><div className="framer-1v04ka" data-framer-name="Container"><div className="framer-htrbjd" data-framer-name="Sub Container"><div className="framer-1kpjvxe" data-border="true" data-framer-name="Text Container"><div className="framer-ttih8r" data-framer-name="Text" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}data-framer-component-type="RichTextContainer"><p className="framer-text framer-styles-preset-1v6dn59" data-styles-preset="lQdiPxxce" >About Us</p></div></div><div className="framer-sjm2q1" data-framer-name="Text Container"><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-1b9pmiy" data-framer-name="Heading" data-framer-component-type="RichTextContainer" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}><h2 className="framer-text framer-styles-preset-otma36" data-styles-preset="vISVgjJlX">Discover Who We Are and Our Mission</h2></div></div><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-mbi2hr" data-framer-name="Paragraph" data-framer-component-type="RichTextContainer" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}><p className="framer-text framer-styles-preset-1v6dn59" data-styles-preset="lQdiPxxce" >Discover who we are and our mission at Arise. We are a passionate team of creative professionals dedicated to crafting exceptional web design solutions. Our mission is to empower businesses with innovative websites that not only captivate but also drive results.</p></div></div></div></div><div className="framer-sd3jjj" data-framer-name="Buttons Container"><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-jcblov-container"><a className="framer-OJxVj framer-25to6 framer-zmcf0i framer-v-123zg68 framer-1w92iv6" data-framer-name="Rightside Icon" href="./contact" style={{
 
//   background: 'linear-gradient(rgb(76, 117, 255) 0%, rgb(26, 79, 255) 100%)',
//   borderRadius: '100px',
//   opacity: 1
// }}
// ><div className="framer-7q84pg" data-framer-name="Icon Container" style={{ opacity: 1 }}
// ><div className="framer-vkxnps" data-framer-name="Icon " style={{ opacity: 1 }}
// ><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}>
//     <img decoding="async" sizes="20px" src="https://framerusercontent.com/images/Ml0a0r9783FLVDGX8DM8quAXg.svg" alt="Arrow Icon" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div><div className="framer-plmgn8" data-framer-name="Icon " style={{ opacity: 1 }}
// ><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}>
//     <img decoding="async" sizes="20px" src="https://framerusercontent.com/images/Ml0a0r9783FLVDGX8DM8quAXg.svg" alt="Arrow Icon" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div></div><div className="framer-clsimu" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   flexShrink: 0,
  
//   transform: 'none',
//   opacity: 1
// }}
// ><p className="framer-text framer-styles-preset-1v6dn59" data-styles-preset="lQdiPxxce" >Contact Us</p></div></a></div></div><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-du48t3-container"><a className="framer-jVX3f framer-25to6 framer-1whni5o framer-v-1jm3eac framer-1ok3we4" data-border="true" data-framer-name="Right Icon Button" href="./#work" style={{
//   background: 'radial-gradient(100% 100% at 50% 100%, rgb(16, 22, 54) 14.3842%, rgb(12, 16, 39) 100%)',
//   borderRadius: '100px',
//   opacity: 1
// }}
// ><div className="framer-1osx41o" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   flexShrink: 0,
 
//   transform: 'none',
//   opacity: 1
// }}
// ><p className="framer-text framer-styles-preset-1v6dn59" data-styles-preset="lQdiPxxce" >View Projects</p></div><div className="framer-1jgm9fy" data-framer-name="Icon Container" style={{ opacity: 1 }}
// ><div className="framer-1k4lr75" data-framer-name="Icon" style={{ opacity: 1 }}
// ><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}><img decoding="async" sizes="20px" src="https://framerusercontent.com/images/dqTNTAopWAZyP4W4c7TuXeQhxA.svg" alt="" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div></div></a></div></div></div></div><div className="framer-7861gq" data-border="true" data-framer-name="Container"><div className="framer-1bn6kwl" data-framer-name="Sub Container"><div className="framer-hztp3c" data-framer-name="Image"><div style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0
// }}
//  data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy" src="https://framerusercontent.com/images/M3X2ktGKGEjzjKkOfnZGSbkZN4c.png" alt="Profile Image" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center',
//   objectFit: 'cover'
// }}
// /></div></div><div className="framer-1rht07y" data-framer-name="Text Container"><div className="framer-5a9xe8" data-framer-name="Name" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}data-framer-component-type="RichTextContainer"><h3 

//  className="framer-text">Ryan Matthews</h3></div><div className="framer-15hchyz" data-framer-name="Text" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}data-framer-component-type="RichTextContainer"><p 
//  className="framer-text">Co Founder</p></div></div><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-zucqnj-container"><a className="framer-PBk90 framer-y77xgb framer-v-y77xgb framer-12foel3" data-border="true" data-framer-name="Social Button" href="https://x.com/" target="_blank" rel="noopener" style={{
  
//   backgroundColor: 'var(--token-f7f2488e-33ec-4b05-ab27-e7cbbd10b0a5, rgb(0, 6, 51))',
//   borderRadius: '10px',
//   opacity: 1
// }}
// ><div className="framer-843afz" data-framer-name="Icon" style={{ opacity: 1 }}
// ><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}><img decoding="async" loading="lazy" sizes="22px" src="https://framerusercontent.com/images/plK5K6J3raIvTcKAy0d3jc1aX4.svg" alt="x.com" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div></a></div></div></div><div className="framer-1dr1ncr" data-framer-name="Line"></div><div className="framer-11q9xsp" data-framer-name="Sub Container"><div className="framer-fewkrj" data-framer-name="Image"><div style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0
// }}
//  data-framer-background-image-wrapper="true"><img decoding="async" loading="lazy" sizes="40px" srcSet="https://framerusercontent.com/images/gF9H8D7b4FTYz9lRLp75RsXJPo.png?scale-down-to=512 512w,https://framerusercontent.com/images/gF9H8D7b4FTYz9lRLp75RsXJPo.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/gF9H8D7b4FTYz9lRLp75RsXJPo.png 1060w" src="https://framerusercontent.com/images/gF9H8D7b4FTYz9lRLp75RsXJPo.png" alt="Profile Image" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center',
//   objectFit: 'cover'
// }}
// /></div></div><div className="framer-1lju39i" data-framer-name="Text Container"><div className="framer-1y8fj17" data-framer-name="Name" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}data-framer-component-type="RichTextContainer"><h3 style={{
  
// }}

//  className="framer-text">David Parker</h3></div><div className="framer-hci7q8" data-framer-name="Text" style={{
//   outline: 'none',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start',
//   flexShrink: 0,
//   transform: 'none'
// }}data-framer-component-type="RichTextContainer"><p style={{
  
// }}
//  className="framer-text">Co Founder</p></div></div><div className="ssr-variant hidden-1wemmbm hidden-1nnxuaf"><div className="framer-10z0e7n-container"><a className="framer-PBk90 framer-y77xgb framer-v-y77xgb framer-12foel3" data-border="true" data-framer-name="Social Button" href="https://x.com/" target="_blank" rel="noopener" style={{

//   backgroundColor: 'var(--token-f7f2488e-33ec-4b05-ab27-e7cbbd10b0a5, rgb(0, 6, 51))',
//   borderRadius: '10px',
//   opacity: 1
// }}
// ><div className="framer-843afz" data-framer-name="Icon" style={{ opacity: 1 }}
// ><div data-framer-background-image-wrapper="true" style={{
//   position: 'absolute',
//   borderRadius: 'inherit',
//   inset: '0px'
// }}><img decoding="async" loading="lazy" sizes="22px" src="https://framerusercontent.com/images/plK5K6J3raIvTcKAy0d3jc1aX4.svg" alt="x.com" style={{
//   display: 'block',
//   width: '100%',
//   height: '100%',
//   borderRadius: 'inherit',
//   objectPosition: 'center center',
//   objectFit: 'cover'
// }}/></div></div></a></div></div></div></div></div></section>
  );
};

export default HeroSection;
