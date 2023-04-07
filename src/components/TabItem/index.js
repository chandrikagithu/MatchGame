import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClass = isActive ? `active-tab-btn` : ''

  const onClicktab = () => {
    updateTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClicktab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
