import * as React from "react"

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo title={`404 Page`} />
      <div>This page does not exist</div>
    </Layout>
  )
}

export default NotFoundPage
