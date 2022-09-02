import Featured from "../components/featured";
import Search from "../components/search";

const api = require('cosmicjs')();
const bucket = api.bucket({
  slug: 'nft-stats-production',
  read_key: '7UCY5i9JNe5PQpHKtVDMHOZaRV0UiUJcqOR4Dr4cDPLPAoMjfB'
})

const Home = ({ posts }) => (
  <main className="min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="masthead flex flex-col md:flex-row py-16 md:py-28 px-3">
        <div className="intro text-center md:w-1/2 md:pr-12">
          <h1 className="text-3xl mb-5 text-slate-700">{posts[0].title}</h1>
          <div
            dangerouslySetInnerHTML={{__html: posts[0].content}}
          />
        </div>
        <Search />
      </div>
      <Featured collection={posts[0].metadata.featured_collection} />
    </div>
  </main>
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
