import gql from 'graphql-tag'

export const allArticlesQuery = gql`
query allArticlesQuery {
    articles {
        data {
        id
          attributes {
          seoUrl
          title
          description
          readingTime
          date
          mainImage {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          authors {
            data {
              id
              attributes {
                name
                photo {
                  data {
                    id
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export const singleArticleQuery = gql`
query singleArticleQuery($seoUrl: String!) {
    articles(filters:{seoUrl: {eq: $seoUrl}}) {
      data {
        id
        attributes {
          seoUrl
          title
          description
          content
          readingTime
          date
          mainImage {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
          backgroundImage {
            data {
              id
              attributes {
                url
                alternativeText
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          authors {
            data {
              id
              attributes {
                name,
                photo {
                  data {
                    id 
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`