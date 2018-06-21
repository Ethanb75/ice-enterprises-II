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
        { name: 'google-site-verification', content: 'IC5VdmAoNmHAofqEMFRVqmeZZ9UR5RCv-bNBgoxyLnQ' }
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
