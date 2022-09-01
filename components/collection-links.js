import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/pro-solid-svg-icons";
import {faDiscord, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

export default function CollectionLinks() {
  return (
    <div>
      {item.external_url &&
        <a href={item.external_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
      }
      {item.twitter_username &&
        <a href={item.twitter_username} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      }
      {item.discord_url &&
        <a href={item.discord_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
      }
      {item.instagram_username &&
        <a href={item.instagram_username} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      }
      <p><a href={`https://etherscan.io/address/${item.primary_asset_contracts[0].address}`} target="_blank" rel="noreferrer">Etherscan</a></p>
    </div>
  )
}