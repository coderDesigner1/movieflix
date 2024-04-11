import './category.scss'

const Category = ({type}) => {
  return (
    <div className='category'>
      <span>{type === 'movie' ? "Movies" : "Series"}</span>
      <select name="genre" id="genre">
        <option >Genre</option>
        <option value="adventure">Adventure</option>
        <option value="comedy">Comedy</option>
        <option value="crime">Crime</option>
        <option value="fantasy">Fantasy</option>
        <option value="historical">Historical</option>
        <option value="horror">Horror</option>
        <option value="romance">Romance</option>
        <option value="sci-fi">Sci-fi</option>
        <option value="thriller">Thriller</option>
        <option value="western">Western</option>
        <option value="animation">Animation</option>
        <option value="drama">Drama</option>
        <option value="documentary">Documentary</option>
      </select>

    </div>
  )
}

export default Category
