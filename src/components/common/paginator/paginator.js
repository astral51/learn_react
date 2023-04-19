import styles from './paginator.module.css';
import cn from 'classnames';


// currentPage - активная страница в данный момент времени
// totalItemsCount - общее количество элементов
// pageSize - сколько элементов будет отображаться на одной странице
// onPageChanged - функция, переключащая страницу на выбранную
// pagesCount - количество страниц

const Paginator = ({currentPage, totalItemsCount, pageSize, onPageChanged}) => {

	const blockPagesSize = 10; //!!!можно ставить только чётные!!!
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let blockPage = [];
	let pageNumber = currentPage - blockPagesSize/2;

	for (let i = 0; i <= blockPagesSize; i++){
		if (!(pageNumber <= 0 || pageNumber > pagesCount)) blockPage.push(pageNumber)
		pageNumber++;
	}


	return (
		<div className={styles.page_numbers}>
			{blockPage.map((p, i) => {
					return <span className={ cn(currentPage === p ? styles.selectedPage : undefined, styles.page_number) }
					             onClick={() => onPageChanged(p)} key={i}>{p}</span>
			})}
		</div>
	);
}



export default Paginator;