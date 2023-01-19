import Head from "next/head";
import Navigation from "../components/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import { ListGroup, Stack } from "react-bootstrap";
import { getData } from "../services/dummyData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import Bamboo from '../public/bamboo.jpeg'
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import {FaPrayingHands} from 'react-icons/fa'
import { IconContext } from "react-icons/lib";

export const getStaticProps: GetStaticProps = async() => {
    let data = 'hi'
    return {
        props: {
            data
        }
    }
}

export default function BootstrapPage({data}:{data:any}) {

    return (
        <>
        <Head>
            <title>Bootstrap Page</title>
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
            <h1 className="display-6">Title of Bootstrap Page</h1>
          </Container>
        </Stack>
        </Container>
        <Container id="header-image-container" style={{position: 'relative', margin: 0, padding: 0, height: '600px', width: '100%', maxWidth:'none', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Image layout='fill' style={{opacity: 0.5, position: 'relative'}} alt="japan" src='/bamboo.jpeg'></Image>
            <div style={{height:"100%", width:'auto', zIndex:'999', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative'}}>
                <h1 style={{color:'white', zIndex:'999'}}>Japan needs Prayer</h1>
                <div style={{position:'absolute', bottom:'50px', display:'flex', gap:'20px', justifyContent:'center' }}>
                    <button>This is also a button</button>
                    <button>This is also button</button>
                </div>
            </div>
        </Container>
        <Container>
            <h1 style={{margin: '100px', textAlign:'center'}}>Japan needs prayer, lorom ipsum, hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello</h1>
        </Container>
        <Container className="d-flex justify-content-center" style={{height: 'auto'}}>
            <Card className="my-4 shadow" style={{width: '400px'}}>
                <Card.Img variant="top" src="/bamboo.jpeg" style={{height:'300px'}}></Card.Img>
                <Card.Body>
                    <Card.Text className="pb-3" style={{fontSize:'1.25rem', fontWeight:'700', fontStyle:'italic', borderBottom:'#CECECE 1px solid'}}>
                        Popular Religious Practices
                    </Card.Text>
                    <Card.Text className="d-flex align-items-center gap-2" style={{color:"#4592CF"}}>
                        <IconContext.Provider value={{size:'20px'}}>
                            <FaPrayingHands></FaPrayingHands>
                        </IconContext.Provider>
                        Pray For
                    </Card.Text>
                    <Card.Text>
                        <ul style={{fontSize:"0.85rem"}}>
                            <li className="my-3">Wisdom to share the gospel within this Japanese context</li>
                            <li className="my-3">The Holy Spirit would lead those who seek salvation through various rituals to find Jesus Christ</li>
                            <li className="my-3">Japanese people would find their most authentic belonging and identity in the God who created them</li>
                        </ul>
                    </Card.Text>
                    <Button className="w-100 mt-2" variant="primary" style={{color: "#4592CF", border: "#4592CF 1.5px solid", backgroundColor:"white"}}>Read the entire article</Button>
                    <Card.Text className="my-3 w-100 mx-auto text-center" style={{textDecoration:"underline", color:"#4592CF", cursor:"pointer"}}>
                        View all topics
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}