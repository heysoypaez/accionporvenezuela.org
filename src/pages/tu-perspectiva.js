import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Disclaimer: para curar Venezuela, necesitamos un buen diagnostico </h2>



            <form method="post" netlify-honeypot="bot-field" data-netlify="true">
            <h3>Primero: necesitamos definir claramente que queremos.</h3>
              <section>
                <label>1. ¿Cual es la visión específica que se quiere para Venezuela?</label>
                <input type="text" />

              </section>
            <h3>Segundo: necesitamos identificar y no tolerar cada uno de los problemas que nos han impedido lograr lo que queremos.</h3>
              <section>
                <label>2. ¿Cuales son problemas específicos *reales* de Venezuela que la han retenido de experimentar esa visión?</label>
                <input type="text" />
              </section>
              <h3>Tercero: necesitamos diagnosticar las causas raíces que han hecho que cada uno esos problema sucedieran en un principio.</h3>
              <section>
                <label>3. ¿Cuales son las causas espinales, fundamentales, centrales de esos problemas?</label>
                <input type="text" />
              </section>
              <h3>Cuarto: necesitamos diseñar un plan como nación para solventar cada uno de los problemas. Comprendiendolos de forma precisa y enfocandonos en lo que podemos influenciar más.</h3>
               <section>
                <label>4. ¿Que no está en nuestra área de influencia para resolver esos problemas? (Gobierno, política)</label>
                <input type="text" />
              </section>
               <section>
              <label>5. ¿Que está en nuestra área de influencia para resolver esos problemas?</label>
                <input type="text" />
              </section>
              <section>
               <label>6. ¿Que clase de personas a través de que clase de hábitos, acciones, objetivos, riqueza, condición económica, social pueden generar un impacto real en la transformación de un país, (Este caso Venezuela)?</label>
               <input type="text" />
               <section>
               <label>7. ¿Que serie de pasos debe tomar cada persona, familia, parroquia, ciudad, estado, país para convertir nuestra situación actual en esa que visualizamos?</label>
               <input type="text" />
               </section>
              </section>
              <h3>Quinto: Necesitamos tomar acción especifica diaria, semanal y mensual cada uno de nosotros sobre ese plan que hemos diseñado como país.</h3>
              <section>
                <label>8. ¿Cómo, quienes y cuando empezamos a actuar sobre lo realmente importante?</label>
               <input type="text" />
              </section>
              <h3>Sexto: necesitamos repetir el ciclo, aprendiendo de nuestros errores y nuestros éxitos.</h3>
              <input type="submit" value="Enviar"/>

                
            </form>








          </div>
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query TuPerspectivaPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
