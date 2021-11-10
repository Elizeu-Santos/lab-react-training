const Rating = (prop) => {
    let rating = Math.round(prop.children);
    let result = '';

    for (let i=0; i<5; i++) {
        result += (rating <= i ? '☆' : '★')

    
    } return (
        <div>
            {result}
        </div>
    )

}





export default Rating;