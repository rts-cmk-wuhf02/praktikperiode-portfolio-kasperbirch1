const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: {fields: likes, order: DESC}, limit: 200) {
        nodes {
          id
          caption
          username
          likes
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);


  // import React, { useEffect, useState } from "react"


/*
const [currentHeight, setCurrentHeight] = useState(0);
  useEffect(() => {
    let NewHeight = window.innerHeight
    window.addEventListener("orientationchange", function () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        setCurrentHeight(NewHeight)
      }
    }, false);

  }, [NewHeight]);


      <section style={{ minHeight: `calc(${currentHeight}px - 6rem)` }}>

      </section>



*/