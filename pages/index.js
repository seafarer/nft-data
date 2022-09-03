import LayoutHome from "../components/layouthome";
import Featured from "../components/featured";
import Search from "../components/search";
import Headtags from "../components/headtags";

const api = require('cosmicjs')();
const bucket = api.bucket({
  slug: process.env.NEXT_PUBLIC_COSMIC_SLUG,
  read_key: process.env.NEXT_PUBLIC_COSMIC_READ_KEY
})

const Home = ({ posts }) => (
  <>
  <Headtags
    title="NFT Lookup"
    description="Quick stats for your favorite NFT collections on the Ethereum blockchain"
    pageslug="/"
  />
  <div className="min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="masthead flex flex-col md:flex-row py-16 md:py-28 px-3">
        <div className="intro text-center md:w-1/2 md:pr-12">
          <h1 className="text-3xl mb-5 text-slate-700">{posts[0].title}</h1>
          <div
            dangerouslySetInnerHTML={{__html: posts[0].content}}
          />
        </div>
        <Search classnames="px-6 pt-10 md:w-1/2 relative" hitStyles="h-96 absolute bg-white pt-2 px-1.5 pb-3 right-0 left-6 drop-shadow top-[84px] right-6" />
      </div>
      <Featured collection={posts[0].metadata.featured_collection} />
    </div>
  </div>
  </>
)

Home.getLayout = function getLayout(page) {
  return (
    <LayoutHome>
      {page}
    </LayoutHome>
  )
}

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
