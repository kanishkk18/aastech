import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Footer: React.FC = () => {
 
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"30min"});
		cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
    return (
        <footer className="framer-moWCJ framer-ySbb7 framer-5D0UI framer-hg3ZI framer-fz9czx framer-v-fz9czx" data-framer-name="desktop" style={{
    background: 'radial-gradient(83% 50% at 44% 111.5%, var(--token-c6d9a740-f8af-44c7-ac7a-31b27a79b7f2, rgb(0, 14, 71)) 0%, var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)) 100%)',
    width: '100%',
    opacity: 1
  }}
><div className="framer-4bgrx0" data-framer-name="Container" style={{ opacity: 1 }}
><nav className="framer-vk5v9o" data-framer-name="footer navigation" style={{ opacity: 1 }}
><div className="framer-mcls7e-container" style={{ opacity: 1 }}
><a className="framer-5l3Na framer-1oo7z14 framer-v-1oo7z14 framer-199uss8 " data-framer-name="Full Logo" href="/" data-framer-page-link-current="true" style={{ width: '100%', opacity: 1 }}
><div className=" h-16 w-auto" data-framer-name="logo img" style={{ opacity: 1 }}
><div data-framer-background-image-wrapper="true" style={{ position: 'absolute', borderRadius: 'inherit', inset: 0 }}><img decoding="async" className='object-contain' src="https://res.cloudinary.com/dna3hwzre/image/upload/v1744478313/aas/ctesbeldgb2whk3laln8.png" alt="" style={{
    display: "block",
    width: "90%",
    height: "90%",
    borderRadius: "inherit",
    objectPosition: "center",
  }}/></div></div></a></div><div className="framer-a4y6th" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-1p56ccn" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="/">Home</a></p></div><div className="framer-19xfpq8" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-shj8qw" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="/">Blogs</a></p></div><div className="framer-pi0jkf" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-132nicw" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="/contact">Contact</a></p></div><div className="framer-qohob" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-kfnuu3" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="/about">About</a></p></div><div className="framer-1ajumts" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-1kbhxsm" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="/projects">Projects</a></p></div><div className="framer-1g5xmno" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-1235d6n" data-framer-component-type="RichTextContainer" style={{
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flexShrink: 0,
  transform: 'none',
  opacity: 1
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn"><a className="framer-text framer-styles-preset-1snln9b" data-styles-preset="CO_HimyHZ" href="mailto:sumitaastech@gmail.com" target="_blank" rel="noopener">sumitaastech@gmail.com</a></p></div><div className="framer-sl1ui" data-framer-name="seperation line" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-1m82w6-container" style={{ opacity: 1 }}
><div className="framer-HKDDn framer-ySbb7 framer-3n06yb framer-v-25ab1d framer-1tkix7f" data-border="true" data-framer-name="blue variation" data-reset="button" style={{
  backdropFilter: 'blur(2.5px)',
  backgroundColor: 'var(--token-c6d9a740-f8af-44c7-ac7a-31b27a79b7f2, rgb(0, 14, 71))',
  borderRadius: '10px',
  boxShadow: 'rgba(255, 255, 255, 0) 0px 0px 10px 1px inset, rgba(0, 85, 255, 0.12) 0px 0px 0px 1px',
  opacity: 1
}}><div className="framer-5jxss2" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{
  outline: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  flexShrink: 0,
  transform: "none",
  opacity: 1,
  
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn" data-cal-namespace="30min"
	  data-cal-link="sumit-aas-frrsr8/30min"
    
	  data-cal-config='{"layout":"month_view","theme":"dark"}'>Book a Demo</p></div></div></div></nav><div className="framer-19hmlm3" data-framer-name="socialMedia" style={{ opacity: 1 }}
><div className="framer-hsewgm-container" style={{ opacity: 1 }}
><a className="framer-Jg8g0 framer-ySbb7 framer-1yvzs4n framer-v-1yvzs4n framer-l1nerg" data-framer-name="primary" href="https://www.instagram.com/aas_technology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener" style={{ width: '100%', opacity: 1 }}
><div className="framer-ggwrl1" data-framer-name="border" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-i3vk2g" data-framer-name="social media" style={{ opacity: 1 }}
><div className="framer-123yah" data-framer-name="Instagram" data-framer-component-type="RichTextContainer" style={{
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 0,
    transform: 'none',
    opacity: 1,
   
  }}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn" >Instagram</p></div><div className="framer-1xpbij4-container" style={{ opacity: 1 }}
><div style={{ display: 'contents' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))" style={{
  userSelect: 'none',
  width: '100%',
  height: '100%',
  display: 'inline-block',
  fill: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  color: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  flexShrink: 0
}}><g color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path></g></svg></div></div></div></a></div><div className="framer-twoqbh-container" style={{ opacity: 1 }}
><a className="framer-Jg8g0 framer-ySbb7 framer-1yvzs4n framer-v-1yvzs4n framer-l1nerg" data-framer-name="primary" href="https://x.com/home" target="_blank" rel="noopener" style={{ width: '100%', opacity: 1 }}
><div className="framer-ggwrl1" data-framer-name="border" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-i3vk2g" data-framer-name="social media" style={{ opacity: 1 }}
><div className="framer-123yah" data-framer-name="Instagram" data-framer-component-type="RichTextContainer" style={{
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 0,
    transform: 'none',
    opacity: 1,
   
  }}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn">Twitter/ X</p></div><div className="framer-1xpbij4-container" style={{ opacity: 1 }}
><div style={{ display: 'contents' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))" style={{
  userSelect: 'none',
  width: '100%',
  height: '100%',
  display: 'inline-block',
  fill: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  color: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  flexShrink: 0
}}><g color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))" ><path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path></g></svg></div></div></div></a></div><div className="framer-1vml02k-container" style={{ opacity: 1 }}
><a className="framer-Jg8g0 framer-ySbb7 framer-1yvzs4n framer-v-1yvzs4n framer-l1nerg" data-framer-name="primary" href="https://www.facebook.com/" target="_blank" rel="noopener" style={{ width: '100%', opacity: 1 }}
><div className="framer-ggwrl1" data-framer-name="border" style={{ backgroundColor: 'var(--token-e8bc8706-b247-48f0-95ed-879074c7f908, rgb(18, 20, 38))', opacity: 1 }}></div><div className="framer-i3vk2g" data-framer-name="social media" style={{ opacity: 1 }}
><div className="framer-123yah" data-framer-name="Instagram" data-framer-component-type="RichTextContainer" style={{
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexShrink: 0,
    transform: 'none',
    opacity: 1,
   
  }}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn" >Facebook</p></div><div className="framer-1xpbij4-container" style={{ opacity: 1 }}
