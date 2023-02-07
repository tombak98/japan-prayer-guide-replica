import React from "react";
import Head from "next/head";
import Navigation from "../components/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import { ListGroup, Stack } from "react-bootstrap";
import { getData } from "../services/dummyData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from "next/image";
import Bamboo from '../public/bamboo.jpeg'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { IconContext } from "react-icons/lib";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { MdEmail } from 'react-icons/md'
import { FaAmazon } from "react-icons/fa";

export const getStaticProps: GetStaticProps = async() => {
    let data = 'hi'
    return {
        props: {
            data
        }
    }
}

export default function BootstrapPage({data}:{data:any}) {

    const [lang, setLang] = React.useState(0)

    return (
        <>
        <Head>
            <title>More Testing Page</title>
        </Head>
        <Container
        className="cover-hero md-banner"
        fluid
        style={{
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navigation />
        <Stack gap={1} direction="horizontal" className="mx-auto cover">
          <Container className="narration header text-center text-uppercase">
            <h1 className="display-6">Title of More Testing Page</h1>
          </Container>
        </Stack>
        </Container>

        {/* Footer starts here */}

        <Container fluid style={{backgroundColor: '#002A63', margin: 0}}>
            <Row className="text-center d-flex justify-content-center align-items-center py-3" style={{color: 'white'}}>
                <div>
                    <span onClick={()=>setLang(0)} style={lang === 0 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>English</span>
                    <span>&nbsp; | &nbsp;</span>
                    <span onClick={()=>setLang(1)} style={lang === 1 ? {textDecoration:'underline #4592CF', cursor:'pointer'} : {cursor:'pointer', color:'#CECECE'}}>Japanese</span>
                </div>
            </Row>
            <Row className="text-center d-flex flex-column justify-content-center align-items-center py-3 px-3">
                <div style={{maxWidth:"600px"}}>
                    <input style={{border: 'none', backgroundColor:'#002A63', color:'white', borderBottom:'#CECECE 1px solid', borderRadius:0}} 
                    type="email" className="form-control" placeholder="Sign up to get updates from us"></input>
                </div>
                <Button className="my-3" style={{backgroundColor:'#4592CF', color:'white', textAlign:'center', maxWidth:'600px'}}>Submit</Button>
            </Row>
            <Row className="text-center">
                <p style={{color:'white', fontSize:'0.8rem'}}>In partnership with these ministry organizations</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pb-3">
                <Image style={{maxHeight:'50px', width:'auto'}} src="https://omf.org/us/wp-content/uploads/2015/04/OMF_LOGO_COL_Web-1024x1024.png" alt="omf logo"></Image>
                <Image style={{maxHeight:'40px', width:'auto'}} src="https://pioneers.org/wp-content/uploads/2018/09/pioneers_logo_full.png" alt="pioneers logo"></Image>
            </Row>
            <Row className="text-center d-flex justify-content-center">
                <div className="d-flex flex-column text-center" style={{gap: 0, color:'white'}}>
                    <p className="m-1" style={{fontSize:'1.2rem'}}>Site Map</p>
                    <p className="m-1" style={{color: '#CECECE'}}>Option 1</p>
                    <p className="m-1" style={{color: '#CECECE'}}>Option 2</p>
                    <p className="m-1" style={{color: '#CECECE'}}>Option 3</p>
                </div>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pt-3 pb-2">
                <Image style={{maxHeight:'75px', width:'auto'}} src="/apple-touch-icon.png" alt="logo"></Image>
            </Row>
            <Row className="text-center">
                <p style={{color: 'white', fontSize:'0.8rem'}}>We desire to see a prayer movement for Japan&apos;s spiritual breakthrough</p>
            </Row>
            <Row className="d-flex justify-content-center align-items-center pt-1 pb-3" style={{color:'white'}}>
                <IconContext.Provider value={{size:'40px'}}>
                    <BsYoutube style={{width:'auto'}}></BsYoutube>
                    <BsInstagram style={{width:'auto'}}></BsInstagram>
                    <MdEmail style={{width:'auto'}}></MdEmail>
                    <FaAmazon style={{width:'auto'}}></FaAmazon>
                </IconContext.Provider>
            </Row>
            <Row className="text-center py-2">
                <p style={{color: 'white', fontSize:'0.8rem'}}>Copyright Information Goes Here 2023</p>
            </Row>
        </Container>
        </>
    )
}