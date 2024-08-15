const { useState, useEffect } = React;
const Slider = window.Slider;

// Komponen Card
function Card({ name, role, img }) {
    return (
        <div className="card">
            <img src={img} alt={`${name}`} />
            <h4>{name}</h4>
            <p>{role}</p>
        </div>
    );
}

// Komponen CardList
function CardList({ cards }) {
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.id} name={card.name} role={card.role} img={card.img} />
            ))}
        </div>
    );
}

// Komponen Carousel
function Carousel({ cards }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="carousel">
            <Slider {...settings}>
                {cards.map(card => (
                    <Card key={card.id} name={card.name} role={card.role} img={card.img} />
                ))}
            </Slider>
        </div>
    );
}

// Komponen Header
function Header() {
    return (
        <header>
            <h3>DEWAN SYURO</h3>
            <button id="toggle-btn" onClick={toggleTeam}>Tampilkan Pengurus 2024</button>
            <p id="toggle-btn-p">Pengurus Fossi FT 2023</p>
        </header>
    );
}

// Fungsi toggle untuk beralih antara tim
function toggleTeam() {
    const team2023 = document.getElementById("team-2023");
    const team2024 = document.getElementById("team-2024");
    const toggleBtn = document.getElementById("toggle-btn");
    const paragraf = document.getElementById("toggle-btn-p");

    if (team2023.style.display === "none" || team2023.style.display === "") {
        team2023.style.display = "flex";
        team2024.style.display = "none";
        toggleBtn.textContent = "Tampilkan Pengurus 2024";
        paragraf.textContent = "Pengurus Fossi FT - 2023";
    } else {
        team2023.style.display = "none";
        team2024.style.display = "flex";
        toggleBtn.textContent = "Tampilkan Pengurus 2023";
        paragraf.textContent = "Pengurus Fossi FT - 2024";
    }
}

// Komponen App
function App() {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
    const [cards2023, setCards2023] = useState([]);
    const [cards2024, setCards2024] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const data2023 = [
                { id: 1, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 2, name: 'Salman Alfarisi', role: 'KETUA UMUM', img: 'https://via.placeholder.com/150' },
            ];
            const data2024 = [
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 3, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
                { id: 4, name: 'Nadifah Isma Aulia', role: 'WAKIL KETUA UMUM', img: 'https://via.placeholder.com/150' },
            ];
            setCards2023(data2023);
            setCards2024(data2024);
        };

        fetchCards();
    }, []);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="App">
            <Header />
            <div id="team-2023" className="team">
                {isDesktop ? <CardList cards={cards2023} /> : <CardList cards={cards2023} />}
            </div>
            <div id="team-2024" className="team" style={{ display: 'none' }}>
                {isDesktop ? <CardList cards={cards2024} /> : <CardList cards={cards2024} />}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));