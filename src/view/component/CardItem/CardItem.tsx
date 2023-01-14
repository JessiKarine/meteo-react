export interface CardProps { 
	title : String; 
	value : String; 
	units? : String ;
}

const CardItem = (props : CardProps) => {
	return (
		<div className='card card--border card--item'>
			<div className='card--item__details'>
				<div className='details__title'>{props?.title}</div>
				<div className='details__value'>
					{props?.value} <span>{props?.units}</span>
				</div>
			</div>
		</div>
	);
}
export default CardItem;
