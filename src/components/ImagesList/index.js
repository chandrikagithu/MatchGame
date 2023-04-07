import './index.css'

const ImagesList = props => {
  const {ImageDetails, changeImage} = props
  const {thumbnailUrl, imageUrl} = ImageDetails

  const onChangeImage = () => {
    changeImage(imageUrl)
  }

  return (
    <li className="image-item-container">
      <button type="button" className="button" onClick={onChangeImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-style" />
      </button>
    </li>
  )
}
export default ImagesList
