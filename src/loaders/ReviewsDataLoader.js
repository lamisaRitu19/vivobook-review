export const reviewsDataLoader = async () => {
    const reviewData = await fetch('reviews.json');
    const reviews = await reviewData.json();

    const randomIndices = [];
    for (let i = 1; i <= 3; i++) {
        let random = Math.floor((Math.random() * 16));
        randomIndices.push(random);
    }
    console.log(randomIndices);

    return { reviews, randomIndices };
}