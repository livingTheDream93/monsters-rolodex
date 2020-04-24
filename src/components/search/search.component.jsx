import React from 'react'
import './search.styles.css'


// export class Search extends Component {

//   handleChange (e) {
//     console.log(e.target.value)
//   }

//   render () {
//     return (
//       <input type="search" onChange={this.handleChange}></input>
//     )
//   }
// }

export const SearchBox = ({placeholder, handleChange}) => {
  return (
    <input className="search" type="search" placeholder={placeholder} onChange={handleChange}></input>
  )
}
