export async function newsItmes(context) {
    const res = await fetch(`https://necro-funda-default-rtdb.firebaseio.com/voxnews/text.json`);
    const newsData = await res.json();


    if (!newsData) {
        return {
            notFound: true,
        }
    }

    return {
        props: { newsData }, // will be passed to the page component as props
    }
}