import React from "react"
import ContentLoader from "react-content-loader"

const LoaderProduct = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={420}
    viewBox="0 0 280 420"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="35" y="25" rx="10" ry="10" width="210" height="210" />
    <rect x="0" y="280" rx="5" ry="5" width="165" height="22" />
    <rect x="0" y="315" rx="5" ry="5" width="280" height="12" />
    <rect x="0" y="335" rx="5" ry="5" width="240" height="12" />
    <rect x="0" y="365" rx="5" ry="5" width="70" height="20" />
    <rect x="180" y="360" rx="20" ry="20" width="100" height="35" />
  </ContentLoader>
)

export default LoaderProduct
