import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

function ListItem({ items, onItemSelected, id, selectedItem }) {
  const handleCoinSelection = (coin) => {
    onItemSelected(coin, id);
    closeModal();
  };

  const closeModal = () => {
    const modal = document.getElementById(id);
    modal.close();
  };

  return (
    <ul className="flex w-full overflow-auto menu menu-lg rounded-box h-96">
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={() => {}}
        hasMore={false}
        loader={
          <li>
            <div className="flex items-center gap-4 animate-pulse">
              <div className="bg-gray-300 rounded-full w-9 h-9 "></div>
              <div className="flex flex-col space-y-2">
                <div className="h-6 bg-gray-300 rounded-md w-36 "></div>
                <div className="w-24 h-6 bg-gray-300 rounded-md "></div>
              </div>
            </div>
          </li>
        }
      >
        {items.map((x, idx) => (
          <li
            key={idx}
            onClick={() => handleCoinSelection(x)}
            className={selectedItem === idx ? 'selected' : ''}
          >
            <div className="flex items-center gap-4">
              <div className="avatar">
                <div className="rounded-full w-9 h-9">
                  <img src={x.imgUrl} width={36} height={36} loading="lazy" />
                </div>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-medium text-black dark:text-white">
                  {x.title}
                </span>
                <span className="text-xs font-semibold text-black/50 dark:text-white/50">
                  {x.subtitle}
                </span>
              </div>
            </div>
          </li>
        ))}
      </InfiniteScroll>
    </ul>
  );
}

ListItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onItemSelected: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  selectedItem: PropTypes.number,
};

export default ListItem;