><div style={{ display: 'contents' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))" style={{
  userSelect: 'none',
  width: '100%',
  height: '100%',
  display: 'inline-block',
  fill: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  color: 'var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))',
  flexShrink: 0
}}><g color="var(--token-a63000f8-e4b4-4f13-b0d1-a9e8e0a6c495, rgba(230, 236, 255, 0.6))" ><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path></g></svg></div></div></div></a></div></div><div className="framer-rn6eyv" data-framer-name="bottom" style={{ opacity: 1 }}
><div className="framer-i3d9p4" data-framer-name="© 2023 — Copyright" data-framer-component-type="RichTextContainer" style={{
  outline: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  flexShrink: 0,
  opacity: 0.8,
  transform: "none",
  // Optional CSS variable
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn">© 2025 — Copyright</p></div><div className="framer-15eu1l2" data-framer-name="right text" style={{ opacity: 1 }}
><div className="framer-1hvbl1e" data-framer-name="built In" data-framer-component-type="RichTextContainer" style={{
  outline: "none",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  flexShrink: 0,
  transform: "none",
  opacity: 1,
  // Custom property – optional, won't be applied unless you use it in your CSS
  
}}><p className="framer-text framer-styles-preset-g3cq35" data-styles-preset="v4j2BbFgn">Built in <a className="framer-text framer-styles-preset-1x6n4g8" data-styles-preset="OyaCx2zTI" href="https://framer.link/framebase" target="_blank" rel="noopener">AAS Tech</a></p></div></div></div></div><div className="framer-1weaivz" data-framer-name="seperation line" style={{
  background: "radial-gradient(63.671876482476385% 63.671876482476385% at 50.000000948784894% 50.000000948784894%, var(--token-6da9d50d-e927-4dcf-93ed-bf3b8039528b, rgb(138, 165, 255)) 0%, var(--token-6d7bfc0f-867f-43f5-837b-f61a13bf9490, rgb(0, 0, 0)) 100%)",
  opacity: 0.14
}}></div></footer>
    );
};

export default Footer;