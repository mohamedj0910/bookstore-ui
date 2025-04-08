const books = [
    {
        "author": "Chinua Achebe",
        "country": "Nigeria",
        "imageLink": "/assets/images/things-fall-apart.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart",
        "pages": 209,
        "title": "Things Fall Apart",
        "year": 1958
    },
    {
        "author": "Hans Christian Andersen",
        "country": "Denmark",
        "imageLink": "/assets/images/fairy-tales.jpg",
        "language": "Danish",
        "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.",
        "pages": 784,
        "title": "Fairy tales",
        "year": 1836
    },
    {
        "author": "Dante Alighieri",
        "country": "Italy",
        "imageLink": "/assets/images/the-divine-comedy.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/Divine_Comedy",
        "pages": 928,
        "title": "The Divine Comedy",
        "year": 1315
    },
    {
        "author": "Jane Austen",
        "country": "United Kingdom",
        "imageLink": "/assets/images/pride-and-prejudice.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice",
        "pages": 226,
        "title": "Pride and Prejudice",
        "year": 1813
    },
    {
        "author": "Honoré de Balzac",
        "country": "France",
        "imageLink": "/assets/images/le-pere-goriot.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot",
        "pages": 443,
        "title": "Le Père Goriot",
        "year": 1835
    },
    {
        "author": "Samuel Beckett",
        "country": "Re of Ireland",
        "imageLink": "/assets/images/molloy-malone-dies-the-unnamable.jpg",
        "language": "French, English",
        "link": "https://en.wikipedia.org/wiki/Molloy_(novel)",
        "pages": 256,
        "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
        "year": 1952
    },
    {
        "author": "Giovanni Boccaccio",
        "country": "Italy",
        "imageLink": "/assets/images/the-decameron.jpg",
        "language": "Italian",
        "link": "https://en.wikipedia.org/wiki/The_Decameron",
        "pages": 1024,
        "title": "The Decameron",
        "year": 1351
    },
    {
        "author": "Jorge Luis Borges",
        "country": "Argentina",
        "imageLink": "/assets/images/ficciones.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Ficciones",
        "pages": 224,
        "title": "Ficciones",
        "year": 1965
    },
    {
        "author": "Emily Brontë",
        "country": "United Kingdom",
        "imageLink": "/assets/images/wuthering-heights.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Wuthering_Heights",
        "pages": 342,
        "title": "Wuthering Heights",
        "year": 1847
    },
    {
        "author": "Albert Camus",
        "country": "Algeria, French Empire",
        "imageLink": "/assets/images/l-etranger.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)",
        "pages": 185,
        "title": "The Stranger",
        "year": 1942
    },
    {
        "author": "Louis-Ferdinand Céline",
        "country": "France",
        "imageLink": "/assets/images/voyage-au-bout-de-la-nuit.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Journey_to_the_End_of_the_Night",
        "pages": 505,
        "title": "Journey to the End of the Night",
        "year": 1932
    },
    {
        "author": "Miguel de Cervantes",
        "country": "Spain",
        "imageLink": "/assets/images/don-quijote-de-la-mancha.jpg",
        "language": "Spanish",
        "link": "https://en.wikipedia.org/wiki/Don_Quixote",
        "pages": 1056,
        "title": "Don Quijote De La Mancha",
        "year": 1610
    },
    {
        "author": "Geoffrey Chaucer",
        "country": "England",
        "imageLink": "/assets/images/the-canterbury-tales.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/The_Canterbury_Tales",
        "pages": 544,
        "title": "The Canterbury Tales",
        "year": 1450
    },
    {
        "author": "Anton Chekhov",
        "country": "Russia",
        "imageLink": "/assets/images/stories-of-anton-chekhov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/List_of_short_stories_by_Anton_Chekhov",
        "pages": 194,
        "title": "Stories",
        "year": 1886
    },
    {
        "author": "Joseph Conrad",
        "country": "United Kingdom",
        "imageLink": "/assets/images/nostromo.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Nostromo",
        "pages": 320,
        "title": "Nostromo",
        "year": 1904
    },
    {
        "author": "Charles Dickens",
        "country": "United Kingdom",
        "imageLink": "/assets/images/great-expectations.jpg",
        "language": "English",
        "link": "https://en.wikipedia.org/wiki/Great_Expectations",
        "pages": 194,
        "title": "Great Expectations",
        "year": 1861
    },
    {
        "author": "Denis Diderot",
        "country": "France",
        "imageLink": "/assets/images/jacques-the-fatalist.jpg",
        "language": "French",
        "link": "https://en.wikipedia.org/wiki/Jacques_the_Fatalist",
        "pages": 596,
        "title": "Jacques the Fatalist",
        "year": 1796
    },
    {
        "author": "Alfred Döblin",
        "country": "Germany",
        "imageLink": "/assets/images/berlin-alexanderplatz.jpg",
        "language": "German",
        "link": "https://en.wikipedia.org/wiki/Berlin_Alexanderplatz",
        "pages": 600,
        "title": "Berlin Alexanderplatz",
        "year": 1929
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "/assets/images/crime-and-punishment.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Crime_and_Punishment",
        "pages": 551,
        "title": "Crime and Punishment",
        "year": 1866
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "/assets/images/the-idiot.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Idiot",
        "pages": 656,
        "title": "The Idiot",
        "year": 1869
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "/assets/images/the-possessed.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/Demons_(Dostoyevsky_novel)",
        "pages": 768,
        "title": "The Possessed",
        "year": 1872
    },
    {
        "author": "Fyodor Dostoevsky",
        "country": "Russia",
        "imageLink": "/assets/images/the-brothers-karamazov.jpg",
        "language": "Russian",
        "link": "https://en.wikipedia.org/wiki/The_Brothers_Karamazov",
        "pages": 824,
        "title": "The Brothers Karamazov",
        "year": 1880
    }
];


function Card({ title, imageLink, author, year, language,link }) {
    return (
        <div className="card" onClick={()=>window.open(link,'_blank')}>
            <div className="card-image">
                <img src={imageLink} />
            </div>
            <div className="card-details">
                <div className="details-header">
                    <span className="card-title">{title}</span>
                    <span className="card-year">{year}</span>
                </div>
                <div className="details-body">
                    <div className="card-author">{author}</div>
                    <div className="card-author">{language}</div>
                </div>
            </div>
            <button className="view-btn">More details</button>
        </div>
    )
}

function Cards() {
    return (
        <div className="cards">
            {books.map((book, index) => (
                <Card key={index} {...book} />
            )
            )}
        </div>

    )
}

export default Cards