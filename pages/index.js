import { getPosts } from "data";
import Post from "components/Post";
import Page from "components/Page";
import PageMetadata from "components/PageMetadata";
import { SITE } from "setting";
import Ads from "components/Ads";
import { Fragment } from "react";

export default function Home(props) {
  const { posts = [] } = props;
  return (
    <Page.Content>
      <PageMetadata
        title={`${SITE.title} - ${SITE.subtitle}`}
        description="生活記錄、文章撰寫"
        home={true}
        image={`${SITE.url}/up.jpg`}
      />
      <Page.Title>最近發表</Page.Title>
      <Post.VerticalList>
        {posts.map((post, i) => (
          <Fragment key={post.name}>
            {i % 6 === 5 && (
              <Post.VerticalItem>
                <Ads
                  style={{ display: "block" }}
                  data-ad-client="ca-pub-1331251306729236"
                  data-ad-slot="6140475128"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </Post.VerticalItem>
            )}
            <Post.VerticalItem post={post} />
          </Fragment>
        ))}
      </Post.VerticalList>
    </Page.Content>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
