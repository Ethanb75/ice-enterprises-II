import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      // title={data.site.siteMetadata.title}
      // <meta name="google-site-verification" content="IC5VdmAoNmHAofqEMFRVqmeZZ9UR5RCv-bNBgoxyLnQ" />
      meta={[
        { name: 'description', content: "Ice Enterprises: A landscaping, snow plowing, salting, deIcing, and turf maintenance company operating in Wisconsin & Illinois" },
        { name: 'keywords', content: 'Ice Enterprises, landscaping, salting, deIcing, turf maintenance' },
        { name: 'google-site-verification', content: 'IC5VdmAoNmHAofqEMFRVqmeZZ9UR5RCv-bNBgoxyLnQ' },
        { property: 'og:url', content: 'https://www.ice2010.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Illinois & Wisconsin Landscaping and Salting | ICE Enterprises' },
        { property: 'og:description', content: 'Ice Enterprises: A landscaping, snow plowing, salting, deIcing, and turf maintenance company operating in Wisconsin & Illinois' },
        { property: 'og:image', content: 'http://www.ice2010.com/static/logo.7d9e2367.png' },
      ]}
      script={[
        {
          type: 'application/ld+json', content: `{
          "@context": "http://schema.org",
          "@type": "LocalBusiness",
          "address": {
          "@type": "PostalAddress",
          "addressLocality": "Twin Lakes",
          "addressRegion": "WI",
          "postalCode":"53181",
          "streetAddress": "PO Box 52"
          },
          "description": "Ice Enterprises: A landscaping, snow plowing, salting, deIcing, and turf maintenance company operating in Wisconsin & Illinois",
          "name": "ICE Enterprises",
          "email": "estimates@ice2010.com",
          "telephone": "815-271-0368",
          "openingHours": "Mo,Tu,We,Th,Fr 08:00-17:00",
          "geo": {
          "@type": "GeoCoordinates",
          "latitude": "42.5311",
          "longitude": "-88.2481"
          },
          "image": "http://www.ice2010.com/static/logo.7d9e2367.png",
          "sameAs" : [ "https://www.facebook.com/icesnowlandscape/" ]
          }`}
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
