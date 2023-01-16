import Head from "next/head";
import Navigation from "../components/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import { Stack } from "react-bootstrap";
import { getData } from "../services/dummyData";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "next/image";
import Bamboo from '../public/bamboo.jpeg'
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";

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
        <Container style={{display:'flex', justifyContent:'center', height:'800px'}}>
            <Card style={{width: '600px', height:'500px', boxShadow:'0px 0px 3px 3px rgba(0,0,0,0.5'}}>
                <Card.Img variant="top" src="/bamboo.jpeg"></Card.Img>
                <Card.Body>
                    <Card.Text>
                        This is some test text for Japan
                    </Card.Text>
                    <Button variant="primary">See More</Button>
                </Card.Body>
            </Card>
        </Container>
        </>
    )
}