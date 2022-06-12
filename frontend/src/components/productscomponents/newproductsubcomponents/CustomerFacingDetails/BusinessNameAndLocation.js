import React from 'react'
import styled from 'styled-components'

const BusinessNameAndLocationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

const BusinessNameAndLocation = () => {
  return (
    <>
       <BusinessNameAndLocationWrapper>
          {/* This will probably come from the companies auth data? */}
          <p>XYZ Enterprises</p>
          <p>www.XYZ.com</p>
          <p>Toronto, ON</p>
        </BusinessNameAndLocationWrapper>
    </>
  )
}

export default BusinessNameAndLocation
