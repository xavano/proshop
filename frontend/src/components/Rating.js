import React from 'react'

const Rating = ({ value, text, color }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className='rating'>
      { stars.map(index => (
        <span>
          <i style={{ color }} className={ (value >= index) ? 'fas fa-star' : ((value >= (index - 0.5)) ? 'fas fa-star-half-alt' : 'far fa-star')}></i>
        </span>
      )) }
      <span className="reviews">{text && text}</span>
    </div>

    // <div className='rating'>
    //   <span>
    //     <i
    //       style={{ color }}
    //       className={
    //         value >= 1
    //           ? 'fas fa-star'
    //           : value >= 0.5
    //           ? 'fas fa-star-half-alt'
    //           : 'far fa-star'
    //       }
    //     ></i>
    //   </span>
    //   <span>
    //     <i
    //       style={{ color }}
    //       className={
    //         value >= 2
    //           ? 'fas fa-star'
    //           : value >= 1.5
    //           ? 'fas fa-star-half-alt'
    //           : 'far fa-star'
    //       }
    //     ></i>
    //   </span>
    //   <span>
    //     <i
    //       style={{ color }}
    //       className={
    //         value >= 3
    //           ? 'fas fa-star'
    //           : value >= 2.5
    //           ? 'fas fa-star-half-alt'
    //           : 'far fa-star'
    //       }
    //     ></i>
    //   </span>
    //   <span>
    //     <i
    //       style={{ color }}
    //       className={
    //         value >= 4
    //           ? 'fas fa-star'
    //           : value >= 3.5
    //           ? 'fas fa-star-half-alt'
    //           : 'far fa-star'
    //       }
    //     ></i>
    //   </span>
    //   <span>
    //     <i
    //       style={{ color }}
    //       className={
    //         value >= 5
    //           ? 'fas fa-star'
    //           : value >= 4.5
    //           ? 'fas fa-star-half-alt'
    //           : 'far fa-star'
    //       }
    //     ></i>
    //   </span>
    //   <span>{text && text}</span>
    // </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

export default Rating
