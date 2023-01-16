import Head from "next/head";
import Navigation from "../components/navigation";
import { GetStaticProps, GetStaticPaths } from "next";
import { Container, Stack } from "react-bootstrap";
import { getData } from "../services/dummyData";

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
        <Container style={{display: 'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}>
            <h1>Does this work?</h1>
        </Container>
        </>
    )
}