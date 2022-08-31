import Featured from "../components/featured";
import Search from "../components/search";

const api = require('cosmicjs')();
const bucket = api.bucket({
  slug: 'nft-stats-production',
  read_key: '7UCY5i9JNe5PQpHKtVDMHOZaRV0UiUJcqOR4Dr4cDPLPAoMjfB'
})

const Home = ({ posts }) => (
  <div style={{ maxWidth: 700, margin: '0 auto' }}>
    <h1>
        Title: {posts[0].title}
    </h1>
    <div
      dangerouslySetInnerHTML={{__html: posts[0].content}}
    />
    <Featured collection={posts[0].metadata.featured_collection} />
    <Search />
  </div>
)

export async function getStaticProps() {
  const data = await bucket.objects
    .find({
      type: "homepage", // Object Type slug
      slug: "nft-data"
    })
    .props("slug,title,content,metadata") // response properties
  const posts = await data.objects;
  return {
    props: {
      posts,
    },
  };
}
export default Home;
