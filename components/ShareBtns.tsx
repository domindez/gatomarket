'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { usePathname } from 'next/navigation'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import '../sass/ShareBtns.scss'

const ShareBtns = ({ title } : {title: string}) => {
  const url = `http://www.gatomundo.com${usePathname()}`
  const share = () => {
    navigator.share({
      title: 'Give Me a Beer',
      url
    })
  }

  return (
    <div className='share-btns-container'>
      <p>Comparte este artículo</p>
      <div className='share-btns'>
        <a href={`https://twitter.com/share?text=${title}&url=${url}`}><FontAwesomeIcon className='icon twitter' icon={faTwitter} /></a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target='_blank' rel='noreferrer'><FontAwesomeIcon className='icon facebook' icon={faFacebook} /></a>
        <a href={`https://api.whatsapp.com/send?text=${title} ${url}`} target='_blank' rel='noreferrer'><FontAwesomeIcon className='icon whatsapp' icon={faWhatsapp} /></a>
        <FontAwesomeIcon className='icon share' icon={faShare} onClick={share} />
      </div>
    </div>
  )
}

export default ShareBtns
