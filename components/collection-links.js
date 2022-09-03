import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/pro-solid-svg-icons";
import {faDiscord, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import Etherscan from "./svgs/etherscan";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

export default function CollectionLinks({ ...item }) {

  return (
    <div className="flex items-center ml-3">
      {item.external_url &&
        <a href={item.external_url} target="_blank" rel="noreferrer" className="text-indigo-400">
          <div className="mr-4 text-slate-400 text-xl"><FontAwesomeIcon icon={faGlobe} /></div>
        </a>
      }
      {item.twitter_username &&
        <a href={`https://www.twitter.com/${item.twitter_username}`} target="_blank" rel="noreferrer" className="text-slate-400">
          <div className="mr-4 text-slate-400 text-xl"><FontAwesomeIcon icon={faTwitter} /></div>
        </a>
      }
      {item.discord_url &&
        <a href={item.discord_url} target="_blank" rel="noreferrer" className="text-slate-400">
          <div className="mr-4 text-slate-400 text-xl"><FontAwesomeIcon icon={faDiscord} /></div>
        </a>
      }
      {item.instagram_username &&
        <a href={`https://www.instagram.com/${item.instagram_username}`} target="_blank" rel="noreferrer">
          <div className="mr-4 text-slate-400 text-xl"><FontAwesomeIcon icon={faInstagram} /></div>
        </a>
      }
      {item.primary_asset_contracts.length > 0 ? (
        <a href={`https://etherscan.io/address/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">
          <div className="mr-4 text-xl -mt-[2px]"><Etherscan width={20} height={20} className="text-slate-400 fill-current" /></div>
        </a>
      ) : ('')}
    </div>
  )
}