import Head from "next/head";
import { getAllStaticPageIds, getStaticContent } from "../lib/markdownPageServer";
import { GetStaticProps, GetStaticPaths } from "next";
import { Col, Container, Row, Stack } from "react-bootstrap";
import Navigation from "../components/navigation";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllStaticPageIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      props: {},
    };
  }
  const markdownContent = await getStaticContent(params.markdownPage as String);
  return {
    props: {
      markdownContent,
    },
  };
};

export default function MarkdownPage({
  markdownContent,
}: {
  markdownContent: {
    title: string;
    subtitle: string;
    contentHtml: string;
  };
}) {
  return (
    <div>
      <Head>
        <title>{markdownContent.title}</title>
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
          <Container className="text-primary text-center text-uppercase">
            <h1 className="display-6">{markdownContent.title}</h1>
          </Container>
        </Stack>
      </Container>
      <Container fluid className="bg-light place-items-center">
        <article>
          <h1 className="text-center place-content-center pt-5">{markdownContent.subtitle}</h1>
          <Container>
            <div className="align-self-center" dangerouslySetInnerHTML={{ __html: markdownContent.contentHtml }} />
          </Container>
        </article>
        {/* <Stack gap={3} direction="horizontal" className="mx-auto pt-5">
          <article>
            <h1 className="text-center">{markdownContent.subtitle}</h1>
            <Row>
              <Col md="3"></Col>
              <Col className="align-self-center text-dark">
                <div dangerouslySetInnerHTML={{ __html: markdownContent.contentHtml }} />
              </Col>
              <Col md="3"></Col>
            </Row>
          </article>
        </Stack> */}
      </Container>
    </div>
  );
}
